import React from 'react';
import { Phone, Menu, X, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <ShieldCheck className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold tracking-tight">HomePro Solutions</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <a href="#services" className="hover:text-primary transition-colors">Services</a>
          <a href="#gallery" className="hover:text-primary transition-colors">Gallery</a>
          <a href="#estimator" className="hover:text-primary transition-colors">Estimator</a>
          <a href="#booking" className="hover:text-primary transition-colors">Book Now</a>
          <a href="#tips" className="hover:text-primary transition-colors">Maintenance Tips</a>
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-2 text-sm font-semibold text-primary">
            <Phone className="h-4 w-4" />
            <span>(555) 123-4567</span>
          </div>
          <Button className="hidden sm:flex" onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}>
            Free Estimate
          </Button>
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background p-4 flex flex-col gap-4">
          <a href="#services" className="text-lg font-medium" onClick={() => setIsMenuOpen(false)}>Services</a>
          <a href="#gallery" className="text-lg font-medium" onClick={() => setIsMenuOpen(false)}>Gallery</a>
          <a href="#estimator" className="text-lg font-medium" onClick={() => setIsMenuOpen(false)}>Estimator</a>
          <a href="#booking" className="text-lg font-medium" onClick={() => setIsMenuOpen(false)}>Book Now</a>
          <a href="#tips" className="text-lg font-medium" onClick={() => setIsMenuOpen(false)}>Maintenance Tips</a>
          <div className="flex items-center gap-2 text-primary font-bold">
            <Phone className="h-5 w-5" />
            <span>(555) 123-4567</span>
          </div>
        </div>
      )}
    </header>
  );
};
