import { useState } from 'react';
import { galleryItems } from '@/data/services';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const BeforeAfterGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const item = galleryItems[currentIndex];

  return (
    <section id="gallery" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold">Transformations Gallery</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            See the quality of our work firsthand. We take pride in transforming dated spaces into modern, functional homes.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div 
            className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl cursor-pointer group"
          >
            {/* The generated image is a split screen, so I'll just show it and explain */}
            <img 
              src={item.after} 
              alt={item.title} 
              className="w-full h-full object-cover"
            />
            
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="text-center text-white space-y-2">
                <h3 className="text-3xl font-bold">{item.title}</h3>
                <p className="text-lg">Project completed in 2 weeks</p>
              </div>
            </div>

            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-primary shadow-sm">
              Before & After
            </div>
          </div>

          <div className="flex justify-between items-center mt-8">
            <div className="flex gap-2">
              <Button 
                variant="outline" 
                size="icon" 
                onClick={() => setCurrentIndex((prev) => (prev > 0 ? prev - 1 : galleryItems.length - 1))}
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                onClick={() => setCurrentIndex((prev) => (prev < galleryItems.length - 1 ? prev + 1 : 0))}
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
            <p className="text-sm font-medium text-muted-foreground">
              Showing {currentIndex + 1} of {galleryItems.length} Featured Projects
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
