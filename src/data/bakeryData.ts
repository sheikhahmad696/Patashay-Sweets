import { MenuItem, GalleryItem, Testimonial } from '../types/bakery';

import heroImg from '../assets/images/patashay_hero_product_1791267288467.jpg';
import layersImg from '../assets/images/patashay_layers_showcase_1791267301009.jpg';
import craftImg from '../assets/images/muffins_bakers_craft_1791267310707.jpg';
import boxImg from '../assets/images/patashay_gift_box_1791267320542.jpg';
import interiorImg from '../assets/images/bakery_gallery_interior_1791267331201.jpg';

export const ASSETS = {
  hero: heroImg,
  layers: layersImg,
  craft: craftImg,
  box: boxImg,
  interior: interiorImg,
};

export const CONTACT_INFO = {
  brand: 'Patashay by Muffins Bakers',
  parentBrand: 'Muffins Bakers & Cafe',
  primaryPhone: '0331 6567774',
  primaryPhoneInternational: '+923316567774',
  secondaryPhone: '+92 308 6567774',
  secondaryPhoneInternational: '+923086567774',
  whatsappNumber: '923086567774',
  email: 'muffinnscafegrill@gmail.com',
  address: 'Commercial Hub, Near Model Town ‘A’ / Cantt Road, Bahawalpur, Punjab, Pakistan',
  timings: 'Monday – Sunday: 9:00 AM – 11:30 PM',
  deliveryCoverage: 'Fast delivery across Bahawalpur & nationwide luxury tin gift packaging delivery throughout Pakistan',
};

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'patashay-classic',
    name: 'Classic Golden Patashay',
    urduName: 'کلاسک گولڈن پتاشے',
    category: 'patashay',
    categoryLabel: 'Signature Patashay',
    description: 'Our flagship 72-layer puff pastry sweet. Hand-laminated with pure cultured butter and desi ghee, baked until whisper-crisp with a caramelized crystalline crunch.',
    pricePKR: 850,
    weight: '500g Box',
    pieces: 'Approx. 18-20 crisps',
    image: heroImg,
    badge: 'Best Seller',
    isSignature: true,
    layers: 72,
    ingredients: ['Cultured Butter', 'Desi Ghee', 'Wheat Flour', 'Cane Sugar Glaze', 'Aromatic Cardamom'],
    tasteProfile: 'Delicate flakiness, deep buttery warmth, unhurried sweetness.'
  },
  {
    id: 'patashay-shahi-pista',
    name: 'Shahi Pistachio & Almond Patashay',
    urduName: 'شاہی پستہ و بادام پتاشے',
    category: 'patashay',
    categoryLabel: 'Signature Patashay',
    description: 'Crisp laminated layers topped with finely slivered Gilgit green pistachios and roasted California almonds, sealed with an amber sugar glaze.',
    pricePKR: 1150,
    weight: '500g Box',
    pieces: 'Approx. 16-18 crisps',
    image: layersImg,
    badge: 'Royal Heritage',
    isSignature: true,
    layers: 72,
    ingredients: ['Cultured Butter', 'Gilgit Pistachios', 'Roasted Almonds', 'Saffron Touch', 'Desi Ghee'],
    tasteProfile: 'Nutty richness, golden roasted aroma, airy shattering crispness.'
  },
  {
    id: 'patashay-zafrani',
    name: 'Zafrani Honey-Glazed Patashay',
    urduName: 'زعفرانی ہنی گلیزڈ پتاشے',
    category: 'patashay',
    categoryLabel: 'Signature Patashay',
    description: 'Infused with royal Kashmiri saffron strands and kissed with pure wildflower honey syrup right as it leaves the stone hearth.',
    pricePKR: 1350,
    weight: '500g Box',
    pieces: 'Approx. 16-18 crisps',
    image: boxImg,
    badge: 'Chef Special',
    isSignature: true,
    layers: 72,
    ingredients: ['Kashmiri Saffron', 'Wildflower Honey', 'Pure Butter', 'Cardamom Mist'],
    tasteProfile: 'Floral saffron aroma, subtle honey glaze, exquisite butter finish.'
  },
  {
    id: 'patashay-elaichi',
    name: 'Desi Ghee Elaichi Patashay',
    urduName: 'دیسی گھی چھوٹی الائچی پتاشے',
    category: 'patashay',
    categoryLabel: 'Signature Patashay',
    description: 'Traditional Punjabi recipe featuring cold-ground green cardamom infused within every laminated fold of rich pure desi ghee dough.',
    pricePKR: 950,
    weight: '500g Box',
    pieces: 'Approx. 18-20 crisps',
    image: heroImg,
    badge: 'Traditional',
    isSignature: true,
    layers: 72,
    ingredients: ['Desi Ghee', 'Hand-Crushed Elaichi', 'Wheat Flour', 'Caramelized Sugar'],
    tasteProfile: 'Intensely fragrant cardamom, velvety butter crust, clean snap.'
  },
  {
    id: 'nankhatai-shahi',
    name: 'Shahi Bahawalpur Nankhatai',
    urduName: 'شاہی بہاولپور نان خطائی',
    category: 'khatai',
    categoryLabel: 'Royal Khatai & Biscuits',
    description: 'Melt-in-mouth heritage shortbread prepared with pure desi ghee, semolina, and roasted pistachios inspired by the royal kitchens of Bahawalpur.',
    pricePKR: 750,
    weight: '500g Box',
    pieces: '14-16 cookies',
    image: craftImg,
    badge: 'Heritage Recipe',
    ingredients: ['Pure Desi Ghee', 'Gram Flour', 'Semolina', 'Crushed Pistachio', 'Cardamom'],
    tasteProfile: 'Crumbly, melt-on-the-tongue texture with rich golden ghee aroma.'
  },
  {
    id: 'bakarkhani-puff',
    name: 'Royal Bakarkhani Crisps',
    urduName: 'شاہی باقرخانی کرسپس',
    category: 'khatai',
    categoryLabel: 'Royal Khatai & Biscuits',
    description: 'Flaky, buttery layered sweet rounds generously sprinkled with roasted sesame seeds. The quintessential companion for Kashmiri chai or afternoon tea.',
    pricePKR: 650,
    weight: '500g Box',
    pieces: '12 large crisps',
    image: layersImg,
    badge: 'Tea Companion',
    ingredients: ['Layered Pastry Flour', 'Cultured Butter', 'Toasted White Sesame', 'Desi Ghee'],
    tasteProfile: 'Savory-sweet balance, earthy sesame crunch, flaky lamination.'
  },
  {
    id: 'bahawalpur-crown-gateau',
    name: 'Bahawalpur Crown Pistachio Cake',
    urduName: 'بہاولپور کراؤن پستہ کیک',
    category: 'cakes',
    categoryLabel: 'Royal Cakes & Pastries',
    description: 'Velvety cardamom sponge layered with silky roasted pistachio ganache, crowned with edible gold leaf and crystallized rose petals.',
    pricePKR: 2400,
    weight: '2 Lbs (1kg)',
    image: interiorImg,
    badge: 'Celebration Exclusive',
    ingredients: ['Pistachio Praline', 'Cardamom Infused Cream', 'Light Sponge', 'Gold Leaf'],
    tasteProfile: 'Luscious, nutty, royal and exquisitely balanced sweetness.'
  },
  {
    id: 'muffins-truffle-box',
    name: 'Muffins Bakers Artisanal Pastry Assortment',
    urduName: 'مفنز آرٹیسنل پیسٹری باکس',
    category: 'cakes',
    categoryLabel: 'Royal Cakes & Pastries',
    description: 'Curated box of 6 individual gourmet pastries including Dark Chocolate Truffle, Salted Caramel Hazelnut, and Velvet Lotus Cheesecake slice.',
    pricePKR: 1850,
    weight: 'Box of 6 pcs',
    image: interiorImg,
    badge: 'Chef Curated',
    ingredients: ['Belgian Cocoa', 'Lotus Biscoff', 'Cream Cheese', 'Hazelnuts'],
    tasteProfile: 'Decadent chocolate richness, smooth mousse, velvety finish.'
  },
  {
    id: 'nawabi-heritage-hamper',
    name: 'The Nawabi Heritage Keepsake Box',
    urduName: 'نوابی ہیریٹیج گفٹ باکس',
    category: 'hampers',
    categoryLabel: 'Luxury Gift Hampers',
    description: 'Deep espresso rigid gift box with embossed gold calligraphy. Contains 1kg Assorted Signature Patashay, Shahi Nankhatai, and hand-picked cardamom pods with gift ribbon.',
    pricePKR: 3800,
    weight: '1.2 kg Assorted',
    image: boxImg,
    badge: 'Signature Gift',
    ingredients: ['Full Patashay Selection', 'Royal Nankhatai', 'Gift Card Included', 'Luxury Ribbon'],
    tasteProfile: 'The ultimate royal gift for weddings, Eid celebrations, and esteemed guests.'
  },
  {
    id: 'muffins-royal-hamper',
    name: 'Muffins Imperial Celebration Hamper',
    urduName: 'مفنز امپیریل سلیبریشن ہیمپر',
    category: 'hampers',
    categoryLabel: 'Luxury Gift Hampers',
    description: 'The crowning jewel of Muffins Bakers. 2kg multi-tier presentation of our finest bakes: Golden Patashay, Pistachio Patashay, Bakarkhani, and saffron honey jar.',
    pricePKR: 5800,
    weight: '2.5 kg Hamper',
    image: boxImg,
    badge: 'Ultimate Luxury',
    ingredients: ['All Patashay Varieties', 'Bakarkhani', 'Saffron Honey Jar', 'Custom Greeting'],
    tasteProfile: 'The grandest expression of hospitality and Bahawalpuri heritage.'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'The Golden Glaze',
    subtitle: 'Golden caramelized Patashay fresh from the stone hearth',
    category: 'patashay',
    image: heroImg,
  },
  {
    id: 'gal-2',
    title: '72 Micro-Layers',
    subtitle: 'Extreme macro capture of buttery dough lamination',
    category: 'patashay',
    image: layersImg,
  },
  {
    id: 'gal-3',
    title: 'Hand-Lamination Craft',
    subtitle: '48-hour slow process using pure grass-fed butter',
    category: 'craft',
    image: craftImg,
  },
  {
    id: 'gal-4',
    title: 'The Nawabi Keepsake Box',
    subtitle: 'Rigid luxury packaging designed for cherished occasions',
    category: 'boxes',
    image: boxImg,
  },
  {
    id: 'gal-5',
    title: 'Muffins Bakers Boutique',
    subtitle: 'Warm boutique cafe ambiance in Bahawalpur',
    category: 'boutique',
    image: interiorImg,
  },
  {
    id: 'gal-6',
    title: 'Artisanal Preparation',
    subtitle: 'Respecting old-world baking traditions with zero shortcuts',
    category: 'craft',
    image: craftImg,
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    name: 'Mian Tariq Farooq',
    city: 'Model Town, Bahawalpur',
    rating: 5,
    quote: 'The crispness is unlike anything you get at commercial sweet shops. You can taste the genuine desi ghee and butter in every single layer. A true pride of Bahawalpur.',
    occasion: 'Eid Family Gathering'
  },
  {
    id: 't-2',
    name: 'Dr. Ayesha Malik',
    city: 'Cantt, Bahawalpur',
    rating: 5,
    quote: 'We send the Nawabi Heritage Box to our relatives in Lahore and Islamabad. They always ask when we are ordering the next batch. Super crisp and beautifully packaged.',
    occasion: 'Wedding Gift Hamper'
  },
  {
    id: 't-3',
    name: 'Usman Jameel',
    city: 'Dubai (Delivered to Bahawalpur)',
    rating: 5,
    quote: 'Ordered over WhatsApp from abroad for my parents’ anniversary in Bahawalpur. The Muffins team handled it flawlessly within 2 hours. My mother was overjoyed!',
    occasion: 'Anniversary Surprise'
  }
];

