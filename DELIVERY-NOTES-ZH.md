# 交付说明

本项目为 **pykaralake.com** 单景点实体站，对应 Google 地图实体 **Pykara Lake Boat House**
（`FH3W+WXP, Pykara, Naduvattam, Tamil Nadu 643237, India`）。

## 本次新增 / 变更

1. **单景点 SEO 实体绑定变量表已实例化**：所有变量集中在 `src/data/attraction.ts`，
   逐条对应关系与「需求 → 落地文件」对照表见 `docs/SEO-ENTITY-BINDING.md`。
2. **结构化数据补全**：`TouristAttraction`（`@id` / `image[]` / `isAccessibleForFree` /
   完整 `PostalAddress` / `GeoCoordinates` / `hasMap` / `sameAs`，坐标由 Google 短码
   `FH3W+WXP` 反解为 `11.4548406, 76.5974375`）、`WebSite`、`BreadcrumbList`、`FAQPage`。
3. **TDK / OG / Canonical**：标题按要求改为
   `Pykara Lake Boat House (Naduvattam) - Visitor Guide & Location`，并补齐
   `og:image:alt`、`twitter:*`、`canonical`、`og:site_name`；站点默认域名固定为
   `https://pykaralake.com`，canonical / OG / sitemap 恒为绝对地址。
4. **正文实体语义**：H1 同时包含泰米尔主标题与英文全称+城市；新增
   `src/components/EntityGuide.astro`：H2 四段（About / Location & How to Visit /
   Landmarks & Attractions Around / History & Significance）、首段等位声明、
   可见面包屑链、周边地标集群；所有图片 `alt` 改为「全称 + 城市 + 国家」语义串。
5. **评分与评价同步（重点合规项）**
   - 最新值：**4.4 分 / 15,818 条**，同步时间 **2026 年 9 月**。
   - 展示位置三处：hero 评分条（`RatingChip.astro`）、评价区块（`ReviewsSection.astro`）、
     资料来源区块（`SourcesSection.astro` 第 4 行）。
   - 评分条下一行小字：`Rating and review count synced from Google Maps user reviews ·
     September 2026 · See all reviews on Google Maps ↗`（泰米尔文同义句并列展示，整行可点击）。
   - 评价区块来源说明：`Synced from Google Maps user reviews; last synced September 2026.
     Copyright remains with the original reviewers and Google Maps.`（泰米尔文同义句并列）。
   - 按钮：「Google Maps-இல் அனைத்து மதிப்புரைகளையும் பார்க்க」+ 英文 `See all reviews on Google Maps`。
   - **评价只做页面展示，绝不进入 JSON-LD**：源码与 `dist/index.html` 中断言不存在
     `aggregateRating` / `ratingValue` / `reviewCount` / `"review"`，由 `pnpm selfcheck` 强制校验。
   - 所有 Google 外部链接全部保留：分享短链 `maps.app.goo.gl/R3VCpqVVNYmssjpU9`、
     原 `google.com/maps/search` 地点链接、原地图嵌入 iframe。
6. **资料来源区块**：新增 `SourcesSection.astro`（目的地信息 / 运营方 / 地点与开放信息 /
   评价同步 / 图片授权），含 `.gov.in` 与 `.org` 权威外链，增强 E-E-A-T。
7. **PWA 支持**：`manifest.webmanifest` + Service Worker（离线应用外壳，同源拦截、
   不触碰 Google 地图与 GA）+ 离线页 `offline.html` + 三枚图标（由 `logo.svg` 用
   `pnpm make:icons` 生成）+ head 元信息 + 安装按钮 + `src/types/global.d.ts` 类型声明。
8. **未删减**：原有泰米尔页面内容、四张图片区块、行程、地图、FAQ、页脚、法律页、
   GA4 同意流程全部保留，只做新增。

## 环境验证结果
- 本沙箱内已用 Node 22.12.0 + pnpm 10.34.5 完成 `pnpm install`（生成真实 `pnpm-lock.yaml`）、
  `astro build` 与 `node scripts/selfcheck.mjs` → **PASS**；改动文件 LSP 诊断 **0 error**。
- 仍无法访问 `upload.wikimedia.org`，四张实景 JPG 未落地，页面按 `onerror` / `data-fallback`
  退回同一批 Wikimedia Commons 授权原图。联网机器执行 `pnpm fetch:images` 即可补齐。
- 本沙箱 `astro check` 因缺少 `@napi-rs/wasm-runtime`（`@astrojs/astro2tsx` 的 transform 依赖）
  无法运行，请在正常机器上跑 `pnpm check`。

## 上线前建议执行
```bash
pnpm install
pnpm fetch:images
pnpm make:icons
pnpm check
pnpm build
pnpm selfcheck
```

详细状态见 `QA-STATUS.md`；实体变量表见 `docs/SEO-ENTITY-BINDING.md`。
