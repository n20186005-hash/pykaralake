/** Place-specific editorial additions; never infer a ticket price or hours from another attraction. */
export const PLACE_GUIDES: Record<string, {
  photo: string;
  credit: string;
  tip: string;
  highlight: string;
  about: string;
  experience: string;
  caution: string;
  photoTip: string;
  stay: string;
}> = {
  'pykara-dam': {
    photo: '/images/place-pykara-dam.jpg', credit: 'Shanmugamp7 / Wikimedia Commons — Pykara dam, Ooty 01',
    tip: 'Treat this as an optional viewpoint, not a guaranteed walk across a working dam. Confirm the permitted viewing area before leaving Ooty.',
    highlight: 'Reservoir scenery, the Pykara hydropower story and a short stop that can pair with Pykara Falls.',
    about: 'The Pykara River system has long supported hydroelectric generation in the Nilgiris. Visitor access to operational structures is not the same as public access to the lakeside.',
    experience: 'Look for the contrast between engineered water infrastructure and the surrounding rolling green hills from a lawful public viewpoint.',
    caution: 'Obey restricted-area signs. Do not approach spillways, barriers or equipment, especially after heavy rain.',
    photoTip: 'Use a wide landscape frame from a designated viewpoint; never cross a security boundary for a closer shot.',
    stay: 'Ooty is a practical overnight base for combining this stop with the Pykara corridor.'
  },
  'pykara-falls': {
    photo: '/images/pykara-falls.jpg', credit: 'Existing site Pykara Falls photograph',
    tip: 'Choose footwear with grip and allow extra time when steps and paths are wet.',
    highlight: 'Cascading Pykara River water, woodland setting and views shaped by recent rainfall.',
    about: 'Pykara Falls is a river waterfall downstream of the lake system, a separate stop from the boat house.',
    experience: 'Observe the change from flowing river to cascades; water volume and visibility shift with the season.',
    caution: 'Stay behind railings and away from strong currents. Check access locally during monsoon conditions.',
    photoTip: 'Photograph from the official viewing areas; overcast light often softens harsh contrast on the water.',
    stay: 'Ooty provides the broadest choice of accommodation before or after a Pykara day trip.'
  },
  'pine-forest': {
    photo: '/images/place-pine-forest.jpg', credit: 'Vinodkumar Kotabagi / Wikimedia Commons — Pine Forest Ooty',
    tip: 'Visit in daylight and stick to established paths to avoid trampling vegetation.',
    highlight: 'Tall pine trunks, filtered light and a distinctive woodland atmosphere near Ooty.',
    about: 'The Pine Forest stop is known for planted stands of pines and scenic photography rather than a formal botanical collection.',
    experience: 'Notice the repeating tree trunks, needles underfoot and changes in light across the slope.',
    caution: 'Forest floors may be slippery. Do not light fires or leave litter.',
    photoTip: 'Shoot vertically from a marked path to emphasize the height and rhythm of the trunks.',
    stay: 'Stay in Ooty if combining the forest with Pykara Lake and other nearby viewpoints.'
  },
  'wenlock-downs': {
    photo: '/images/place-wenlock-downs.jpg', credit: 'Netha Hussain / Wikimedia Commons — Wenlock Down’s Shooting point',
    tip: 'Carry a wind layer; the open grassland can feel colder than central Ooty.',
    highlight: 'Broad shola-grassland vistas, rolling slopes and wide horizons associated with Ooty shooting points.',
    about: 'Wenlock Downs is part of the Nilgiri highland landscape, valued for its open grassland scenery.',
    experience: 'Look across successive grassy ridges and forest patches; the setting differs from the enclosed pine forest.',
    caution: 'Respect any fencing or habitat restrictions and avoid walking into unmarked grassland.',
    photoTip: 'A panoramic composition works well when the sky is clear; keep a safe distance from slope edges.',
    stay: 'Ooty is a convenient base for this western Nilgiri scenic drive.'
  },
  'upper-bhawani': {
    photo: '/images/place-upper-bhawani.jpg', credit: 'Curiosity230897 / Wikimedia Commons — Upper Bhavani river (regional image)',
    tip: 'Confirm forest access, vehicle permissions and current restrictions before planning the remote journey.',
    highlight: 'High-altitude watershed, forest landscape and a quieter setting beyond the busiest Ooty attractions.',
    about: 'Upper Bhavani belongs to the Nilgiri watershed and protected forest landscape. Some routes and zones require official permission.',
    experience: 'The appeal is the broad, relatively remote mountain environment, not an assured open-access lakeside promenade.',
    caution: 'Do not assume private vehicles or independent treks can enter restricted forest roads.',
    photoTip: 'Take photographs only at approved stops; the supporting image illustrates the Upper Bhavani river area, not a confirmed dam viewpoint.',
    stay: 'Use Ooty as a base and arrange any permitted excursion in advance.'
  },
  'emerald-lake': {
    photo: '/images/place-emerald-lake.jpg', credit: 'Sankara / Wikimedia Commons — Emerald Lake Nilgiris',
    tip: 'Check local access rules; reservoir shores can have restricted sections.',
    highlight: 'Quiet reservoir water, green hills and a less commercial atmosphere than the main Ooty lake.',
    about: 'Emerald Lake is part of the Nilgiri reservoir landscape near Emerald village, distinct from Pykara Lake.',
    experience: 'Enjoy the lake-and-hill panorama from public access points rather than expecting boating facilities.',
    caution: 'Do not swim or enter restricted water-supply areas; take all rubbish away.',
    photoTip: 'Frame the shore and distant hills together when visibility permits.',
    stay: 'Ooty or an appropriately located Nilgiri homestay can support a slower itinerary.'
  },
  'kamaraj-sagar-dam': {
    photo: '/images/place-kamaraj-sagar-dam.jpg', credit: 'Wikimedia Commons — Kamaraj Sagar reservoir',
    tip: 'Confirm where visitors may stop; access to dam structures may be restricted.',
    highlight: 'Sandynalla reservoir views and a short scenic detour from the Ooty–Pykara route.',
    about: 'Kamaraj Sagar, also associated with Sandynalla, is a reservoir in the Nilgiris and should not be confused with Pykara Dam.',
    experience: 'Take in water reflections and the surrounding landscape from a public roadside or designated viewing point.',
    caution: 'Avoid unsafe roadside parking and stay clear of reservoir edges and operational barriers.',
    photoTip: 'A wide shot can show the water and hills; use a safe pull-off rather than stopping in traffic.',
    stay: 'Ooty works well for this short stop and a wider Pykara day trip.'
  },
  'botanical-garden': {
    photo: '/images/place-botanical-garden.jpg', credit: 'Wikimedia Commons — Government Botanical Garden Ooty India',
    tip: 'Allow time for the garden’s slopes and paths; verify entrance charges and seasonal event schedules locally.',
    highlight: 'Landscaped terraces, mature trees and a long-established botanical collection.',
    about: 'The Government Botanical Garden in Udhagamandalam is a historic horticultural attraction, different from the natural forests around Pykara.',
    experience: 'Explore the contrast between formal planting beds, specimen trees and the Nilgiri hillside setting.',
    caution: 'Keep to visitor paths and avoid picking flowers or entering planted beds.',
    photoTip: 'Use the layered garden terraces to create depth; quieter morning light is useful.',
    stay: 'Central Ooty is practical for an early garden visit and other in-town attractions.'
  },
  'doddabetta': {
    photo: '/images/place-doddabetta.jpg', credit: 'Wikimedia Commons — Doddabetta peak',
    tip: 'Check visibility before leaving: mist can conceal the panorama even on an otherwise pleasant day.',
    highlight: 'One of the Nilgiris’ best-known high summits with expansive mountain views in clear weather.',
    about: 'Doddabetta is a prominent peak near Ooty, popular for its elevated outlook rather than lake activities.',
    experience: 'On clear days, compare nearby ridgelines with the distant plateau and valley landscape.',
    caution: 'Expect cooler wind, possible fog and busy viewpoint areas; use marked paths.',
    photoTip: 'A clear early window may work better than midday haze; avoid stepping beyond barriers.',
    stay: 'Ooty is the closest convenient overnight base for an early viewpoint visit.'
  },
  'nilgiri-mountain-railway': {
    photo: '/images/place-nilgiri-railway.jpg', credit: 'Prakhar / Wikimedia Commons — The Nilgiri Mountain Railway',
    tip: 'Check the current Indian Railways timetable and seat availability; train travel is not a flexible roadside stop.',
    highlight: 'Historic mountain rail engineering, hillside scenery and a celebrated heritage railway experience.',
    about: 'The Nilgiri Mountain Railway is a UNESCO-listed component of the Mountain Railways of India, known for its mountain route and engineering.',
    experience: 'The journey itself is the attraction, with station architecture, mountain scenery and distinctive train operations.',
    caution: 'Use authorized platforms and crossing points only; never walk on the railway track for photographs.',
    photoTip: 'Photograph trains from permitted station areas, respecting staff instructions and other passengers.',
    stay: 'Ooty, Coonoor or Mettupalayam may be useful bases depending on the booked service.'
  },
  'trekking-trails': {
    photo: '/images/place-trekking.jpg', credit: 'Rainer Halama / Wikimedia Commons — Nilgiri Biosphere Reserve–Wenlock Downs (regional landscape)',
    tip: 'Choose an officially permitted trail matched to your fitness and arrange a guide wherever required.',
    highlight: 'Shola-grassland mosaics, varied elevation and the Nilgiris’ distinctive mountain ecology.',
    about: '“Trekking trails” describes multiple routes rather than one named attraction with a single ticket gate or opening schedule.',
    experience: 'A guided or officially open walk can reveal changes in vegetation, terrain and mountain weather.',
    caution: 'Check forest permits and weather; do not enter protected routes without authorization.',
    photoTip: 'Use a wide angle for the landscape and avoid disturbing wildlife for close-ups.',
    stay: 'Pick an overnight base only after choosing the trailhead; Ooty suits many but not all routes.'
  }
};
