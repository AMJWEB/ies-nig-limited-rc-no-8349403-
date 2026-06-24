import { AlertTriangle, Star, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-background py-12 md:py-24">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 animate-in fade-in slide-in-from-left duration-700">
          <Badge variant="secondary" className="px-4 py-1 text-sm font-medium">
            <Star className="h-3 w-3 mr-1 fill-primary text-primary" />
            Top Rated Home Service Provider
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
            Your Trusted Partner for <span className="text-primary">Home Excellence</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-lg">
            From emergency repairs to major renovations, we provide professional, reliable services that you can count on. Licensed, insured, and 100% guaranteed.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="h-14 px-8 text-lg" onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}>
              Schedule Service
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 text-lg" onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>
              View Our Services
            </Button>
          </div>

          <div className="flex items-center gap-4 p-4 border rounded-xl bg-destructive/5 border-destructive/20 animate-pulse">
            <AlertTriangle className="h-6 w-6 text-destructive" />
            <div>
              <p className="font-bold text-destructive">24/7 Emergency Service Available</p>
              <p className="text-sm text-destructive/80">Plumbing & Electrical emergencies call (555) 999-0000</p>
            </div>
          </div>
        </div>

        <div className="relative animate-in fade-in slide-in-from-right duration-700">
          <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative">
            <img 
              src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/f026be92-db96-4386-8871-5da07012ec41/hero-house-ba819179-1782294374773.webp" 
              alt="Professional Home Service" 
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
          
          {/* Stats floating card */}
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl hidden md:block">
            <div className="flex items-center gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <ShieldCheck className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold">100%</p>
                <p className="text-sm text-muted-foreground font-medium">Satisfaction Guaranteed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