export const WHY_MUFFINS_PILLARS = [
  {
    id: 'p-1',
    number: '01',
    title: '100% Cultured Butter & Desi Ghee',
    description: 'We refuse vegetable shortening and hydrogenated trans-fats. Only authentic slow-churned butter and pure local desi ghee touch our pastry dough.',
    stat: '100%',
    statLabel: 'Pure Butter & Desi Ghee'
  },
  {
    id: 'p-2',
    number: '02',
    title: '72 Hand-Laminated Micro-Layers',
    description: 'Each batch is folded and rested across 48 patient hours in temperature-controlled rooms to achieve that unmistakable whispering shatter when bitten.',
    stat: '72',
    statLabel: 'Crisp Flaky Layers'
  },
  {
    id: 'p-3',
    number: '03',
    title: 'Baked Fresh Every Morning',
    description: 'Never frozen, never reheated, never sitting on store shelves for weeks. Small artisanal batches baked twice daily in our Bahawalpur ovens.',
    stat: '2x',
    statLabel: 'Fresh Bakes Daily'
  },
  {
    id: 'p-4',
    number: '04',
    title: 'No Artificial Shortcuts',
    description: 'No chemical enhancers, artificial dough softeners, or fake flavorings. Just heirloom techniques preserved with integrity and respect for tradition.',
    stat: '15,000+',
    statLabel: 'Boxes Delivered with Joy'
  }
];

