/**
 * 长尾专题注册表（Long-tail topic registry）
 * ---------------------------------------------------------------------------
 * 数据驱动：新增专题只需往 TOPICS 追加条目，[topic].astro 与 TopicPage.astro
 * 会自动渲染、sitemap 自动收录、首页 #guides 集群自动出现。
 *
 * 合规铁律（与本族其它站点一致）：
 *  - 不杜撰实时运营状态；凡可变量均标注「向 TTDC 核实」。
 *  - 2026-10-30 马德拉斯高等法院裁定为最高优先级事实来源。
 *  - Google 评分/评价数只做页面展示，绝不写入 JSON-LD。
 */

export interface Bilingual {
  ta: string;
  en: string;
}

export interface TopicSection {
  /** 区块 id（用于页面内锚点与唯一性） */
  id: string;
  heading: Bilingual;
  /** 正文段落（单段字符串即可） */
  body: Bilingual;
}

export interface TopicFaq {
  q: Bilingual;
  a: Bilingual;
}

export interface TopicContent {
  slug: string;
  group: 'core' | 'transport' | 'nearby' | 'itinerary' | 'season' | 'services';
  title: Bilingual;
  description: Bilingual;
  h1: Bilingual;
  lead: Bilingual;
  /** 最后核实日期（英文展示；泰米尔文版本在页面调用处拼装） */
  updated: string;
  image: string;
  imageAlt: Bilingual;
  sections: TopicSection[];
  faqs: TopicFaq[];
  /** 互链专题 slug（3–6 个，形成主题集群） */
  related: string[];
}

