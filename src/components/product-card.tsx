import React from 'react';
import { Star, ExternalLink, Package, Zap } from 'lucide-react';
import { Product } from '@/types/product';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
  className?: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, className }) => {
  const handleExternalClick = () => {
    window.open(product.externalLink, '_blank', 'noopener,noreferrer');
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={cn(
          "h-3 w-3",
          index < Math.floor(rating) 
            ? "fill-primary text-primary" 
            : "text-muted-foreground"
        )}
      />
    ));
  };

  return (
    <Card className={cn(
      "group overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card hover:shadow-glow animate-fade-in-up",
      !product.inStock && "opacity-75",
      className
    )}>
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3 flex gap-2">
          <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
            {product.category}
          </Badge>
          {!product.inStock && (
            <Badge variant="destructive" className="bg-destructive/80 backdrop-blur-sm">
              Out of Stock
            </Badge>
          )}
        </div>
        <div className="absolute top-3 right-3">
          <Badge variant="outline" className="bg-background/80 backdrop-blur-sm border-primary/20">
            {product.brand}
          </Badge>
        </div>
      </div>

      <div className="p-6 space-y-4">
        <div className="space-y-2">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-semibold text-card-foreground line-clamp-1 group-hover:text-primary transition-colors">
              {product.title}
            </h3>
            <div className="flex items-center gap-1 shrink-0">
              {renderStars(product.rating)}
              <span className="text-xs text-muted-foreground ml-1">
                {product.rating}
              </span>
            </div>
          </div>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {product.description}
          </p>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-primary">
              {formatPrice(product.price)}
            </div>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              {product.inStock ? (
                <>
                  <Package className="h-3 w-3 text-primary" />
                  In Stock
                </>
              ) : (
                <>
                  <Package className="h-3 w-3 text-destructive" />
                  Out of Stock
                </>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <div className="text-xs font-medium text-card-foreground flex items-center gap-1">
              <Zap className="h-3 w-3 text-accent" />
              Key Specs
            </div>
            <div className="grid grid-cols-2 gap-1 text-xs">
              {Object.entries(product.specs).slice(0, 4).map(([key, value]) => (
                <div key={key} className="flex flex-col">
                  <span className="text-muted-foreground">{key}</span>
                  <span className="text-card-foreground font-medium truncate">{value}</span>
                </div>
              ))}
            </div>
          </div>

          <Button
            onClick={handleExternalClick}
            className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 group"
            disabled={!product.inStock}
          >
            <ExternalLink className="h-4 w-4 mr-2 group-hover:rotate-12 transition-transform" />
            View Details
          </Button>
        </div>
      </div>
    </Card>
  );
};