import React from 'react';
import { RefreshCw, Zap, Database } from 'lucide-react';
import { Button } from './ui/button';
import { SearchInput } from './ui/search-input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { SortOption } from '@/types/product';

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  sortOption: SortOption;
  onSortChange: (sort: SortOption) => void;
  onRefresh: () => void;
  isLoading: boolean;
  totalProducts: number;
}

export const Header: React.FC<HeaderProps> = ({
  searchQuery,
  onSearchChange,
  sortOption,
  onSortChange,
  onRefresh,
  isLoading,
  totalProducts
}) => {
  const sortOptions = [
    { value: 'name-asc' as SortOption, label: 'Name (A-Z)' },
    { value: 'price-asc' as SortOption, label: 'Price: Low to High' },
    { value: 'price-desc' as SortOption, label: 'Price: High to Low' },
    { value: 'rating-desc' as SortOption, label: 'Highest Rated' },
  ];

  return (
    <header className="bg-card border-b border-border sticky top-0 z-50 backdrop-blur-sm bg-card/95">
      <div className="container mx-auto px-6 py-4">
        {/* Top Row - Logo and Actions */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center animate-float">
                <Zap className="h-5 w-5 text-background" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  SpecSpot
                </h1>
                <p className="text-xs text-muted-foreground">Tech Product Discovery</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 text-sm text-muted-foreground bg-muted px-3 py-2 rounded-lg">
              <Database className="h-4 w-4 text-accent" />
              {totalProducts} Products
            </div>
            <Button
              onClick={onRefresh}
              variant="outline"
              size="sm"
              disabled={isLoading}
              className="hover:bg-primary/10 hover:border-primary/50 transition-all"
            >
              <RefreshCw className={`h-4 w-4 mr-2 ${isLoading ? 'animate-spin' : ''}`} />
              Refresh
            </Button>
          </div>
        </div>

        {/* Bottom Row - Search and Sort */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <SearchInput
              value={searchQuery}
              onChange={onSearchChange}
              placeholder="Search for GPUs, keyboards, books, laptops..."
              className="w-full"
            />
          </div>
          <div className="w-full sm:w-64">
            <Select value={sortOption} onValueChange={onSortChange}>
              <SelectTrigger className="h-12 bg-card border-border">
                <SelectValue placeholder="Sort by..." />
              </SelectTrigger>
              <SelectContent className="bg-popover border-border">
                {sortOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </header>
  );
};