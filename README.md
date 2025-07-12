# 🚀 SpecSpot - Tech Product Discovery

<div align="center">

![SpecSpot Banner](public/WhatsApp%20Image%202025-07-12%20at%2023.01.43.jpeg)

![React](https://img.shields.io/badge/React-18+-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5+-blue?style=for-the-badge&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3+-teal?style=for-the-badge&logo=tailwindcss)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)
![Version](https://img.shields.io/badge/Version-1.0.0-orange?style=for-the-badge)

*Discover, compare, and filter the best tech products with a beautiful, resilient, and modern web app.*

[Features](#-features) • [Quick Start](#-quick-start) • [Documentation](#-documentation) • [Examples](#-examples)

</div>

---

## 🎯 What is this?

*SpecSpot* is a production-ready, enterprise-inspired tech product discovery platform. It lets users browse, search, and filter a curated catalog of GPUs, laptops, keyboards, and books with real-time feedback and a delightful UI.

### 🏗 Built for Modern Tech Shoppers

- *⚡ Fast & Responsive* - Instant search, filtering, and sorting
- *🔍 Smart Filtering* - Multi-criteria filters for category, brand, price, and stock
- *📱 Mobile-First* - Fully responsive with mobile and desktop UIs
- *🛡 Robust UX* - Error handling, loading states, and 404 support
- *🎨 Beautiful UI* - Built with shadcn/ui, Radix UI, and Tailwind CSS

---

## ✨ Features

![Feature Showcase](public/WhatsApp%20Image%202025-07-12%20at%2023.01.25.jpeg)

| Feature | Description | Benefit |
|---------|-------------|---------|
| 🛒 *Curated Catalog* | Detailed specs, images, and links for tech products | Informed buying decisions |
| 🔎 *Smart Filtering* | Filter by category, brand, price, and stock | Find exactly what you need |
| ⚡ *Instant Search* | Real-time search by name, brand, or description | No waiting, just results |
| ↕ *Sorting* | Sort by price, rating, or name | Prioritize what matters |
| 📱 *Responsive UI* | Mobile and desktop filter UIs | Great experience everywhere |
| 📝 *Product Details* | Ratings, specs, and external links | Deep dive into products |
| 🔔 *Real-Time Feedback* | Loading indicators, toasts, and error handling | Seamless, robust UX |
| 🚫 *404 Handling* | Friendly not-found page | No dead ends |

---

## 🚀 Quick Start

### Installation

bash
npm install


### Running the App

bash
npm run dev


The app will be available at [http://localhost:8080](http://localhost:8080).

### Building for Production

bash
npm run build


### Linting

bash
npm run lint


---

## 📚 Documentation

### Configuration Options

- *Add Products*: Edit src/data/products.ts to add or modify products.
- *UI Customization*: Tailwind and shadcn/ui make it easy to adjust themes and components.
- *Routing*: Add new pages in src/pages and update App.tsx as needed.

### Project Structure


src/
  components/      # UI components (cards, filters, header, etc.)
    ui/            # Reusable UI primitives (button, card, select, etc.)
  data/            # Mock product data
  hooks/           # Custom React hooks (e.g., useProducts)
  lib/             # Utility functions
  pages/           # Main pages (Index, NotFound)
  types/           # TypeScript types (Product, FilterOptions, etc.)
  App.tsx          # App entry point with routing
  main.tsx         # React root
public/            # Static assets (images, robots.txt)


### API Reference (Hooks & Components)

| Component/Hook | Description |
|----------------|-------------|
| useProducts | Fetch, filter, and sort products with search and state |
| Header | Main navigation, search, and sort controls |
| FilterSidebar | Desktop filter controls |
| MobileFilters | Mobile filter controls |
| ProductCard | Product display with specs and actions |
| HeroSection | Landing section with stats and branding |

---

## 🧪 Examples

### Basic Usage (in src/pages/Index.tsx)

tsx
import { useProducts } from '@/hooks/useProducts';

const {
  products,
  searchQuery,
  setSearchQuery,
  filters,
  setFilters,
  sortOption,
  setSortOption,
  fetchProducts,
  resetFilters,
} = useProducts();

// Use these in your UI components for real-time product discovery!


### Filtering & Sorting

tsx
// Example: Filter by category and sort by price
setFilters({ ...filters, category: 'GPU' });
setSortOption('price-asc');


### Adding a Product

ts
// In src/data/products.ts
mockProducts.push({
  id: 100,
  title: 'New Tech Gadget',
  description: 'Latest innovation...',
  price: 9999,
  category: 'Gadget',
  brand: 'BrandX',
  rating: 4.7,
  image: 'url',
  externalLink: 'https://brandx.com',
  specs: { Feature: 'Value' },
  inStock: true
});


---

## 🏗 Architecture

### Filtering & Search Flow

<div align="center">

mermaid
graph TD
    A[User Input] --> B{Search Query}
    B -->|Text| C[Filter Products]
    C --> D{Filters}
    D -->|Category/Brand/Price/Stock| E[Sort Products]
    E --> F[Display Product Cards]
    F --> G[View Details/External Link]


</div>

### Key Components

- *Header* - Navigation, search, and sort
- *HeroSection* - Branding and stats
- *FilterSidebar/MobileFilters* - Filtering controls
- *ProductCard* - Product display
- *useProducts* - Data, filtering, and state logic

---

## 🧪 Testing

bash
# Run all lint checks
npm run lint


---

## 📦 Installation & Setup

### Prerequisites

- Node.js 16+
- npm or yarn

### Install

bash
npm install


### Start Development Server

bash
npm run dev


---

## 🤝 Contributing

We welcome contributions! Here's how to get started:

1. *Fork* the repository
2. *Create* a feature branch (git checkout -b feature/amazing-feature)
3. *Commit* your changes (git commit -m 'Add amazing feature')
4. *Push* to the branch (git push origin feature/amazing-feature)
5. *Open* a Pull Request

---

## 📄 License

This project is licensed under the *MIT License* - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- Built with React, TypeScript, and Tailwind CSS
- UI inspired by shadcn/ui and Radix UI
- Designed for modern tech enthusiasts

---

<div align="center">

*Made with ❤ for tech lovers and product hunters*

[GitHub](https://github.com/your-username/specSpot) • [Issues](https://github.com/your-username/specSpot/issues) • [Discussions](https://github.com/your-username/specSpot/discussions)

</div>
