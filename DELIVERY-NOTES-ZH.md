# 交付说明

这是 Pykara Lake Boat House 的 Astro 源码交付包。

已包含：Astro + Tailwind CSS + TypeScript 源码、Cloudflare Workers Static Assets 配置、Tamil 页面、Google Maps、SEO/JSON-LD、FAQ、隐私/条款/Cookie 设置、GA4 同意后加载、Logo/Favicon、图片授权记录、真实图片自动下载脚本、静态自检脚本。

## 先补齐真实本地 JPG
当前生成环境无法下载外部二进制文件，因此没有用假图冒充实景照片。联网电脑运行：

```bash
corepack enable
pnpm install
pnpm fetch:images
```

会从 Wikimedia Commons 原图源写入：
- public/images/pykara-boat-house.jpg
- public/images/pykara-lake.jpg
- public/images/pykara-from-boat.jpg
- public/images/pykara-falls.jpg

## 生成真实 lockfile 并验收
第一次联网执行 `pnpm install` 会由 pnpm 生成真实的 `pnpm-lock.yaml`。随后执行：

```bash
rm -rf node_modules dist .astro
CI=1 pnpm install --frozen-lockfile
pnpm check
pnpm build
pnpm selfcheck
```

不要手写或伪造 lockfile。详细状态见 `QA-STATUS.md`。
