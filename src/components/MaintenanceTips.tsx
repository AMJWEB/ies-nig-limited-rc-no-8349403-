import { maintenanceTips } from '@/data/services';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const MaintenanceTips = () => {
  return (
    <section id="tips" className="py-24 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold">Pro Maintenance Tips</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Keep your home in top shape with our seasonal guides and DIY maintenance advice.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {maintenanceTips.map((tip) => (
            <Card key={tip.id} className="group hover:border-primary transition-colors border-2 border-transparent shadow-sm">
              <CardHeader>
                <div className="flex justify-between items-start mb-4">
                  <Badge variant="outline" className="rounded-md">{tip.category}</Badge>
                  <BookOpen className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors leading-tight">
                  {tip.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm line-clamp-3">
                  {tip.excerpt}
                </p>
                <Button variant="link" className="px-0 text-primary h-auto flex items-center gap-1 group/link">
                  Read Full Guide
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-primary rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
          <div className="relative z-10 max-w-2xl">
            <h3 className="text-2xl md:text-4xl font-bold mb-4">Protect Your Investment</h3>
            <p className="text-primary-foreground/80 mb-8 text-lg">
              All our major installations come with a <strong className="text-white">Lifetime Warranty</strong> on labor and a <strong className="text-white">10-Year Manufacturer Warranty</strong> on parts. Peace of mind comes standard.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="secondary" className="h-12 px-8">Learn About Warranty</Button>
              <Button variant="ghost" className="text-white hover:bg-white/10 h-12 px-8">Download Home Checklist</Button>
            </div>
          </div>
          <div className="absolute right-0 bottom-0 opacity-10 hidden lg:block transform translate-y-1/4">
            <ShieldCheck className="w-96 h-96" />
          </div>
        </div>
      </div>
    </section>
  );
};
