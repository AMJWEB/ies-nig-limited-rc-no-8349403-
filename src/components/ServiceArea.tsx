import { MapPin, CheckCircle2 } from 'lucide-react';
import { Card } from '@/components/ui/card';

export const ServiceArea = () => {
  const towns = [
    'Downtown Metro', 'Highland Park', 'North Hills', 'Riverside', 
    'West End', 'Southside', 'East Gate', 'Valley View', 'Sunset Ridge'
  ];

  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-square bg-muted rounded-full absolute -top-12 -left-12 w-64 h-64 blur-3xl opacity-50" />
            <div className="relative z-10 space-y-8">
              <h2 className="text-3xl md:text-5xl font-bold">Our Service Area</h2>
              <p className="text-lg text-muted-foreground">
                We provide premium home services to the entire metropolitan area and surrounding suburbs. Check our list below to see if we cover your neighborhood.
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-4 gap-x-8">
                {towns.map((town) => (
                  <div key={town} className="flex items-center gap-2 group cursor-default">
                    <CheckCircle2 className="h-4 w-4 text-primary opacity-50 group-hover:opacity-100 transition-opacity" />
                    <span className="font-medium">{town}</span>
                  </div>
                ))}
              </div>

              <Card className="p-6 border-primary/20 bg-primary/5 flex items-start gap-4 shadow-none">
                <MapPin className="h-6 w-6 text-primary shrink-0 mt-1" />
                <div>
                  <p className="font-bold">Not on the list?</p>
                  <p className="text-sm text-muted-foreground">
                    Give us a call! We're constantly expanding our service routes and might be able to accommodate your request.
                  </p>
                </div>
              </Card>
            </div>
          </div>

          <div className="relative">
            {/* Mock Map */}
            <div className="aspect-[4/3] bg-muted rounded-3xl overflow-hidden shadow-inner border relative border-border/50">
              <div className="absolute inset-0 grid grid-cols-8 grid-rows-8 opacity-20">
                {Array.from({ length: 64 }).map((_, i) => (
                  <div key={i} className="border border-muted-foreground/20" />
                ))}
              </div>
              
              {/* Service Pins */}
              <div className="absolute top-1/4 left-1/3 animate-bounce">
                <MapPin className="h-8 w-8 text-primary fill-primary/20" />
              </div>
              <div className="absolute top-2/3 left-1/2 animate-bounce delay-75">
                <MapPin className="h-8 w-8 text-primary fill-primary/20" />
              </div>
              <div className="absolute top-1/3 left-3/4 animate-bounce delay-150">
                <MapPin className="h-8 w-8 text-primary fill-primary/20" />
              </div>

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/90 backdrop-blur p-4 rounded-2xl shadow-xl text-center border">
                  <p className="font-bold text-lg">Serving 25+ Neighborhoods</p>
                  <p className="text-sm text-muted-foreground">Premium local expertise you can trust</p>
                </div>
              </div>

              <div className="absolute bottom-4 right-4 bg-white p-2 rounded-lg shadow-md flex items-center gap-2 border">
                <div className="h-3 w-3 rounded-full bg-primary animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-wider">Live Route Tracking</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
