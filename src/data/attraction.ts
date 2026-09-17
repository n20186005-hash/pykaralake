/**
 * 单景点 SEO 实体绑定配置（Single attraction SEO entity binding config）
 * ---------------------------------------------------------------------------
 * 每个字段左侧注释里的 {{占位符}} 对应《单景点 SEO 实体绑定配置变量表》。
 * 做下一个景点站时，只需要替换本文件里的值，页面/组件/结构化数据会自动同步。
 *
 * 注意（合规）：Google 评分与评价数只用于页面展示与来源标注，
 * 绝不写入 JSON-LD（不输出 aggregateRating / review），避免违反 Google 结构化数据政策。
 */

export const ATTRACTION = {
  /** {{DOMAIN_NAME}} 网站域名 */
  domain: 'pykaralake.com',
  /** 站点绝对地址（Canonical / OG / JSON-LD 用） */
  siteUrl: 'https://pykaralake.com',

  /** {{ATTRACTION_FULL_NAME}} 景点官方全称 */
  fullName: 'Pykara Lake Boat House',
  /** {{ATTRACTION_SHORT_NAME}} 景点常用俗称 / 域名对应含义 */
  shortName: 'Pykara Lake',
  /** 当地语言名称（页面主语言 ta-IN 使用） */
  localizedName: 'பைக்காரா ஏரி படகு இல்லம்',

  /** {{CITY_NAME}} 所在城市/城镇名 */
  city: 'Naduvattam',
  /** 更细一级的行政区/村名，用于地址串 */
  subLocality: 'Pykara',
  /** {{STATE_PROVINCE}} 所在省/州 */
  stateProvince: 'Tamil Nadu',
  /** 所在县/fDistrict（E-E-A-T 归属层级） */
  district: 'The Nilgiris',
  /** {{COUNTRY_NAME}} 所在国家 */
  country: 'India',
  /** {{COUNTRY_CODE_2LETTER}} 两位国家代码 */
  countryCode2: 'IN',
  /** {{POSTAL_CODE}} 邮政编码 */
  postalCode: '643237',

  /** {{LATITUDE}} 纬度数字 */
  latitude: 11.4548406,
  /** {{LONGITUDE}} 经度数字 */
  longitude: 76.5974375,
  /** Google 短码（地址串开头） */
  plusCode: 'FH3W+WXP',
  /** 结构化数据 streetAddress */
  streetAddress: 'FH3W+WXP, Pykara',

  /** {{MAPS_SHARE_URL}} Google Maps 分享短链接 */
  mapsShareUrl: 'https://maps.app.goo.gl/R3VCpqVVNYmssjpU9',
  /** Google Maps 地点检索（保留的既有外链，同时也是"查看全部评价"入口） */
  mapsListingUrl:
    'https://www.google.com/maps/search/?api=1&query=FH3W%2BWXP%2C%20Pykara%2C%20Naduvattam%2C%20Tamil%20Nadu%20643237%2C%20India',
  /** {{MAPS_EMBED_SRC}} Google Maps 嵌入 iframe 的 src */
  mapsEmbedSrc:
    'https://www.google.com/maps?q=Pykara%20Lake%20Boat%20House%2C%20FH3W%2BWXP%2C%20Pykara%2C%20Naduvattam%2C%20Tamil%20Nadu%20643237%2C%20India&output=embed&hl=ta',

  /** {{NEARBY_LANDMARK_1}} 周边核心地标 1 */
  nearbyLandmark1: 'Pykara Falls',
  /** {{NEARBY_LANDMARK_2}} 周边核心地标 2 */
  nearbyLandmark2: 'Pine Forest (9th Mile)',

  /** {{GOVT_TOURISM_URL}} 当地政府/官方旅游局链接（.gov.in） */
  govtTourismUrl: 'https://www.tamilnadutourism.tn.gov.in/',
  govtTourismLabel: 'Tamil Nadu Tourism, Government of Tamil Nadu',
  /** 官方运营方（.org，TTDC 公共部门企业） */
  operatorUrl: 'https://ttdconline.com/',
  operatorLabel: 'Tamil Nadu Tourism Development Corporation (TTDC)',

  /** 主视觉图与结构化数据图片（真实文件由 `pnpm fetch:images` 落到本地） */
  heroImage: '/images/pykara-boat-house.jpg',
  images: [
    '/images/pykara-boat-house.jpg',
    '/images/pykara-lake.jpg',
    '/images/pykara-from-boat.jpg',
    '/images/pykara-falls.jpg'
  ],

  /** Google 地图评分与评价数（页面展示用；来源与同步时间见下方） */
  googleRating: 4.4,
  googleReviewCount: 15818,
  /** 评分/评价数同步时间（英文展示） */
  ratingSyncedEn: 'September 2026',
  /** 评分/评价数同步时间（泰米尔文展示） */
  ratingSyncedTa: 'செப்டம்பர் 2026',

  /** 知识图谱锚点 */
  attractionId: 'https://pykaralake.com/#attraction',
  websiteId: 'https://pykaralake.com/#website'
} as const;

/** 绝对地址拼接（无尾斜杠） */
export const absolute = (path = '/'): string => new URL(path, ATTRACTION.siteUrl).toString();

/** 2026-09 同步的评分展示文本：4.4 / 15,818 */
export const ratingText = `${ATTRACTION.googleRating.toFixed(1)}`;
export const reviewCountText = ATTRACTION.googleReviewCount.toLocaleString('en-US');
/** 星级宽度百分比（4.4 → 88%） */
export const ratingPercent = `${Math.round((ATTRACTION.googleRating / 5) * 100)}%`;

/** 页面可见 + 可复用的 Google 来源说明（规避 Google 内容/商标判违规风险） */
export const googleReviewAttribution = {
  /** 评分旁边的下一行小字（英文 / 泰米尔文） */
  inlineEn: `Rating and review count synced from Google Maps user reviews · ${ATTRACTION.ratingSyncedEn} · See all reviews on Google Maps ↗`,
  inlineTa: `மதிப்பீடு மற்றும் மதிப்புரை எண்ணிக்கை Google Maps (Google வரைபடம்) பயனர் மதிப்புரைகளிலிருந்து ஒத்திசைக்கப்பட்டது · ${ATTRACTION.ratingSyncedTa} · Google Maps-இல் அனைத்து மதிப்புரைகளையும் காண ↗`,
  /** 评价区块来源说明 */
  blockEn: `Synced from Google Maps user reviews; last synced ${ATTRACTION.ratingSyncedEn}. Copyright remains with the original reviewers and Google Maps.`,
  blockTa: `Google வரைபடம் பயனர் மதிப்புரைகளிலிருந்து ஒத்திசைக்கப்பட்டது, ஒத்திசைவு நேரம் ${ATTRACTION.ratingSyncedTa}; பதிப்புரிமை அசல் மதிப்புரையாளர்கள் மற்றும் Google வரைபடத்திற்கு உரியது.`,
  /** 按钮文案 */
  ctaEn: 'See all reviews on Google Maps',
  ctaTa: 'Google Maps-இல் அனைத்து மதிப்புரைகளையும் பார்க்க',
  /** 资料来源区块 · 评价行 */
  sourceLabelEn: `Reviews and rating · synced ${ATTRACTION.ratingSyncedEn}`,
  sourceLabelTa: `மதிப்புரைகள் · ஒத்திசைவு ${ATTRACTION.ratingSyncedTa}`
} as const;
