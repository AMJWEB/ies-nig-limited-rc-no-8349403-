import { Droplets, Zap, ThermometerSun, Home, TreePine, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { services } from '@/data/services';
import { Button } from '@/components/ui/button';

const IconMap: Record<string, any> = {
  Droplets,
  Zap,
  ThermometerSun,
  Home,
  TreePine,
};

export const ServiceSection = () => {
  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold">Comprehensive Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            We offer a wide range of professional home services. Each job is performed by certified experts using high-quality materials.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = IconMap[service.icon];
            return (
              <Card key={service.id} className="overflow-hidden group hover:shadow-xl transition-all duration-300 border-none shadow-md">
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-white p-2 rounded-lg">
                    <Icon className="h-6 w-6" />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center text-sm font-medium text-muted-foreground border-t pt-4">
                    <span>Estimate:</span>
                    <span className="text-primary font-bold">{service.priceEstimate}</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="w-full group/btn text-primary hover:bg-primary/10">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
