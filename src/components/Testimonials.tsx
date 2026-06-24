import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { reviews } from '@/data/services';

export const Testimonials = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold">What Our Clients Say</h2>
            <p className="text-muted-foreground text-lg max-w-xl">
              We've helped thousands of homeowners across the city. Here are some of their experiences with our team.
            </p>
          </div>
          <div className="flex items-center gap-2 bg-primary/10 px-6 py-3 rounded-2xl">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="h-5 w-5 fill-primary text-primary" />
              ))}
            </div>
            <span className="font-bold text-lg">4.9/5 Average Rating</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <Card key={review.id} className="relative border-none shadow-lg bg-muted/30 pt-8">
              <Quote className="absolute top-4 right-4 h-8 w-8 text-primary/10" />
              <CardContent className="space-y-6">
                <div className="flex gap-1">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="italic text-muted-foreground leading-relaxed">
                  "{review.comment}"
                </p>
                <div className="flex items-center gap-4 border-t pt-6">
                  <Avatar>
                    <AvatarImage src={`https://i.pravatar.cc/150?u=${review.id}`} />
                    <AvatarFallback>{review.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-bold">{review.name}</p>
                    <p className="text-xs text-muted-foreground">{new Date(review.date).toLocaleDateString()}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
