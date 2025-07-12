import React from 'react';
import { Filter, X } from 'lucide-react';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet';
import { FilterSidebar } from './filter-sidebar';
import { FilterOptions } from '@/types/product';

interface MobileFiltersProps {
  filters: FilterOptions;
  onFiltersChange: (filters: FilterOptions) => void;
  onReset: () => void;
  totalProducts: number;
  filteredCount: number;
}

export const MobileFilters: React.FC<MobileFiltersProps> = ({
  filters,
  onFiltersChange,
  onReset,
  totalProducts,
  filteredCount
}) => {
  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" className="w-full">
            <Filter className="h-4 w-4 mr-2" />
            Filters ({filteredCount})
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-80 p-0 bg-background">
          <SheetHeader className="p-6 pb-0">
            <SheetTitle>Filters</SheetTitle>
          </SheetHeader>
          <div className="px-6">
            <FilterSidebar
              filters={filters}
              onFiltersChange={onFiltersChange}
              onReset={onReset}
              totalProducts={totalProducts}
              filteredCount={filteredCount}
            />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};