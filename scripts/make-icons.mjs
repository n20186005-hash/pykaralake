/**
 * PWA icons generator.
 *
 * Rasterises public/brand/logo.svg (no third-party dependency, no network) into the PNG sizes
 * required by manifest.webmanifest:
 *   public/brand/icon-192.png            purpose: any
 *   public/brand/icon-512.png            purpose: any
 *   public/brand/icon-maskable-512.png   purpose: maskable (full-bleed, 80% safe zone)
 *
 * Usage: node scripts/make-icons.mjs
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { deflateSync } from 'node:zlib';

const SVG_PATH = resolve('public/brand/logo.svg');
const OUT_DIR = resolve('public/brand');
const VIEWBOX = 96;

/* ---------------------------------------------------------------- SVG parsing */

const parseColor = (value) => {
  const hex = value.trim().replace(/^#/, '');
  const full = hex.length === 3 ? hex.split('').map((c) => c + c).join('') : hex;
  return [
    parseInt(full.slice(0, 2), 16),
    parseInt(full.slice(2, 4), 16),
    parseInt(full.slice(4, 6), 16)
  ];
};

const parseAttrs = (tag) => {
  const attrs = {};
  for (const [, name, value] of tag.matchAll(/([a-zA-Z-]+)="([^"]*)"/g)) attrs[name] = value;
  return attrs;
};

const roundRectPolygon = (x, y, w, h, r, steps = 16) => {
  const pts = [];
  const arc = (cx, cy, from, to) => {
    for (let i = 0; i <= steps; i++) {
      const a = from + ((to - from) * i) / steps;
      pts.push([cx + r * Math.cos(a), cy + r * Math.sin(a)]);
    }
  };
  arc(x + w - r, y + r, -Math.PI / 2, 0);
  arc(x + w - r, y + h - r, 0, Math.PI / 2);
  arc(x + r, y + h - r, Math.PI / 2, Math.PI);
  arc(x + r, y + r, Math.PI, Math.PI * 1.5);
  return pts;
};

const flattenCubic = (p0, c1, c2, p1, steps = 24) => {
  const out = [];
  for (let i = 1; i <= steps; i++) {
    const t = i / steps;
    const u = 1 - t;
    const a = u * u * u;
    const b = 3 * u * u * t;
    const c = 3 * u * t * t;
    const d = t * t * t;
    out.push([
      a * p0[0] + b * c1[0] + c * c2[0] + d * p1[0],
      a * p0[1] + b * c1[1] + c * c2[1] + d * p1[1]
    ]);
  }
  return out;
};

const flattenQuad = (p0, c, p1, steps = 20) => {
  const out = [];
  for (let i = 1; i <= steps; i++) {
    const t = i / steps;
    const u = 1 - t;
    out.push([
      u * u * p0[0] + 2 * u * t * c[0] + t * t * p1[0],
      u * u * p0[1] + 2 * u * t * c[1] + t * t * p1[1]
    ]);
  }
  return out;
};

/** Subset parser: M L H V C S Q T Z (absolute + relative). Returns arrays of subpaths. */
const parsePath = (d) => {
  const tokens = d.match(/[MmLlHhVvCcSsQqTtZz]|-?\d*\.?\d+(?:e[-+]?\d+)?/gi) ?? [];
  const subpaths = [];
  let current = [];
  let cursor = [0, 0];
  let start = [0, 0];
  let lastCubicCtrl = null;
  let lastQuadCtrl = null;
  let command = null;
  let i = 0;

  const push = (pt) => {
    current.push(pt);
    cursor = pt;
  };
  const begin = (pt) => {
    if (current.length > 1) subpaths.push(current);
    current = [pt];
    cursor = pt;
    start = pt;
  };

  const read = () => Number(tokens[i++]);

  while (i < tokens.length) {
    const token = tokens[i];
    if (/[MmLlHhVvCcSsQqTtZz]/.test(token)) {
      command = token;
      i++;
    } else if (command === 'M') {
      command = 'L';
    } else if (command === 'm') {
      command = 'l';
    } else if (!command) {
      throw new Error(`Path data starts without a command: ${d}`);
    }
    const relative = command === command.toLowerCase();
    const base = relative ? cursor : [0, 0];

    switch (command.toUpperCase()) {
      case 'M': {
        begin([base[0] + read(), base[1] + read()]);
        break;
      }
      case 'L': {
        push([base[0] + read(), base[1] + read()]);
        break;
      }
      case 'H': {
        const x = read();
        push([relative ? cursor[0] + x : x, cursor[1]]);
        break;
      }
      case 'V': {
        const y = read();
        push([cursor[0], relative ? cursor[1] + y : y]);
        break;
      }
      case 'C': {
        const c1 = [base[0] + read(), base[1] + read()];
        const c2 = [base[0] + read(), base[1] + read()];
        const end = [base[0] + read(), base[1] + read()];
        flattenCubic(cursor, c1, c2, end).forEach((pt) => current.push(pt));
        lastCubicCtrl = c2;
        cursor = end;
        break;
      }
      case 'S': {
        const c1 = lastCubicCtrl
          ? [cursor[0] * 2 - lastCubicCtrl[0], cursor[1] * 2 - lastCubicCtrl[1]]
          : cursor;
        const c2 = [base[0] + read(), base[1] + read()];
        const end = [base[0] + read(), base[1] + read()];
        flattenCubic(cursor, c1, c2, end).forEach((pt) => current.push(pt));
        lastCubicCtrl = c2;
        cursor = end;
        break;
      }
      case 'Q': {
        const c = [base[0] + read(), base[1] + read()];
        const end = [base[0] + read(), base[1] + read()];
        flattenQuad(cursor, c, end).forEach((pt) => current.push(pt));
        lastQuadCtrl = c;
        cursor = end;
        break;
      }
      case 'T': {
        const c = lastQuadCtrl
          ? [cursor[0] * 2 - lastQuadCtrl[0], cursor[1] * 2 - lastQuadCtrl[1]]
          : cursor;
        const end = [base[0] + read(), base[1] + read()];
        flattenQuad(cursor, c, end).forEach((pt) => current.push(pt));
        lastQuadCtrl = c;
        cursor = end;
        break;
      }
      case 'Z': {
        if (current.length > 1) subpaths.push(current);
        current = [];
        cursor = start;
        break;
      }
      default:
        throw new Error(`Unsupported path command "${command}" in ${d}`);
    }
    if (command.toUpperCase() !== 'C' && command.toUpperCase() !== 'S') lastCubicCtrl = null;
    if (command.toUpperCase() !== 'Q' && command.toUpperCase() !== 'T') lastQuadCtrl = null;
  }
  if (current.length > 1) subpaths.push(current);
  return subpaths;
};

const capsulePolygon = (p1, p2, width, steps = 16) => {
  const r = width / 2;
  const dx = p2[0] - p1[0];
  const dy = p2[1] - p1[1];
  const base = Math.atan2(dy, dx);
  const pts = [];
  for (let i = 0; i <= steps; i++) {
    const a = base - Math.PI / 2 + (Math.PI * i) / steps;
    pts.push([p2[0] + r * Math.cos(a), p2[1] + r * Math.sin(a)]);
  }
  for (let i = 0; i <= steps; i++) {
    const a = base + Math.PI / 2 + (Math.PI * i) / steps;
    pts.push([p1[0] + r * Math.cos(a), p1[1] + r * Math.sin(a)]);
  }
  return pts;
};

const loadShapes = () => {
  const svg = readFileSync(SVG_PATH, 'utf8');
  const shapes = [];
  for (const [tag] of svg.matchAll(/<(?:rect|path)\b[^>]*\/?>/g)) {
    const attrs = parseAttrs(tag);
    if (tag.startsWith('<rect')) {
      const x = Number(attrs.x ?? 0);
      const y = Number(attrs.y ?? 0);
      const w = Number(attrs.width ?? VIEWBOX);
      const h = Number(attrs.height ?? VIEWBOX);
      const rx = Number(attrs.rx ?? 0);
      shapes.push({
        polygons: [roundRectPolygon(x, y, w, h, rx)],
        color: parseColor(attrs.fill ?? '#000000')
      });
      continue;
    }
    const polygons = parsePath(attrs.d ?? '');
    if (attrs.stroke) {
      // Round-capped straight stroked segment (used by the logo's boat outline).
      const [line] = polygons;
      if (line && line.length === 2) {
        shapes.push({
          polygons: [capsulePolygon(line[0], line[1], Number(attrs['stroke-width'] ?? 1))],
          color: parseColor(attrs.stroke)
        });
        continue;
      }
    }
    if (attrs.fill && attrs.fill !== 'none') {
      shapes.push({ polygons, color: parseColor(attrs.fill) });
    }
  }
  return shapes;
};

/* ---------------------------------------------------------------- Rasteriser */

const fillPolygons = (buffer, width, height, polygons, color) => {
  const [r, g, b] = color;
  for (const poly of polygons) {
    if (poly.length < 3) continue;
    let minY = Infinity;
    let maxY = -Infinity;
    for (const [, y] of poly) {
      if (y < minY) minY = y;
      if (y > maxY) maxY = y;
    }
    const y0 = Math.max(0, Math.floor(minY - 0.5));
    const y1 = Math.min(height - 1, Math.ceil(maxY + 0.5));
    for (let py = y0; py <= y1; py++) {
      const yc = py + 0.5;
      const xs = [];
      for (let idx = 0; idx < poly.length; idx++) {
        const [x1, y1p] = poly[idx];
        const [x2, y2p] = poly[(idx + 1) % poly.length];
        if ((y1p <= yc && y2p > yc) || (y2p <= yc && y1p > yc)) {
          xs.push(x1 + ((yc - y1p) / (y2p - y1p)) * (x2 - x1));
        }
      }
      if (xs.length < 2) continue;
      xs.sort((a, b2) => a - b2);
      for (let k = 0; k + 1 < xs.length; k += 2) {
        const from = Math.max(0, Math.ceil(xs[k] - 0.5));
        const to = Math.min(width - 1, Math.ceil(xs[k + 1] - 0.5) - 1);
        for (let px = from; px <= to; px++) {
          const offset = (py * width + px) * 4;
          buffer[offset] = r;
          buffer[offset + 1] = g;
          buffer[offset + 2] = b;
          buffer[offset + 3] = 255;
        }
      }
    }
  }
};

const render = (shapes, size, { supersample = 4, scale = 1, background = null } = {}) => {
  const big = size * supersample;
  const buffer = Buffer.alloc(big * big * 4);
  const factor = (big / VIEWBOX) * scale;
  const shift = (big - VIEWBOX * factor) / 2;
  const transform = (poly) => poly.map(([x, y]) => [x * factor + shift, y * factor + shift]);

  if (background) {
    fillPolygons(buffer, big, big, [[[0, 0], [big, 0], [big, big], [0, big]]], background);
  }
  for (const shape of shapes) {
    fillPolygons(buffer, big, big, shape.polygons.map(transform), shape.color);
  }

  // Box downsample with premultiplied alpha.
  const out = Buffer.alloc(size * size * 4);
  const samples = supersample * supersample;
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      let r = 0;
      let g = 0;
      let b = 0;
      let a = 0;
      for (let sy = 0; sy < supersample; sy++) {
        for (let sx = 0; sx < supersample; sx++) {
          const offset = ((y * supersample + sy) * big + (x * supersample + sx)) * 4;
          const alpha = buffer[offset + 3] / 255;
          r += buffer[offset] * alpha;
          g += buffer[offset + 1] * alpha;
          b += buffer[offset + 2] * alpha;
          a += alpha;
        }
      }
      const offset = (y * size + x) * 4;
      if (a === 0) {
        out[offset] = 0;
        out[offset + 1] = 0;
        out[offset + 2] = 0;
        out[offset + 3] = 0;
        continue;
      }
      out[offset] = Math.round(r / a);
      out[offset + 1] = Math.round(g / a);
      out[offset + 2] = Math.round(b / a);
      out[offset + 3] = Math.round((a / samples) * 255);
    }
  }
  return out;
};