export const FAQS = [
  {
    question: 'How do I place an order on WhatsApp?',
    answer: 'Click any "Order on WhatsApp" button on this website or select items into your Quick Box. You will be redirected straight to WhatsApp with your order details pre-filled. Our team immediately confirms the order, payment method, and dispatch time.'
  },
  {
    question: 'Do you deliver in Bahawalpur and outside Bahawalpur?',
    answer: 'Yes! We offer express same-day delivery throughout Bahawalpur (Model Town, Cantt, Gulberg, Satellite Town, One Unit Colony). For Lahore, Multan, Karachi, Islamabad and other cities, we courier our airtight luxury tin packaging nationwide.'
  },
  {
    question: 'How long do Patashay stay crisp?',
    answer: 'Stored in our airtight sealed container or tin at room temperature, Patashay remain delightfully crisp and fragrant for up to 3 to 4 weeks. Keep away from moisture.'
  },
  {
    question: 'Can I customize gift boxes for weddings or corporate events?',
    answer: 'Absolutely. We offer customized gold foil embossing, personalized message cards, and bespoke assorted combinations for weddings, corporate gifting, and celebrations.'
  }
];

export function generateWhatsAppLink(message: string, phone: string = CONTACT_INFO.whatsappNumber): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${encoded}`;
}
