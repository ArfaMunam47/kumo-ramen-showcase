export interface IngredientItem {
  id: string;
  category: 'NOODLES' | 'BROTH' | 'TARE' | 'AROMA' | 'TOPPINGS';
  name: string;
  japanese: string;
  shortDesc: string;
  fullDesc: string;
  origin: string;
  texture: string;
  flavorProfile: string;
  pairing: string;
  spec: {
    hydration?: string;
    thickness?: string;
    temperature?: string;
    agingTime?: string;
    colorTone: string;
  };
  image: string;
}

export const INGREDIENTS: IngredientItem[] = [
  {
    id: 'kansui-wheat-noodle',
    category: 'NOODLES',
    name: 'Hokkaido Kansui Wheat Noodle',
    japanese: '北海道産春よ恋 特製加水麺',
    shortDesc: 'Resilient snap, toasted grain aroma, and golden luster.',
    fullDesc: 'Crafted from 100% single-estate Haru Yo Koi wheat milled to a specific mineral content. Blended with pure alkaline kansui spring water, yielding an elastic gluten network that retains its al dente tension even in hot broth.',
    origin: 'Tokachi Plain, Hokkaido, Japan',
    texture: 'Elastic, springy snap with a firm al dente core (Koshi)',
    flavorProfile: 'Sweet cereal grain, subtle malted barley, clean alkaline finish',
    pairing: 'Complements both rich emulsion tonkotsu and delicate golden chicken chintan',
    spec: {
      hydration: '32% - 35% controlled',
      thickness: '1.45mm square cut',
      agingTime: '24 hours in cedar boxes',
      colorTone: '#E8D98F',
    },
    image: '/src/assets/images/noodle_swirl_art_1789137282939.jpg',
  },
  {
    id: 'black-garlic-mayu',
    category: 'AROMA',
    name: 'Seven-Stage Black Garlic Oil (Mayu)',
    japanese: '七段仕込み黒麻油',
    shortDesc: 'Deep, caramelized, roasted cocoa notes and smoky sweetness.',
    fullDesc: 'Fresh Aomori garlic cloves undergo continuous roasting across seven increasing temperatures until carbonized without bitterness. Blended with cold-pressed roasted sesame oil to produce a dark, silky aromatic gloss that floats on the surface of the broth.',
    origin: 'Aomori & Kumamoto, Japan',
    texture: 'Velvety, micro-emulsified oil veil',
    flavorProfile: 'Charred molasses, espresso bean, balsamic vinegar, allium sweetness',
    pairing: 'Crucial foil for heavy collagen broths and toasted pork chashu',
    spec: {
      temperature: 'Cooked to 215°C peak',
      agingTime: 'Resting for 7 days',
      colorTone: '#242421',
    },
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'golden-chintan-broth',
    category: 'BROTH',
    name: '18-Hour Jidori & Rishiri Dashi Broth',
    japanese: '地鶏利尻黄金出汁',
    shortDesc: 'Crystal clear, layered with glutamic acid and golden schmaltz.',
    fullDesc: 'Simmered strictly below 84°C to prevent turbidity. Free-range chicken carcasses are simmered alongside aged Rishiri kelp, katsuobushi flakes, and roasted leeks for an intense, shimmering broth of unmatched clarity and warmth.',
    origin: 'Nagoya Cochin & Rishiri Island, Japan',
    texture: 'Silky, light-bodied yet lingeringly rich on the tongue',
    flavorProfile: 'Pure chicken essence, iodine ocean sweetness, roasted root vegetable warmth',
    pairing: 'Best served with hand-folded wave noodles and seasonal citrus peel',
    spec: {
      temperature: 'Simmered at 82°C – 84°C',
      agingTime: '18 hours extraction + 12h chill',
      colorTone: '#D99B19',
    },
    image: '/src/assets/images/ramen_hero_bowl_1789137270027.jpg',
  },
  {
    id: 'ajitsuke-tamago',
    category: 'TOPPINGS',
    name: '63°C Ajitsuke Onsen Tamago',
    japanese: '半熟味付け煮玉子',
    shortDesc: 'Custard yolk suspended in delicate shoyu-mirin brine.',
    fullDesc: 'Organic pasture-raised eggs boiled precisely for six minutes and fifteen seconds, shock-chilled in ice water, and steeped for 36 hours in a marinade of aged soy sauce, sweet mirin, and roasted bonito dashi.',
    origin: 'Gunma Free-Range Organic Farms',
    texture: 'Molten, jammy custard center with a tender, cured albumen white',
    flavorProfile: 'Sweet soy, rich egg fat umami, subtle smoky bonito perfume',
    pairing: 'Acts as a luxurious bridge between broth salinity and noodle starch',
    spec: {
      temperature: '63.5°C precise bath',
      agingTime: '36 hours curing cycle',
      colorTone: '#F2BE32',
    },
    image: 'https://images.unsplash.com/photo-1506976785307-8732e854ad03?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'kujo-scallion-silk',
    category: 'TOPPINGS',
    name: 'Kyoto Kujo Negi Silk (Spring Onion)',
    japanese: '京都特産九条葱 白髪切り',
    shortDesc: 'Hair-thin ribbons offering crisp sweetness and allium lift.',
    fullDesc: 'Prized heirloom green onions grown in the nutrient-dense alluvial soils of Kyoto. Sliced into micro-threads (shiraga negi) and rinsed in icy spring water to temper harsh pungency, leaving crisp sweetness and delicate verdant aroma.',
    origin: 'Kujo, Kyoto, Japan',
    texture: 'Delicate acoustic crunch, light as spun silk',
    flavorProfile: 'Gentle green pepper sweetness, clean botanical freshness',
    pairing: 'Cuts through butter-rich broths and roasted sesame pastes',
    spec: {
      thickness: '0.3mm hand-shaved ribbon',
      agingTime: 'Prepped fresh within 4 hours',
      colorTone: '#8AA56D',
    },
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'aged-shoyu-tare',
    category: 'TARE',
    name: 'Kioke Cedar Barrel Aged Shoyu Tare',
    japanese: '木桶仕込み三年熟成生醤油返',
    shortDesc: 'Three-year wood-aged soy seasoned with sun-dried sea salt.',
    fullDesc: 'The soul of the bowl. Fermented in century-old cedar barrels in Wakayama, this unpasteurized raw soy sauce is gently warmed with roasted chicken bones, roasted sake, and kombu reduction to create a foundation that anchors the bowl.',
    origin: 'Yuasa, Wakayama Prefecture',
    texture: 'Dense, glossy, deep mahogany reduction',
    flavorProfile: 'Complex fermented earth, dark cherry notes, profound umami depth',
    pairing: 'The essential architectural anchor for every shoyu and butter blend',
    spec: {
      agingTime: '36 months wood barrel fermentation',
      colorTone: '#6F8056',
    },
    image: 'https://images.unsplash.com/photo-1615485500704-8e990f9900f7?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'sichuan-sansho-rayu',
    category: 'AROMA',
    name: 'Eight-Spice Sansho Rayu Oil',
    japanese: '八味山椒特製辣油',
    shortDesc: 'Floral citrus tingle, glowing crimson hue, and warming heat.',
    fullDesc: 'Cold-pressed rapeseed oil infused with red Sichuan pepper, green sansho berries, star anise, crushed cassia bark, and toasted sesame seeds. Brings a gentle vibrating numbing sensation (ma) followed by radiant warmth (la).',
    origin: 'Atelier Spice Lab, Kyoto & Sichuan',
    texture: 'Bright, luminous crimson chili droplets',
    flavorProfile: 'Grapefruit zest, crushed pine, soothing numbing buzz, smoky warmth',
    pairing: 'Elevates TanTan noodles, pork chashu, and steamed dumplings',
    spec: {
      temperature: 'Steeped at 135°C spice drop',
      agingTime: 'Matured for 72 hours',
      colorTone: '#D99B19',
    },
    image: 'https://images.unsplash.com/photo-1615485500704-8e990f9900f7?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'kikurage-wood-ear',
    category: 'TOPPINGS',
    name: 'Mountain Wood Ear Mushrooms',
    japanese: '国産黒木耳 千切り',
    shortDesc: 'Buoyant gelatinous crunch harvested from fallen oaks.',
    fullDesc: 'Wild-harvested from deciduous oak forests in Gunma prefecture, air-dried on bamboo mats, then gently rehydrated in kombu dashi before being cut into delicate strips.',
    origin: 'Gunma Oak Forests, Japan',
    texture: 'Pleasing acoustic spring and gelatinous snap',
    flavorProfile: 'Subtle rain-washed wood, delicate earthy minerals',
    pairing: 'Indispensable texture in rich tonkotsu and spicy miso bowls',
    spec: {
      thickness: '1.2mm precision strip cut',
      colorTone: '#242421',
    },
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80',
  },
];
