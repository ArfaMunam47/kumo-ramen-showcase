export interface ShowcaseIngredient {
  id: string;
  name: string;
  subtitle: string;
  image: string;
  color?: string;
  details?: string;
}

export interface MetricItem {
  label: string;
  value: number; // 0 to 100
  color: 'sage' | 'gold' | 'olive';
  specNote?: string;
}

export interface ProductDish {
  id: string;
  number: string;
  category: string;
  categoryTag: 'all' | 'ramen' | 'specials' | 'sides' | 'drinks';
  name: string;
  nameEn: string;
  japaneseTitle?: string;
  subtitle: string;
  subtitleEn: string;
  description: string;
  longStory: string;
  image: string;
  cookTime: string;
  calories: string;
  protein: string;
  carbs: string;
  sodium: string;
  cost: string;
  priceEur: string;
  priceNum: number;
  rating: string;
  reviewsCount: number;
  difficulty: string;
  extractionHours: string;
  hydrationRate: string;
  servingTemp: string;
  featured?: boolean;
  featuredBadge?: string;
  ingredients: ShowcaseIngredient[];
  metrics: {
    texture: number;
    richness: number;
    spice: number;
    aroma: number;
    extraction: number;
  };
  chefNotes: string;
  recommendedPairing: string;
}

// 1. PRIMARY HERO SHOWCASE DISH (Kumo Miso)
export const KUMO_MISO_DISH: ProductDish = {
  id: 'kumo-miso',
  number: '01',
  category: 'رامن التوقيع الحرفي • الإصدار ٠١',
  categoryTag: 'ramen',
  name: 'كومو ميسو رامن',
  nameEn: 'Kumo Miso Ramen',
  japaneseTitle: '雲味噌拉麺',
  subtitle: 'مرق ميسو حريري معتق مع نودلز هوكايدو يدوية',
  subtitleEn: 'Silky aged miso broth · handcrafted wheat noodles · toasted garlic',
  description: 'مرق ميسو حريري معتق ببطء لمدة ١٤ ساعة، ونودلز قمح مصنوعة يدوياً بنسبة رطوبة ٢٨٪، مع ثوم محمص ببطء وأعشاب كوجو الجبلية.',
  longStory: 'يمثل كومو ميسو جوهر مختبرنا؛ حيث ندمج ثلاثة أنواع من الميسو المخمر في براميل خشب الأرز الياباني لثلاث سنوات مع مرق الدجاج الحر المستخلص بدرجة حرارة ثابتة ٩٨°م. النودلز تُعجن يومياً في درجة حرارة ورطوبة محكومة لتمنح قواماً متوازناً بين المرونة والصلابة.',
  image: '/src/assets/images/ramen_hero_bowl_1789137270027.jpg',
  cookTime: '٢٠ د',
  calories: '٥٢٠ سعرة',
  protein: '١٨ غ',
  carbs: '٦٢ غ',
  sodium: '١.٢ غ',
  cost: '٤٨ ر.س',
  priceEur: '€14',
  priceNum: 48,
  rating: '٤.٩',
  reviewsCount: 142,
  difficulty: 'متقن',
  extractionHours: '١٤ ساعة استخلاص',
  hydrationRate: '٢٨٪ رطوبة القمح',
  servingTemp: '٨٦°م حرارة السكب',
  ingredients: [
    {
      id: 'hokkaido-noodles',
      name: 'نودلز قمح هوكايدو',
      subtitle: 'عجن يدوي طازج يومياً',
      image: '/src/assets/images/noodle_swirl_art_1789137282939.jpg',
      details: 'طحين قمح الشتاء من هوكايدو، منسوج بدرجة رطوبة ٢٨٪ لقوام مطاطي يحمل المرق بكفاءة.'
    },
    {
      id: 'aged-miso',
      name: 'معجون الميسو المعتق',
      subtitle: 'تعتيق ٣ سنوات في خشب الأرز',
      image: '/src/assets/images/ingredient_tasting_bowls_1789137296645.jpg',
      details: 'مزيج من الميسو الأبيض والميسو الأحمر الحرفي يمنح عمق أومامي استثنائي.'
    },
    {
      id: 'chili-sesame',
      name: 'زيت السمسم المحمص والفلفل',
      subtitle: 'دفء عطري متوازن',
      image: 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?auto=format&fit=crop&w=400&q=80',
      details: 'مستخلص حبوب السمسم المحمصة على حجر الصوان متبوعاً بزيت الفلفل البارد.'
    },
    {
      id: 'wild-herbs',
      name: 'أعشاب كوجو الجبلية',
      subtitle: 'قطاف صباحي طازج',
      image: 'https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=400&q=80',
      details: 'بصل كوجو الأخضر الرفيع مع وريقات الميرمية البرية لتفتيح نكهة المرق الغني.'
    },
  ],
  metrics: {
    texture: 88,
    richness: 82,
    spice: 45,
    aroma: 94,
    extraction: 90,
  },
  chefNotes: 'يُنصح بشرب ملعقة كاملة من المرق الخالص أولاً لاستيعاب طبقات الأومامي قبل مزج النودلز والأعشاب.',
  recommendedPairing: 'شاي سينشا الأخضر المقطوف في موسم الربيع الأول.'
};

