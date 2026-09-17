# 单景点 SEO 实体绑定 · 变量实例化与本项目落地位置

本源站为 **单景点站点**：`pykaralake.com` ↔ Google Maps 实体 **Pykara Lake Boat House**。
下表左侧为模版占位符，右侧为本项目已写入 `src/data/attraction.ts` 的真实取值。

## 1. 变量表（已实例化）

| 变量占位符 | 本项目取值 |
| --- | --- |
| `{{DOMAIN_NAME}}` | `pykaralake.com` |
| `{{ATTRACTION_FULL_NAME}}` | `Pykara Lake Boat House` |
| `{{ATTRACTION_SHORT_NAME}}` | `Pykara Lake` |
| `{{CITY_NAME}}` | `Naduvattam` |
| `{{STATE_PROVINCE}}` | `Tamil Nadu` |
| `{{COUNTRY_NAME}}` | `India` |
| `{{COUNTRY_CODE_2LETTER}}` | `IN` |
| `{{POSTAL_CODE}}` | `643237` |
| `{{LATITUDE}}` | `11.4548406`（由 Google 短码 `FH3W+WXP` 反解） |
| `{{LONGITUDE}}` | `76.5974375` |
| `{{MAPS_SHARE_URL}}` | `https://maps.app.goo.gl/R3VCpqVVNYmssjpU9` |
| `{{MAPS_EMBED_SRC}}` | `https://www.google.com/maps?q=Pykara%20Lake%20Boat%20House…&output=embed&hl=ta` |
| `{{NEARBY_LANDMARK_1}}` | `Pykara Falls` |
| `{{NEARBY_LANDMARK_2}}` | `Pine Forest (9th Mile)` |
| `{{GOVT_TOURISM_URL}}` | `https://www.tamilnadutourism.tn.gov.in/` |

附带两处不进模版但用于 E-E-A-T 的常量：

| 常量 | 取值 |
| --- | --- |
| 运营方（`.org`） | `https://ttdconline.com/` — Tamil Nadu Tourism Development Corporation (TTDC) |
| 行政区链 | `Pykara → Naduvattam → The Nilgiris → Tamil Nadu → India` |

## 2. 需求 → 落地位置

| 需求 | 落地位置 |
| --- | --- |
| 1. JSON-LD `TouristAttraction`（含 `@id` / `image` / `isAccessibleForFree` / `geo` / `address` / `hasMap` / `sameAs`） | `src/pages/index.astro` frontmatter `touristSchema` |
| 1b. JSON-LD `WebSite`（`@id` 锚点，`about` 指向 `#attraction`） | `websiteSchema` |
| 2. TDK + OG | `src/pages/index.astro` 顶部 `title` / `description`；`src/layouts/BaseLayout.astro` 输出 `og:*`、`twitter:*`、`canonical`、`og:image:alt` |
| 2b. Canonical + Image Meta | `BaseLayout.astro`：`<link rel="canonical">`、`og:image`、`og:image:alt`（由 `Astro.site` 生成绝对地址） |
| 3. H1 / H2 层级 | H1 = 泰米尔主标题 + `Pykara Lake Boat House (Naduvattam) · Tamil Nadu, India`（`index.astro` hero）；H2 = About / Location & How to Visit / Landmarks & Attractions / History & Significance（`src/components/EntityGuide.astro`） |
| 4.1 首段等位声明 | `EntityGuide.astro` 第一段（`fullName` 与 `shortName` 语义等同） |
| 4.2 地理面包屑 | `EntityGuide.astro` 可见面包屑 + `BreadcrumbList` JSON-LD（`index.astro`） |
| 4.3 周边语义集群 | `EntityGuide.astro` Landmarks 段落 |
| 5. 地图嵌入 + 权威 `.gov`/`.org` 外链 | `index.astro` `#map` 区块 + `EntityGuide.astro` Location 段（`tamilnadutourism.tn.gov.in` / `ttdconline.com`） |
| 4. 图片 Alt 语义绑定 | `index.astro` hero / about / boating / falls 四处 `<img alt>` 全部改为 `全称 + 城市 + 国家` 语义串 |
| 4. FAQ + `FAQPage` | `index.astro` `faqs`（6 条泰米尔 + 3 条英文）→ 可见手风琴 + `FAQPage` JSON-LD |
| SourcesSection（E-E-A-T） | `src/components/SourcesSection.astro`（目的地信息 / 运营方 / 地点与开放信息 / 评价 / 图片授权） |

