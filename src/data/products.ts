import { Product } from '../types/product';

export const mockProducts: Product[] = [
  // GPUs
  {
    id: 1,
    title: "NVIDIA RTX 4060",
    description: "High-performance gaming GPU with 8GB VRAM, perfect for 1080p gaming",
    price: 18999,
    category: "GPU",
    brand: "NVIDIA",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1591238371500-52ed07677867?w=400&h=300&fit=crop",
    externalLink: "https://nvidia.com/rtx-4060",
    specs: {
      "Memory": "8GB GDDR6",
      "Base Clock": "1830 MHz",
      "Memory Interface": "128-bit",
      "Power": "115W"
    },
    inStock: true
  },
  {
    id: 2,
    title: "AMD RX 6600",
    description: "Excellent 1080p gaming performance with AMD RDNA 2 architecture",
    price: 16499,
    category: "GPU",
    brand: "AMD",
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1586373602842-29b05584e3c5?w=400&h=300&fit=crop",
    externalLink: "https://amd.com/rx-6600",
    specs: {
      "Memory": "8GB GDDR6",
      "Base Clock": "1968 MHz",
      "Memory Interface": "128-bit",
      "Power": "132W"
    },
    inStock: true
  },
  {
    id: 3,
    title: "NVIDIA GTX 1660 Super",
    description: "Budget-friendly GPU for solid 1080p gaming performance",
    price: 14999,
    category: "GPU",
    brand: "NVIDIA",
    rating: 4.2,
    image: "https://images.unsplash.com/photo-1562976540-1502c2145186?w=400&h=300&fit=crop",
    externalLink: "https://nvidia.com/gtx-1660-super",
    specs: {
      "Memory": "6GB GDDR6",
      "Base Clock": "1530 MHz",
      "Memory Interface": "192-bit",
      "Power": "125W"
    },
    inStock: false
  },

  // Mechanical Keyboards
  {
    id: 4,
    title: "Keychron K2 V2",
    description: "Wireless mechanical keyboard with hot-swappable switches and RGB",
    price: 7999,
    category: "Keyboard",
    brand: "Keychron",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=300&fit=crop",
    externalLink: "https://keychron.com/k2",
    specs: {
      "Layout": "75% Compact",
      "Switches": "Gateron Blue",
      "Connectivity": "Wireless/USB-C",
      "Battery": "4000mAh"
    },
    inStock: true
  },
  {
    id: 5,
    title: "HyperX Alloy Origins",
    description: "Compact tenkeyless mechanical keyboard with HyperX Red switches",
    price: 6499,
    category: "Keyboard",
    brand: "HyperX",
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1588846693514-89866c5e5b62?w=400&h=300&fit=crop",
    externalLink: "https://hyperx.com/alloy-origins",
    specs: {
      "Layout": "Tenkeyless",
      "Switches": "HyperX Red",
      "Connectivity": "USB-C",
      "Lighting": "RGB"
    },
    inStock: true
  },
  {
    id: 6,
    title: "Cosmic Byte CB-GK-26",
    description: "RGB mechanical gaming keyboard with blue switches at budget price",
    price: 2999,
    category: "Keyboard",
    brand: "Cosmic Byte",
    rating: 4.0,
    image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=400&h=300&fit=crop",
    externalLink: "https://cosmicbyte.in/gk-26",
    specs: {
      "Layout": "Full Size",
      "Switches": "Blue Switches",
      "Connectivity": "USB",
      "Lighting": "RGB Backlit"
    },
    inStock: true
  },

  // Programming Books
  {
    id: 7,
    title: "Clean Code",
    description: "A Handbook of Agile Software Craftsmanship by Robert C. Martin",
    price: 1299,
    category: "Book",
    brand: "Prentice Hall",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
    externalLink: "https://amazon.com/clean-code",
    specs: {
      "Pages": "464",
      "Language": "English",
      "Format": "Paperback",
      "Year": "2008"
    },
    inStock: true
  },
  {
    id: 8,
    title: "JavaScript: The Definitive Guide",
    description: "Master the World's Most-Used Programming Language",
    price: 1899,
    category: "Book",
    brand: "O'Reilly",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&h=300&fit=crop",
    externalLink: "https://oreilly.com/javascript-definitive",
    specs: {
      "Pages": "688",
      "Language": "English",
      "Format": "Paperback",
      "Edition": "7th"
    },
    inStock: true
  },
  {
    id: 9,
    title: "System Design Interview",
    description: "An insider's guide to ace system design interviews",
    price: 1599,
    category: "Book",
    brand: "Independently Published",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop",
    externalLink: "https://amazon.com/system-design-interview",
    specs: {
      "Pages": "322",
      "Language": "English",
      "Format": "Paperback",
      "Year": "2020"
    },
    inStock: true
  },

  // Laptops
  {
    id: 10,
    title: "ASUS VivoBook 15",
    description: "Slim and lightweight laptop with AMD Ryzen 5 processor",
    price: 45999,
    category: "Laptop",
    brand: "ASUS",
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop",
    externalLink: "https://asus.com/vivobook-15",
    specs: {
      "Processor": "AMD Ryzen 5 5500U",
      "RAM": "8GB DDR4",
      "Storage": "512GB SSD",
      "Display": "15.6\" FHD"
    },
    inStock: true
  },
  {
    id: 11,
    title: "HP Pavilion Gaming",
    description: "Budget gaming laptop with NVIDIA GTX 1650 graphics",
    price: 52999,
    category: "Laptop",
    brand: "HP",
    rating: 4.2,
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&h=300&fit=crop",
    externalLink: "https://hp.com/pavilion-gaming",
    specs: {
      "Processor": "Intel i5-11300H",
      "GPU": "NVIDIA GTX 1650",
      "RAM": "8GB DDR4",
      "Storage": "1TB HDD + 256GB SSD"
    },
    inStock: true
  },
  {
    id: 12,
    title: "Lenovo IdeaPad 3",
    description: "Affordable laptop for everyday computing and light gaming",
    price: 38999,
    category: "Laptop",
    brand: "Lenovo",
    rating: 4.1,
    image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=400&h=300&fit=crop",
    externalLink: "https://lenovo.com/ideapad-3",
    specs: {
      "Processor": "AMD Ryzen 5 5500U",
      "RAM": "8GB DDR4",
      "Storage": "256GB SSD",
      "Display": "15.6\" FHD"
    },
    inStock: false
  },

  // Monitors
  {
    id: 13,
    title: "LG 24\" FHD Monitor",
    description: "24-inch Full HD IPS monitor with ultra-thin bezels",
    price: 12999,
    category: "Monitor",
    brand: "LG",
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=300&fit=crop",
    externalLink: "https://lg.com/24mp59g",
    specs: {
      "Size": "24 inches",
      "Resolution": "1920x1080",
      "Panel": "IPS",
      "Refresh Rate": "75Hz"
    },
    inStock: true
  },
  {
    id: 14,
    title: "ASUS TUF Gaming VG249Q",
    description: "24-inch gaming monitor with 144Hz refresh rate",
    price: 18999,
    category: "Monitor",
    brand: "ASUS",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1593640408182-31174677b403?w=400&h=300&fit=crop",
    externalLink: "https://asus.com/vg249q",
    specs: {
      "Size": "24 inches",
      "Resolution": "1920x1080",
      "Panel": "IPS",
      "Refresh Rate": "144Hz"
    },
    inStock: true
  },
  {
    id: 15,
    title: "Samsung 27\" Curved Monitor",
    description: "27-inch curved monitor with vibrant colors and sleek design",
    price: 16999,
    category: "Monitor",
    brand: "Samsung",
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1585792180666-f7347c490ee2?w=400&h=300&fit=crop",
    externalLink: "https://samsung.com/c27f390",
    specs: {
      "Size": "27 inches",
      "Resolution": "1920x1080",
      "Panel": "VA Curved",
      "Refresh Rate": "60Hz"
    },
    inStock: true
  },

  // Headphones
  {
    id: 16,
    title: "Sony WH-CH720N",
    description: "Wireless noise canceling headphones with 35-hour battery",
    price: 7999,
    category: "Headphones",
    brand: "Sony",
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
    externalLink: "https://sony.com/wh-ch720n",
    specs: {
      "Type": "Over-ear",
      "Connectivity": "Bluetooth 5.0",
      "Battery": "35 hours",
      "Features": "Noise Canceling"
    },
    inStock: true
  },
  {
    id: 17,
    title: "HyperX Cloud II",
    description: "Gaming headset with virtual 7.1 surround sound",
    price: 5999,
    category: "Headphones",
    brand: "HyperX",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=300&fit=crop",
    externalLink: "https://hyperx.com/cloud-ii",
    specs: {
      "Type": "Gaming Headset",
      "Connectivity": "USB/3.5mm",
      "Features": "7.1 Surround",
      "Microphone": "Detachable"
    },
    inStock: true
  },
  {
    id: 18,
    title: "Audio-Technica ATH-M40x",
    description: "Professional studio monitor headphones with excellent sound",
    price: 8999,
    category: "Headphones",
    brand: "Audio-Technica",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=400&h=300&fit=crop",
    externalLink: "https://audio-technica.com/ath-m40x",
    specs: {
      "Type": "Studio Monitor",
      "Connectivity": "3.5mm",
      "Impedance": "35 ohms",
      "Frequency": "15-24,000 Hz"
    },
    inStock: false
  },

  // Mouse
  {
    id: 19,
    title: "Logitech G502 HERO",
    description: "High-performance gaming mouse with HERO 25K sensor",
    price: 4999,
    category: "Mouse",
    brand: "Logitech",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=300&fit=crop",
    externalLink: "https://logitech.com/g502-hero",
    specs: {
      "Sensor": "HERO 25K",
      "DPI": "100-25,600",
      "Buttons": "11",
      "Connectivity": "USB"
    },
    inStock: true
  },
  {
    id: 20,
    title: "Razer DeathAdder V3",
    description: "Ergonomic gaming mouse with Focus Pro 30K sensor",
    price: 6499,
    category: "Mouse",
    brand: "Razer",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=400&h=300&fit=crop",
    externalLink: "https://razer.com/deathadder-v3",
    specs: {
      "Sensor": "Focus Pro 30K",
      "DPI": "100-30,000",
      "Buttons": "8",
      "Weight": "59g"
    },
    inStock: true
  }
];

export const categories = [
  'All',
  'GPU',
  'Keyboard',
  'Book',
  'Laptop',
  'Monitor',
  'Headphones',
  'Mouse'
];

export const brands = [
  'All',
  'NVIDIA',
  'AMD',
  'Keychron',
  'HyperX',
  'Cosmic Byte',
  'Prentice Hall',
  'O\'Reilly',
  'ASUS',
  'HP',
  'Lenovo',
  'LG',
  'Samsung',
  'Sony',
  'Audio-Technica',
  'Logitech',
  'Razer'
];