// 2. SECOND HERO SHOWCASE DISH (Kuro Tonkotsu)
export const KURO_TONKOTSU_DISH: ProductDish = {
  id: 'kuro-tonkotsu',
  number: '02',
  category: 'رامن مرق العظام الكثيف • الإصدار ٠٢',
  categoryTag: 'ramen',
  name: 'تونكوتسو الثوم الأسود (مايو)',
  nameEn: 'Black Garlic Tonkotsu',
  japaneseTitle: '黒麻油豚骨',
  subtitle: 'مرق مستخلص ١٨ ساعة مع زيت مايو المحمص على ٧ درجات',
  subtitleEn: 'Slow-cooked broth · roasted garlic · spring onion · chashu',
  description: 'مرق غني مستخلص لمدة ١٨ ساعة بحرارة مضبوطة، وزيت مايو الأسود المحمص على سبع درجات تفحيم، وشرائح شاشو مكرملة، وفطر أذن الخشب المقرمش.',
  longStory: 'أقوى إصداراتنا كثافة؛ حيث يتم ترويق المرق على نار متواصلة حتى يصل لقوام حريري مخملي كالحليب. يُضاف زيت المايو الأسود المحضر يدوياً من الثوم المقلي بسبع درجات حرارة متتالية ليمنح تبايناً بصرياً ونكهياً أخاذاً.',
  image: '/src/assets/images/black_garlic_bowl_1789137327389.jpg',
  cookTime: '٢٢ د',
  calories: '٦٤٠ سعرة',
  protein: '٢٦ غ',
  carbs: '٥٨ غ',
  sodium: '١.٤ غ',
  cost: '٥٢ ر.س',
  priceEur: '€15',
  priceNum: 52,
  rating: '٥.٠',
  reviewsCount: 198,
  difficulty: 'مكثف',
  extractionHours: '١٨ ساعة غليان بطيء',
  hydrationRate: '٢٦٪ نودلز صلبة',
  servingTemp: '٩٠°م حرارة السكب',
  ingredients: [
    {
      id: 'black-mayu',
      name: 'زيت مايو الأسود',
      subtitle: 'سبع درجات تفحيم متوازنة',
      image: '/src/assets/images/ingredient_tasting_bowls_1789137296645.jpg',
      details: 'زيت الثوم والسمسم المكرمل حتى درجة السواد الحريري بدون مرارة زائدة.'
    },
    {
      id: 'chashu-cedar',
      name: 'شرائح الشاشو المكرملة',
      subtitle: 'طهي بطيء بنقع خشب الأرز',
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=400&q=80',
      details: 'لحم مطهو على حرارة منخفضة لمدة ٨ ساعات ثم مكرمل باللهب المباشر قبل التقديم.'
    },
    {
      id: 'onsen-egg-miso',
      name: 'بيضة أونسن متبلة',
      subtitle: 'صفار هلامي غني بنقع التاري',
      image: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&w=400&q=80',
      details: 'بيضة طازجة تنقع لمدة ٢٤ ساعة في مزيج صويا التاماري المعتق والميرين العضوي.'
    },
    {
      id: 'wood-ear-kikurage',
      name: 'فطر أذن الخشب المقرمش',
      subtitle: 'قرمشة صوتية متوازنة',
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=400&q=80',
      details: 'شرائح فطر الكيكوراجي التي تضفي توازناً ملموساً مع كثافة المرق المخملي.'
    },
  ],
  metrics: {
    texture: 92,
    richness: 96,
    spice: 30,
    aroma: 95,
    extraction: 98,
  },
  chefNotes: 'تذوق النودلز أولاً مغمورة بزيت المايو الأسود، ثم حرك الوعاء لتندمج طبقة الزيت الداكنة مع بياض المرق الحليبي.',
  recommendedPairing: 'شاي الهوجيتشا المحمص على الفحم أو مياه غازية منعشة بحمض اليوزو.'
};

