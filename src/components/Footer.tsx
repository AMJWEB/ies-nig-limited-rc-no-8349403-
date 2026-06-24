import { ShieldCheck, Facebook, Twitter, Instagram, Mail, MapPin, Phone } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-muted py-12 border-t">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-6 w-6 text-primary" />
            <span className="text-lg font-bold">HomePro Solutions</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Providing expert home services since 1995. We take pride in our work and offer 100% satisfaction guarantee.
          </p>
          <div className="flex gap-4">
            <Facebook className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer" />
            <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer" />
            <Instagram className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer" />
          </div>
        </div>

        <div>
          <h4 className="font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#services" className="hover:text-primary">Our Services</a></li>
            <li><a href="#gallery" className="hover:text-primary">Project Gallery</a></li>
            <li><a href="#booking" className="hover:text-primary">Book an Appointment</a></li>
            <li><a href="#tips" className="hover:text-primary">Maintenance Tips</a></li>
            <li><a href="#" className="hover:text-primary">Warranty Info</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Plumbing</li>
            <li>Electrical</li>
            <li>HVAC Repair</li>
            <li>Roofing</li>
            <li>Landscaping</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4">Contact Us</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              123 Service Lane, Suite 100, Cityville
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              (555) 123-4567
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              help@homepro.com
            </li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} HomePro Solutions. All rights reserved. Professional Home Services.
      </div>
    </footer>
  );
};
