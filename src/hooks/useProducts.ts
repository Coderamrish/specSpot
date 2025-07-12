import { useState, useEffect, useMemo } from 'react';
import { Product, FilterOptions, SortOption } from '@/types/product';
import { mockProducts } from '@/data/products';

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState<FilterOptions>({
    category: 'All',
    minPrice: 0,
    maxPrice: 60000,
    brand: 'All',
    inStock: false,
  });
  const [sortOption, setSortOption] = useState<SortOption>('name-asc');

  // Simulate API call
  const fetchProducts = async () => {
    setIsLoading(true);
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    setProducts(mockProducts);
    setIsLoading(false);
  };

  // Initial load
  useEffect(() => {
    fetchProducts();
  }, []);

  // Filter and sort products
  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products.filter((product) => {
      // Text search
      const matchesSearch = searchQuery === '' || 
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase());

      // Category filter
      const matchesCategory = filters.category === 'All' || product.category === filters.category;

      // Brand filter
      const matchesBrand = filters.brand === 'All' || product.brand === filters.brand;

      // Price range filter
      const matchesPrice = product.price >= filters.minPrice && product.price <= filters.maxPrice;

      // Stock filter
      const matchesStock = !filters.inStock || product.inStock;

      return matchesSearch && matchesCategory && matchesBrand && matchesPrice && matchesStock;
    });

    // Sort products
    filtered.sort((a, b) => {
      switch (sortOption) {
        case 'price-asc':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        case 'rating-desc':
          return b.rating - a.rating;
        case 'name-asc':
        default:
          return a.title.localeCompare(b.title);
      }
    });

    return filtered;
  }, [products, searchQuery, filters, sortOption]);

  const resetFilters = () => {
    setFilters({
      category: 'All',
      minPrice: 0,
      maxPrice: 60000,
      brand: 'All',
      inStock: false,
    });
    setSearchQuery('');
    setSortOption('name-asc');
  };

  return {
    products: filteredAndSortedProducts,
    allProducts: products,
    isLoading,
    searchQuery,
    setSearchQuery,
    filters,
    setFilters,
    sortOption,
    setSortOption,
    fetchProducts,
    resetFilters,
  };
};