export const TOPICS: TopicContent[] = [
  {
    slug: 'timings',
    group: 'core',
    title: {
      ta: 'பைக்காரா ஏரி படகு இல்லம் நேரம் 2026 – பார்வையாளர் நேரம் மற்றும் நீதிமன்ற உத்தரவு',
      en: 'Pykara Lake Boat House Timings 2026 – Visitor Window & Court Order'
    },
    description: {
      ta: '2026 அக்டோபர் 30 நீதிமன்ற உத்தரவின் படி பைக்காரா ஏரி பார்வையாளர் நேரம் 10:00–16:00. டிக்கெட் நேரத்தை TTDC-யிடம் உறுதி செய்யவும்.',
      en: 'Under the 30 October 2026 court order, Pykara Lake’s visitor window is 10:00–16:00. Confirm ticket-counter timing with TTDC before you travel.'
    },
    h1: {
      ta: 'பைக்காரா ஏரி படகு இல்லம் நேரம்',
      en: 'Pykara Lake Boat House timings'
    },
    lead: {
      ta: '2026 அக்டோபர் 30 அன்று சென்னை உயர் நீதிமன்ற உத்தரவு பார்வையாளர் நேரத்தை 10:00–16:00 ஆக நிர்ணயித்தது. இது நிரூபிக்கப்பட்ட டிக்கெட் நேர அட்டவணை அல்ல; உங்கள் பயண நாளில் TTDC-யிடம் முதல்/கடைசி படகு மற்றும் டிக்கெட் நேரத்தை உறுதி செய்யவும்.',
      en: 'On 30 October 2026 the Madras High Court set Pykara Lake’s visitor window at 10:00–16:00. Treat that as the court-ordered window, not a guaranteed ticket-counter timetable; ask TTDC about counter opening and the last sailing for your date.'
    },
    updated: '6 November 2026',
    image: '/images/pykara-lake.jpg',
    imageAlt: {
      ta: 'பைக்காரா ஏரி நீர் மற்றும் மலைகள்',
      en: 'Pykara Lake water and surrounding hills'
    },
    sections: [
      {
        id: 'window',
        heading: {
          ta: 'நீதிமன்ற நிர்ணயித்த பார்வையாளர் நேரம்',
          en: 'Court-ordered visitor window'
        },
        body: {
          ta: '2026 அக்டோபர் 30 அன்று சென்னை உயர் நீதிமன்ற உத்தரவு பைக்காரா ஏரியின் பார்வையாளர் நேரத்தை 10:00–16:00 ஆக நிர்ணயித்தது. அதே உத்தரவு தினசரி வருகை வரம்புகள், மேலாண்மை முன்பதிவு மற்றும் கட்டுப்படுத்தப்பட்ட படகு இயக்கத்தையும் கோருகிறது. இது ஏரிப் பகுதிக்குள் நுழைவதற்கான நேரம்; அது ஒவ்வொரு படகு வகைக்கும் டிக்கெட் விற்பனை நடப்பதை உறுதி செய்யாது.',
          en: 'The Madras High Court order of 30 October 2026 set the lake’s visitor window at 10:00–16:00. The same order requires daily visitor-capacity limits, managed booking and controlled boat operations. That is the time to be in the lake area; it does not by itself mean tickets are on sale for every boat type.'
        }
      },
      {
        id: 'counter',
        heading: {
          ta: 'நிலையான டிக்கெட் நேர அட்டவணை அல்ல',
          en: 'Not a fixed ticket-counter timetable'
        },
        body: {
          ta: 'பழைய சுற்றுலாப் பொருள்களில் காலை 8:30 முதல் மாலை 17:30 வரை என்ற நேரங்கள் காணப்பட்டன; அவை இப்போது நடப்பு நேரமாகக் காட்டப்படவில்லை. குறிப்பிட்ட நாளில் முதல் படகு, கடைசி படகு மற்றும் டிக்கெட் முன்பதிவு நேரத்தை TTDC-யிடம் உறுதி செய்யவும்.',
          en: 'Older tourism material showed earlier opening and a later closing time; those are not shown here as the current schedule. Check the first sailing, last sailing and booking-desk timing with TTDC for your specific date.'
        }
      },
      {
        id: 'check',
        heading: {
          ta: 'உங்கள் நாளில் எப்படி உறுதி செய்வது',
          en: 'How to check on your date'
        },
        body: {
          ta: 'TTDC அதிகாரப்பூர்வ முன்பதிவு தளத்தில் Pykara, பயண தேதி மற்றும் படகு வகையைத் தேர்ந்தெடுத்து இறுதி கிடைப்பையும் நேரத்தையும் சரிபார்க்கவும். சரியான உயிர்காப்பு அங்கி, ஏறும் உதவி மற்றும் ரத்து விதிகளையும் முன்கூட்டியே கேட்கவும்.',
          en: 'On the official TTDC portal, choose Pykara, your travel date and a boat type to see availability and timing. Also ask about a correctly fitting life jacket, boarding assistance and cancellation terms before paying.'
        }
      }
    ],
    faqs: [
      {
        q: {
          ta: 'படகு இல்லத்தின் தற்போதைய நேரம் என்ன?',
          en: 'What are the Pykara Lake Boat House timings?'
        },
        a: {
          ta: '2026 அக்டோபர் 30 நீதிமன்ற உத்தரவு பார்வையாளர் நேரத்தை 10:00–16:00 ஆக நிர்ணயித்தது. இது நிரூபிக்கப்பட்ட டிக்கெட் நேர அட்டவணை அல்ல; உங்கள் நாளில் முதல்/கடைசி படகு மற்றும் டிக்கெட் நேரத்தை TTDC-யிடம் உறுதி செய்யவும்.',
          en: 'The 30 October 2026 court order set the visitor window at 10:00–16:00. It is not a guaranteed ticket-counter timetable; confirm the counter opening, last sailing and operation for your date with TTDC.'
        }
      },
      {
        q: {
          ta: 'பழைய 8:30–17:30 நேரம் இன்னும் பொருந்துமா?',
          en: 'Does the older 8:30–17:30 timing still apply?'
        },
        a: {
          ta: 'இல்லை. அந்த நேரங்கள் பழைய சுற்றுலாப் பொருள்களில் இருந்தன; 2026 அக்டோபர் 30 உத்தரவுக்குப் பிறகு அவை நடப்பு நேரமாகக் காட்டப்படவில்லை. தற்போதைய நேரத்தை TTDC-யிடம் உறுதி செய்யவும்.',
          en: 'No. Those times appeared in older tourism material; after the 30 October 2026 order they are not shown here as current. Confirm the present timing with TTDC.'
        }
      },
      {
        q: {
          ta: 'அடுத்த நீதிமன்ற முன்னேற்ற அறிக்கை எப்போது?',
          en: 'When is the next court progress report?'
        },
        a: {
          ta: 'அடுத்த நீதிமன்ற முன்னேற்ற அறிக்கை 2026 டிசம்பர் 4 அன்று திட்டமிடப்பட்டுள்ளது. அது படகு இயக்கம் அல்லது நேரத்தை மாற்றலாம்; பயணத்திற்கு முன் புதுப்பிப்புகளைச் சரிபார்க்கவும்.',
          en: 'The next court progress report is scheduled for 4 December 2026. It may change boat operations or timing, so recheck for updates before you travel.'
        }
      },
      {
        q: {
          ta: 'மழைக்காலத்தில் நேரம் மாறுமா?',
          en: 'Does the timing change in the monsoon?'
        },
        a: {
          ta: 'பார்வையாளர் நேரம் நீதிமன்ற உத்தரவால் நிர்ணயிக்கப்பட்டுள்ளது, ஆனால் படகு இயக்கம் வானிலை ரத்துக்கு உட்பட்டது. மழை அல்லது காற்றின் போது சேவை நிறுத்தப்படலாம்; TTDC-யிடம் உறுதி செய்யவும்.',
          en: 'The visitor window is set by the court order, but boating itself is subject to weather cancellation. Service may pause in heavy rain or wind; confirm with TTDC.'
        }
      }
    ],
    related: ['boating-status', 'boating-rules', 'ticket-price', 'how-to-reach']
  },

  {
    slug: 'ticket-price',
    group: 'core',
    title: {
      ta: 'பைக்காரா ஏரி படகு இல்லம் டிக்கெட் விலை – TTDC கட்டணத்தைச் சரிபார்க்கவும்',
      en: 'Pykara Lake Boat House Ticket Price – Check TTDC Fares'
    },
    description: {
      ta: 'நடப்பு படகு விலை அட்டவணை இந்த வழிகாட்டிக்கு உறுதிப்படுத்தப்படவில்லை. 2026 உத்தரவு எந்தப் படகுகள் இயங்கலாம் எனக் கட்டுப்படுத்துகிறது; இறுதி விலையை TTDC தளத்தில் சரிபார்க்கவும்.',
      en: 'No current fare table has been verified for this guide. The 2026 order restricts which boats may run, so check the final price on the official TTDC portal.'
    },
    h1: {
      ta: 'பைக்காரா ஏரி படகு இல்லம் டிக்கெட் விலை',
      en: 'Pykara Lake Boat House ticket price'
    },
    lead: {
      ta: '2026 நீதிமன்ற உத்தரவு படகு வகைகளைக் கட்டுப்படுத்துகிறது, எனவே பழைய பைக்காரா அல்லது ஊட்டி படகு இல்ல விலைகள் நம்பகமான நடப்பு விலை அல்ல. இறுதி விலை, கிடைப்பு மற்றும் சேர்க்கப்பட்ட சேவைகளை TTDC அதிகாரப்பூர்வ தளத்தில் சரிபார்க்கவும்.',
      en: 'The 2026 court order restricts which boats may operate, so older Pykara or Ooty Boat House fares are not a reliable current price. Check the final fare, availability and included services on the official TTDC portal.'
    },
    updated: '6 November 2026',
    image: '/images/pykara-from-boat.jpg',
    imageAlt: {
      ta: 'பைக்காரா ஏரியில் படகு சவாரி',
      en: 'Boating on Pykara Lake'
    },
    sections: [
      {
        id: 'unverified',
        heading: {
          ta: 'இந்த வழிகாட்டிக்கு உறுதிப்படுத்தப்பட்ட விலை இல்லை',
          en: 'No verified fare for this guide'
        },
        body: {
          ta: '2026 நீதிமன்ற உத்தரவு எந்தப் படகுகள் இயங்கலாம் என வரம்புக்குட்படுத்துகிறது. அதனால் பழைய பைக்காரா அல்லது ஊட்டி படகு இல்ல விலைப் பட்டியல்கள் நடப்பு விலையாக நம்பப்பட முடியாது.',
          en: 'The 2026 court ruling restricts which boat types may operate, so older Pykara or Ooty Boat House fare lists cannot be treated as the current price.'
        }
      },
      {
        id: 'official',
        heading: {
          ta: 'அதிகாரப்பூர்வ விலையை எப்படிப் படிப்பது',
          en: 'How to read the official price'
        },
        body: {
          ta: 'TTDC அதிகாரப்பூர்வ முன்பதிவு தளத்தில் Pykara, பயண தேதி மற்றும் அனுமதிக்கப்பட்ட படகு வகையைத் தேர்ந்தெடுத்து இறுதி விலை மற்றும் கிடைப்பைச் சரிபார்க்கவும். படகு வகை மாறும்போது விலை மாறும்.',
          en: 'On the official TTDC portal, select Pykara, your date and an allowed boat type to read the final quoted price and availability. Price changes with the boat type.'
        }
      },
      {
        id: 'separate',
        heading: {
          ta: 'தனியாக வசூலிக்கப்படலாம்',
          en: 'What may be charged separately'
        },
        body: {
          ta: 'நுழைவு, வாகன நிறுத்தக் கட்டணம், வரிகள் அல்லது பிற கட்டணங்கள் தனியாக இருக்கலாம் என்பதைக் கேட்கவும். படகு கட்டணம் மட்டுமே இறுதி விலை என எடுத்துக்கொள்ளாதீர்கள்.',
          en: 'Ask whether admission, vehicle parking, taxes or other fees are separate. Do not assume the boat fare alone is the final price.'
        }
      }
    ],
    faqs: [
      {
        q: {
          ta: 'நுழைவு மற்றும் படகு கட்டணம் எவ்வளவு?',
          en: 'What is the Pykara boating ticket price?'
        },
        a: {
          ta: 'நடப்பு கட்டணப்பட்டியல் உறுதிப்படுத்தப்படவில்லை. TTDC அதிகாரப்பூர்வ தளத்தில் Pykara, பயண தேதி மற்றும் படகு வகையைத் தேர்ந்தெடுத்து இறுதி விலையைச் சரிபார்க்கவும்.',
          en: 'No current fare table has been verified. Use the official TTDC portal, select Pykara, your date and an allowed boat type, and read the final quoted price.'
        }
      },
      {
        q: {
          ta: 'பழைய விலைகள் இன்னும் பொருந்துமா?',
          en: 'Do older prices still apply?'
        },
        a: {
          ta: '2026 உத்தரவு படகு வகைகளைக் கட்டுப்படுத்துவதால், பழைய விலைப் பட்டியல்கள் நடப்பு விலையாக நம்பப்பட முடியாது. TTDC-யிடம் உறுதி செய்யவும்.',
          en: 'Because the 2026 order restricts boat types, older price lists are not a reliable current price. Confirm with TTDC.'
        }
      },
      {
        q: {
          ta: 'குழந்தைகளுக்கு தனி கட்டணம் உள்ளதா?',
          en: 'Is there a separate child ticket?'
        },
        a: {
          ta: 'குழந்தைகள், மாணவர்கள் அல்லது மூத்த குடிமக்களுக்கான கட்டண விலக்குகள் உள்ளனவா என்பதை TTDC பட்டியலில் உங்கள் தேதிக்குச் சரிபார்க்கவும். இந்த வழிகாட்டி அதை உறுதி செய்யாது.',
          en: 'Whether child, student or senior concessions apply for your date is shown on the TTDC listing; this guide does not confirm it.'
        }
      },
      {
        q: {
          ta: 'நுழைவுச் சீட்டு மற்றும் படகுச் சீட்டு வேறுபட்டவையா?',
          en: 'Are entry and boating tickets different?'
        },
        a: {
          ta: 'சில இடங்களில் நுழைவுக் கட்டணம் தனியாக இருக்கலாம். TTDC-யிடம் நுழைவு, படகு மற்றும் வாகனக் கட்டணங்களைத் தனித்தனியே கேட்கவும்.',
          en: 'At some locations an entry charge may be separate. Ask TTDC about entry, boating and vehicle charges individually.'
        }
      }
    ],
    related: ['timings', 'boating-status', 'boating-rules', 'parking']
  },

  {
    slug: 'boating-status',
    group: 'core',
    title: {
      ta: 'பைக்காரா ஏரி படகு நிலைமை 2026 – நீதிமன்ற உத்தரவுக்குப் பிறகு என்ன இயங்குகிறது',
      en: 'Pykara Lake Boating Status 2026 – What’s Running After the Court Order'
    },
    description: {
      ta: '2026 அக்டோபர் 30 உத்தரவுக்குப் பிறகு பெட்ரோல்/டீசல் மோட்டார் படகுகள், வேகப்படகுகள் மற்றும் ஜெட் ஸ்கிக்கள் தடைசெய்யப்பட்டன. நிலைமையை TTDC-யிடம் உறுதி செய்யவும்.',
      en: 'After the 30 October 2026 order, petrol/diesel motorboats, speed boats and jet skis are banned. Confirm the current status with TTDC.'
    },
    h1: {
      ta: 'பைக்காரா ஏரி படகு நிலைமை',
      en: 'Pykara Lake boating status'
    },
    lead: {
      ta: '2026 அக்டோபர் 30 அன்று சென்னை உயர் நீதிமன்ற உத்தரவு சில கட்டுப்பாடுகளை நிலையானவையாக்கியது. இது படகு இயக்கத்தை மாற்றியது; உங்கள் நாளில் எந்தப் படகுகள் இயங்கும் என்பதை TTDC-யிடம் உறுதி செய்யவும்.',
      en: 'On 30 October 2026 the Madras High Court made several restrictions standing. It changed which boats may run; confirm what operates on your date with TTDC.'
    },
    updated: '6 November 2026',
    image: '/images/pykara-from-boat.jpg',
    imageAlt: {
      ta: 'பைக்காரா ஏரியில் படகு',
      en: 'A boat on Pykara Lake'
    },
    sections: [
      {
        id: 'changed',
        heading: {
          ta: '2026 உத்தரவு என்ன மாற்றியது',
          en: 'What the 2026 order changed'
        },
        body: {
          ta: 'பெட்ரோல்/டீசல் மோட்டார் படகுகள், வேகப்படகுகள் மற்றும் ஜெட் ஸ்கிக்கள் தடைசெய்யப்பட்டன. படகு வலிக்கும், மிதவைப் படகும் மற்றும் குறைந்த திறன் மின்சாரப் படகுகள் நிபந்தனைகளின் கீழ் அனுமதிக்கப்படலாம்.',
          en: 'Petrol/diesel motorboats, speed boats and jet skis are banned. Rowing boats, pedal boats and low-power electric boats may be allowed under conditions set by the authorities.'
        }
      },
      {
        id: 'tickets',
        heading: {
          ta: 'அனுமதிக்கப்பட்ட படகுகளுக்கும் டிக்கெட் உறுதியானது அல்ல',
          en: 'Tickets not guaranteed for allowed boats'
        },
        body: {
          ta: 'அனுமதிக்கப்பட்ட படகு வகைகள் இருந்தாலும், அவற்றுக்கான டிக்கெட் விற்பனை நடப்பதை இந்த உத்தரவு உறுதி செய்யாது. இயக்க நிலை, கட்டணம் மற்றும் முன்பதிவு வழியை TTDC-யிடம் உறுதி செய்யவும்.',
          en: 'Even where allowed boat types exist, the order does not guarantee tickets are on sale. Confirm operating status, fares and the booking channel with TTDC.'
        }
      },
      {
        id: 'weather',
        heading: {
          ta: 'வானிலை மற்றும் கொள்ளளவு நிறுத்தங்கள்',
          en: 'Weather and capacity stops'
        },
        body: {
          ta: 'தினசரி வருகை வரம்புகள் மற்றும் வானிலை ரத்துகள் காரணமாக ஒரு குறிப்பிட்ட நாளில் படகு இல்லாமல் போகலாம். TTDC கிடைப்பு, உயிர்காப்பு அங்கி மற்றும் ரத்து விதிகளைச் சரிபார்க்கவும்.',
          en: 'Daily visitor caps and weather cancellations mean a sailing may not run on a given day. Check TTDC availability, life jackets and refund terms.'
        }
      }
    ],
    faqs: [
      {
        q: {
          ta: 'தற்போது படகு கிடைக்கிறதா?',
          en: 'Is boating available right now?'
        },
        a: {
          ta: 'இந்த வழிகாட்டி ஒரு குறிப்பிட்ட நாளில் படகு கிடைப்பதை உறுதி செய்யாது. TTDC-யிடம் இருக்கைகள், படகு வகை, பாதுகாப்பு உபகரணங்கள் மற்றும் வானிலை ரத்து/திருப்பித் தரும் விதிகளைச் சரிபார்க்கவும்.',
          en: 'This guide does not confirm a sailing for a particular day. Check TTDC for seats, boat type, safety equipment and weather cancellation/refund rules.'
        }
      },
      {
        q: {
          ta: 'வேகப்படகுகள் இன்னும் உள்ளனவா?',
          en: 'Are speed boats still available?'
        },
        a: {
          ta: 'இல்லை. 2026 அக்டோபர் 30 நீதிமன்ற உத்தரவு வேகப்படகுகள், பெட்ரோல்/டீசல் மோட்டார் படகுகள் மற்றும் ஜெட் ஸ்கிக்களைத் தடைசெய்தது.',
          en: 'No. The 30 October 2026 court order banned speed boats, petrol/diesel motorboats and jet skis.'
        }
      },
      {
        q: {
          ta: 'எந்தப் படகுகள் அனுமதிக்கப்படுகின்றன?',
          en: 'Which boats are allowed?'
        },
        a: {
          ta: 'படகு வலிக்கும், மிதவைப் படகு மற்றும் குறைந்த திறன் மின்சாரப் படகுகள் நிபந்தனைகளின் கீழ் அனுமதிக்கப்படலாம். இயக்க நிலையை TTDC-யிடம் உறுதி செய்யவும்.',
          en: 'Rowing boats, pedal boats and low-power electric boats may be allowed under conditions. Confirm the operating status with TTDC.'
        }
      },
      {
        q: {
          ta: 'படகு ரத்தானால் என்ன செய்வது?',
          en: 'What if boating is cancelled?'
        },
        a: {
          ta: 'வானிலை அல்லது கொள்ளளவு காரணமாக ரத்து ஏற்படலாம். முன்பதிவு செய்தால் TTDC ரத்து/திருப்பித் தரும் விதிகளை முன்கூட்டியே படிக்கவும்.',
          en: 'Cancellation can happen for weather or capacity reasons. If you prebook, read TTDC’s cancellation and refund terms in advance.'
        }
      }
    ],
    related: ['boating-rules', 'timings', 'ticket-price', 'ooty-to-pykara']
  },

  {
    slug: 'boating-rules',
    group: 'core',
    title: {
      ta: 'பைக்காரா ஏரி படகு விதிகள் 2026 – நீதிமன்ற உத்தரவு சுருக்கம்',
      en: 'Pykara Lake Boating Rules 2026 – Court Order Summary'
    },
    description: {
      ta: '2026 அக்டோபர் 30 நீதிமன்ற உத்தரவு: வேகப்படகுகள் தடை, 10:00–16:00 பார்வையாளர் நேரம், தினசரி வருகை வரம்பு. விவரங்களை இங்கே பார்க்கவும்.',
      en: 'The 30 October 2026 court order: banned speed boats, a 10:00–16:00 visitor window and daily visitor caps. See the summary here.'
    },
    h1: {
      ta: 'பைக்காரா ஏரி படகு விதிகள்',
      en: 'Pykara Lake boating rules'
    },
    lead: {
      ta: '2026 அக்டோபர் 30 அன்று சென்னை உயர் நீதிமன்ற உத்தரவு பைக்காரா ஏரியின் படகு விதிகளை நிலையானவையாக்கியது. பயணத்திற்கு முன் உள்ளடக்கத்தைப் புரிந்துகொள்ளவும்.',
      en: 'On 30 October 2026 the Madras High Court made Pykara Lake’s boating rules standing. Understand the contents before you travel.'
    },
    updated: '6 November 2026',
    image: '/images/pykara-lake.jpg',
    imageAlt: {
      ta: 'பைக்காரா ஏரி அமைதியான நீர்',
      en: 'The still water of Pykara Lake'
    },
    sections: [
      {
        id: 'banned',
        heading: {
          ta: 'தடைசெய்யப்பட்ட படகுகள்',
          en: 'Banned craft'
        },
        body: {
          ta: 'பெட்ரோல்/டீசல் மோட்டார் படகுகள், வேகப்படகுகள் மற்றும் ஜெட் ஸ்கிக்கள் தடைசெய்யப்பட்டன. இந்த விதி நீர்வீழ்ச்சியோ நடைபாதையோ அல்ல — ஏரிப் படகு இயக்கத்திற்கானது.',
          en: 'Petrol/diesel motorboats, speed boats and jet skis are banned. This rule is for lake boating operations, not the waterfall or walking areas.'
        }
      },
      {
        id: 'allowed',
        heading: {
          ta: 'நிபந்தனைகளின் கீழ் அனுமதிக்கப்படுவன',
          en: 'Allowed under conditions'
        },
        body: {
          ta: 'படகு வலிக்கும், மிதவைப் படகு மற்றும் குறைந்த திறன் மின்சாரப் படகுகள் அதிகாரிகள் நிர்ணயித்த நிபந்தனைகளின் கீழ் அனுமதிக்கப்படலாம்.',
          en: 'Rowing boats, pedal boats and low-power electric boats may be allowed under conditions set by the authorities.'
        }
      },
      {
        id: 'window',
        heading: {
          ta: 'பார்வையாளர் நேரம் மற்றும் வரம்புகள்',
          en: 'Visitor window & caps'
        },
        body: {
          ta: 'பார்வையாளர் நேரம் 10:00–16:00; தினசரி வருகை வரம்புகள், மேலாண்மை முன்பதிவு மற்றும் கட்டுப்படுத்தப்பட்ட படகு இயக்கம் பொருந்தும்.',
          en: 'The visitor window is 10:00–16:00, with daily visitor caps, managed booking and controlled boat operations.'
        }
      },
      {
        id: 'next',
        heading: {
          ta: 'அடுத்த புதுப்பிப்பு',
          en: 'Next update'
        },
        body: {
          ta: 'அடுத்த நீதிமன்ற முன்னேற்ற அறிக்கை 2026 டிசம்பர் 4 அன்று திட்டமிடப்பட்டுள்ளது. அது விதிகளை மாற்றலாம்; பயணத்திற்கு முன் சரிபார்க்கவும்.',
          en: 'The next court progress report is scheduled for 4 December 2026. It may change the rules, so recheck before travel.'
        }
      }
    ],
    faqs: [
      {
        q: {
          ta: '2026 பைக்காரா ஏரி நீதிமன்ற உத்தரவில் என்ன மாற்றம்?',
          en: 'What changed under the 2026 Pykara Lake court ruling?'
        },
        a: {
          ta: 'மதராஸ் உயர் நீதிமன்ற உத்தரவு சில கட்டுப்பாடுகளை நிலையானவையாக்கியது: வேகப்படகுகள் தடை, 10:00–16:00 பார்வையாளர் நேரம், தினசரி வருகை வரம்பு. அனுமதிக்கப்பட்ட படகுகளுக்கான டிக்கெட் இன்னும் TTDC-யிடம் உறுதி செய்யப்பட வேண்டும்.',
          en: 'The Madras High Court order made several restrictions standing: banned speed boats, a 10:00–16:00 visitor window and daily visitor caps. Ticketing for allowed boats is still to be confirmed with TTDC.'
        }
      },
      {
        q: {
          ta: 'நான் சொந்தப் படகைக் கொண்டு வரலாமா?',
          en: 'Can I bring my own boat?'
        },
        a: {
          ta: 'இந்த வழிகாட்டி சொந்தப் படகு அனுமதி பற்றி உறுதி செய்யாது. விதிகளையும் அனுமதியையும் TTDC அல்லது நீலகிரி மாவட்ட நிர்வாகத்திடம் உறுதி செய்யவும்.',
          en: 'This guide does not confirm private-boat permission. Check the rules and permits with TTDC or the Nilgiris district administration.'
        }
      },
      {
        q: {
          ta: 'குழந்தைகளுக்கான பாதுகாப்பு விதிகள் என்ன?',
          en: 'What are the child-safety rules?'
        },
        a: {
          ta: 'சரியான அளவு உயிர்காப்பு அங்கி கட்டாயம் என்பதை TTDC-யிடம் உறுதி செய்யவும். நீரில் இறங்கவோ தடுப்புகளைத் தாண்டவோ வேண்டாம்.',
          en: 'Confirm with TTDC that a correctly fitting life jacket is required. Do not enter the water or cross barriers.'
        }
      },
      {
        q: {
          ta: 'நீர்வீழ்ச்சிக்கும் இந்த விதிகள் பொருந்துமா?',
          en: 'Do these rules apply to the waterfall?'
        },
        a: {
          ta: 'இல்லை. மேலே உள்ள விதிகள் ஏரிப் படகு இயக்கத்திற்கானவை. நீர்வீழ்ச்சி தனி அணுகுமிடம், நேரம் மற்றும் பாதுகாப்பு அறிவுறுத்தல்களைக் கொண்டது.',
          en: 'No. The rules above are for lake boating. The waterfall has a separate approach, timing and safety instructions.'
        }
      }
    ],
    related: ['boating-status', 'timings', 'ticket-price', 'pykara-falls']
  },

  {
    slug: 'how-to-reach',
    group: 'transport',
    title: {
      ta: 'ஊட்டியிலிருந்து பைக்காரா ஏரி படகு இல்லத்தை எப்படி அடைவது',
      en: 'How to Reach Pykara Lake Boat House from Ooty'
    },
    description: {
      ta: 'ஊட்டியிலிருந்து பைக்காரா ஏரி படகு இல்லத்திற்கான வழி, தூரம் மற்றும் போக்குவரத்து. மாவட்டச் சுற்றுலாப் பக்கம் ஏரியை ஊட்டியிலிருந்து சுமார் 21 கி.மீ. குறிப்பிடுகிறது.',
      en: 'Route, distance and transport from Ooty to Pykara Lake Boat House. The district tourism page describes the lake as about 21 km from Ooty.'
    },
    h1: {
      ta: 'பைக்காரா ஏரி படகு இல்லத்தை எப்படி அடைவது',
      en: 'How to reach Pykara Lake Boat House'
    },
    lead: {
      ta: 'நீலகிரி மாவட்டச் சுற்றுலாப் பக்கம் ஏரியை ஊட்டியிலிருந்து சுமார் 21 கி.மீ., ஊட்டி–மைசூர் சாலையில் குறிப்பிடுகிறது. உங்கள் தொடக்க இடத்திலிருந்து பாதை, சரியான படகு இல்ல நுழைவு மற்றும் திரும்பும் போக்குவரத்தை உறுதி செய்யவும்.',
      en: 'The Nilgiris district tourism page describes the lake as about 21 km from Ooty on the Ooty–Mysore road. Check your route, the correct boat-house entrance and return transport from your starting point.'
    },
    updated: '6 November 2026',
    image: '/images/pykara-lake.jpg',
    imageAlt: {
      ta: 'ஊட்டி–மைசூர் சாலை வழியான நீலகிரி நிலப்பரப்பு',
      en: 'Nilgiris landscape along the Ooty–Mysore road'
    },
    sections: [
      {
        id: 'road',
        heading: {
          ta: 'ஊட்டியிலிருந்து சாலை வழி',
          en: 'By road from Ooty'
        },
        body: {
          ta: 'ஏரி ஊட்டி–மைசூர் சாலையில் உள்ளது. டாக்சி அல்லது சொந்தக் கார் மிகவும் வசதியானது; உள்ளூர் பேருந்து நேரங்கள் மாறலாம். சுமார் 21 கி.மீ. என்பது தோராயமான தூரம், பயண நேர உறுதி அல்ல.',
          en: 'The lake is on the Ooty–Mysore road. A taxi or your own car is most convenient; local bus timings can vary. The about 21 km figure is an approximate distance, not a travel-time guarantee.'
        }
      },
      {
        id: 'gate',
        heading: {
          ta: 'படகு இல்லக் கதவை உறுதி செய்யவும்',
          en: 'Confirm the boat-house gate'
        },
        body: {
          ta: 'வழங்கப்பட்ட Maps பட்டியல் பரந்த முகவரியைக் குறிக்கிறது; அரசு சுற்றுலா அடைவுக் குறியீடு வேறுபடலாம். இந்த வழிகாட்டி அதை உறுதியான நுழைவாயில் ஆக மாற்றாது. TTDC-யிடம் படகு இல்ல அணுகல் மற்றும் இறக்கும் இடத்தைக் கேட்கவும்.',
          en: 'The supplied Maps listing gives a broad address; a government tourism directory may use a different code. This guide does not turn either into a guaranteed entrance. Ask TTDC about the boat-house approach and drop-off.'
        }
      },
      {
        id: 'return',
        heading: {
          ta: 'திரும்பும் போக்குவரத்தைத் திட்டமிடுங்கள்',
          en: 'Plan your return transport'
        },
        body: {
          ta: 'மேலும் ஒரு இடம் சேர்ப்பதற்கு முன் நேரம், அனுமதி மற்றும் திரும்பும் போக்குவரத்தை உறுதி செய்யவும். மாலை நேரம் அல்லது வார இறுதியில் வாகனங்கள் அதிகம் இருக்கலாம்.',
          en: 'Before adding another stop, confirm its access, permission and your return transport. Evenings or weekends can mean heavier traffic.'
        }
      }
    ],
    faqs: [
      {
        q: {
          ta: 'பைக்காரா ஏரி ஊட்டியிலிருந்து எவ்வளவு தூரம்?',
          en: 'How far is Pykara Lake from Ooty?'
        },
        a: {
          ta: 'நீலகிரி மாவட்டச் சுற்றுலாப் பக்கம் ஏரியை ஊட்டியிலிருந்து சுமார் 21 கி.மீ. என்று குறிக்கிறது. அது தோராயமான தூரம்; உங்கள் தொடக்க இடத்திலிருந்து பாதையை உறுதி செய்யவும்.',
          en: 'The Nilgiris district tourism page describes the lake as about 21 km from Ooty. That is an approximate distance; confirm the route from your starting point.'
        }
      },
      {
        q: {
          ta: 'பேருந்தில் செல்ல முடியுமா?',
          en: 'Can I go by bus?'
        },
        a: {
          ta: 'முதன்மைச் சாலையில் பேருந்து கிடைக்கலாம், ஆனால் நேரங்கள் மாறலாம். படகு இல்ல நுழைவுக்கு நேரடிப் பேருந்து நிறுத்தம் அல்லது நடைப் பயண இணைப்பு உறுதியானது அல்ல. TTDC அல்லது உள்ளூர் சேவையை உறுதி செய்யவும்.',
          en: 'A bus may run along the main road, but timings vary. A direct bus stop at the boat-house entrance or final walking link is not guaranteed. Confirm with TTDC or the local service.'
        }
      },
      {
        q: {
          ta: 'டாக்சி எவ்வளவு நேரம் எடுக்கும்?',
          en: 'How long does a taxi take?'
        },
        a: {
          ta: 'சுமார் 21 கி.மீ. மலைச் சாலை, எனவே பயண நேரம் போக்குவரத்து மற்றும் வானிலையைப் பொறுத்தது. இது உத்தரவாதமான நேரம் அல்ல.',
          en: 'At about 21 km on a hill road, travel time depends on traffic and weather. It is not a guaranteed duration.'
        }
      },
      {
        q: {
          ta: 'ஊட்டி படகு இல்லமும் பைக்காரா படகு இல்லமும் ஒன்றா?',
          en: 'Is Ooty Boat House the same as Pykara Boat House?'
        },
        a: {
          ta: 'இல்லை. அவை வெவ்வேறு முன்பதிவு இடங்கள். Pykara, உங்கள் தேதி மற்றும் படகு வகையை TTDC தளத்தில் தனித்தனியே தேர்ந்தெடுக்கவும்.',
          en: 'No. They are different booking locations. Select Pykara, your date and boat type separately on the TTDC portal.'
        }
      }
    ],
    related: ['ooty-to-pykara', 'parking', 'boating-status', 'pykara-falls']
  },

  {
    slug: 'ooty-to-pykara',
    group: 'transport',
    title: {
      ta: 'ஊட்டி முதல் பைக்காரா ஏரி வரை – தூரம், வழி மற்றும் பயண நேரம்',
      en: 'Ooty to Pykara Lake – Distance, Route & Travel Time'
    },
    description: {
      ta: 'ஊட்டியிலிருந்து பைக்காரா ஏரி வரையிலான தூரம், வழி மற்றும் பயண நேரம். மாவட்டப் பக்கம் சுமார் 21 கி.மீ. என்று குறிக்கிறது; பைக்காரா நீர்வீழ்ச்சி வழியில் உள்ளது.',
      en: 'Distance, route and travel time from Ooty to Pykara Lake. The district page says about 21 km; Pykara Falls is on the way.'
    },
    h1: {
      ta: 'ஊட்டி முதல் பைக்காரா ஏரி வரை',
      en: 'Ooty to Pykara Lake'
    },
    lead: {
      ta: 'நீலகிரி மாவட்டச் சுற்றுலாப் பக்கம் ஏரியை ஊட்டியிலிருந்து சுமார் 21 கி.மீ. என்று குறிக்கிறது. இது தோராயமான இலக்குத் தூரம்; நேரடிப் பயண நேரம் அல்ல.',
      en: 'The Nilgiris district tourism page describes the lake as about 21 km from Ooty. That is an approximate destination distance, not a gate-to-gate travel-time guarantee.'
    },
    updated: '6 November 2026',
    image: '/images/pykara-lake.jpg',
    imageAlt: {
      ta: 'ஊட்டி முதல் பைக்காரா வரையிலான மலைச் சாலை',
      en: 'Hill road from Ooty toward Pykara'
    },
    sections: [
      {
        id: 'distance',
        heading: {
          ta: 'தூரம்',
          en: 'Distance'
        },
        body: {
          ta: 'நீலகிரி மாவட்டச் சுற்றுலாப் பக்கம் ஏரியை ஊட்டியிலிருந்து சுமார் 21 கி.மீ. என்று குறிக்கிறது. அது தோராயமான தூரம்; உங்கள் தொடக்க இடத்திலிருந்து இறக்கும் இடம் வரையிலான தூரம் மாறலாம்.',
          en: 'The Nilgiris district tourism page describes the lake as about 21 km from Ooty. It is an approximate distance; the route from your start to the drop-off may differ.'
        }
      },
      {
        id: 'route',
        heading: {
          ta: 'வழி',
          en: 'Route'
        },
        body: {
          ta: 'ஊட்டி–மைசூர் சாலை வழியாக (Gudalur திசையில்) ஏரி அமைந்துள்ளது. பைக்காரா நீர்வீழ்ச்சி இந்த வழியிலேயே உள்ளது, எனவே இரண்டையும் ஒரே நாள் பயணமாகச் சேர்க்கலாம் — ஆனால் இரண்டின் நேரம், நுழைவு மற்றும் போக்குவரத்தைத் தனித்தனியே உறுதி செய்யவும்.',
          en: 'The lake is on the Ooty–Mysore road (toward Gudalur). Pykara Falls is along this same route, so you can combine both in one day — but verify the timing, entry and transport of each separately.'
        }
      },
      {
        id: 'time',
        heading: {
          ta: 'பயண நேரம்',
          en: 'Travel time'
        },
        body: {
          ta: 'மலைச் சாலைகளில் பயண நேரம் போக்குவரத்து, வானிலை மற்றும் நிறுத்தங்களைப் பொறுத்தது. சுமார் 21 கி.மீ. என்பது வேக எல்லை அல்ல.',
          en: 'On hill roads, travel time depends on traffic, weather and stops. The about 21 km is not a speed-limit promise.'
        }
      }
    ],
    faqs: [
      {
        q: {
          ta: 'ஊட்டியிலிருந்து பைக்காரா எவ்வளவு தூரம்?',
          en: 'How far is Pykara from Ooty?'
        },
        a: {
          ta: 'சுமார் 21 கி.மீ. என்று மாவட்டச் சுற்றுலாப் பக்கம் குறிக்கிறது. இது தோராயத் தூரம்.',
          en: 'The district tourism page says about 21 km. It is an approximate distance.'
        }
      },
      {
        q: {
          ta: 'வழியில் பைக்காரா நீர்வீழ்ச்சி உள்ளதா?',
          en: 'Is Pykara Falls on the way?'
        },
        a: {
          ta: 'ஆம், பைக்காரா நீர்வீழ்ச்சி ஊட்டி–மைசூர் சாலையில் ஏரிக்கு முன் வருகிறது. ஆனால் அது தனி அணுகுமிடம் மற்றும் திறந்த நிலையைக் கொண்டது.',
          en: 'Yes, Pykara Falls comes before the lake on the Ooty–Mysore road. But it has a separate approach and opening status.'
        }
      },
      {
        q: {
          ta: 'ஒரு நாளில் இரண்டையும் பார்க்க முடியுமா?',
          en: 'Can I see both in one day?'
        },
        a: {
          ta: 'பயண நாளில் நேரம், அனுமதி மற்றும் போக்குவரத்தை உறுதி செய்தால் ஏரியையும் நீர்வீழ்ச்சியையும் ஒரே நாளில் சேர்க்கலாம். இந்த வழிகாட்டி அவ்வாறு முடியும் என உத்தரவாதம் அளிக்காது.',
          en: 'If you confirm timing, permission and transport for the day, you can combine the lake and the falls. This guide does not promise it fits.'
        }
      },
      {
        q: {
          ta: 'சொந்தக் காரில் செல்லலாமா?',
          en: 'Can I drive myself?'
        },
        a: {
          ta: 'சொந்தக் கார் அல்லது வாடகைக் கார் வசதியானது. மலைச் சாலை வளைவுகள் மற்றும் நிறுத்தங்களைக் கவனியுங்கள்; திரும்பும் பயணத்தையும் முன்கூட்டியே திட்டமிடுங்கள்.',
          en: 'Your own or a hired car is convenient. Watch the hill-road curves and stops, and plan the return journey in advance.'
        }
      }
    ],
    related: ['how-to-reach', 'parking', 'pykara-falls', 'boating-status']
  },

  {
    slug: 'parking',
    group: 'transport',
    title: {
      ta: 'பைக்காரா ஏரி படகு இல்லம் பார்க்கிங் – எங்கே வாகனத்தை நிறுத்துவது',
      en: 'Pykara Lake Boat House Parking – Where to Park'
    },
    description: {
      ta: 'பைக்காரா ஏரி படகு இல்லம் அருகே வாகன நிறுத்தம் உள்ளது; விடுமுறை நாட்களில் இடம் விரைவாக நிரம்பும். விவரங்களை TTDC-யிடம் உறுதி செய்யவும்.',
      en: 'Vehicle parking is available near Pykara Lake Boat House; it fills quickly on holidays. Confirm details with TTDC.'
    },
    h1: {
      ta: 'பைக்காரா ஏரி படகு இல்லம் பார்க்கிங்',
      en: 'Parking at Pykara Lake Boat House'
    },
    lead: {
      ta: 'படகு இல்லம் அருகே வாகன நிறுத்தம் இருக்கலாம், ஆனால் வெளியிடப்பட்ட கொள்ளளவு எதுவும் இல்லை. விடுமுறை மற்றும் வார இறுதி நாட்களில் இடம் விரைவாக நிரம்பும்; முன்கூட்டியே செல்லவும்.',
      en: 'Parking may exist near the boat house, but no surveyed capacity is published. On holidays and weekends it fills quickly; arrive early.'
    },
    updated: '6 November 2026',
    image: '/images/pykara-lake.jpg',
    imageAlt: {
      ta: 'பைக்காரா அருகே வாகன நிறுத்தப் பகுதி',
      en: 'Vehicle parking area near Pykara'
    },
    sections: [
      {
        id: 'near',
        heading: {
          ta: 'படகு இல்லம் அருகே நிறுத்தம்',
          en: 'Parking near the boat house'
        },
        body: {
          ta: 'படகு இல்லம் அருகே வாகன நிறுத்தம் இருக்கலாம். இது அதிகாரப்பூர்வமாக வெளியிடப்பட்ட கொள்ளளவு அல்ல; இடம் கிடைப்பது நாளில் மாறலாம்.',
          en: 'Vehicle parking may be available near the boat house. It is not an officially published capacity; space can vary by day.'
        }
      },
      {
        id: 'peak',
        heading: {
          ta: 'உச்ச நாட்களில் திட்டமிடுங்கள்',
          en: 'Plan for peak days'
        },
        body: {
          ta: 'விடுமுறை, வார இறுதி மற்றும் சீசன் நாட்களில் நிறுத்தம் விரைவாக நிரம்பும். காலைச் சீக்கிரமே சென்றால் இடம் கிடைப்பது எளிதாக இருக்கும்.',
          en: 'On holidays, weekends and season days parking fills fast. Arriving in the early morning makes finding a space easier.'
        }
      },
      {
        id: 'confirm',
        heading: {
          ta: 'TTDC-யிடம் உறுதி செய்யவும்',
          en: 'Confirm with TTDC'
        },
        body: {
          ta: 'நிறுத்தக் கட்டணம், நேரம் மற்றும் அனுமதிக்கப்பட்ட வாகன வகைகளை TTDC அல்லது இடம் நிர்வாகத்திடம் உறுதி செய்யவும். இந்த வழிகாட்டி அதை உறுதி செய்யாது.',
          en: 'Ask TTDC or the on-site management about parking charges, hours and allowed vehicle types. This guide does not confirm them.'
        }
      }
    ],
    faqs: [
      {
        q: {
          ta: 'படகு இல்லம் அருகே பார்க்கிங் உள்ளதா?',
          en: 'Is there parking near the boat house?'
        },
        a: {
          ta: 'ஆம், படகு இல்லம் அருகே வாகன நிறுத்தம் இருக்கலாம். வெளியிடப்பட்ட கொள்ளளவு இல்லை; இடம் கிடைப்பதை நாளில் உறுதி செய்யவும்.',
          en: 'Yes, parking may be available near the boat house. No capacity is published; confirm space availability for your date.'
        }
      },
      {
        q: {
          ta: 'பார்க்கிங் கட்டணம் உள்ளதா?',
          en: 'Is there a parking charge?'
        },
        a: {
          ta: 'நிறுத்தக் கட்டணம் மற்றும் நேரத்தை TTDC அல்லது இடம் நிர்வாகத்திடம் உறுதி செய்யவும். இந்த வழிகாட்டி அதை உறுதி செய்யாது.',
          en: 'Confirm the parking charge and hours with TTDC or on-site management. This guide does not confirm them.'
        }
      },
      {
        q: {
          ta: 'விடுமுறை நாட்களில் இடம் கிடைக்குமா?',
          en: 'Is space available on holidays?'
        },
        a: {
          ta: 'விடுமுறை மற்றும் வார இறுதிகளில் நிறுத்தம் விரைவாக நிரம்பும். காலைச் சீக்கிரம் செல்வது நல்லது.',
          en: 'On holidays and weekends parking fills quickly. Going early in the morning is advisable.'
        }
      },
      {
        q: {
          ta: 'பெரிய வாகனம் அல்லது வேனை நிறுத்த முடியுமா?',
          en: 'Can I park a large vehicle or van?'
        },
        a: {
          ta: 'பெரிய வாகனங்களுக்கான இடம் மற்றும் அனுமதியை இடம் நிர்வாகத்திடம் உறுதி செய்யவும். முன்கூட்டியே தொடர்பு கொள்வது நல்லது.',
          en: 'Confirm space and permission for larger vehicles with on-site management; contacting ahead is best.'
        }
      }
    ],
    related: ['how-to-reach', 'ooty-to-pykara', 'ticket-price', 'boating-status']
  },

  {
    slug: 'pykara-falls',
    group: 'nearby',
    title: {
      ta: 'பைக்காரா நீர்வீழ்ச்சி – தனி வருகை, நேரம் மற்றும் எப்படிச் செல்வது',
      en: 'Pykara Falls – Separate Visit, Timings & How to Get There'
    },
    description: {
      ta: 'பைக்காரா நீர்வீழ்ச்சி ஏரி படகு இல்லத்திலிருந்து தனித்தனி இடம். வழி, நேரம் மற்றும் பாதுகாப்பை இங்கே பார்க்கவும்.',
      en: 'Pykara Falls is a separate place from the lake boat house. See the route, timing and safety here.'
    },
    h1: {
      ta: 'பைக்காரா நீர்வீழ்ச்சி',
      en: 'Pykara Falls'
    },
    lead: {
      ta: 'பைக்காரா நீர்வீழ்ச்சி ஏரி படகு இல்லத்திலிருந்து தனித்தனி வருகைப் பகுதி. இரண்டின் நுழைவு, நேரம், போக்குவரத்து மற்றும் திறந்த நிலையைத் தனித்தனியே உறுதி செய்யவும். தடைகளைத் தாண்டவோ நீரில் இறங்கவோ வேண்டாம்.',
      en: 'Pykara Falls is a separate visiting area from the lake boat house. Confirm each destination’s entry, timing, transport and opening status independently. Do not cross barriers or enter the water.'
    },
    updated: '6 November 2026',
    image: '/images/pykara-falls.jpg',
    imageAlt: {
      ta: 'பைக்காரா நீர்வீழ்ச்சி முன்பக்கக் காட்சி',
      en: 'Front view of Pykara Falls'
    },
    sections: [
      {
        id: 'separate',
        heading: {
          ta: 'ஏரியும் நீர்வீழ்ச்சியும் ஒரே இடமல்ல',
          en: 'Not the same as the lake'
        },
        body: {
          ta: 'ஏரி படகு இல்லமும் நீர்வீழ்ச்சி பார்வைப் பகுதியும் தனித்தனி இடங்கள். ஏரிக்குச் செல்வது நீர்வீழ்ச்சிக்குச் செல்வதை உறுதி செய்யாது.',
          en: 'The lake boat house and the waterfall viewing area are separate places. Going to the lake does not guarantee access to the falls.'
        }
      },
      {
        id: 'rains',
        heading: {
          ta: 'மழைக்குப் பிறகு உயிர்ப்பெறும்',
          en: 'Comes alive after the rains'
        },
        body: {
          ta: 'பைக்காரா ஆற்றின் தொடர்ச்சியான பாறை சரிவுகள் நீர்வீழ்ச்சி காட்சியை உருவாக்குகின்றன. மழைக்காலத்தில் நீர் வலிமையாக இருக்கும்; அதே நேரத்தில் நடைபாதை ஈரமாகவும் வழுக்கலாகவும் இருக்கலாம்.',
          en: 'Continuous rock ledges of the Pykara river form the falls. Water is strongest in the monsoon, but the path can be wet and slippery then.'
        }
      },
      {
        id: 'safety',
        heading: {
          ta: 'பாதுகாப்பு',
          en: 'Safety'
        },
        body: {
          ta: 'தடுப்புக் கம்பிகளைத் தாண்ட வேண்டாம். நீரின் வேகம் அமைதியாகத் தோன்றினாலும் பாறை மேற்பரப்பு மற்றும் அடிப்பகுதி ஆபத்தானதாக இருக்கலாம்.',
          en: 'Do not cross the railings. Even where the water looks calm, the rock surface and base can be dangerous.'
        }
      }
    ],
    faqs: [
      {
        q: {
          ta: 'பைக்காரா நீர்வீழ்ச்சி எங்கே உள்ளது?',
          en: 'Where is Pykara Falls?'
        },
        a: {
          ta: 'நீர்வீழ்ச்சி ஊட்டி–மைசூர் சாலையில், ஏரிக்கு முன் வருகிறது. ஆனால் அது தனி அணுகுமிடம் மற்றும் திறந்த நிலையைக் கொண்டது.',
          en: 'The falls are on the Ooty–Mysore road, before the lake. But it has a separate approach and opening status.'
        }
      },
      {
        q: {
          ta: 'நீர்வீழ்ச்சிக்கும் படகு இல்லத்திற்கும் ஒரே டிக்கெட் பொருந்துமா?',
          en: 'Is one ticket valid for both the falls and the boat house?'
        },
        a: {
          ta: 'இல்லை. அவை தனித்தனி வருகைப் பகுதிகள். ஒவ்வொன்றின் நுழைவு, நேரம் மற்றும் கட்டணத்தைத் தனித்தனியே உறுதி செய்யவும்.',
          en: 'No. They are separate visiting areas. Confirm each one’s entry, timing and charge independently.'
        }
      },
      {
        q: {
          ta: 'நீர்வீழ்ச்சிக்குச் சிறந்த காலம் எது?',
          en: 'When is the best time for the falls?'
        },
        a: {
          ta: 'மழைக்காலத்திற்குப் பிறகு நீர் வலிமையாக இருக்கும், ஆனால் நடைபாதை வழுக்கலாக இருக்கலாம். பாதுகாப்பான காலணிகளை எடுத்துச் செல்லவும்.',
          en: 'After the monsoon the water is strong, but the path can be slippery. Wear safe footwear.'
        }
      },
      {
        q: {
          ta: 'நீர்வீழ்ச்சிக்குச் செல்ல எவ்வளவு நேரம் ஆகும்?',
          en: 'How long to visit the falls?'
        },
        a: {
          ta: 'நீர்வீழ்ச்சி பார்வைக்குச் சில நிமிடங்களே போதும், ஆனால் நிறுத்தம், நடைப் பயணம் மற்றும் கூட்ட நெரிசலைச் சேர்த்து உறுதி செய்யவும். இந்த வழிகாட்டி நேரத்தை உத்தரவாதம் அளிக்காது.',
          en: 'Viewing the falls takes only a few minutes, but add parking, walking and crowding. This guide does not guarantee timing.'
        }
      }
    ],
    related: ['how-to-reach', 'ooty-to-pykara', 'boating-rules', 'boating-status']
  },

  {
    slug: 'pine-forest',
    group: 'nearby',
    title: {
      ta: 'பைக்காரா அருகே உள்ள பைன் காடு – 9-ம் மைல் மரங்கள் மற்றும் புகைப்படங்கள்',
      en: 'Pine Forest Near Pykara & Ooty – 9th Mile Pine Trees & Photos'
    },
    description: {
      ta: 'ஊட்டிக்கும் பைக்காராவுக்கும் இடையிலான பைன் காடு (9-ம் மைல்) உயரமான பைன் மரங்களின் அமைதியான வரிசை. அது எங்கே, எப்படிச் செல்வது மற்றும் புகைப்படக் குறிப்புகளைப் பார்க்கவும்.',
      en: 'The Pine Forest (9th Mile) between Ooty and Pykara is a quiet row of tall pine trees. See where it is, how to reach it and photo tips.'
    },
    h1: {
      ta: 'பைக்காரா அருகே உள்ள பைன் காடு (9-ம் மைல்)',
      en: 'Pine Forest near Pykara (9th Mile)'
    },
    lead: {
      ta: '9-ம் மைல் பைன் காடு என்றும் அழைக்கப்படும் இந்தப் பைன் காடு, ஊட்டி–பைக்காரா சாலையில் அமைந்துள்ளது; உயரமான மரங்களின் கீழ் புகைப்படம் எடுக்க இலவசமான விரைவான நிறுத்தமாகும். செல்வதற்கு முன் அணுகல் மற்றும் நுழைவிடங்களை உள்ளூர் தகவலில் உறுதி செய்யவும்.',
      en: 'The Pine Forest, often called the 9th Mile Pine Forest, sits on the Ooty–Pykara road and is a quick, free stop for photos under tall trees. Confirm access and any entry points with local information before you go.'
    },
    updated: '6 November 2026',
    image: '/images/pykara-lake.jpg',
    imageAlt: {
      ta: 'ஊட்டி–பைக்காரா சாலையில் உயரமான பைன் மரங்கள்',
      en: 'Tall pine trees along the Ooty–Pykara road'
    },
    sections: [
      {
        id: 'location',
        heading: {
          ta: 'எங்கே உள்ளது',
          en: 'Where it is'
        },
        body: {
          ta: 'இந்தப் பைன் காடு ஊட்டிக்கும் பைக்காராவுக்கும் இடையிலான ஊட்டி–பைக்காரா சாலையில், 9-ம் மைல் குறியீட்டுக்கு அருகிலும் பைக்காரா நீர்வீழ்ச்சி வழியிலும் அமைந்துள்ளது. இது ஒரு சாலையோர இயற்கை நிறுத்தம்.',
          en: 'The pine strip is on the Ooty–Pykara road, near the 9th Mile marker and on the way to Pykara Falls. It is a roadside natural stop.'
        }
      },
      {
        id: 'photos',
        heading: {
          ta: 'புகைப்படங்கள் மற்றும் எதிர்பார்ப்புகள்',
          en: 'Photos & what to expect'
        },
        body: {
          ta: 'நீளமான, நேரான பைன் மரங்கள் மென்மையான ஒளியில் நன்றாகப் புகைப்படம் எடுக்க உதவுகின்றன. அங்கு கூடுதல் வசதிகள் இல்லை; சாலையோரப் பகுதியில் இருங்கள்.',
          en: 'Tall, straight pines make soft, even light good for photos. There are no facilities on site; stay on the roadside area.'
        }
      },
      {
        id: 'reach',
        heading: {
          ta: 'எப்படிச் செல்வது',
          en: 'How to reach'
        },
        body: {
          ta: 'ஊட்டியிலிருந்து வாடகைக் கார் அல்லது சொந்தக் காரில் ஊட்டி–பைக்காரா சாலை வழியாகச் செல்லவும். பைக்காரா நீர்வீழ்ச்சியுடன் ஒரே நாள் பயணமாக இதைச் சேர்க்கலாம் — ஆனால் அனைத்தின் நேரம், நுழைவு மற்றும் போக்குவரத்தைத் தனித்தனியே உறுதி செய்யவும்.',
          en: 'From Ooty, take a taxi or your own car along the Ooty–Pykara road. You can add it to the same day as Pykara Falls — but confirm each one’s timing, entry and transport separately.'
        }
      }
    ],
    faqs: [
      {
        q: { ta: 'நுழைவுக் கட்டணம் உள்ளதா?', en: 'Is there an entry fee?' },
        a: {
          ta: 'வழக்கமாக முறையான டிக்கெட் இல்லை; இது ஒரு சாலையோரக் காட்டுப் பட்டை. உள்ளூரில் உறுதி செய்யவும்.',
          en: 'Typically there is no formal ticket; it is a roadside forest strip — confirm locally.'
        }
      },
      {
        q: { ta: 'இது பைக்காரா ஏரிக்குச் செல்லும் வழியில் உள்ளதா?', en: 'Is it on the way to Pykara Lake?' },
        a: {
          ta: 'ஆம், ஊட்டிக்கும் பைக்காராவுக்கும் இடையில், பைக்காரா நீர்வீழ்ச்சிக்கு அருகில்.',
          en: 'Yes, it is between Ooty and Pykara, near Pykara Falls.'
        }
      },
      {
        q: { ta: 'புகைப்படத்திற்குச் சிறந்த நேரம் எது?', en: 'Best time for photos?' },
        a: {
          ta: 'காலை அல்லது பிற்பகல் மென்மையான ஒளி; மழைக்காலத்தில் பசுமை அதிகம்.',
          en: 'Morning or late-afternoon soft light; monsoon is very green.'
        }
      },
      {
        q: { ta: 'பாதுகாப்பானதா?', en: 'Is it safe?' },
        a: {
          ta: 'சாலையோரப் பகுதியில் இருங்கள்; ஆழமான காட்டுக்குள் நுழைய வேண்டாம்.',
          en: 'Stay on the roadside area; do not enter deep forest.'
        }
      }
    ],
    related: ['pykara-falls', 'ooty-to-pykara', 'how-to-reach', 'photography', 'parking']
  },

  {
    slug: 'wenlock-downs',
    group: 'nearby',
    title: {
      ta: 'ஊட்டி வென்லாக் டவுன்ஸ் – பசுமைப் புற்கள் மற்றும் நிறுத்துமிடம்',
      en: 'Wenlock Downs, Ooty – Rolling Grasslands & Where to Stop'
    },
    description: {
      ta: 'வென்லாக் டவுன்ஸ் (9-ம் மைல் அல்லது ஊட்டி புற்கள் எனவும் அழைக்கப்படும்) ஊட்டிக்கு அருகிலுள்ள திறந்த புற்கள் நிலங்கள். வழி, செய்யவேண்டியவை மற்றும் பைக்காரா நாளுடன் இது எவ்வாறு பொருந்தும் என்பதைப் பார்க்கவும்.',
      en: 'Wenlock Downs (often called the 9th Mile or Ooty downs) are open grasslands near Ooty. See the route, what to do and how it fits a Pykara day.'
    },
    h1: {
      ta: 'ஊட்டி வென்லாக் டவுன்ஸ்',
      en: 'Wenlock Downs, Ooty'
    },
    lead: {
      ta: 'வென்லாக் டவுன்ஸ் ஊட்டி–பைக்காரா சாலையில் உள்ள அகலமான, உருளும் புற்கள் நிலங்கள்; அமைதியான நடைகளுக்கும் புகைப்படங்களுக்கும் பிரபலமானவை. அணுகலும் பணம் செலுத்தும் புள்ளிகளும் மாறலாம், எனவே பார்வையிட முன் உள்ளூரில் உறுதி செய்யவும்.',
      en: 'Wenlock Downs are wide, rolling grasslands on the Ooty–Pykara road, popular for quiet walks and photos. Access and any paid viewpoints can change, so confirm locally before visiting.'
    },
    updated: '6 November 2026',
    image: '/images/pykara-lake.jpg',
    imageAlt: {
      ta: 'ஊட்டிக்கு அருகிலுள்ள வென்லாக் டவுன்ஸின் திறந்த புற்கள்',
      en: 'Open grasslands at Wenlock Downs near Ooty'
    },
    sections: [
      {
        id: 'what',
        heading: { ta: 'இது என்ன', en: 'What it is' },
        body: {
          ta: 'வென்லாக் டவுன்ஸ் ஊட்டியின் புற்கள் நிலங்களின் ஒரு பகுதி; அகலமான, அமைதியான பசுமை வெளிகள்.',
          en: 'Wenlock Downs are part of Ooty’s grassland belt — wide, quiet green open spaces.'
        }
      },
      {
        id: 'route',
        heading: { ta: 'வழி மற்றும் தூரம்', en: 'Route & distance' },
        body: {
          ta: 'இது ஊட்டி–பைக்காரா சாலையில் உள்ளது. தூரம் தோராயமானது; பைக்காராவுடன் ஒரே பயணமாக இணைக்கலாம்.',
          en: 'It is on the Ooty–Pykara road. The distance is approximate; you can combine it with Pykara.'
        }
      },
      {
        id: 'visit',
        heading: { ta: 'பார்வையிடும் குறிப்புகள்', en: 'Visiting tips' },
        body: {
          ta: 'பொருத்தமான ஆடைகள், வானிலையைக் கவனியுங்கள், குப்பைபோட வேண்டாம், பணம் செலுத்தும் புள்ளிகளை உள்ளூரில் உறுதி செய்யவும்.',
          en: 'Wear appropriate clothing, watch the weather, do not litter, and confirm any paid viewpoint locally.'
        }
      }
    ],
    faqs: [
      {
        q: { ta: 'வென்லாக் டவுன்ஸ் 9-ம் மைலுக்குச் சமமானதா?', en: 'Is Wenlock Downs the same as the 9th Mile?' },
        a: {
          ta: 'அடிக்கடி மாற்றாகப் பயன்படுத்தப்படுகிறது; இது ஊட்டி–பைக்காரா சாலையிலுள்ள புற்கள் நிலப் பகுதி.',
          en: 'Often used interchangeably; it is the grassland stretch on the Ooty–Pykara road.'
        }
      },
      {
        q: { ta: 'நுழைவுக் கட்டணம் உள்ளதா?', en: 'Is there an entry fee?' },
        a: {
          ta: 'சில காட்சிப் புள்ளிகள் கட்டணம் வசூலிக்கலாம்; உள்ளூரில் உறுதி செய்யவும்.',
          en: 'Some viewpoints may charge; confirm locally.'
        }
      },
      {
        q: { ta: 'இது பைக்காரா வழியில் உள்ளதா?', en: 'Is it on the way to Pykara?' },
        a: { ta: 'ஆம், ஊட்டிக்கும் பைக்காராவுக்கும் இடையில்.', en: 'Yes, between Ooty and Pykara.' }
      },
      {
        q: { ta: 'சிறந்த நேரம் எது?', en: 'Best time?' },
        a: {
          ta: 'அமைதியான காலை, தெளிவான நாட்கள்; மழைக்காலத்தில் மிகப் பசுமையாக இருக்கும்.',
          en: 'Early morning, clear days; very green in the monsoon.'
        }
      }
    ],
    related: ['pine-forest', 'pykara-falls', 'ooty-to-pykara', 'ooty-day-trip', 'best-season']
  },

  {
    slug: 'upper-bhawani',
    group: 'nearby',
    title: {
      ta: 'அப்பர் பவானி (மேல் பவானி) ஏரி – அணுகல், அனுமதிகள் மற்றும் ஊட்டியிலிருந்து சாலை',
      en: 'Upper Bhawani (Upper Bhavani) Lake – Access, Permits & the Road from Ooty'
    },
    description: {
      ta: 'மேல் பவானி ஏரி நீலகிரியில் உள்ள உயரமான ஏரி. அணுகல் கட்டுப்படுத்தப்பட்டது மற்றும் பொதுவாகக் காட்டுத் துறை அனுமதி தேவை. தற்போதைய அனுமதி விதிகளைத் திட்டமிட முன் உறுதி செய்யவும்.',
      en: 'Upper Bhawani Lake is a high-altitude lake near the Nilgiris. Access is restricted and usually needs a forest permit. Confirm the current permit rules before planning.'
    },
    h1: {
      ta: 'மேல் பவானி ஏரி',
      en: 'Upper Bhawani Lake'
    },
    lead: {
      ta: 'மேல் பவானி (Upper Bhavani) என்பது நீலகிரி வழியாக அடையப்படும் தொலைதூர உயரமான ஏரி; இது பாதுகாக்கப்பட்ட பகுதிகளுக்கு அடிக்கடி கட்டுப்படுத்தப்பட்ட வழியாகும். அணுகல் காட்டுத் துறை அனுமதியைச் சார்ந்தது என்பதால், எந்தப் பார்வைத் திட்டத்தையும் அனுமதிச் சார்ந்ததாகக் கருதி, தற்போதைய விதிகளைக் காட்டுத் துறையுடன் உறுதி செய்யவும்.',
      en: 'Upper Bhawani (Upper Bhavani) is a remote high-altitude lake reached via the Nilgiris through a route that is often restricted to protected areas. Because access requires forest-department permission, treat any visiting plan as permit-dependent and verify current rules with the forest department.'
    },
    updated: '6 November 2026',
    image: '/images/pykara-falls.jpg',
    imageAlt: {
      ta: 'நீலகிரியில் உயரமான ஏரி',
      en: 'High-altitude lake in the Nilgiris'
    },
    sections: [
      {
        id: 'access',
        heading: { ta: 'அணுகல் கட்டுப்படுத்தப்பட்டது', en: 'Access is restricted' },
        body: {
          ta: 'இந்த ஏரி பாதுகாக்கப்பட்ட பகுதிக்குள் உள்ளது; சாதாரண நிறுத்தமாக அல்ல. பெரும்பாலும் காட்டுத் துறை அனுமதி தேவைப்படும்.',
          en: 'This lake lies inside a protected area; it is not a casual stop. A forest-department permit is usually required.'
        }
      },
      {
        id: 'route',
        heading: { ta: 'ஊட்டியிலிருந்து சாலை', en: 'The route from Ooty' },
        body: {
          ta: 'நீலகிரி வழியாக நீண்ட வாகனப் பயணம்; பெரும்பாலும் அனுமதிக்கப்பட்ட வாகனங்களிலேயே. இது தோராயமானது, உத்தரவாதமானது அல்ல.',
          en: 'A long drive via the Nilgiris, often only with permitted vehicles. It is approximate, not guaranteed.'
        }
      },
      {
        id: 'plan',
        heading: { ta: 'அனுமதிகளைக் கருத்தில் கொண்டு திட்டமிடுங்கள்', en: 'Plan with permits in mind' },
        body: {
          ta: 'காட்டுத் துறையைத் தொடர்பு கொள்ளுங்கள்; சுயாதீனமான நுழைவை இந்த வழிகாட்டி உறுதி செய்யாது.',
          en: 'Contact the forest department; this guide does not confirm independent entry.'
        }
      }
    ],
    faqs: [
      {
        q: { ta: 'நான் நேரடியாக மேல் பவானிக்குச் செல்ல முடியுமா?', en: 'Can I just drive to Upper Bhawani?' },
        a: {
          ta: 'வழக்கமாக இல்லை — காட்டுத் துறை அனுமதி தேவை; உறுதி செய்யவும்.',
          en: 'Usually no — it needs a forest-department permit; verify.'
        }
      },
      {
        q: { ta: 'இது பைக்காராவுக்கு அருகிலுள்ளதா?', en: 'Is it near Pykara?' },
        a: {
          ta: 'அதே பகுதிதான், ஆனால் வேறு, கட்டுப்படுத்தப்பட்ட வழி; விரைவான தற்காலிகம் அல்ல.',
          en: 'Same region but a different, restricted route; not a quick add-on.'
        }
      },
      {
        q: { ta: 'சிறந்த பருவம் எது?', en: 'Best season?' },
        a: {
          ta: 'காட்டுத் துறையுடன் சரிபார்க்கவும்; சில வழிகள் பருவகாலமானவை.',
          en: 'Check with the forest department; some routes are seasonal.'
        }
      },
      {
        q: { ta: 'அங்கு படகு கிடைக்குமா?', en: 'Is boating available?' },
        a: {
          ta: 'அங்கு படகு உள்ளதை இந்த வழிகாட்டி உறுதி செய்யாது; அதிகாரிகளிடம் உறுதி செய்யவும்.',
          en: 'This guide does not confirm boating there; verify with the authorities.'
        }
      }
    ],
    related: ['emerald-lake', 'avalanche', 'pykara-falls', 'ooty-day-trip', 'best-season']
  },

  {
    slug: 'emerald-lake',
    group: 'nearby',
    title: {
      ta: 'ஊட்டி எமரால்ட் ஏரி – பைக்காரா வழியிலுள்ள அமைதியான ஏரி',
      en: 'Emerald Lake, Ooty – Quiet Lake Off the Pykara Route'
    },
    description: {
      ta: 'எமரால்ட் ஏரி ஊட்டிக்கு அருகில், பைக்காரா வழியிலுள்ள சிறிய, அமைதியான ஏரி. அது எங்கே, எப்படிச் செல்வது மற்றும் எதிர்பார்ப்புகளைப் பார்க்கவும்.',
      en: 'Emerald Lake is a small, quiet lake near Ooty off the Pykara route. See where it is, how to reach it and what to expect.'
    },
    h1: {
      ta: 'ஊட்டி எமரால்ட் ஏரி',
      en: 'Emerald Lake, Ooty'
    },
    lead: {
      ta: 'எமரால்ட் ஏரி ஊட்டிக்கு அருகிலுள்ள சிறிய, கூட்டமின்றிய ஏரி; பைக்காரா ஏரி மற்றும் பைக்காரா நீர்வீழ்ச்சியுடன் அதே அரைநாளில் அடிக்கடி பார்வையிடப்படுகிறது. செல்வதற்கு முன் அணுகல் மற்றும் நுழைவிடங்களை உள்ளூரில் உறுதி செய்யவும்.',
      en: 'Emerald Lake is a small, less-crowded lake near Ooty, often visited on the same half-day as Pykara Lake and Pykara Falls. Confirm access and any entry points locally before you go.'
    },
    updated: '6 November 2026',
    image: '/images/pykara-lake.jpg',
    imageAlt: {
      ta: 'ஊட்டிக்கு அருகிலுள்ள அமைதியான ஏரி',
      en: 'A quiet lake near Ooty'
    },
    sections: [
      {
        id: 'location',
        heading: { ta: 'எங்கே உள்ளது', en: 'Where it is' },
        body: {
          ta: 'இது ஊட்டிக்கு அருகில், பைக்காரா வழியிலிருந்துச் சிறிது விலகியுள்ள அமைதியான ஏரி.',
          en: 'It is near Ooty, a quiet lake just off the Pykara route.'
        }
      },
      {
        id: 'expect',
        heading: { ta: 'எதிர்பார்ப்புகள்', en: 'What to expect' },
        body: {
          ta: 'சிறியது, அமைதியானது, வசதிகள் குறைவு, அமைதியான நேரத்திற்கு நன்று.',
          en: 'Small, calm and with fewer facilities, good for quiet time.'
        }
      },
      {
        id: 'combine',
        heading: { ta: 'பைக்காராவுடன் இணைக்கவும்', en: 'Combine with Pykara' },
        body: {
          ta: 'பைக்காரா அரைநாள்ச் சுழலில் இதைச் சேர்க்கலாம்.',
          en: 'You can add it to a Pykara half-day loop.'
        }
      }
    ],
    faqs: [
      {
        q: { ta: 'எமரால்ட் ஏரி பைக்காரா ஏரிக்குச் சமமானதா?', en: 'Is Emerald Lake the same as Pykara Lake?' },
        a: { ta: 'இல்லை, வேறு ஏரிகள்; எமரால்ட் ஊட்டிக்கு அருகில்.', en: 'No, different lakes; Emerald is near Ooty.' }
      },
      {
        q: { ta: 'அங்கு படகு உள்ளதா?', en: 'Is there boating?' },
        a: {
          ta: 'எமரால்ட் ஏரியில் படகு உள்ளதை இந்த வழிகாட்டி உறுதி செய்யாது; உள்ளூரில் உறுதி செய்யவும்.',
          en: 'This guide does not confirm boating at Emerald Lake; verify locally.'
        }
      },
      {
        q: { ta: 'நுழைவுக் கட்டணம்?', en: 'Entry fee?' },
        a: { ta: 'உள்ளூரில் உறுதி செய்யவும்; வசதிகள் குறைவு.', en: 'Confirm locally; facilities are limited.' }
      },
      {
        q: { ta: 'இது பைக்காரா வழியில் உள்ளதா?', en: 'On the Pykara route?' },
        a: { ta: 'அருகிலுள்ளது, பைக்காரா அரைநாளில் அடிக்கடி சேர்க்கப்படுகிறது.', en: 'Nearby, often added to a Pykara half-day.' }
      }
    ],
    related: ['pykara-falls', 'upper-bhawani', 'half-day-tour', 'ooty-day-trip', 'pine-forest']
  },

  {
    slug: 'avalanche',
    group: 'nearby',
    title: {
      ta: 'ஊட்டி அவலான்ஷ் ஏரி – செல்வதற்கு முன் தெரிந்துகொள்ள வேண்டியவை',
      en: 'Avalanche Lake, Ooty – What to Know Before You Go'
    },
    description: {
      ta: 'அவலான்ஷ் ஏரி ஊட்டிக்கு அருகிலுள்ள, பைக்காராவைக் கடந்த அழகான இடம். வழி, நேரம் மற்றும் பார்வையின் எதிர்பார்ப்புகளைப் பார்க்கவும்.',
      en: 'Avalanche Lake is a scenic spot near Ooty, past Pykara. See the route, timing and what to expect on a visit.'
    },
    h1: {
      ta: 'ஊட்டி அவலான்ஷ் ஏரி',
      en: 'Avalanche Lake, Ooty'
    },
    lead: {
      ta: 'அவலான்ஷ் ஏரி பைக்காராவுக்கு அப்பால் உள்ள அழகிய ஏரி; வளைந்த மலைச் சாலையில் அடையப்படுகிறது. இது பைக்காரா நீர்வீழ்ச்சியை விட நீண்ட பயணம், எனவே நேரத்தைத் திட்டமிட்டு அணுகலை உள்ளூரில் உறுதி செய்யவும்.',
      en: 'Avalanche Lake is a scenic lake beyond Pykara, reached by a winding hill road. It is a longer add-on than Pykara Falls, so plan time and confirm access locally.'
    },
    updated: '6 November 2026',
    image: '/images/pykara-from-boat.jpg',
    imageAlt: {
      ta: 'பைக்காராவுக்கு அப்பாலுள்ள அழகிய ஏரி',
      en: 'A scenic lake beyond Pykara'
    },
    sections: [
      {
        id: 'route',
        heading: { ta: 'வழி மற்றும் நேரம்', en: 'Route & timing' },
        body: {
          ta: 'பைக்காராவைக் கடந்து, வளைந்த மலைச் சாலை; நீண்ட வாகனப் பயணம், வானிலையைச் சார்ந்தது.',
          en: 'Past Pykara on a winding hill road; a longer drive, weather dependent.'
        }
      },
      {
        id: 'expect',
        heading: { ta: 'எதிர்பார்ப்புகள்', en: 'What to expect' },
        body: {
          ta: 'இயற்கை, கூட்டம் குறைவு, வசதிகள் வரையறுக்கப்பட்டவை.',
          en: 'Nature, fewer crowds, limited facilities.'
        }
      },
      {
        id: 'plan',
        heading: { ta: 'பைக்காராவுடன் திட்டமிடுங்கள்', en: 'Plan with Pykara' },
        body: {
          ta: 'இரண்டையும் இணைத்தால் முழு நாள் ஆகும்.',
          en: 'Combining both makes it a full day.'
        }
      }
    ],
    faqs: [
      {
        q: { ta: 'அவலான்ஷ் பைக்காராவுக்கு அருகிலுள்ளதா?', en: 'Is Avalanche near Pykara?' },
        a: { ta: 'ஆம், பைக்காராவுக்கு அப்பால் அதே திசையில்.', en: 'Yes, beyond Pykara in the same direction.' }
      },
      {
        q: { ta: 'அங்கு படகு உள்ளதா?', en: 'Is there boating?' },
        a: { ta: 'இதை இந்த வழிகாட்டி உறுதி செய்யாது; உள்ளூரில் உறுதி செய்யவும்.', en: 'This guide does not confirm boating; verify locally.' }
      },
      {
        q: { ta: 'நுழைவுக் கட்டணம்?', en: 'Entry fee?' },
        a: { ta: 'உள்ளூரில் உறுதி செய்யவும்.', en: 'Confirm locally.' }
      },
      {
        q: { ta: 'சிறந்த நேரம்?', en: 'Best time?' },
        a: {
          ta: 'தெளிவான, மழை இல்லாத நேரச் சாளரங்கள்; மழைக்காலச் சாலை எச்சரிக்கை.',
          en: 'Clear, non-rainy windows; monsoon road caution.'
        }
      }
    ],
    related: ['pykara-falls', 'emerald-lake', 'ooty-day-trip', 'two-day-tour', 'best-season']
  },

  {
    slug: 'half-day-tour',
    group: 'itinerary',
    title: {
      ta: 'பைக்காரா & ஊட்டி அரைநாள் சுற்றுலா – வழி, நிறுத்தங்கள் மற்றும் நேரம்',
      en: 'Pykara & Ooty Half-Day Tour – Route, Stops & Timing'
    },
    description: {
      ta: 'ஊட்டியிலிருந்து பைக்காரா ஏரி, பைக்காரா நீர்வீழ்ச்சி மற்றும் சாலையோரப் பைன் வரிசையை உள்ளடக்கிய நடைமுறை அரைநாள் சுழல். வழி வரிசை மற்றும் நேரத்தைப் பார்க்கவும்.',
      en: 'A practical half-day loop from Ooty covering Pykara Lake, Pykara Falls and a roadside pine strip. See the route order and timing.'
    },
    h1: {
      ta: 'ஊட்டி–பைக்காரா அரைநாள் சுற்றுலா',
      en: 'Ooty–Pykara half-day tour'
    },
    lead: {
      ta: 'ஊட்டியிலிருந்து அரைநாள், ஆரம்பத்தில் புறப்பட்டு, 10:00–16:00 நீதிமன்ற நிர்ணயித்த நேரச் சாளரத்தைக் கவனித்தால் பைக்காரா ஏரி, பைக்காரா நீர்வீழ்ச்சி மற்றும் விரைவான சாலையோர நிறுத்தத்தை உள்ளடக்கலாம். படகு சவாரி TTDC மற்றும் 2026 நீதிமன்ற உத்தரவைச் சார்ந்தது.',
      en: 'A half-day from Ooty can cover Pykara Lake and Pykara Falls plus a quick roadside stop, if you start early and keep the 10:00–16:00 court-set visitor window in mind. Boating itself depends on TTDC and the 2026 court order.'
    },
    updated: '6 November 2026',
    image: '/images/pykara-lake.jpg',
    imageAlt: {
      ta: 'பைக்காரா சுற்றியுள்ள அரைநாள் சுழல்',
      en: 'A half-day loop around Pykara'
    },
    sections: [
      {
        id: 'order',
        heading: { ta: 'பரிந்துரைக்கப்பட்ட வரிசை', en: 'Suggested order' },
        body: {
          ta: 'ஊட்டி → பைன் வரிசை → பைக்காரா நீர்வீழ்ச்சி → பைக்காரா ஏரி → திரும்புதல்; தோராயமானது.',
          en: 'Ooty → pine strip → Pykara Falls → Pykara Lake → back; approximate.'
        }
      },
      {
        id: 'timing',
        heading: { ta: 'நேரம்', en: 'Timing' },
        body: {
          ta: 'ஆரம்பக் காலைப் புறப்பாடு, ஏரிக்கு 10–16 சாளரத்திற்குள், மீதமுள்ளவை நெகிழ்வானவை.',
          en: 'Early start, lake within the 10–16 window, the rest flexible.'
        }
      },
      {
        id: 'boating',
        heading: { ta: 'திட்டத்தில் படகு', en: 'Boating in the plan' },
        body: {
          ta: 'TTDC-யிடம் உறுதி செய்யவும், அனுமதிக்கப்பட்ட படகு வகைகள் மட்டுமே.',
          en: 'Confirm with TTDC, allowed craft only.'
        }
      }
    ],
    faqs: [
      {
        q: { ta: 'அரைநாளில் பைக்காராவைச் செய்ய முடியுமா?', en: 'Can I do Pykara in half a day from Ooty?' },
        a: { ta: 'ஆம், ஆரம்பக் காலையில்.', en: 'Yes with an early start.' }
      },
      {
        q: { ta: '10–16 சாளரம் போதுமானதா?', en: 'Is the 10–16 window enough?' },
        a: { ta: 'ஏரிப் பகுதிக்கு; அதைச் சுற்றித் திட்டமிடுங்கள்.', en: 'For the lake area; plan around it.' }
      },
      {
        q: { ta: 'படகை முன்பதிவு செய்ய வேண்டுமா?', en: 'Should I book boating ahead?' },
        a: { ta: 'TTDC தளத்தைச் சரிபார்க்கவும்.', en: 'Check the TTDC portal.' }
      },
      {
        q: { ta: 'எமரால்ட்/அவலான்ஷைச் சேர்க்கலாமா?', en: 'Add Emerald/Avalanche?' },
        a: { ta: 'அது முழு நாள் ஆக்கும்.', en: 'That makes it a full day.' }
      }
    ],
    related: ['ooty-day-trip', 'pykara-falls', 'pine-forest', 'boating-status', 'timings']
  },

  {
    slug: 'ooty-day-trip',
    group: 'itinerary',
    title: {
      ta: 'பைக்காராவிலிருந்து ஊட்டி ஒருநாள் பயணம் – எதை இணைப்பது மற்றும் எப்படி',
      en: 'Ooty Day Trip from Pykara – What to Combine & How'
    },
    description: {
      ta: 'நீங்கள் பைக்காராவில் தங்கினால், ஊட்டியில் ஒரு நாளை எவ்வாறு செலவிடுவது என்பதை இங்கே காணவும்: படகு இல்லம், தோட்டங்கள், காட்சிப் புள்ளிகள் மற்றும் திரும்பும் பயணம் — நீதிமன்ற நிர்ணயித்த நேரச் சாளரத்தைச் சுற்றி.',
      en: 'If you are basing at Pykara, here is how to spend a day in Ooty: the Boat House, gardens, viewpoints and the drive back — with timing around the court-set window.'
    },
    h1: {
      ta: 'பைக்காராவிலிருந்து ஊட்டி ஒருநாள் பயணம்',
      en: 'Ooty day trip from Pykara'
    },
    lead: {
      ta: 'பைக்காரா ஊட்டியிலிருந்து சுமார் 21 கி.மீ., எனவே ஏரியில் தொடங்கும் அல்லது முடியும் நாள் ஊட்டி நகரக் காட்சிகளையும் உள்ளடக்கலாம். 10:00–16:00 ஏரிச் சாளரத்தைக் கவனித்து, ஊட்டி படகு இல்லத்தைப் பைக்காராவிலிருந்து தனித்தனியே உறுதி செய்யவும்.',
      en: 'Pykara is about 21 km from Ooty, so a day that starts or ends at the lake can also include Ooty town sights. Keep the 10:00–16:00 lake window and confirm Ooty Boat House separately from Pykara.'
    },
    updated: '6 November 2026',
    image: '/images/pykara-from-boat.jpg',
    imageAlt: {
      ta: 'பைக்காரா மற்றும் ஊட்டியை இணைக்கும் நாள்',
      en: 'A day combining Pykara and Ooty'
    },
    sections: [
      {
        id: 'combine',
        heading: { ta: 'எதை இணைப்பது', en: 'What to combine' },
        body: {
          ta: 'ஊட்டி படகு இல்லம், தாவரவியல் பூங்கா, காட்சிப் புள்ளிகள், பைக்காரா.',
          en: 'Ooty Boat House, botanical garden, viewpoints, Pykara.'
        }
      },
      {
        id: 'timing',
        heading: { ta: 'சாளரத்தைச் சுற்றி நேரம்', en: 'Timing around the window' },
        body: {
          ta: 'காலை ஊட்டி, ஏரி 10–16, மாலைத் திரும்புதல்.',
          en: 'Morning Ooty, lake 10–16, evening return.'
        }
      },
      {
        id: 'boathouse',
        heading: { ta: 'இரண்டு படகு இல்லங்கள்', en: 'Two boat houses' },
        body: {
          ta: 'ஊட்டி vs பைக்காரா முன்பதிவு தனித்தனியே; ஒவ்வொன்றையும் உறுதி செய்யவும்.',
          en: 'Ooty vs Pykara booking is separate; confirm each.'
        }
      }
    ],
    faqs: [
      {
        q: { ta: 'ஊட்டி படகு இல்லம் பைக்காராவுக்குச் சமமானதா?', en: 'Is Ooty Boat House the same as Pykara?' },
        a: { ta: 'இல்லை, வேறு முன்பதிவு இடங்கள்.', en: 'No, different booking locations.' }
      },
      {
        q: { ta: 'ஒரே நாளில் இரண்டையும் செய்ய முடியுமா?', en: 'Can I do both in one day?' },
        a: { ta: 'திட்டமிட்டால் ஆம்.', en: 'Yes if planned.' }
      },
      {
        q: { ta: 'ஊட்டி → பைக்காரா தூரம்?', en: 'Distance Ooty to Pykara?' },
        a: { ta: 'மாவட்டப் பக்கம் சுமார் 21 கி.மீ. என்கிறது.', en: 'About 21 km per the district page.' }
      },
      {
        q: { ta: 'சிறந்த வரிசை?', en: 'Best order?' },
        a: { ta: 'காலை ஊட்டி, பைக்காரா 10–16, திரும்புதல்.', en: 'Ooty morning, Pykara 10–16, return.' }
      }
    ],
    related: ['ooty-to-pykara', 'half-day-tour', 'two-day-tour', 'boating-rules', 'timings']
  },

  {
    slug: 'two-day-tour',
    group: 'itinerary',
    title: {
      ta: 'பைக்காரா & ஊட்டி 2-நாள் பயணத் திட்டம் – எங்கே தங்குவது மற்றும் வழி',
      en: 'Pykara & Ooty 2-Day Itinerary – Where to Stay & Route'
    },
    description: {
      ta: 'பைக்காரா மற்றும் ஊட்டியைச் சுற்றியுள்ள அமைதியான இரண்டு நாள் திட்டம், எங்கே தங்குவது, நீதிமன்ற நிர்ணயித்த சாளரம் மற்றும் எமரால்ட், அவலான்ஷ் போன்ற அருகிலுள்ள ஏரிகளுடன்.',
      en: 'A relaxed two-day plan around Pykara and Ooty, with where to stay, the court-set window and nearby lakes like Emerald and Avalanche.'
    },
    h1: {
      ta: 'பைக்காரா & ஊட்டி 2-நாள் பயணத் திட்டம்',
      en: 'Pykara & Ooty 2-day itinerary'
    },
    lead: {
      ta: 'இரண்டு நாட்கள் பைக்காராவை (ஏரி, நீர்வீழ்ச்சி, 10:00–16:00 சாளரம்) முழு ஊட்டி நகர நாளிலிருந்து பிரிக்க அனுமதிக்கின்றன, மேலும் அவசரப்படாமல் எமரால்ட் அல்லது அவலான்ஷ் ஏரிகளைச் சேர்க்கலாம். தங்கும் இடத்தையும் படகு முன்பதிவையும் இயக்குநரிடம் உறுதி செய்யவும்.',
      en: 'Two days let you split Pykara (lake, falls, 10:00–16:00 window) from a full Ooty town day, and add Emerald or Avalanche without rushing. Confirm lodging and any boat booking with the operator.'
    },
    updated: '6 November 2026',
    image: '/images/pykara-lake.jpg',
    imageAlt: {
      ta: 'பைக்காரா மற்றும் ஊட்டியைச் சுற்றியுள்ள இரண்டு நாள் திட்டம்',
      en: 'A two-day plan around Pykara and Ooty'
    },
    sections: [
      {
        id: 'day1',
        heading: { ta: 'நாள் 1 – பைக்காரா', en: 'Day 1 – Pykara' },
        body: {
          ta: 'ஏரி 10–16, நீர்வீழ்ச்சி, அருகில் தங்குதல்.',
          en: 'Lake 10–16, falls, stay nearby.'
        }
      },
      {
        id: 'day2',
        heading: { ta: 'நாள் 2 – ஊட்டி & அப்பால்', en: 'Day 2 – Ooty & beyond' },
        body: {
          ta: 'ஊட்டி நகர், விரும்பினால் எமரால்ட்/அவலான்ஷ்.',
          en: 'Ooty town, optionally Emerald/Avalanche.'
        }
      },
      {
        id: 'stay',
        heading: { ta: 'எங்கே தங்குவது', en: 'Where to stay' },
        body: {
          ta: 'ஊட்டி அல்லது பைக்காரா பகுதி, உறுதி செய்யவும்.',
          en: 'Ooty or Pykara area, verify.'
        }
      }
    ],
    faqs: [
      {
        q: { ta: '2 நாட்கள் போதுமானதா?', en: 'Is 2 days enough?' },
        a: { ta: 'ஆம், பைக்காரா + ஊட்டி அடிப்படைகளுக்கு.', en: 'Yes for Pykara + Ooty basics.' }
      },
      {
        q: { ta: 'எங்கே தளம் அமைப்பது?', en: 'Where to base?' },
        a: { ta: 'ஊட்டி விருப்பங்களுக்கு, பைக்காரா அமைதிக்கு.', en: 'Ooty for options, Pykara for quiet.' }
      },
      {
        q: { ta: 'அவலான்ஷைச் சேர்க்கலாமா?', en: 'Add Avalanche?' },
        a: { ta: 'ஆரம்பக் காலை நாள் 2-இல்.', en: 'Day 2 with an early start.' }
      },
      {
        q: { ta: 'படகை முன்பதிவு செய்ய வேண்டுமா?', en: 'Book boating ahead?' },
        a: { ta: 'TTDC-யைச் சரிபார்க்கவும்.', en: 'Check TTDC.' }
      }
    ],
    related: ['ooty-day-trip', 'hotels', 'emerald-lake', 'avalanche', 'half-day-tour']
  },

  {
    slug: 'family-trip',
    group: 'itinerary',
    title: {
      ta: 'குடும்பம் & குழந்தைகளுடன் பைக்காரா – எளிய நிறுத்தங்கள் மற்றும் பாதுகாப்பு',
      en: 'Pykara with Family & Kids – Easy Stops & Safety'
    },
    description: {
      ta: 'பைக்காராவுக்கான குடும்ப-நட்பு திட்டமிடல்: மெதுவான நிறுத்தங்கள், உயிர்காப்பு அங்கி மற்றும் நீர் பாதுகாப்பு, மேலும் நீதிமன்ற நிர்ணயித்த 10:00–16:00 சாளரத்தைச் சுற்றியுள்ள நேரம்.',
      en: 'Family-friendly planning for Pykara: gentle stops, life-jacket and water safety, and timing around the court-set 10:00–16:00 window.'
    },
    h1: {
      ta: 'குடும்பம் & குழந்தைகளுடன் பைக்காரா',
      en: 'Pykara with family & kids'
    },
    lead: {
      ta: 'பைக்காரா குடும்பங்களுக்குப் பொருந்தும், நீங்கள் ஏரிப் பார்வையை 10:00–16:00 சாளரத்திற்குள் வைத்தால், குழந்தைகளுக்குச் சரியான உயிர்காப்பு அங்கியைப் பயன்படுத்தி நீரில் இறங்காமல் இருந்தால். படகு வயது அல்லது உயர விதிகளை TTDC-யிடம் உறுதி செய்யவும்.',
      en: 'Pykara works for families if you keep the lake visit inside the 10:00–16:00 window, use a correctly fitting life jacket for children and never enter the water. Confirm boating age or height rules with TTDC.'
    },
    updated: '6 November 2026',
    image: '/images/pykara-from-boat.jpg',
    imageAlt: {
      ta: 'பைக்காரா ஏரிக்கு ஒரு குடும்பப் பயணம்',
      en: 'A family visit to Pykara Lake'
    },
    sections: [
      {
        id: 'stops',
        heading: { ta: 'எளிய நிறுத்தங்கள்', en: 'Easy stops' },
        body: {
          ta: 'ஏரிக் காட்சி, நீர்வீழ்ச்சி, குறுகிய நடைப்பயணங்கள், நீண்ட பாதைகளைத் தவிர்க்கவும்.',
          en: 'Lake view, falls, short walks, avoid long treks.'
        }
      },
      {
        id: 'safety',
        heading: { ta: 'நீர் பாதுகாப்பு', en: 'Water safety' },
        body: {
          ta: 'உயிர்காப்பு அங்கி, நீந்தல் இல்லை, தடுப்புகளைத் தாண்ட வேண்டாம்.',
          en: 'Life jacket, no swimming, do not cross railings.'
        }
      },
      {
        id: 'timing',
        heading: { ta: 'நேரம்', en: 'Timing' },
        body: {
          ta: 'காலைப் புறப்பாடு, சாளரத்திற்குள், ஓய்வு இடைவேளைகள்.',
          en: 'Morning start, within window, rest breaks.'
        }
      }
    ],
    faqs: [
      {
        q: { ta: 'பைக்காரா குழந்தைகளுக்குப் பொருத்தமானதா?', en: 'Is Pykara good for kids?' },
        a: { ta: 'பாதுகாப்புடன் ஆம்.', en: 'Yes with safety care.' }
      },
      {
        q: { ta: 'குழந்தைகளுக்கு உயிர்காப்பு அங்கி?', en: 'Life jacket for children?' },
        a: { ta: 'TTDC-யிடம் உறுதி செய்யவும், பொருத்தத்தில் பிடிவாதம் செய்யவும்.', en: 'Confirm with TTDC, insist on a good fit.' }
      },
      {
        q: { ta: 'குழந்தைகள் படகில் செல்லலாமா?', en: 'Can kids boat?' },
        a: { ta: 'வயது/உயர விதிகளை உறுதி செய்யவும்.', en: 'Verify age/height rules.' }
      },
      {
        q: { ta: 'பெட்டி/ஸ்ட்ரோலர்?', en: 'Pram/stroller?' },
        a: { ta: 'பாதைகள் சமமற்றவை; திட்டமிடுங்கள்.', en: 'Paths are uneven; plan.' }
      }
    ],
    related: ['accessibility', 'boating-rules', 'timings', 'pykara-falls', 'ooty-day-trip']
  },

  {
    slug: 'restaurants',
    group: 'services',
    title: {
      ta: 'பைக்காரா & ஊட்டி அருகே உணவு – உணவு விருப்பங்கள்',
      en: 'Where to Eat Near Pykara & Ooty – Food Options'
    },
    description: {
      ta: 'பைக்காரா அருகே உணவு விருப்பங்கள் குறைவு; ஊட்டி நகரில் அதிகம் உள்ளன. எதிர்பார்ப்புகளைப் பார்க்கவும், உங்கள் நாளில் எது திறந்திருக்கிறது என்பதை உறுதி செய்யவும்.',
      en: 'Food near Pykara is limited; Ooty town has more options. See what to expect, and confirm what is open on your date.'
    },
    h1: {
      ta: 'பைக்காரா & ஊட்டி அருகே உணவு',
      en: 'Where to eat near Pykara & Ooty'
    },
    lead: {
      ta: 'பைக்காராவைச் சுற்றி, உணவுக் கடைகளும் சிறிய உணவகங்களும் குறைவாகவும் பருவகாலமாகவும் இருக்கும்; பெரும்பான்மை விருப்பங்கள் சுமார் 21 கி.மீ. தொலைவிலுள்ள ஊட்டி நகரில் உள்ளன. இந்த வழிகாட்டி குறிப்பிட்ட உணவகங்களைப் பெயரிடவோ மதிப்பிடவோ செய்யாது — உங்கள் நாளில் எது திறந்திருக்கிறது என்பதை உள்ளூரில் உறுதி செய்யவும்.',
      en: 'Around Pykara itself, food stalls and small eateries are limited and seasonal; most choices are in Ooty town about 21 km away. This guide does not name or rate specific restaurants — confirm what is open on your date locally.'
    },
    updated: '6 November 2026',
    image: '/images/pykara-falls.jpg',
    imageAlt: {
      ta: 'பைக்காரா மற்றும் ஊட்டி சுற்றியுள்ள உணவு விருப்பங்கள்',
      en: 'Food options around Pykara and Ooty'
    },
    sections: [
      {
        id: 'near',
        heading: { ta: 'பைக்காரா அருகே', en: 'Near Pykara' },
        body: {
          ta: 'வரையறுக்கப்பட்ட உணவுக் கடைகள், பருவகாலம்.',
          en: 'Limited stalls, seasonal.'
        }
      },
      {
        id: 'ooty',
        heading: { ta: 'ஊட்டி நகரில்', en: 'In Ooty town' },
        body: {
          ta: 'அதிக விருப்பங்கள், திறந்திருப்பதை உறுதி செய்யவும்.',
          en: 'More choice, confirm open.'
        }
      },
      {
        id: 'tips',
        heading: { ta: 'நடைமுறைக் குறிப்புகள்', en: 'Practical tips' },
        body: {
          ta: 'நீர் கொண்டு செல்லுங்கள், நேரங்களைச் சரிபார்க்கவும்.',
          en: 'Carry water, check timings.'
        }
      }
    ],
    faqs: [
      {
        q: { ta: 'பைக்காரா ஏரியில் உணவகங்கள்?', en: 'Restaurants at Pykara Lake?' },
        a: { ta: 'குறைவு; உள்ளூரில் உறுதி செய்யவும்.', en: 'Limited; confirm locally.' }
      },
      {
        q: { ta: 'சிறந்த வாய்ப்பு?', en: 'Best bet?' },
        a: { ta: 'ஊட்டி நகர விருப்பங்கள்.', en: 'Ooty town options.' }
      },
      {
        q: { ta: 'சைவ/அசைவ?', en: 'Veg/non-veg?' },
        a: { ta: 'ஊட்டியில் இரண்டும் கிடைக்கும்; உறுதி செய்யவும்.', en: 'Both available in Ooty; verify.' }
      },
      {
        q: { ta: 'என் நாளில் திறந்திருக்கிறதா?', en: 'Open on my date?' },
        a: { ta: 'உள்ளூரில் உறுதி செய்யவும்.', en: 'Confirm locally.' }
      }
    ],
    related: ['ooty-day-trip', 'hotels', 'half-day-tour', 'best-season', 'pykara-falls']
  },

  {
    slug: 'hotels',
    group: 'services',
    title: {
      ta: 'எங்கே தங்குவது – பைக்காரா & ஊட்டி அருகே ஹோட்டல்கள் & தங்கும் இடங்கள்',
      en: 'Where to Stay – Hotels & Stays Near Pykara & Ooty'
    },
    description: {
      ta: 'தங்கும் விருப்பங்கள் ஊட்டி நகர ஹோட்டல்களிலிருந்து பைக்காரா அருகே உள்ள அமைதியான தங்கும் இடங்கள் வரை உள்ளன. ஊட்டிக்கும் பைக்காராவுக்கும் இடையே ஒப்பிட்டு, உங்கள் தேதிகளுக்கான கிடைப்பை உறுதி செய்யவும்.',
      en: 'Stay options range from Ooty town hotels to quiet stays near Pykara. Compare Ooty vs Pykara and confirm availability for your dates.'
    },
    h1: {
      ta: 'பைக்காரா & ஊட்டி அருகே எங்கே தங்குவது',
      en: 'Where to stay near Pykara & Ooty'
    },
    lead: {
      ta: 'ஊட்டி நகரம் ஹோட்டல்கள் மற்றும் ஹோம்ஸ்டேக்களின் மிகப்பெரிய தேர்வைக் கொண்டுள்ளது; பைக்காரா அருகே தங்குவது அமைதியானது ஆனால் குறைவான விருப்பங்களே உள்ளன. இந்த வழிகாட்டி குறிப்பிட்ட சொத்துகளைப் பரிந்துரைக்கவோ மதிப்பிடவோ செய்யாது — பதிவு தளங்களில் ஒப்பிட்டு உங்கள் தேதிகளுக்கு உறுதி செய்யவும்.',
      en: 'Ooty town has the widest choice of hotels and homestays; staying near Pykara is quieter but has fewer options. This guide does not recommend or rate specific properties — compare on booking sites and confirm for your dates.'
    },
    updated: '6 November 2026',
    image: '/images/pykara-lake.jpg',
    imageAlt: {
      ta: 'பைக்காரா மற்றும் ஊட்டி அருகே தங்கும் விருப்பங்கள்',
      en: 'Stay options near Pykara and Ooty'
    },
    sections: [
      {
        id: 'ooty',
        heading: { ta: 'ஊட்டி நகரம்', en: 'Ooty town' },
        body: {
          ta: 'பெரும்பான்மை விருப்பங்கள், பட்ஜெட் வரம்புகள்.',
          en: 'Most options, range of budgets.'
        }
      },
      {
        id: 'pykara',
        heading: { ta: 'பைக்காரா அருகே', en: 'Near Pykara' },
        body: {
          ta: 'அமைதியானது, குறைவானவை.',
          en: 'Quiet, fewer.'
        }
      },
      {
        id: 'book',
        heading: { ta: 'முன்பதிவுக் குறிப்புகள்', en: 'Booking tips' },
        body: {
          ta: 'உச்ச பருவத்தில் முன்பதிவு செய்யுங்கள், உறுதி செய்யவும்.',
          en: 'Book ahead in season, confirm.'
        }
      }
    ],
    faqs: [
      {
        q: { ta: 'பைக்காரா ஏரி ஹோட்டல்கள்?', en: 'Hotels at Pykara Lake?' },
        a: { ta: 'குறைவு; ஊட்டியில் அதிகம்.', en: 'Limited; Ooty has more.' }
      },
      {
        q: { ta: 'சிறந்த தளம்?', en: 'Best base?' },
        a: { ta: 'ஊட்டி விருப்பங்களுக்கு, பைக்காரா அமைதிக்கு.', en: 'Ooty for choice, Pykara for calm.' }
      },
      {
        q: { ta: 'முன்பதிவு செய்ய வேண்டுமா?', en: 'Book ahead?' },
        a: { ta: 'ஆம், உச்ச பருவத்தில்.', en: 'Yes in peak season.' }
      },
      {
        q: { ta: 'குடும்பத் தங்கும் இடங்கள்?', en: 'Family stays?' },
        a: { ta: 'ஊட்டியில் அதிக குடும்ப விருப்பங்கள்.', en: 'Ooty has more family options.' }
      }
    ],
    related: ['two-day-tour', 'restaurants', 'ooty-day-trip', 'ooty-to-pykara', 'best-season']
  },

  {
    slug: 'best-season',
    group: 'season',
    title: {
      ta: 'பைக்காரா & ஊட்டிக்குச் சிறந்த பருவம் – மாதம் வாரியாக',
      en: 'Best Season to Visit Pykara & Ooty – Month-by-Month'
    },
    description: {
      ta: 'பைக்காரா மற்றும் ஊட்டிக்கு எப்போது செல்வது: இதமான மாதங்கள், மழைக்காலப் பசுமை மற்றும் குளிர்கால மூடுபனி. நீதிமன்ற நிர்ணயித்த 10:00–16:00 சாளரத்தைச் சுற்றித் திட்டமிடுங்கள்.',
      en: 'When to visit Pykara and Ooty: pleasant months, monsoon greens and winter fog. Plan around the court-set 10:00–16:00 window.'
    },
    h1: {
      ta: 'பைக்காரா & ஊட்டிக்குச் சிறந்த பருவம்',
      en: 'Best season to visit Pykara & Ooty'
    },
    lead: {
      ta: 'ஊட்டியும் பைக்காராவும் ஆண்டின் பெரும்பகுதி இதமானவை; மழைக்குப் பிந்தைய மாதங்கள் பசுமையாகவும் தெளிவாகவும் இருக்கும், அதேசமயம் குளிர்காலம் குளிர்ந்த காலைகளையும் மூடுபனியையும் கொண்டு மலை வாகன ஓட்டத்தைப் பாதிக்கலாம். பருவம் எதுவானாலும் 10:00–16:00 ஏரிச் சாளரத்தைக் கவனியுங்கள்.',
      en: 'Ooty and Pykara are pleasant most of the year; the post-monsoon months are green and clear, while winter brings cold mornings and fog that can affect hill driving. Keep the 10:00–16:00 lake window whatever the season.'
    },
    updated: '6 November 2026',
    image: '/images/pykara-from-boat.jpg',
    imageAlt: {
      ta: 'பருவங்கள் முழுவதும் பைக்காரா',
      en: 'Pykara across seasons'
    },
    sections: [
      {
        id: 'months',
        heading: { ta: 'மாதம் வாரியாக', en: 'Month-by-month' },
        body: {
          ta: 'அக்டோபர்–மே வரை இதமானது, ஜூன்–செப்டம்பர் மழைக்காலப் பசுமை ஆனால் வழுக்கலானது, குளிர்காலம் குளிர்/மூடுபனி.',
          en: 'Pleasant Oct–May, monsoon Jun–Sep green but slippery, winter cold/fog.'
        }
      },
      {
        id: 'window',
        heading: { ta: '10–16 சாளரம்', en: 'The 10–16 window' },
        body: {
          ta: 'நீதிமன்ற நிர்ணயித்தது, பருவம் சாராதது.',
          en: 'Court-set, season-independent.'
        }
      },
      {
        id: 'crowds',
        heading: { ta: 'கூட்டம்', en: 'Crowds' },
        body: {
          ta: 'வார இறுதிகள்/விடுமுறைகளில் நிறைந்திருக்கும், ஆரம்பத்தில் செல்லுங்கள்.',
          en: 'Weekends/holidays busy, arrive early.'
        }
      }
    ],
    faqs: [
      {
        q: { ta: 'சிறந்த மாதம்?', en: 'Best month?' },
        a: { ta: 'பொதுவாக மழைக்குப் பிந்தைய அக்டோபர்–பிப்ரவரி நல்லது.', en: 'Post-monsoon Oct–Feb generally good.' }
      },
      {
        q: { ta: 'மழைக்காலம் சரியா?', en: 'Monsoon ok?' },
        a: { ta: 'பசுமையானது ஆனால் சாலைகள் வழுக்கலானவை; எச்சரிக்கை.', en: 'Green but roads slippery; caution.' }
      },
      {
        q: { ta: 'குளிர்கால மூடுபனி?', en: 'Winter fog?' },
        a: { ta: 'சாத்தியமானது; வாகன ஓட்டத்தைத் திட்டமிடுங்கள்.', en: 'Possible; plan driving.' }
      },
      {
        q: { ta: 'சாளரம் பருவத்தால் மாறுமா?', en: 'Does the window change by season?' },
        a: { ta: 'நீதிமன்ற உத்தரவால் நிர்ணயிக்கப்பட்டது, பருவத்தால் அல்ல.', en: 'Set by court order, not season.' }
      }
    ],
    related: ['weather', 'ooty-day-trip', 'timings', 'ooty-to-pykara', 'accessibility']
  },

  {
    slug: 'weather',
    group: 'season',
    title: {
      ta: 'பைக்காரா & ஊட்டி வானிலை – வெப்பநிலை, மழை & வாகன ஓட்டக் குறிப்புகள்',
      en: 'Pykara & Ooty Weather – Temperature, Rain & Driving Notes'
    },
    description: {
      ta: 'பைக்காரா மற்றும் ஊட்டியின் மலை நிலைய வானிலை: குளிர்ந்த நாட்கள், கனமான மழைக்கால மழை மற்றும் குளிர்கால மூடுபனி. நடைமுறை வாகன ஓட்ட மற்றும் பொதியிடும் குறிப்புகளைப் பார்க்கவும்.',
      en: 'Hill-station weather at Pykara and Ooty: cool days, heavy monsoon rain and winter fog. See practical driving and packing notes.'
    },
    h1: {
      ta: 'பைக்காரா & ஊட்டி வானிலை',
      en: 'Pykara & Ooty weather'
    },
    lead: {
      ta: 'சுமார் 2,000 மீட்டர் உயரத்தில், பைக்காராவும் ஊட்டியும் குளிர்ந்தே இருக்கும்; தென்மேற்குப் பருவமழை கனமான மழையை (சுமார் ஜூன்–செப்டம்பர்) கொண்டுவரும், குளிர்காலம் குளிர்ந்த காலைகளையும் மூடுபனியையும் கொண்டுவரும். இந்தப் பக்கம் வழக்கமான பாணிகளை விவரிக்கிறது, நேரடி முன்னறிக்கை அல்ல — உங்கள் நாளில் வானிலை சேவையைச் சரிபார்க்கவும்.',
      en: 'At around 2,000 m, Pykara and Ooty stay cool; the southwest monsoon brings heavy rain (roughly June–September) and winter brings cold mornings and fog. This page describes typical patterns, not a live forecast — check a weather service on your date.'
    },
    updated: '6 November 2026',
    image: '/images/pykara-lake.jpg',
    imageAlt: {
      ta: 'பைக்காரா மற்றும் ஊட்டியில் வானிலை',
      en: 'Weather at Pykara and Ooty'
    },
    sections: [
      {
        id: 'pattern',
        heading: { ta: 'வழக்கமான பாணி', en: 'Typical pattern' },
        body: {
          ta: 'ஆண்டு முழுவதும் குளிர்ந்தது, மழைக்காலம் கனமானது, குளிர்காலம் மூடுபனி.',
          en: 'Cool year-round, monsoon heavy, winter fog.'
        }
      },
      {
        id: 'drive',
        heading: { ta: 'வாகன ஓட்டக் குறிப்புகள்', en: 'Driving notes' },
        body: {
          ta: 'மூடுபனி, வழுக்கலானது, வேகத்தைக் குறைக்கவும்.',
          en: 'Fog, slippery, slow down.'
        }
      },
      {
        id: 'pack',
        heading: { ta: 'எதைக் கொண்டு வருவது', en: 'What to pack' },
        body: {
          ta: 'சூடான அடுக்கு, மழைக் கருவிகள்.',
          en: 'Warm layer, rain gear.'
        }
      }
    ],
    faqs: [
      {
        q: { ta: 'ஆண்டு முழுவதும் குளிரானது?', en: 'Cold year-round?' },
        a: { ta: 'குளிர்ந்தது; குளிர்ந்த காலைகள்/மாலைகள்.', en: 'Cool; cold mornings/evenings.' }
      },
      {
        q: { ta: 'மழைக்கால வாகன ஓட்டம்?', en: 'Monsoon driving?' },
        a: { ta: 'வழுக்கலானது, எச்சரிக்கை.', en: 'Slippery, caution.' }
      },
      {
        q: { ta: 'நேரடி முன்னறிக்கை?', en: 'Live forecast?' },
        a: { ta: 'வானிலை சேவையைச் சரிபார்க்கவும்.', en: 'Check a weather service.' }
      },
      {
        q: { ta: 'சிறந்த தெளிவான மாதங்கள்?', en: 'Best clear months?' },
        a: { ta: 'மழைக்குப் பிந்தையவை.', en: 'Post-monsoon.' }
      }
    ],
    related: ['best-season', 'ooty-to-pykara', 'accessibility', 'ooty-day-trip', 'parking']
  },

  {
    slug: 'photography',
    group: 'season',
    title: {
      ta: 'பைக்காரா & ஊட்டியில் புகைப்படம் – சிறந்த இடங்கள் & ஒளி',
      en: 'Photography at Pykara & Ooty – Best Spots & Light'
    },
    description: {
      ta: 'பைக்காரா ஏரி, பைக்காரா நீர்வீழ்ச்சி மற்றும் ஊட்டிச் சாலையோரப் பைன் வரிசையை எங்கே மற்றும் எப்போது புகைப்படம் எடுப்பது என்பதை, ஒளி மற்றும் பாதுகாப்புக் குறிப்புகளுடன் பார்க்கவும்.',
      en: 'Where and when to photograph Pykara Lake, Pykara Falls and the Ooty roadside pine strip, with light and safety notes.'
    },
    h1: {
      ta: 'பைக்காரா & ஊட்டியில் புகைப்படம்',
      en: 'Photography at Pykara & Ooty'
    },
    lead: {
      ta: 'பைக்காரா ஏரி, பைக்காரா நீர்வீழ்ச்சி மற்றும் சாலையோரப் பைன் வரிசை அனைத்தும் மென்மையான காலை அல்லது பிற்பகல் ஒளியில் நன்றாகப் புகைப்படம் எடுக்கப்படுகின்றன. பாதுகாப்பான காட்சிப் புள்ளிகளிலும் 10:00–16:00 ஏரிச் சாளரத்திற்குள்ளும் இருங்கள்.',
      en: 'Pykara Lake, Pykara Falls and the roadside pine strip all photograph well in soft morning or late-afternoon light. Keep to safe viewpoints and within the 10:00–16:00 lake window.'
    },
    updated: '6 November 2026',
    image: '/images/pykara-from-boat.jpg',
    imageAlt: {
      ta: 'பைக்காரா சுற்றியுள்ள புகைப்பட இடங்கள்',
      en: 'Photography spots around Pykara'
    },
    sections: [
      {
        id: 'spots',
        heading: { ta: 'சிறந்த இடங்கள்', en: 'Top spots' },
        body: {
          ta: 'ஏரிக் கரை, நீர்வீழ்ச்சி, பைன் வரிசை, காட்சிப் புள்ளிகள்.',
          en: 'Lake shore, falls, pine strip, viewpoints.'
        }
      },
      {
        id: 'light',
        heading: { ta: 'சிறந்த ஒளி', en: 'Best light' },
        body: {
          ta: 'காலை/பிற்பகல் மென்மையான ஒளி, மழைக்காலப் பசுமை.',
          en: 'Morning/late afternoon soft light, monsoon green.'
        }
      },
      {
        id: 'safety',
        heading: { ta: 'பாதுகாப்பு & விதிகள்', en: 'Safety & rules' },
        body: {
          ta: 'காட்சிப் புள்ளிகள், தடுப்புகள், பாதுகாப்பாக இருங்கள்.',
          en: 'Viewpoints, railings, stay safe.'
        }
      }
    ],
    faqs: [
      {
        q: { ta: 'புகைப்படத்திற்குச் சிறந்த நேரம்?', en: 'Best time for photos?' },
        a: { ta: 'காலை/பிற்பகல்.', en: 'Morning/late afternoon.' }
      },
      {
        q: { ta: 'ட்ரோன் அனுமதிக்கப்படுமா?', en: 'Drone allowed?' },
        a: {
          ta: 'ட்ரோன் விதிகளை இந்த வழிகாட்டி உறுதி செய்யாது; அதிகாரிகளிடம் சரிபார்க்கவும்.',
          en: 'This guide does not confirm drone rules; check authorities.'
        }
      },
      {
        q: { ta: 'ஏரி அல்லது நீர்வீழ்ச்சி முதலில்?', en: 'Lake or falls first?' },
        a: { ta: 'வழியில் நீர்வீழ்ச்சி, சாளரத்தில் ஏரி.', en: 'Falls on the way, lake in the window.' }
      },
      {
        q: { ta: 'மழைக்காலப் புகைப்படங்கள்?', en: 'Monsoon photos?' },
        a: { ta: 'பசுமையானது ஆனால் எச்சரிக்கை.', en: 'Green but cautious.' }
      }
    ],
    related: ['pine-forest', 'pykara-falls', 'best-season', 'weather', 'half-day-tour']
  },

  {
    slug: 'accessibility',
    group: 'services',
    title: {
      ta: 'பைக்காரா & ஊட்டியில் அணுகல் – பாதைகள், நடமாட்டம் & குறிப்புகள்',
      en: 'Accessibility at Pykara & Ooty – Paths, Mobility & Tips'
    },
    description: {
      ta: 'பைக்காரா மற்றும் ஊட்டிக்கான நடைமுறை அணுகல் குறிப்புகள்: பார்க்கிறம், பாதை மேற்பரப்புகள், படிகள் மற்றும் நடமாட்டக் குறிப்புகள், கிடைப்பதை மிகைப்படுத்தாமல்.',
      en: 'Practical accessibility notes for Pykara and Ooty: parking, path surfaces, steps and mobility tips, without overstating what is available.'
    },
    h1: {
      ta: 'பைக்காரா & ஊட்டியில் அணுகல்',
      en: 'Accessibility at Pykara & Ooty'
    },
    lead: {
      ta: 'பைக்காராவில் அணுகல் கலவையானது: படகு இல்லம் அருகே வாகன நிறுத்தம் உள்ளது, ஆனால் ஏரிக்கரைப் பாதைகளும் நீர்வீழ்ச்சியும் சமமற்ற நிலம் மற்றும் படிகளை உள்ளடக்கியவை. உங்கள் நாளில் தற்போதைய அணுகல் மற்றும் உதவியை TTDC-யிடம் உறுதி செய்யவும்.',
      en: 'Accessibility at Pykara is mixed: there is vehicle parking near the boat house, but lakeside paths and the falls involve uneven ground and steps. Confirm current access and assistance on your date with TTDC.'
    },
    updated: '6 November 2026',
    image: '/images/pykara-lake.jpg',
    imageAlt: {
      ta: 'பைக்காராவில் அணுகும் பாதைகள்',
      en: 'Access paths at Pykara'
    },
    sections: [
      {
        id: 'parking',
        heading: { ta: 'பார்க்கிறம் & இறக்கம்', en: 'Parking & drop-off' },
        body: {
          ta: 'படகு இல்லம் அருகே வாகன நிறுத்தம், ஆரம்பத்தில் வருவது உதவும்.',
          en: 'Vehicle parking near the boat house, arriving early helps.'
        }
      },
      {
        id: 'paths',
        heading: { ta: 'பாதைகள் & படிகள்', en: 'Paths & steps' },
        body: {
          ta: 'சமமற்ற நிலம், சில படிகள், நீர்வீழ்ச்சி தனி.',
          en: 'Uneven ground, some steps, falls separate.'
        }
      },
      {
        id: 'tips',
        heading: { ta: 'நடமாட்டக் குறிப்புகள்', en: 'Mobility tips' },
        body: {
          ta: 'உதவி, பொருத்தமான காலணிகள், உறுதி செய்யவும்.',
          en: 'Assistance, suitable footwear, confirm.'
        }
      }
    ],
    faqs: [
      {
        q: { ta: 'சக்கர நாற்காலி அணுகல்?', en: 'Wheelchair access?' },
        a: { ta: 'பகுதி; TTDC-யிடம் உறுதி செய்யவும்.', en: 'Partial; confirm with TTDC.' }
      },
      {
        q: { ta: 'படகு இல்லம் அருகே பார்க்கிறம்?', en: 'Parking near boat house?' },
        a: { ta: 'ஆம், ஆனால் உச்ச நாட்களில் நிரம்பும்.', en: 'Yes, but fills on peak days.' }
      },
      {
        q: { ta: 'நீர்வீழ்ச்சியில் படிகள்?', en: 'Steps at falls?' },
        a: { ta: 'ஆம்; ஏரியிலிருந்து தனி.', en: 'Yes; separate from the lake.' }
      },
      {
        q: { ta: 'உதவி கிடைக்குமா?', en: 'Assistance available?' },
        a: { ta: 'TTDC-யிடம் கேட்கவும்.', en: 'Ask TTDC.' }
      }
    ],
    related: ['parking', 'family-trip', 'weather', 'best-season', 'pykara-falls']
  }
];

export const TOPIC_SLUGS: string[] = TOPICS.map((t) => t.slug);

/** @param {string} slug */
export const getTopic = (slug: string): TopicContent | undefined =>
  TOPICS.find((t) => t.slug === slug);

/** @param {string} slug */
export const topicUrl = (slug: string): string => `/${slug}/`;
