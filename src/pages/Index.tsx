import React from 'react';
import { Header } from '@/components/header';
import { HeroSection } from '@/components/hero-section';
import { FilterSidebar } from '@/components/filter-sidebar';
import { MobileFilters } from '@/components/mobile-filters';
import { ProductCard } from '@/components/product-card';
import { useProducts } from '@/hooks/useProducts';
import { Loader2, Package } from 'lucide-react';

const Index = () => {
  const {
    products,
    allProducts,
    isLoading,
    searchQuery,
    setSearchQuery,
    filters,
    setFilters,
    sortOption,
    setSortOption,
    fetchProducts,
    resetFilters,
  } = useProducts();

  return (
    <div className="min-h-screen bg-background">
      <Header
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        sortOption={sortOption}
        onSortChange={setSortOption}
        onRefresh={fetchProducts}
        isLoading={isLoading}
        totalProducts={allProducts.length}
      />

      <HeroSection
        totalProducts={allProducts.length}
        filteredCount={products.length}
      />

      <div className="container mx-auto px-6 py-6">
        <div className="flex gap-6">
          {/* Sidebar */}
          <aside className="hidden lg:block w-80 shrink-0">
            <FilterSidebar
              filters={filters}
              onFiltersChange={setFilters}
              onReset={resetFilters}
              totalProducts={allProducts.length}
              filteredCount={products.length}
            />
          </aside>

          {/* Main Content */}
          <main className="flex-1 min-w-0">
            {/* Mobile Filters */}
            <div className="mb-6">
              <MobileFilters
                filters={filters}
                onFiltersChange={setFilters}
                onReset={resetFilters}
                totalProducts={allProducts.length}
                filteredCount={products.length}
              />
            </div>

            {isLoading ? (
              <div className="flex items-center justify-center h-96">
                <div className="text-center space-y-4">
                  <Loader2 className="h-8 w-8 animate-spin text-primary mx-auto" />
                  <p className="text-muted-foreground">Loading products...</p>
                </div>
              </div>
            ) : products.length === 0 ? (
              <div className="flex items-center justify-center h-96">
                <div className="text-center space-y-4">
                  <Package className="h-12 w-12 text-muted-foreground mx-auto" />
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-card-foreground">No products found</h3>
                    <p className="text-muted-foreground">Try adjusting your search or filters</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Index;