/* ---------------------------------------------------------------- PNG writer */

const CRC_TABLE = (() => {
  const table = new Int32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    table[n] = c;
  }
  return table;
})();

const crc32 = (buf) => {
  let c = -1;
  for (const byte of buf) c = CRC_TABLE[(c ^ byte) & 0xff] ^ (c >>> 8);
  return (c ^ -1) >>> 0;
};

const chunk = (type, data) => {
  const length = Buffer.alloc(4);
  length.writeUInt32BE(data.length, 0);
  const typeBuf = Buffer.from(type, 'ascii');
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(Buffer.concat([typeBuf, data])), 0);
  return Buffer.concat([length, typeBuf, data, crc]);
};

const encodePng = (size, rgba) => {
  const raw = Buffer.alloc((size * 4 + 1) * size);
  for (let y = 0; y < size; y++) {
    raw[y * (size * 4 + 1)] = 0;
    rgba.copy(raw, y * (size * 4 + 1) + 1, y * size * 4, (y + 1) * size * 4);
  }
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(size, 0);
  ihdr.writeUInt32BE(size, 4);
  ihdr[8] = 8;
  ihdr[9] = 6;
  ihdr[10] = 0;
  ihdr[11] = 0;
  ihdr[12] = 0;
  return Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    chunk('IHDR', ihdr),
    chunk('IDAT', deflateSync(raw, { level: 9 })),
    chunk('IEND', Buffer.alloc(0))
  ]);
};

/* ---------------------------------------------------------------- Build */

const shapes = loadShapes();
if (shapes.length < 3) throw new Error('Logo parsing looks wrong — expected at least 3 shapes.');

const brandGreen = [0x18, 0x3f, 0x33];
const targets = [
  { file: 'icon-192.png', size: 192, supersample: 4, scale: 1, background: null },
  { file: 'icon-512.png', size: 512, supersample: 3, scale: 1, background: null },
  // Maskable: full-bleed brand background + foreground inside the 80% safe zone.
  { file: 'icon-maskable-512.png', size: 512, supersample: 3, scale: 0.78, background: brandGreen }
];

for (const target of targets) {
  const rgba = render(shapes, target.size, {
    supersample: target.supersample,
    scale: target.scale,
    background: target.background
  });
  const png = encodePng(target.size, rgba);
  writeFileSync(resolve(OUT_DIR, target.file), png);
  console.log(`${target.file}  ${target.size}x${target.size}  ${(png.length / 1024).toFixed(1)} KiB`);
}
console.log('PWA icons generated from public/brand/logo.svg');
