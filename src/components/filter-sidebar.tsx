import React from 'react';
import { Filter, RotateCcw, Package, DollarSign } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Slider } from './ui/slider';
import { Switch } from './ui/switch';
import { Label } from './ui/label';
import { Separator } from './ui/separator';
import { FilterOptions } from '@/types/product';
import { categories, brands } from '@/data/products';

interface FilterSidebarProps {
  filters: FilterOptions;
  onFiltersChange: (filters: FilterOptions) => void;
  onReset: () => void;
  totalProducts: number;
  filteredCount: number;
}

export const FilterSidebar: React.FC<FilterSidebarProps> = ({
  filters,
  onFiltersChange,
  onReset,
  totalProducts,
  filteredCount
}) => {
  const updateFilter = (key: keyof FilterOptions, value: any) => {
    onFiltersChange({ ...filters, [key]: value });
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <Card className="p-6 bg-card border-border sticky top-6 h-fit animate-fade-in">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Filter className="h-5 w-5 text-primary" />
            <h3 className="font-semibold text-card-foreground">Filters</h3>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={onReset}
            className="text-xs hover:bg-primary/10"
          >
            <RotateCcw className="h-3 w-3 mr-1" />
            Reset
          </Button>
        </div>

        {/* Results Count */}
        <div className="text-sm text-muted-foreground bg-muted p-3 rounded-lg">
          Showing {filteredCount} of {totalProducts} products
        </div>

        <Separator />

        {/* Category Filter */}
        <div className="space-y-3">
          <Label className="text-sm font-medium flex items-center gap-2">
            <Package className="h-4 w-4 text-accent" />
            Category
          </Label>
          <Select
            value={filters.category}
            onValueChange={(value) => updateFilter('category', value)}
          >
            <SelectTrigger className="bg-background border-border">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent className="bg-popover border-border">
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <Separator />

        {/* Brand Filter */}
        <div className="space-y-3">
          <Label className="text-sm font-medium">Brand</Label>
          <Select
            value={filters.brand}
            onValueChange={(value) => updateFilter('brand', value)}
          >
            <SelectTrigger className="bg-background border-border">
              <SelectValue placeholder="Select brand" />
            </SelectTrigger>
            <SelectContent className="bg-popover border-border max-h-48">
              {brands.map((brand) => (
                <SelectItem key={brand} value={brand}>
                  {brand}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <Separator />

        {/* Price Range */}
        <div className="space-y-4">
          <Label className="text-sm font-medium flex items-center gap-2">
            <DollarSign className="h-4 w-4 text-primary" />
            Price Range
          </Label>
          <div className="space-y-3">
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>{formatPrice(filters.minPrice)}</span>
              <span>{formatPrice(filters.maxPrice)}</span>
            </div>
            <div className="px-2">
              <Slider
                value={[filters.minPrice, filters.maxPrice]}
                onValueChange={([min, max]) => {
                  updateFilter('minPrice', min);
                  updateFilter('maxPrice', max);
                }}
                min={0}
                max={60000}
                step={1000}
                className="w-full"
              />
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="bg-background p-2 rounded border">
                <span className="text-muted-foreground">Min: </span>
                <span className="font-medium">{formatPrice(filters.minPrice)}</span>
              </div>
              <div className="bg-background p-2 rounded border">
                <span className="text-muted-foreground">Max: </span>
                <span className="font-medium">{formatPrice(filters.maxPrice)}</span>
              </div>
            </div>
          </div>
        </div>

        <Separator />

        {/* Stock Filter */}
        <div className="flex items-center justify-between">
          <Label htmlFor="stock-filter" className="text-sm font-medium">
            In Stock Only
          </Label>
          <Switch
            id="stock-filter"
            checked={filters.inStock}
            onCheckedChange={(checked) => updateFilter('inStock', checked)}
          />
        </div>
      </div>
    </Card>
  );
};