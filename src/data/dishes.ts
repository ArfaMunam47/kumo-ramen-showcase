export interface TastingBowl {
  id: string;
  name: string;
  subname: string;
  description: string;
  notes: string;
  flavor: string;
  origin: string;
  color: string;
}

export interface RamenDish {
  id: string;
  number: string;
  code: string;
  name: string;
  japaneseName: string;
  eyebrow: string;
  tagline: string;
  description: string;
  heroImage: string;
  noodleArtImage?: string;
  price: string;
  memberPrice: string;
  calories: string;
  protein: string;
  cookTime: string;
  rating: string;
  reviewsCount: string;
  spiceLevel: number; // 1-5
  richness: number; // 1-5
  texture: number; // 1-5
  aroma: number; // 1-5
  umami: number; // 1-5
  temperature: string;
  brothViscosity: string;
  hydrationRate: string;
  tastingBowls: TastingBowl[];
  flavorBars: {
    label: string;
    value: number; // percentage
    color: 'sage' | 'gold' | 'olive';
    detail: string;
  }[];
  cookingSteps: {
    step: string;
    time: string;
    temp: string;
  }[];
}

export const DISHES: RamenDish[] = [
  {
    id: 'coojy-copig',
    number: '01',
    code: 'RAMEN-CP01',
    name: 'Coojy Copig',
    japaneseName: '黄金バター醤油拉麺',
    eyebrow: 'SIGNATURE BOWL / N° 01',
    tagline: 'Comfort, served with architectural balance.',
    description: 'An emulsified golden chicken and dashi broth, married with cultured Hokkaido butter, hand-stretched kansui noodles, and charred spring leeks.',
    heroImage: '/src/assets/images/ramen_hero_bowl_1789137270027.jpg',
    noodleArtImage: '/src/assets/images/noodle_swirl_art_1789137282939.jpg',
    price: '€9.50',
    memberPrice: '€7.10',
    calories: '525 kcal',
    protein: '14 g',
    cookTime: '20 min',
    rating: '4.9',
    reviewsCount: '342',
    spiceLevel: 2,
    richness: 4,
    texture: 5,
    aroma: 5,
    umami: 5,
    temperature: '84°C Serv. Temp',
    brothViscosity: 'Medium-Silky (1.08 cP)',
    hydrationRate: '34% Low Hydration',
    tastingBowls: [
      {
        id: 'tb-1',
        name: 'Sonnetbuginal',
        subname: 'Golden Panko & Toasted Sesame',
        description: 'Slow-roasted white and golden sesame blended with micro-panko and dehydrated chicken crackling for crisp acoustic texture.',
        notes: 'Nutty, toasted brioche, light salinity',
        flavor: 'Warm Nutty',
        origin: 'Kagoshima Prefecture',
        color: '#D99B19',
      },
      {
        id: 'tb-2',
        name: 'Torrentorenista',
        subname: 'Hand-Cut Kansui Ribbon',
        description: 'Stone-milled Hokkaido wheat flour, tempered with alkaline mineral spring water. Extruded with a gentle micro-wave fold.',
        notes: 'Chewy, wheaty sweetness, resilient snap',
        flavor: 'Malted Wheat',
        origin: 'Hokkaido Yumechikara',
        color: '#E8D98F',
      },
      {
        id: 'tb-3',
        name: 'Photysiadulela',
        subname: 'Black Garlic Tare & Charred Seeds',
        description: 'Forty-day black garlic aged under controlled humidity, mashed with aged shoyu tare and crushed Szechuan peppercorn skins.',
        notes: 'Balsamic sweetness, roasted cocoa, deep umami',
        flavor: 'Fermented Garlic',
        origin: 'Aomori Black Garlic',
        color: '#242421',
      },
      {
        id: 'tb-4',
        name: 'Reoni Coasso',
        subname: 'Spring Scallion Silk & Herb Relish',
        description: 'Hair-thin negi ribbons steeped in cold mountain spring water, tossed with cold-pressed sansho oil and tender young chives.',
        notes: 'Crisp allium kick, citrus numbness, herbaceous lift',
        flavor: 'Fresh Botanical',
        origin: 'Kyoto Kujo Negi',
        color: '#8AA56D',
      },
    ],
    flavorBars: [
      { label: 'Broth Emulsification', value: 88, color: 'sage', detail: '88% Golden Gloss' },
      { label: 'Noodle Chew (Koshi)', value: 92, color: 'gold', detail: '92% Firm Snap' },
      { label: 'Aromatic Volatility', value: 84, color: 'olive', detail: '84% Sage Butter' },
      { label: 'Palate Depth (Umami)', value: 96, color: 'sage', detail: '96% Glutamate Index' },
      { label: 'Finish Salinity', value: 68, color: 'gold', detail: '68% Balanced Sea Salt' },
    ],
    cookingSteps: [
      { step: 'Kansui Noodle Blanch', time: '1m 20s', temp: '98°C Rolling Boil' },
      { step: 'Tare & Butter Tempering', time: '45s', temp: '75°C Pre-warmed Ceramic' },
      { step: 'Dashi-Chintan Emulsify', time: '30s', temp: '88°C Direct Ladle' },
      { step: 'Aeration & Topping Fold', time: '40s', temp: 'Assemble Immediate' },
    ],
  },
  {
    id: 'kuro-black-garlic',
    number: '02',
    code: 'RAMEN-KB02',
    name: 'Kuro Mayu Tonkotsu',
    japaneseName: '黒麻油濃厚豚骨拉麺',
    eyebrow: 'SIGNATURE BOWL / N° 02',
    tagline: 'Deep darkness meets velvety bone broth.',
    description: '18-hour simmered Berkshire pork marrow broth enriched with seven-shade black garlic oil, crisp wood ear fungus, and torched chashu.',
    heroImage: '/src/assets/images/black_garlic_bowl_1789137327389.jpg',
    noodleArtImage: '/src/assets/images/noodle_swirl_art_1789137282939.jpg',
    price: '€11.00',
    memberPrice: '€8.50',
    calories: '610 kcal',
    protein: '22 g',
    cookTime: '18 min',
    rating: '4.95',
    reviewsCount: '489',
    spiceLevel: 1,
    richness: 5,
    texture: 5,
    aroma: 5,
    umami: 5,
    temperature: '86°C Serv. Temp',
    brothViscosity: 'Heavy Velvet (1.24 cP)',
    hydrationRate: '28% Hakata Ultra-Firm',
    tastingBowls: [
      {
        id: 'tb-21',
        name: 'Mayu Shichidai',
        subname: 'Seven-Stage Roast Garlic Oil',
        description: 'Garlic roasted across seven consecutive temperatures until jet black, blended with sesame oil for smoky complexity.',
        notes: 'Smoky, espresso finish, caramelized allium',
        flavor: 'Smoky Mayu',
        origin: 'Kumamoto Traditional Method',
        color: '#242421',
      },
      {
        id: 'tb-22',
        name: 'Hakata Hosomen',
        subname: 'Straight Ultra-Firm Noodle',
        description: 'Low-hydration straight needle noodles cut at 1.1mm width, designed to cling to thick, emulsified collagen broth.',
        notes: 'Dense core, crisp bite, clean wheat finish',
        flavor: 'Crisp Wheat',
        origin: 'Fukuoka Wheat Collective',
        color: '#E8D98F',
      },
      {
        id: 'tb-23',
        name: 'Kikurage Strip',
        subname: 'Wild Forest Wood Ear',
        description: 'Sun-dried tree ear mushrooms slivered to hair ribbons, providing pure acoustic crunch between velvety spoonfuls.',
        notes: 'Earthy, buoyant snap, minerals',
        flavor: 'Forest Mineral',
        origin: 'Gunma Mountain Foothills',
        color: '#6F8056',
      },
      {
        id: 'tb-24',
        name: 'Chashu Jus Tare',
        subname: 'Braised Berkshire Pork Tare',
        description: 'A master stock reduction bubbling continuously since 2018, concentrated with mirin, rock sugar, and roasted ginger.',
        notes: 'Caramelized pork, aged mirin, rounded shoyu',
        flavor: 'Aged Savory',
        origin: 'Kagoshima Berkshire',
        color: '#D99B19',
      },
    ],
    flavorBars: [
      { label: 'Broth Emulsification', value: 98, color: 'gold', detail: '98% Heavy Collagen' },
      { label: 'Noodle Chew (Koshi)', value: 95, color: 'sage', detail: '95% Katame Bite' },
      { label: 'Aromatic Volatility', value: 90, color: 'olive', detail: '90% Charred Smoke' },
      { label: 'Palate Depth (Umami)', value: 98, color: 'gold', detail: '98% Pure Glutamate' },
      { label: 'Finish Salinity', value: 72, color: 'sage', detail: '72% Sea Salt Shoyu' },
    ],
    cookingSteps: [
      { step: 'Collagen Broth Temper', time: '18 min', temp: '88°C Stable Emulsion' },
      { step: 'Hosomen 45-Sec Drop', time: '45s', temp: '100°C Fast Rolling' },
      { step: 'Seven-Stage Mayu Swirl', time: '15s', temp: 'Room Temp Surface Layer' },
      { step: 'Torched Chashu Seeding', time: '30s', temp: 'Direct Gas Torch 450°C' },
    ],
  },
  {
    id: 'yuzu-truffle-chintan',
    number: '03',
    code: 'RAMEN-YT03',
    name: 'Yuzu Truffle Chintan',
    japaneseName: '柚子白トリュフ清湯拉麺',
    eyebrow: 'SIGNATURE BOWL / N° 03',
    tagline: 'Crystalline clarity layered with citrus bloom.',
    description: 'A crystal-clear golden chicken consommé perfumed with Kochi yuzu peel, cold-extracted white truffle aroma oil, and bamboo menma.',
    heroImage: '/src/assets/images/ramen_hero_bowl_1789137270027.jpg',
    noodleArtImage: '/src/assets/images/noodle_swirl_art_1789137282939.jpg',
    price: '€12.50',
    memberPrice: '€9.80',
    calories: '440 kcal',
    protein: '16 g',
    cookTime: '15 min',
    rating: '4.92',
    reviewsCount: '274',
    spiceLevel: 1,
    richness: 2,
    texture: 4,
    aroma: 5,
    umami: 4,
    temperature: '82°C Serv. Temp',
    brothViscosity: 'Clear Consommé (0.98 cP)',
    hydrationRate: '38% High Hydration Silky',
    tastingBowls: [
      {
        id: 'tb-31',
        name: 'Kochi Yuzu Zest',
        subname: 'Sun-dried Mountain Citrus',
        description: 'Micro-planed yellow yuzu peel harvested at first autumn chill, offering pure floral citrus oils without pith bitterness.',
        notes: 'Bright mandarin, cedar blossom, floral acidity',
        flavor: 'Luminous Citrus',
        origin: 'Kochi Prefecture',
        color: '#E8D98F',
      },
      {
        id: 'tb-32',
        name: 'White Truffle Infusion',
        subname: 'Cold-Steeped Aromatic Oil',
        description: 'Piedmont white truffles gently cold-macerated in neutral cold-pressed rapeseed oil, capturing delicate earthy volatiles.',
        notes: 'Damp earth, wild honey, roasted hazelnut',
        flavor: 'Ethereal Truffle',
        origin: 'Piedmont / Nagano Oil Press',
        color: '#D99B19',
      },
      {
        id: 'tb-33',
        name: 'Chintan Consommé',
        subname: 'Clarified Jidori Broth',
        description: 'Double-strained organic chicken broth cooked below simmer threshold (82°C) to keep gelatin transparent and pure.',
        notes: 'Clean poultry essence, roasted kombu, sweet dashi',
        flavor: 'Pure Clarified',
        origin: 'Nagoya Cochin Chicken',
        color: '#8AA56D',
      },
      {
        id: 'tb-34',
        name: 'Silken Menma',
        subname: 'Lactic Fermented Bamboo Shoots',
        description: 'Aged in wood barrels for 4 months, seasoned with light shiro shoyu and toasted sesame oil for tender sweetness.',
        notes: 'Tender woody snap, sweet ferment, light brine',
        flavor: 'Woodland Tender',
        origin: 'Taiwan Mountain Bamboo',
        color: '#6F8056',
      },
    ],
    flavorBars: [
      { label: 'Broth Emulsification', value: 45, color: 'sage', detail: '45% Crystal Clear' },
      { label: 'Noodle Chew (Koshi)', value: 86, color: 'gold', detail: '86% Silky Glide' },
      { label: 'Aromatic Volatility', value: 98, color: 'olive', detail: '98% Citrus Blossom' },
      { label: 'Palate Depth (Umami)', value: 90, color: 'sage', detail: '90% Dashi Synergy' },
      { label: 'Finish Salinity', value: 62, color: 'gold', detail: '62% Delicate Sea Salt' },
    ],
    cookingSteps: [
      { step: 'Chintan Gentle Warm', time: '10 min', temp: '82°C Never Boiling' },
      { step: 'Silky Noodle Pull', time: '1m 10s', temp: '98°C Fast Dip' },
      { step: 'Yuzu Peel Micro-Grate', time: '10s', temp: 'Room Ambient' },
      { step: 'White Truffle Gloss', time: '15s', temp: 'Pre-service Dropper' },
    ],
  },
  {
    id: 'spicy-sesame-tantan',
    number: '04',
    code: 'RAMEN-ST04',
    name: 'Spicy Sesame TanTan',
    japaneseName: '胡麻四川担担拉麺',
    eyebrow: 'SIGNATURE BOWL / N° 04',
    tagline: 'Crimson chili heat enveloped in stone-ground sesame.',
    description: 'Thick hand-ground white sesame paste emulsified with chicken stock, fermented broad-bean chili paste, roasted sansho peppercorns, and spicy ground pork.',
    heroImage: '/src/assets/images/black_garlic_bowl_1789137327389.jpg',
    noodleArtImage: '/src/assets/images/noodle_swirl_art_1789137282939.jpg',
    price: '€10.80',
    memberPrice: '€8.20',
    calories: '580 kcal',
    protein: '20 g',
    cookTime: '22 min',
    rating: '4.88',
    reviewsCount: '310',
    spiceLevel: 4,
    richness: 4,
    texture: 5,
    aroma: 5,
    umami: 5,
    temperature: '85°C Serv. Temp',
    brothViscosity: 'Thick Cream (1.18 cP)',
    hydrationRate: '32% Curly Textured',
    tastingBowls: [
      {
        id: 'tb-41',
        name: 'Stone-Ground Gomadare',
        subname: 'Pure Sesame Emulsion',
        description: 'Slow granite-milled white sesame seeds heated until oils separate and re-emulsify with mild Japanese rice vinegar.',
        notes: 'Rich tahini body, toasted grain, gentle sweet acidity',
        flavor: 'Dense Sesame',
        origin: 'Gifu Prefecture Granary',
        color: '#E8D98F',
      },
      {
        id: 'tb-42',
        name: 'Crimson Rayu Oil',
        subname: 'Eight-Spice Infused Chili Oil',
        description: 'Korean gochugaru and Sichuan facing-heaven peppers steep in hot oil with star anise, cinnamon bark, and ginger roots.',
        notes: 'Floral heat, numbing tingle, crimson stain',
        flavor: 'Complex Heat',
        origin: 'Atelier Small-Batch Rayu',
        color: '#D99B19',
      },
      {
        id: 'tb-43',
        name: 'Mala Soboro Pork',
        subname: 'Wok-Charred Ground Pork',
        description: 'Minced pork shoulder caramelized in hot cast iron with fermented doubanjiang, shaoxing wine, and crushed sansho.',
        notes: 'Crisp savory crumbles, wine fragrance, electric spice',
        flavor: 'Wok Char',
        origin: 'Iberico Pork Mince',
        color: '#242421',
      },
      {
        id: 'tb-44',
        name: 'Bok Choy Crisp',
        subname: 'Flash-Steamed Baby Greens',
        description: 'Tender baby bok choy stems blanched for 12 seconds in salted water to offer fresh juicy contrast against dense sesame broth.',
        notes: 'Crisp green sweetness, cool water crunch',
        flavor: 'Juicy Garden',
        origin: 'Chiba Organic Farm',
        color: '#8AA56D',
      },
    ],
    flavorBars: [
      { label: 'Broth Emulsification', value: 92, color: 'gold', detail: '92% Creamy Sesame' },
      { label: 'Noodle Chew (Koshi)', value: 89, color: 'sage', detail: '89% Curly Wave' },
      { label: 'Aromatic Volatility', value: 96, color: 'olive', detail: '96% Sichuan Peppercorn' },
      { label: 'Palate Depth (Umami)', value: 94, color: 'gold', detail: '94% Doubanjiang Core' },
      { label: 'Spice / Tingling', value: 85, color: 'sage', detail: '85% Electric Mala' },
    ],
    cookingSteps: [
      { step: 'Sesame Base Aeration', time: '40s', temp: 'Whisked with hot broth' },
      { step: 'Curly Noodle Blanch', time: '1m 30s', temp: '98°C Rapid Boil' },
      { step: 'Mala Rayu Drizzle', time: '20s', temp: 'Perimeter circular swirl' },
      { step: 'Crisp Greens Anchor', time: '15s', temp: 'Fresh hot placement' },
    ],
  },
];