## 3. Google 评分与评价：合规做法

| 需求 | 落地位置 |
| --- | --- |
| 评分与评价数同步为最新（4.4 · 15,818） | `src/data/attraction.ts` → `googleRating: 4.4`、`googleReviewCount: 15818` |
| 评分 + 下一行小字（来源 / 同步时间 / 跳转全部评价） | `src/components/RatingChip.astro`（hero 与评分卡共用） |
| 评价区块：来源说明 + 「查看全部评价」按钮 | `src/components/ReviewsSection.astro` |
| 资料来源区块：评价 · 同步时间 2026 年 9 月 + 同样来源说明与链接 | `src/components/SourcesSection.astro` 第 4 行 |
| 评价只展示、**不进 JSON-LD** | `selfcheck.mjs` 第 5 / 8 项强制断言：源码与 `dist/index.html` 中不得出现 `aggregateRating` / `ratingValue` / `reviewCount` / `"review"` |
| 所有 Google 外部链接保留 | `mapsListingUrl`（原有 search 外链）、`mapsShareUrl`（新增分享短链）、`mapsEmbedSrc`（原有 iframe）全部保留 |

文字说明（原文要求 → 页面实际文案）：

| 原文要求（中文） | 页面呈现（英文 / 泰米尔文，受众语言） |
| --- | --- |
| 评分与评价数同步自谷歌地图（Google Maps）用户评价 · 2026 年 9 月 · 点击查看谷歌地图全部评价↗ | `Rating and review count synced from Google Maps user reviews · September 2026 · See all reviews on Google Maps ↗` / `மதிப்பீடு மற்றும் மதிப்புரை எண்ணிக்கை Google Maps (Google வரைபடம்) பயனர் மதிப்புரைகளிலிருந்து ஒத்திசைக்கப்பட்டது · செப்டம்பர் 2026 · Google Maps-இல் அனைத்து மதிப்புரைகளையும் காண ↗` |
| 同步自 Google 地图用户评价，同步时间 2026 年 9 月；版权归原作者与 Google 地图所有 | `Synced from Google Maps user reviews; last synced September 2026. Copyright remains with the original reviewers and Google Maps.` / `Google வரைபடம் பயனர் மதிப்புரைகளிலிருந்து ஒத்திசைக்கப்பட்டது, ஒத்திசைவு நேரம் செப்டம்பர் 2026; பதிப்புரிமை அசல் மதிப்புரையாளர்கள் மற்றும் Google வரைபடத்திற்கு உரியது.` |
| 在谷歌地图查看全部评价（按钮） | `See all reviews on Google Maps ↗` / `Google Maps-இல் அனைத்து மதிப்புரைகளையும் பார்க்க` |

> 页面主语言为 `ta-IN`（面向泰米尔纳德邦读者），因此来源说明按页面语言本地化，
> 英文版同步保留以兼顾 Google 审核与英文用户；两版语义完全一致，均含「来源 = Google Maps
> 用户评价 / 同步时间 = 2026 年 9 月 / 版权归原作者与 Google / 可跳转全部评价」。

## 4. 与模版的少量偏差（为避免结构化数据与实际不符）

| 模版 | 本项目 | 原因 |
| --- | --- | --- |
| `"isAccessibleForFree": true` | `false` + `publicAccess: true` | 该景点在入口/车辆与游船均收费（页面与 FAQ 均已写明为小额收费），写 `true` 会与事实不符 |
| FAQ 模版「Yes, … is a public space and is free to visit」 | 改为「入口与车辆按小额收费、游船按船型另行购票，价格会变动请到现场确认」 | 同上 |
| `{{ATTRACTION_FULL_NAME}} ({{CITY_NAME}})` 中的城市 | `Naduvattam` | 采用 Google 地图地址串中的实际归属（`FH3W+WXP, Pykara, Naduvattam, Tamil Nadu 643237, India`），而非仅按「距离最近的大城市 Ooty」 |