// =========================================================================
// THE COMPLETE 17 FOOD PRODUCTS COLLECTION (100% EXCLUSIVE LOCAL ART-DIRECTED)
// =========================================================================
export const SEVENTEEN_MENU_DISHES: ProductDish[] = [
  // 01
  KUMO_MISO_DISH,

  // 02
  KURO_TONKOTSU_DISH,

  // 03
  {
    id: 'spicy-sesame-ramen',
    number: '03',
    category: 'السمسم الحار المعتق',
    categoryTag: 'ramen',
    name: 'رامن السمسم الحار',
    nameEn: 'Spicy Sesame Ramen',
    japaneseTitle: '担々胡麻拉麺',
    subtitle: 'طحينة سمسم ذهبية · زيت فلفل حجري · بوك تشوي مقرمش',
    subtitleEn: 'Stone-ground sesame · chili crunch oil · charred bok choy',
    description: 'مرق سمسم محمص على الحجر ممزوج بزيت الفلفل البارد ولمسة من فلفل سيتشوان المنعش مع شرائح البصل الأخضر المقرمشة.',
    longStory: 'نحمص بذور السمسم العضوي يومياً في أفران فخارية قبل طحنها على رحى حجرية باردة لنحافظ على نقاء الزيوت الطيارة، مما يمنح المرق قواماً مخملياً دافئاً متدرج الحرارة.',
    image: '/src/assets/images/spicy_sesame_bowl_1789144671209.jpg',
    cookTime: '١٨ د',
    calories: '٥٩٠ سعرة',
    protein: '٢٢ غ',
    carbs: '٥٦ غ',
    sodium: '١.٢ غ',
    cost: '٤٩ ر.س',
    priceEur: '€14',
    priceNum: 49,
    rating: '٤.٩',
    reviewsCount: 172,
    difficulty: 'متوازن ودافئ',
    extractionHours: '١٢ ساعة استخلاص متدرج',
    hydrationRate: '٢٧٪ نودلز متموجة',
    servingTemp: '٨٨°م حرارة السكب',
    ingredients: [
      { id: 'sesame-paste', name: 'طحينة السمسم الحجرية', subtitle: 'طحن يومي بارد', image: '/src/assets/images/ingredient_tasting_bowls_1789137296645.jpg' },
      { id: 'chili-crisp', name: 'زيت الفلفل المقرمش', subtitle: 'تحميص هادئ', image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=400&q=80' },
    ],
    metrics: { texture: 88, richness: 89, spice: 80, aroma: 94, extraction: 90 },
    chefNotes: 'حرك الوعاء من القاع إلى الأعلى لمزج طبقة السمسم المخملية بزيت الفلفل العطري.',
    recommendedPairing: 'شاي الأولونغ المعتق أو مشروب الصويا البارد غير المحلى.'
  },

  // 04
  {
    id: 'yuzu-chicken-ramen',
    number: '04',
    category: 'مرق الدجاج والحمضيات النادرة',
    categoryTag: 'ramen',
    name: 'رامن دجاج اليوزو',
    nameEn: 'Yuzu Chicken Ramen',
    japaneseTitle: '柚子地鶏拉麺',
    subtitle: 'مرق دجاج جبلي نقي · قشور يوزو كوتشي · براعم خيزران',
    subtitleEn: 'Clear free-range broth · Kochi yuzu zest · tender bamboo shoots',
    description: 'مرق دجاج صافٍ كالكريستال مصفى على البخار، ممزوج بعصير وبشر قشور فاكهة اليوزو الطازجة لتقديم أريج زهري حمضي منعش.',
    longStory: 'مستوحى من صباحات جبال مقاطعة كوتشي، نستخدم دجاج المرعى الحر المستخلص هادئاً دون غليان عنيف ليظل المرق رائقاً للغاية، ثم نضفي لمسة اليوزو العطرية قبل السكب مباشرة.',
    image: '/src/assets/images/yuzu_chicken_bowl_1789144657475.jpg',
    cookTime: '١٦ د',
    calories: '٤٤٠ سعرة',
    protein: '٢٨ غ',
    carbs: '٥٠ غ',
    sodium: '٠.٩ غ',
    cost: '٤٧ ر.س',
    priceEur: '€13.5',
    priceNum: 47,
    rating: '٤.٨',
    reviewsCount: 134,
    difficulty: 'نقي وعطري',
    extractionHours: '٩ ساعات ترويق شفاف',
    hydrationRate: '٣٠٪ نودلز ملساء رفيعة',
    servingTemp: '٨٥°م حرارة السكب',
    ingredients: [
      { id: 'yuzu-zest', name: 'بشر قشور اليوزو', subtitle: 'حمضيات كوتشي الجبلية', image: '/src/assets/images/citrus_botanicals_1789137312377.jpg' },
      { id: 'chicken-chashu', name: 'صدر دجاج مدخن', subtitle: 'طهي على حرارة ٦٤°م', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=400&q=80' },
    ],
    metrics: { texture: 80, richness: 65, spice: 10, aroma: 98, extraction: 86 },
    chefNotes: 'استنشق البخار الحمضي الزكي قبل أخذ أول رشفة لفتح براعم التذوق.',
    recommendedPairing: 'مياه غازية بقطع الخيار والنعناع البري.'
  },

  // 05 — FEATURED DISH 1: Truffle Mushroom Ramen
  {
    id: 'truffle-mushroom-ramen',
    number: '05',
    category: 'الإصدار الحصري الموسمي • مميز',
    categoryTag: 'specials',
    featured: true,
    featuredBadge: 'SEASONAL SPECIAL',
    name: 'رامن الكمأة وفطر الموريل البري',
    nameEn: 'Truffle Mushroom Ramen',
    japaneseTitle: '黒トリュフ茸拉麺',
    subtitle: 'زيت كمأة سوداء عضوية · مرق فطر الموريل والشيتاكي · صفار بيض هلامي',
    subtitleEn: 'Black truffle essence · wild morel dashi · cured golden yolk',
    description: 'تحفة نباتية فاخرة؛ مرق داشي نقي مستخلص من فطر الكومبو والشيتاكي المجفف، مغمور بزيت الكمأة الإيطالية العضوية ونودلز عريضة مسبوكة يدوياً.',
    longStory: 'أرقى إبداعات موسم الخريف والشتاء؛ نجمع بين أندر أنواع الفطر البري المحصود في الغابات الشمالية مع زيت الكمأة السوداء المعصور على البارد. النودلز العريضة المتموجة صممت خصيصاً لتلتقط كل قطرة من هذا المرق الحريري العميق.',
    image: '/src/assets/images/truffle_ramen_1789144564827.jpg',
    cookTime: '١٩ د',
    calories: '٥١٠ سعرة',
    protein: '١٩ غ',
    carbs: '٥٩ غ',
    sodium: '١.٠ غ',
    cost: '٥٦ ر.س',
    priceEur: '€16.5',
    priceNum: 56,
    rating: '٥.٠',
    reviewsCount: 220,
    difficulty: 'فاخر ومعقد',
    extractionHours: '١٦ ساعة استخلاص بارد وحار',
    hydrationRate: '٢٧٪ نودلز عريضة مسطحة',
    servingTemp: '٨٦°م حرارة السكب',
    ingredients: [
      { id: 'truffle-extract', name: 'زيت الكمأة السوداء', subtitle: 'استخلاص عضوي نقي', image: '/src/assets/images/ingredient_tasting_bowls_1789137296645.jpg' },
      { id: 'morel-mushrooms', name: 'فطر الموريل البري', subtitle: 'تحمير خفيف بزبدة الكاجو', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=400&q=80' },
      { id: 'cured-yolk', name: 'صفار بيض معتق', subtitle: 'نقع في صويا التاماري', image: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&w=400&q=80' },
      { id: 'lotus-chips', name: 'رقائق جذر اللوتس المقرمشة', subtitle: 'قلي سريع خفيف', image: 'https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=400&q=80' },
    ],
    metrics: { texture: 95, richness: 92, spice: 15, aroma: 99, extraction: 96 },
    chefNotes: 'اكسر صفار البيض المعتق داخل المرق ودعه يمتزج بزيت الكمأة لتكوين صلصة كريمية تغلف كل شريحة نودلز.',
    recommendedPairing: 'شاي الجيوكورو الأخضر الفاخر المقطوف في الظل.'
  },

  // 06
  {
    id: 'chili-butter-ramen',
    number: '06',
    category: 'رامن الزبدة والفلفل الدخاني',
    categoryTag: 'ramen',
    name: 'رامن زبدة الفلفل الهوكايدو',
    nameEn: 'Chili Butter Ramen',
    japaneseTitle: '辛味噌牛酪拉麺',
    subtitle: 'ميسو أحمر مدخن · مكعب زبدة هوكايدو خام · زيت فلفل الكورياندر',
    subtitleEn: 'Smoked red miso · Hokkaido cultured butter · toasted chili oil',
    description: 'توليفة غنية تجمع دفء الميسو الأحمر مع مكعب زبدة هوكايدو غير المبسترة التي تذوب ببطء لتمنح المرق قواماً كريمياً مغرياً.',
    longStory: 'تحية لمطبخ شمال اليابان الشتوي القارس؛ نضع مكعباً من زبدة هوكايدو المخمرة فوق رامن الميسو الحار، لتذوب تدريجياً وتخفف حدة الفلفل بنعومة حليبية غنية بالأومامي.',
    image: '/src/assets/images/chili_butter_miso_1789144746029.jpg',
    cookTime: '١٧ د',
    calories: '٦٣٠ سعرة',
    protein: '٢١ غ',
    carbs: '٦٤ غ',
    sodium: '١.٣ غ',
    cost: '٥١ ر.س',
    priceEur: '€14.5',
    priceNum: 51,
    rating: '٤.٩',
    reviewsCount: 160,
    difficulty: 'غني ومدفئ',
    extractionHours: '١٣ ساعة غليان متدرج',
    hydrationRate: '٢٩٪ نودلز سميكة',
    servingTemp: '٨٩°م حرارة السكب',
    ingredients: [
      { id: 'hokkaido-butter', name: 'زبدة هوكايدو النقية', subtitle: 'حليب أبقار المرعى الطبيعي', image: '/src/assets/images/ingredient_tasting_bowls_1789137296645.jpg' },
      { id: 'red-miso', name: 'ميسو سنداي الأحمر', subtitle: 'تعتيق سنتين', image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=400&q=80' },
    ],
    metrics: { texture: 90, richness: 95, spice: 65, aroma: 93, extraction: 91 },
    chefNotes: 'لا تخلط الزبدة فوراً؛ اتركها تذوب ذاتياً مع كل لقمة لتستمتع بتباين النكهات.',
    recommendedPairing: 'شاي الموغيشا (شاي الشعير المحمص).'
  },

  // 07
  {
    id: 'shoyu-classic-ramen',
    number: '07',
    category: 'رامن الصويا الكلاسيكي الأصيل',
    categoryTag: 'ramen',
    name: 'طوكيو شوكازاري صويا كلاسيك',
    nameEn: 'Shoyu Classic Ramen',
    japaneseTitle: '東京醤油拉麺',
    subtitle: 'صويا معتقة ١٠ سنوات · مرق دجاج مصفى كالذهب · شرائح شاشو',
    subtitleEn: 'Cedar barrel shoyu · golden chicken broth · braised chashu',
    description: 'مرق صافٍ كالذهب الخالص، تاري صويا معتقة في خشب الأرز لعقد كامل، مع شرائح الشاشو المكرملة وورق النوري الفاخر.',
    longStory: 'أصدق تمثيل للرامن الياباني النقي؛ صممت هذه الوصفة لتحتفي بحبوب الصويا المخمرة طبيعياً بدون أي مواد تسريع، ليظهر عبق الخشب المعتق والملوحة المتوازنة في كل قطرة مرق.',
    image: '/src/assets/images/tokyo_shoyu_bowl_1789144729567.jpg',
    cookTime: '١٨ د',
    calories: '٤٦٠ سعرة',
    protein: '٢٥ غ',
    carbs: '٥٣ غ',
    sodium: '١.٠ غ',
    cost: '٤٦ ر.س',
    priceEur: '€13',
    priceNum: 46,
    rating: '٤.٩',
    reviewsCount: 188,
    difficulty: 'أصيل ونقي',
    extractionHours: '١٠ ساعات استخلاص هادئ',
    hydrationRate: '٣٠٪ نودلز مستقيمة ناعمة',
    servingTemp: '٨٧°م حرارة السكب',
    ingredients: [
      { id: 'barrel-shoyu', name: 'صويا براميل الأرز', subtitle: 'تعتيق ١٠ سنوات', image: '/src/assets/images/ingredient_tasting_bowls_1789137296645.jpg' },
      { id: 'norisheet', name: 'أوراق النوري الممتازة', subtitle: 'حصاد شتوي من خليج أرياكي', image: 'https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=400&q=80' },
    ],
    metrics: { texture: 84, richness: 72, spice: 15, aroma: 91, extraction: 89 },
    chefNotes: 'المرق الشفاف لا يخفي عيباً؛ هذا الوعاء هو اختبار الدقة المتناهية لشيف الرامن الحرفي.',
    recommendedPairing: 'شاي السينشا الفاتر أو مياه ينبوع عذبة.'
  },

  // 08
  {
    id: 'miso-corn-ramen',
    number: '08',
    category: 'رامن الذرة الحلوة والميسو الذهبي',
    categoryTag: 'ramen',
    name: 'رامن ذرة هوكايدو والميسو',
    nameEn: 'Miso Corn Ramen',
    japaneseTitle: '北海道玉蜀黍味噌',
    subtitle: 'ذرة سكرية مكرملة بالفحم · ميسو أبيض حريري · بصل مقرمش',
    subtitleEn: 'Charred sweetcorn · white silk miso · crispy shallots',
    description: 'حبات الذرة الحلوة المشوية على الفحم، تسبح في مرق الميسو الأبيض المعتق مع لمسة زبدية خفيفة وقرمشة البصل المكرمل.',
    longStory: 'حلاوة الذرة الطبيعية تكسر كثافة مرق الميسو لتخلق تناغماً يحبه الصغار والكبار، نحمص حبوب الذرة فوق جمر فحم البينشوتان قبل إضافتها للوعاء لتكتسب نكهة دخانية ساحرة.',
    image: '/src/assets/images/corn_butter_miso_1789144685487.jpg',
    cookTime: '١٥ د',
    calories: '٥٤٠ سعرة',
    protein: '١٧ غ',
    carbs: '٦٥ غ',
    sodium: '١.١ غ',
    cost: '٤٨ ر.س',
    priceEur: '€13.5',
    priceNum: 48,
    rating: '٤.٨',
    reviewsCount: 126,
    difficulty: 'حلو ومدخن',
    extractionHours: '١١ ساعة استخلاص ناعم',
    hydrationRate: '٢٨٪ نودلز متموجة',
    servingTemp: '٨٦°م حرارة السكب',
    ingredients: [
      { id: 'sweet-corn', name: 'ذرة هوكايدو السكرية', subtitle: 'شواء على فحم البينشوتان', image: '/src/assets/images/ingredient_tasting_bowls_1789137296645.jpg' },
      { id: 'white-miso', name: 'ميسو كيوتو الأبيض', subtitle: 'تخمير خفيف قليل الملوحة', image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=400&q=80' },
    ],
    metrics: { texture: 86, richness: 84, spice: 20, aroma: 92, extraction: 88 },
    chefNotes: 'استخدم الملعقة المثقوبة لجمع حبات الذرة المقرمشة مع رشفات المرق الحلوة.',
    recommendedPairing: 'شاي الجنمايتشا (شاي أخضر بالأرز المحمص).'
  },

  // 09
  {
    id: 'roasted-garlic-ramen',
    number: '09',
    category: 'رامن الثوم المشوي المركز',
    categoryTag: 'ramen',
    name: 'رامن الثوم المحمص البطيء',
    nameEn: 'Roasted Garlic Ramen',
    japaneseTitle: '焦がし大蒜拉麺',
    subtitle: 'فصوص ثوم مكرملة بالبطء · مرق غني دسم · رقائق ثوم ذهبية',
    subtitleEn: 'Confit garlic cloves · rich emulsion broth · garlic crunch crisps',
    description: 'ثوم كونديه مطهو ببطء في زيت الزيتون والسمسم لمدة ٦ ساعات حتى صار كالمعجون الحريري، ممزوج بمرق العظام الكثيف.',
    longStory: 'عشاق الثوم يجدون في هذا الوعاء غايتهم القصوى؛ حيث نستخلص الثوم بثلاث صور مختلفة: فصوص مطهوة كونديه، وزيت ثوم مقطر، ورقائق ثوم مقرمشة كلمسة نهائية تعلو الوعاء.',
    image: '/src/assets/images/roasted_garlic_bowl_1789144760467.jpg',
    cookTime: '٢١ د',
    calories: '٦١٠ سعرة',
    protein: '٢٣ غ',
    carbs: '٥٩ غ',
    sodium: '١.٢ غ',
    cost: '٥٠ ر.س',
    priceEur: '€14',
    priceNum: 50,
    rating: '٤.٩',
    reviewsCount: 154,
    difficulty: 'كثيف ومركز',
    extractionHours: '١٧ ساعة ترويق عميق',
    hydrationRate: '٢٧٪ نودلز صلبة',
    servingTemp: '٨٩°م حرارة السكب',
    ingredients: [
      { id: 'garlic-confit', name: 'ثوم كونديه ببطء', subtitle: 'كرملة ٦ ساعات على حرارة هادئة', image: '/src/assets/images/ingredient_tasting_bowls_1789137296645.jpg' },
      { id: 'garlic-chips', name: 'رقائق ثوم مقرمشة', subtitle: 'قلي سريع خفيف', image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=400&q=80' },
    ],
    metrics: { texture: 91, richness: 95, spice: 40, aroma: 97, extraction: 95 },
    chefNotes: 'اطحن فصوص الثوم الطرية بظهر الملعقة داخل المرق لتتحول الشوربة إلى كريمة مخملية دافئة.',
    recommendedPairing: 'شاي الهوجيتشا الداكن أو ماء مثلج بشرائح الليمون.'
  },

  // 10 — FEATURED DISH 2: Sesame Tantanmen
  {
    id: 'sesame-tantanmen-master',
    number: '10',
    category: 'إصدار المعلم الحرفي • تانتانمن',
    categoryTag: 'specials',
    featured: true,
    featuredBadge: 'CHEF’S SELECTION',
    name: 'ميزين تانتانمن المعلم الحرفي',
    nameEn: 'Sesame Tantanmen',
    japaneseTitle: '極上四川担々麺',
    subtitle: 'معجون سمسم ذهبي مضاعف · لحم مفروم بالتاري الحار · خدران سيتشوان المنعش',
    subtitleEn: 'Double-roasted golden sesame · spiced minced glazes · tingling Sichuan peppercorns',
    description: 'أقوى أطباقنا أثراً في الذاكرة؛ قوام سمسم كثيف كالصلصة الإيطالية، فلفل سيتشوان أخضر نادر يمنح خدراناً لذيذاً، وخضار بوك تشوي طازجة مقرمشة.',
    longStory: 'أعدنا صياغة التانتانمن ليصبح عملاً فنياً قائماً بذاته؛ نطحن بذور السمسم مرتين على درجات حرارة مختلفة لنوازن بين الحلاوة الطبيعية والعبير المحمص، ثم نضيف مفروم اللحم المتبل بخل التاماري المعتق لعشر سنوات وزيت فلفل الحجر الصوان.',
    image: '/src/assets/images/sesame_tantanmen_1789144579723.jpg',
    cookTime: '٢٠ د',
    calories: '٦٥٠ سعرة',
    protein: '٢٧ غ',
    carbs: '٦١ غ',
    sodium: '١.٤ غ',
    cost: '٥٤ ر.س',
    priceEur: '€15.5',
    priceNum: 54,
    rating: '٥.٠',
    reviewsCount: 245,
    difficulty: 'حار وعميق الأثر',
    extractionHours: '١٥ ساعة استخلاص مكثف',
    hydrationRate: '٢٦٪ نودلز سميكة مجعدة',
    servingTemp: '٩١°م حرارة السكب',
    ingredients: [
      { id: 'stone-sesame-double', name: 'طحينة سمسم مضاعفة التحميص', subtitle: 'قوام مخملي مكثف', image: '/src/assets/images/ingredient_tasting_bowls_1789137296645.jpg' },
      { id: 'green-sichuan', name: 'فلفل سيتشوان الأخضر المبرد', subtitle: 'خدران حمضي زكي', image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=400&q=80' },
      { id: 'crisp-bokchoy', name: 'أوراق البوك تشوي الجبلية', subtitle: 'سلق بخاري ٤٠ ثانية', image: 'https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=400&q=80' },
      { id: 'chili-thread', name: 'خيوط الفلفل الحريرية', subtitle: 'توابل تزيين أرستقراطية', image: 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?auto=format&fit=crop&w=400&q=80' },
    ],
    metrics: { texture: 94, richness: 97, spice: 88, aroma: 98, extraction: 95 },
    chefNotes: 'تذوق الطبقة العلوية بهدوء ثم اقلب محتويات الوعاء بالكامل لتمتزج كل قطرة نودلز بعصارة التانتانمن الحارة.',
    recommendedPairing: 'شاي الأولونغ الحجري المعتق المبرد.'
  },

  // 11
  {
    id: 'citrus-shio-ramen',
    number: '11',
    category: 'رامن الملح والليمون الزهري',
    categoryTag: 'ramen',
    name: 'رامن الحمضيات والملح البحري (شيئو)',
    nameEn: 'Citrus Shio Ramen',
    japaneseTitle: '柑橘塩拉麺',
    subtitle: 'ملح جزيرة أوشيما النقي · شرائح ليمون يوزو طازجة · مرق داشي رقيق',
    subtitleEn: 'Oshima sea crystals · fresh yuzu wheels · delicate dashi broth',
    description: 'أخف أوعيتنا قواماً وأكثرها صفاء؛ بلورات ملح بحري مستخرجة من مياه المحيط العميقة، مع شرائح ليمون ويوزو تطفو فوق مرق الداشي النقي.',
    longStory: 'صمم هذا الوعاء لمن يبحث عن النقاء المطلق؛ مرق خفيف كالنسيم ولكنه مفعم بأحماض الأومامي الطبيعية المستخلصة من أعشاب الكومبو وفطر الشيتاكي والملح الشمسي العتيق.',
    image: '/src/assets/images/citrus_shio_bowl_1789144700119.jpg',
    cookTime: '١٤ د',
    calories: '٣٨٠ سعرة',
    protein: '١٥ غ',
    carbs: '٥١ غ',
    sodium: '٠.٨ غ',
    cost: '٤٥ ر.س',
    priceEur: '€13',
    priceNum: 45,
    rating: '٤.٨',
    reviewsCount: 98,
    difficulty: 'منعش ونقي',
    extractionHours: '٨ ساعات استخلاص بارد',
    hydrationRate: '٣١٪ نودلز رفيعة حريرية',
    servingTemp: '٨٣°م حرارة السكب',
    ingredients: [
      { id: 'sea-salt-pure', name: 'ملح بحري من جزيرة أوشيما', subtitle: 'بلورات شمسية طبيعية', image: '/src/assets/images/ingredient_tasting_bowls_1789137296645.jpg' },
      { id: 'citrus-slices', name: 'شرائح الحمضيات واليوزو', subtitle: 'قطاف صباحي طازج', image: '/src/assets/images/citrus_botanicals_1789137312377.jpg' },
    ],
    metrics: { texture: 78, richness: 58, spice: 10, aroma: 97, extraction: 85 },
    chefNotes: 'اضغط على شرائح الحمضيات برفق بواسطة عيدان الطعام قبل البدء لتحرير الزيوت العطرية في المرق.',
    recommendedPairing: 'ماء ينابيع مثلج مع لمسة خيار.'
  },

  // 12
  {
    id: 'smoky-tofu-ramen',
    number: '12',
    category: 'رامن التوفو المدخن والأعشاب الجبلية',
    categoryTag: 'ramen',
    name: 'رامن التوفو المدخن بخشب الأرز',
    nameEn: 'Smoky Tofu Ramen',
    japaneseTitle: '燻製豆腐拉麺',
    subtitle: 'توفو عضوي مدخن على خشب الأرز · مرق الكومبو المركز · براعم مقرمشة',
    subtitleEn: 'Cedarwood smoked tofu · rich kombu broth · mountain spring greens',
    description: 'إبداع نباتي متكامل؛ مكعبات توفو حريرية مدخنة على فحم البينشوتان وخشب الأرز، تسبح في مرق كومبو معتق مع رقائق جذر اللوتس المقرمشة.',
    longStory: 'نثبت من خلال هذا الوعاء أن الرامن النباتي يمكن أن يكون بنفس عمق وكثافة أعظم أطباق مرق اللحم؛ التوفو يُصنع يدوياً من فول الصويا العضوي ويُدخن بعناية على خشب الأرز ليمتص نكهة حطب الشتاء.',
    image: '/src/assets/images/smoky_tofu_bowl_1789144715694.jpg',
    cookTime: '١٦ د',
    calories: '٤٢٠ سعرة',
    protein: '٢٠ غ',
    carbs: '٥٥ غ',
    sodium: '٠.٩ غ',
    cost: '٤٦ ر.س',
    priceEur: '€13.5',
    priceNum: 46,
    rating: '٤.٩',
    reviewsCount: 148,
    difficulty: 'مدخن ونباتي متكامل',
    extractionHours: '١٠ ساعات استخلاص نباتي حريري',
    hydrationRate: '٢٩٪ نودلز متموجة خفيفة',
    servingTemp: '٨٦°م حرارة السكب',
    ingredients: [
      { id: 'smoked-tofu', name: 'توفو مدخن على خشب الأرز', subtitle: 'تدخين بارد لمدة ٤ ساعات', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=400&q=80' },
      { id: 'kombu-dashi', name: 'داشي الكومبو المعتق', subtitle: 'أعشاب بحرية من هوكايدو', image: '/src/assets/images/ingredient_tasting_bowls_1789137296645.jpg' },
    ],
    metrics: { texture: 85, richness: 74, spice: 15, aroma: 96, extraction: 90 },
    chefNotes: 'تذوق التوفو أولاً لتشعر بنكهة الدخان الخشبي الصافية، ثم اغمره في المرق النباتي.',
    recommendedPairing: 'شاي الهوجيتشا أو شاي البانشا الخريفي.'
  },

  // 13 — NEW FOOD ITEM 1 (SIDES): Artisan Wagyu Gyoza
  {
    id: 'artisan-wagyu-gyoza',
    number: '13',
    category: 'الأطباق الجانبية الحرفية • غيوزا ذهبية',
    categoryTag: 'sides',
    name: 'غيوزا واغيو المقرمشة بالثوم الأسود',
    nameEn: 'Artisan Wagyu Gyoza',
    japaneseTitle: '和牛羽根餃子',
    subtitle: 'حشوة واغيو مفرومة يدوياً · دانتيل مقرمش ذهبي · صوص التاماري الحار',
    subtitleEn: 'Crispy lacy skirt · hand-minced Wagyu · chili tamari glaze',
    description: 'فطائر غيوزا يابانية مشوية على صفيح حديدي مع شبكة دانتيل مقرمشة رقيقة للغاية، محشوة بلحم الواغيو المتبل بالزنجبيل البري والثوم المكرمل.',
    longStory: 'تجسيد لفن المقرمشات اليابانية؛ نحضر عجينة الغيوزا بسماكة نصف مليمتر لتحافظ على رقتها مع الحشوة الغنية بالعصارة، ونشويها بطريقة الـ Hanetsuki لتكوين دانتيل ذهبي يذوب في الفم.',
    image: '/src/assets/images/artisan_gyoza_1789144597413.jpg',
    cookTime: '١٠ د',
    calories: '٣٦٠ سعرة',
    protein: '١٩ غ',
    carbs: '٢٨ غ',
    sodium: '٠.٧ غ',
    cost: '٣٦ ر.س',
    priceEur: '€10',
    priceNum: 36,
    rating: '٥.٠',
    reviewsCount: 164,
    difficulty: 'مقرمش وعصاري',
    extractionHours: 'تخمير عجينة يدوي ٤ ساعات',
    hydrationRate: '٣٢٪ رقة العجين',
    servingTemp: '٩٢°م تقديم فوري ساخن',
    ingredients: [
      { id: 'wagyu-filling', name: 'لحم واغيو مفروم يدوياً', subtitle: 'تتبيل زنجبيل وثوم أسود', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=400&q=80' },
      { id: 'tamari-dip', name: 'صلصة تاماري الحرفية', subtitle: 'خل الأرز مع زيت الفلفل', image: '/src/assets/images/ingredient_tasting_bowls_1789137296645.jpg' },
    ],
    metrics: { texture: 96, richness: 85, spice: 35, aroma: 92, extraction: 80 },
    chefNotes: 'اكسر الدانتيل المقرمش بأطراف العيدان واغمس الغيوزا بنصفها في صلصة التاماري الحارة.',
    recommendedPairing: 'شاي سينشا أخضر مبرد أو مشروب يوزو فوار.'
  },

  // 14 — NEW FOOD ITEM 2 (SIDES): Tori Karaage with Yuzu Mayo
  {
    id: 'crispy-tori-karaage',
    number: '14',
    category: 'الأطباق الجانبية الحرفية • كاراجي مقرمش',
    categoryTag: 'sides',
    name: 'كاراجي الدجاج المقرمش بصلصة اليوزو كوشو',
    nameEn: 'Crispy Tori Karaage',
    japaneseTitle: '柚子胡椒唐揚げ',
    subtitle: 'قرمشة مزدوجة خفيفة · دجاج مرعى حر منقوع بالساكي · مايونيز اليوزو',
    subtitleEn: 'Double-fried crispiness · sake marinated chicken · yuzu pepper emulsion',
    description: 'قطع دجاج متبلة بالزنجبيل والساكي وصلصة الصويا لمدة ١٢ ساعة، مقلية مرتين بقشرة نشا بطاطس هوكايدو الهوائية، تقدم مع مايونيز اليوزو الحريري.',
    longStory: 'سر القرمشة الاستثنائية يكمن في القلي بدرجتين حراريتين مختلفتين؛ الأولى لحبس العصارة داخل قطع الدجاج، والثانية السريعة لإعطاء صوت القرمشة الذهبية الرنان دون امتصاص أي زيت فائض.',
    image: '/src/assets/images/crispy_karaage_1789144613456.jpg',
    cookTime: '١٢ د',
    calories: '٤٢٠ سعرة',
    protein: '٢٤ غ',
    carbs: '٢٢ غ',
    sodium: '٠.٨ غ',
    cost: '٣٤ ر.س',
    priceEur: '€9.5',
    priceNum: 34,
    rating: '٤.٩',
    reviewsCount: 182,
    difficulty: 'مقرمش وهش',
    extractionHours: 'نقع ١٢ ساعة بالزنجبيل',
    hydrationRate: 'تغليف نشا البطاطس',
    servingTemp: '٨٨°م حرارة السكب',
    ingredients: [
      { id: 'marinated-chicken', name: 'دجاج المرعى المتبل', subtitle: 'نقع في الميرين والزنجبيل', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=400&q=80' },
      { id: 'yuzu-kosho-mayo', name: 'مايونيز اليوزو كوشو', subtitle: 'فلفل يوزو مخمر ناعم', image: '/src/assets/images/citrus_botanicals_1789137312377.jpg' },
    ],
    metrics: { texture: 98, richness: 82, spice: 25, aroma: 94, extraction: 84 },
    chefNotes: 'اعصر شريحة الليمون الطازجة فوق القطع مباشرة واستمتع بالقرمشة مع صلصة اليوزو.',
    recommendedPairing: 'مشروب شاي البانشا الخريفي أو شاي الشعير المحمص.'
  },

  // 15 — NEW FOOD ITEM 3 (DRINKS): Kyoto Cold-Brew Sencha
  {
    id: 'kyoto-cold-brew-sencha',
    number: '15',
    category: 'المشروبات الحرفية الباردة • شاي معتق',
    categoryTag: 'drinks',
    name: 'شاي سينشا كيوتو المستخلص على البارد',
    nameEn: 'Kyoto Cold-Brew Sencha',
    japaneseTitle: '京都水出し煎茶',
    subtitle: 'استخلاص بطيء بالجليد ١٠ ساعات · وريقات شاي الربيع الأولى · أرز محمص',
    subtitleEn: '10-hour ice-drop extraction · first-flush spring leaves · toasted genmai',
    description: 'شاي أخضر فاخر من مزارع أوجي في كيوتو، مستخلص قطرة بقطرة فوق كتل الجليد النقية لإطلاق حلاوة الثيانين الطبيعية دون أي مرارة.',
    longStory: 'طريقة التقطير البطيء المائي (Mizudashi) تمنع تحرر العفص المر، فتظهر النكهات النباتية الزهرية الصافية ونفحات الأرز البني المحمص التي تنعش الحنك تماماً بين لقيمات الرامن.',
    image: '/src/assets/images/kyoto_sencha_1789144625629.jpg',
    cookTime: '٥ د',
    calories: '١٢ سعرة',
    protein: '٠ غ',
    carbs: '٣ غ',
    sodium: '٠.٠ غ',
    cost: '٢٤ ر.س',
    priceEur: '€6.5',
    priceNum: 24,
    rating: '٥.٠',
    reviewsCount: 115,
    difficulty: 'منعش ومطهر للذائقة',
    extractionHours: '١٠ ساعات تقطير جليدي',
    hydrationRate: 'مياه ينابيع جبلية نقية',
    servingTemp: '٣°م مبرد مع كرة جليد',
    ingredients: [
      { id: 'uji-sencha-leaves', name: 'أوراق سينشا أوجي الربيعية', subtitle: 'حصاد أول يدوي', image: '/src/assets/images/ingredient_tasting_bowls_1789137296645.jpg' },
      { id: 'pure-spring-ice', name: 'جليد المياه الجبلية', subtitle: 'نقاء بلوري عالي', image: '/src/assets/images/kyoto_sencha_1789144625629.jpg' },
    ],
    metrics: { texture: 70, richness: 30, spice: 0, aroma: 98, extraction: 94 },
    chefNotes: 'اشرب رشفة قبل بدء وجبتك لتنظيف براعم التذوق والاستعداد لطبقات مرق الرامن.',
    recommendedPairing: 'مثالي مع كافة أطباق الرامن الدسمة مثل الكومو ميسو والتونكوتسو.'
  },

  // 16 — NEW FOOD ITEM 4 (SIDES & RICE): Torched Wagyu Chashu Donburi (Replaces juice with artisan food dish)
  {
    id: 'wagyu-chashu-donburi',
    number: '16',
    category: 'أطباق جانبية وأرز • دونبوري التشارشو المشوي',
    categoryTag: 'sides',
    featuredBadge: 'RICE ATELIER',
    name: 'وعاء دونبوري التشارشو المشوي مع بيضة الأونسن',
    nameEn: 'Torched Wagyu Chashu Donburi',
    japaneseTitle: '炙り叉焼温泉卵丼',
    subtitle: 'شرائح لحم واغيو مكرملة باللهب · بيضة أونسن طرية · أرز كوشيهيكاري معتق',
    subtitleEn: 'Flame-torched caramelized wagyu · golden onsen egg · seasoned Koshihikari rice',
    description: 'أرز كوشيهيكاري ياباني دافئ متبل بصلصة التاري الحلوة، مغطى بشرائح واغيو مدخنة باللهب السريع، وتتوسطه بيضة أونسن طازجة بصفار كريمي سائل وبصل أخضر مجعد.',
    longStory: 'طبق الأرز الأيقوني الذي يكمل تجربة الرامن؛ نكرمل شرائح الواغيو على شعلة نار مباشرة لتحرير الشحوم العطرية السكرية، وتنساب صلصة التاري المعتقة عبر حبات الأرز اللامعة، بينما يمنح صفار بيضة الأونسن قواماً مخملياً غنياً يربط كافة النكهات.',
    image: '/src/assets/images/chashu_donburi_bowl_1789145291570.jpg',
    cookTime: '١٠ د',
    calories: '٤٨٠ سعرة',
    protein: '٢٨ غ',
    carbs: '٥٢ غ',
    sodium: '٠.٩ غ',
    cost: '٣٨ ر.س',
    priceEur: '€10.5',
    priceNum: 38,
    rating: '٥.٠',
    reviewsCount: 198,
    difficulty: 'مكرمل وكريمي',
    extractionHours: 'طهي أرز بالبخار ٢٥ دقيقة',
    hydrationRate: 'أرز هوكايدو كوشيهيكاري',
    servingTemp: '٨٥°م حرارة السكب',
    ingredients: [
      { id: 'torched-wagyu-slices', name: 'شرائح واغيو مكرملة باللهب', subtitle: 'تحمير سطحي سريع بدرجة ٨٠٠°م', image: '/src/assets/images/chashu_donburi_bowl_1789145291570.jpg' },
      { id: 'golden-onsen-egg', name: 'بيضة أونسن بدرجة ٦٣°م', subtitle: 'صفار مخملي ذهبي سائل', image: '/src/assets/images/ingredient_tasting_bowls_1789137296645.jpg' },
      { id: 'koshihikari-rice', name: 'أرز كوشيهيكاري معتق', subtitle: 'حبات متماسكة لامعة', image: '/src/assets/images/ingredient_tasting_bowls_1789137296645.jpg' },
    ],
    metrics: { texture: 95, richness: 92, spice: 15, aroma: 98, extraction: 85 },
    chefNotes: 'افقع صفار بيضة الأونسن في منتصف الوعاء ودع العصارة الذهبية تسيل فوق شرائح اللحم والأرز الساخن قبل أول لقمة.',
    recommendedPairing: 'شاي سينشا كيوتو المبرد أو رامن شوكوكو الكلاسيكي.'
  },

  // 17 — NEW FOOD ITEM 5 (SPECIALS): Smoked Duck Breast Chashu Ramen
  {
    id: 'smoked-duck-shoyu-ramen',
    number: '17',
    category: 'الإصدار الخاص الفاخر • رامن البط المدخن',
    categoryTag: 'specials',
    featured: false,
    featuredBadge: 'MASTER SPECIAL',
    name: 'رامن صدر البط المدخن مع صويا التاماري',
    nameEn: 'Smoked Duck Breast Shoyu',
    japaneseTitle: '鴨南蛮極上拉麺',
    subtitle: 'شرائح بط مدخن بخشب الكرز · كراث مشوي بالفحم · مرق داشي صافٍ',
    subtitleEn: 'Sakura-smoked duck breast · binchotan grilled leeks · aged tamari shoyu',
    description: 'إصدار ملكي يجمع صدر بط فرنسي طري مدخن على نشارة خشب الكرز، مع كراث مشوي حتى الكرملة، ونودلز قمح رفيعة في مرق صويا معتقة.',
    longStory: 'يقف هذا الوعاء في قمة ابتكاراتنا؛ تدخين لحم البط على نار خشب الساكورا الهادئة يمنحه نكهة غنية تمتزج بحلاوة الكراث المشوي على فحم البينشوتان. مرق الداشي يُعد بنسبة محسوبة من الكومبو المجفف ليعزز أومامي اللحم دون طمس صفائه.',
    image: '/src/assets/images/duck_shoyu_ramen_1789144638578.jpg',
    cookTime: '٢٢ د',
    calories: '٥٨٠ سعرة',
    protein: '٣٢ غ',
    carbs: '٥٤ غ',
    sodium: '١.١ غ',
    cost: '٥٨ ر.س',
    priceEur: '€17',
    priceNum: 58,
    rating: '٥.٠',
    reviewsCount: 210,
    difficulty: 'أرستقراطي ومعقد',
    extractionHours: '١٤ ساعة ترويق هادئ',
    hydrationRate: '٢٨٪ نودلز رفيعة حريرية',
    servingTemp: '٨٨°م حرارة السكب',
    ingredients: [
      { id: 'sakura-duck', name: 'صدر بط مدخن بخشب الكرز', subtitle: 'طهي بطيء متدرج', image: '/src/assets/images/duck_shoyu_ramen_1789144638578.jpg' },
      { id: 'charred-leeks', name: 'كراث مشوي على الفحم', subtitle: 'كرملة سكرية طبيعية', image: '/src/assets/images/ingredient_tasting_bowls_1789137296645.jpg' },
      { id: 'aged-tamari', name: 'صويا تاماري براميل الأرز', subtitle: 'تعتيق سنتين', image: '/src/assets/images/ingredient_tasting_bowls_1789137296645.jpg' },
    ],
    metrics: { texture: 96, richness: 94, spice: 10, aroma: 99, extraction: 97 },
    chefNotes: 'تذوق شريحة البط مع قطعة من الكراث المشوي أولاً لتستمتع بالنكهة الدخانية، ثم احتسِ المرق الدافئ.',
    recommendedPairing: 'شاي الأولونغ الحجري المعتق أو شاي الهوجيتشا الدافئ.'
  },

  // 18 — NEW FOOD ITEM 6 (SPECIALS): Wagyu Tsukemen Dipping Ramen
  {
    id: 'wagyu-tsukemen',
    number: '18',
    category: 'إصدار التسوكمين الخاص • رامن الغمس',
    categoryTag: 'specials',
    featured: false,
    featuredBadge: 'CHEF ATELIER',
    name: 'تسوكمين الواغيو بمرق البونيتو المركز',
    nameEn: 'Hokkaido Wagyu Tsukemen',
    japaneseTitle: '特製和牛つけ麺',
    subtitle: 'نودلز سميكة مبردة بالجليد · مرق غمس كثيف مستخلص ١٦ ساعة · شرائح واغيو',
    subtitleEn: 'Chilled thick dipping noodles · 16-hour concentrated bonito broth · wagyu chashu',
    description: 'تجربة التسوكمين الأصلية؛ نودلز قمح سميكة مسلوقة ومبردة بماء مثلج لتمنح أقصى درجات المرونة، تغمس في مرق بونيتو وتونكوتسو غليظ مفعم بالأومامي مع شرائح واغيو طرية.',
    longStory: 'فن رامن الغمس يكمن في الفصل المدروس بين المرق المركز والنودلز؛ فالمرق يستخلص حتى يصل لدرجة لزوجة حريرية تلف خيوط النودلز الباردة بإحكام في كل غمسة، وتذوب دهون الواغيو الدافئة فور ملامستها لحرارة وعاء الغمس.',
    image: '/src/assets/images/wagyu_tsukemen_bowl_1789146874308.jpg',
    cookTime: '١٨ د',
    calories: '٦٢٠ سعرة',
    protein: '٣٤ غ',
    carbs: '٦٨ غ',
    sodium: '١.٣ غ',
    cost: '٥٦ ر.س',
    priceEur: '€16',
    priceNum: 56,
    rating: '٥.٠',
    reviewsCount: 165,
    difficulty: 'مكثف وتجربة غمس فريدة',
    extractionHours: '١٦ ساعة استخلاص مركز',
    hydrationRate: '٣٢٪ نودلز سميكة متموجة',
    servingTemp: '٩٢°م لمرق الغمس / ٤°م للنودلز',
    ingredients: [
      { id: 'thick-wheat-noodles', name: 'نودلز القمح السميكة', subtitle: 'تبريد فوري بالماء المثلج', image: '/src/assets/images/wagyu_tsukemen_bowl_1789146874308.jpg' },
      { id: 'bonito-concentrate', name: 'مرق البونيتو والتونكوتسو المركز', subtitle: 'كثافة أومامي ثلاثية', image: '/src/assets/images/ingredient_tasting_bowls_1789137296645.jpg' },
      { id: 'wagyu-chashu', name: 'شرائح واغيو تشارشو', subtitle: 'نقع بطيء بالساكي والزنجبيل', image: '/src/assets/images/chashu_donburi_bowl_1789145291570.jpg' },
    ],
    metrics: { texture: 98, richness: 96, spice: 20, aroma: 98, extraction: 96 },
    chefNotes: 'اغمس جزءاً من النودلز في المرق المركز واشفطها مباشرة، وعند الانتهاء اطلب إضافة الداشي المخفف لتشرب بقية المرق.',
    recommendedPairing: 'شاي السينشا البارد أو ماء اليوزو الفوار.'
  },
];

// Re-export convenience sets
export const SHOWCASE_DISHES: ProductDish[] = [
  KUMO_MISO_DISH,
  KURO_TONKOTSU_DISH,
];

export const FOUR_ARTISAN_DISHES: ProductDish[] = [
  SEVENTEEN_MENU_DISHES[2], // Spicy Sesame
  SEVENTEEN_MENU_DISHES[3], // Yuzu Chicken
  SEVENTEEN_MENU_DISHES[6], // Shoyu Classic
  SEVENTEEN_MENU_DISHES[11], // Smoky Tofu
];

export const TWELVE_MENU_DISHES: ProductDish[] = SEVENTEEN_MENU_DISHES;
export const ALL_PRODUCTS: ProductDish[] = SEVENTEEN_MENU_DISHES;
