import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServiceSection } from './components/ServiceSection';
import { BeforeAfterGallery } from './components/BeforeAfterGallery';
import { CostEstimator } from './components/CostEstimator';
import { BookingSection } from './components/BookingSection';
import { Testimonials } from './components/Testimonials';
import { MaintenanceTips } from './components/MaintenanceTips';
import { ServiceArea } from './components/ServiceArea';
import { Footer } from './components/Footer';
import { Toaster } from './components/ui/sonner';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased selection:bg-primary/20 selection:text-primary scroll-smooth">
      <Header />
      <main>
        <Hero />
        <ServiceSection />
        <BeforeAfterGallery />
        <CostEstimator />
        <BookingSection />
        <Testimonials />
        <MaintenanceTips />
        <ServiceArea />
      </main>
      <Footer />
      <Toaster position="top-center" expand={true} richColors />
    </div>
  );
}

export default App;
