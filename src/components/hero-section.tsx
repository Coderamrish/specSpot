import React from 'react';
import { Zap, TrendingUp, Search, Filter } from 'lucide-react';
import heroImage from '@/assets/hero-image.jpg';

interface HeroSectionProps {
  totalProducts: number;
  filteredCount: number;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ totalProducts, filteredCount }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero border-b border-border">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-20">
        <img
          src={heroImage}
          alt="Tech workspace"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-6 py-16">
        <div className="max-w-4xl">
          <div className="space-y-6 animate-fade-in">
            {/* Main Heading */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center animate-float">
                  <Zap className="h-6 w-6 text-background" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary via-accent to-primary-glow bg-clip-text text-transparent">
                    SpecSpot
                  </h1>
                  <p className="text-muted-foreground text-lg">Your Ultimate Tech Product Discovery Platform</p>
                </div>
              </div>
              
              <h2 className="text-2xl md:text-3xl font-semibold text-card-foreground max-w-3xl">
                Discover, Compare & Find the Perfect Tech Products with Real-Time Data
              </h2>
            </div>

            {/* Description */}
            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
              From high-performance GPUs and mechanical keyboards to programming books and laptops – 
              explore our curated collection of tech products with detailed specs, pricing, and smart filtering.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 py-4">
              <div className="flex items-center gap-3 bg-card/50 backdrop-blur-sm px-4 py-3 rounded-lg border border-border/50">
                <TrendingUp className="h-5 w-5 text-primary" />
                <div>
                  <div className="font-semibold text-card-foreground">{totalProducts}+</div>
                  <div className="text-sm text-muted-foreground">Products</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 bg-card/50 backdrop-blur-sm px-4 py-3 rounded-lg border border-border/50">
                <Search className="h-5 w-5 text-accent" />
                <div>
                  <div className="font-semibold text-card-foreground">Smart Search</div>
                  <div className="text-sm text-muted-foreground">Real-time filtering</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 bg-card/50 backdrop-blur-sm px-4 py-3 rounded-lg border border-border/50">
                <Filter className="h-5 w-5 text-primary-glow" />
                <div>
                  <div className="font-semibold text-card-foreground">{filteredCount}</div>
                  <div className="text-sm text-muted-foreground">Showing now</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
};