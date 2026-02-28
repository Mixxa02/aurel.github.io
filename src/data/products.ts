import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import product5 from "@/assets/product-5.jpg";
import product6 from "@/assets/product-6.jpg";
import product7 from "@/assets/product-7.jpg";
import product8 from "@/assets/product-8.jpg";

export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  sizes: string[];
  image: string;
  hoverImage: string;
  description: string;
  details: string[];
  isNew?: boolean;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Linen Blazer",
    price: 320,
    category: "Outerwear",
    sizes: ["XS", "S", "M", "L", "XL"],
    image: product1,
    hoverImage: product3,
    description: "A beautifully tailored linen blazer in cream. Relaxed yet refined, perfect for layering through the seasons.",
    details: ["100% European linen", "Single-button closure", "Notch lapel", "Two front pockets", "Fully lined", "Dry clean only"],
    isNew: true,
  },
  {
    id: "2",
    name: "Cashmere Sweater",
    price: 280,
    category: "Knitwear",
    sizes: ["XS", "S", "M", "L"],
    image: product2,
    hoverImage: product4,
    description: "Luxuriously soft cashmere in a relaxed silhouette. The perfect everyday knit.",
    details: ["100% Grade-A cashmere", "Ribbed cuffs and hem", "Mock neck", "Relaxed fit", "Hand wash cold"],
  },
  {
    id: "3",
    name: "Wool Trousers",
    price: 240,
    category: "Bottoms",
    sizes: ["XS", "S", "M", "L", "XL"],
    image: product3,
    hoverImage: product1,
    description: "Impeccably tailored charcoal wool trousers with a modern straight leg.",
    details: ["98% wool, 2% elastane", "High waist", "Straight leg", "Side zip closure", "Dry clean recommended"],
    isNew: true,
  },
  {
    id: "4",
    name: "Silk Scarf",
    price: 145,
    category: "Accessories",
    sizes: ["One Size"],
    image: product4,
    hoverImage: product2,
    description: "A statement silk scarf in warm beige tones. Versatile and elegant.",
    details: ["100% mulberry silk", "Hand-rolled edges", "70cm x 70cm", "Dry clean only"],
  },
  {
    id: "5",
    name: "Cotton Shirt",
    price: 165,
    category: "Tops",
    sizes: ["XS", "S", "M", "L", "XL"],
    image: product5,
    hoverImage: product7,
    description: "A crisp white cotton shirt with clean lines and a relaxed collar.",
    details: ["100% organic cotton", "Mother-of-pearl buttons", "Relaxed fit", "Machine wash 30°"],
  },
  {
    id: "6",
    name: "Leather Tote",
    price: 420,
    category: "Accessories",
    sizes: ["One Size"],
    image: product6,
    hoverImage: product8,
    description: "A structured leather tote in tan. Spacious and timeless.",
    details: ["Full-grain Italian leather", "Unlined interior", "Magnetic closure", "Interior pocket", "Handcrafted"],
    isNew: true,
  },
  {
    id: "7",
    name: "Knit Dress",
    price: 295,
    category: "Dresses",
    sizes: ["XS", "S", "M", "L"],
    image: product7,
    hoverImage: product5,
    description: "An elegant ribbed knit dress with a figure-skimming silhouette and side slit.",
    details: ["70% wool, 30% cashmere", "Mock neck", "Side slit", "Midi length", "Dry clean only"],
  },
  {
    id: "8",
    name: "Ankle Boots",
    price: 380,
    category: "Shoes",
    sizes: ["36", "37", "38", "39", "40", "41"],
    image: product8,
    hoverImage: product6,
    description: "Minimalist leather ankle boots with a block heel. A wardrobe essential.",
    details: ["Full-grain leather upper", "Leather sole", "5cm block heel", "Chelsea boot style", "Made in Italy"],
  },
];

export const categories = ["All", "Outerwear", "Knitwear", "Bottoms", "Tops", "Dresses", "Accessories", "Shoes"];
