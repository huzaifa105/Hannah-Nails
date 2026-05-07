import { Link } from "react-router-dom";
import { Instagram, Facebook, Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black-luxury text-white pt-20 pb-10 px-6 border-t border-gold/20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        {/* Branding */}
        <div className="space-y-6">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-12 h-12 border-2 border-gold rounded-full flex items-center justify-center">
              <span className="font-display text-gold font-bold text-2xl">H</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display text-2xl leading-none font-bold text-gold">HANNAH</span>
              <span className="text-[12px] tracking-[0.3em] font-sans text-white/80">NAILS</span>
            </div>
          </Link>
          <p className="text-white/60 text-sm leading-relaxed max-w-xs">
            Defining elegance through artful nail care. Our mission is to provide a premium salon experience that leaves you feeling glamorous and pampered.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 border border-gold/30 rounded-full flex items-center justify-center hover:bg-gold hover:text-black-luxury transition-all">
              <Instagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 border border-gold/30 rounded-full flex items-center justify-center hover:bg-gold hover:text-black-luxury transition-all">
              <Facebook size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-6">
          <h4 className="font-display text-xl text-gold">Explore</h4>
          <ul className="space-y-4">
            {["Home", "About", "Services", "Booking", "Contact"].map((item) => (
              <li key={item}>
                <Link to={item === "Home" ? "/" : `/${item.toLowerCase()}`} className="text-white/60 hover:text-gold transition-colors text-sm uppercase tracking-widest flex items-center gap-2 group">
                  <span className="w-0 h-[1px] bg-gold group-hover:w-4 transition-all duration-300"></span>
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div className="space-y-6">
          <h4 className="font-display text-xl text-gold">Newsletter</h4>
          <p className="text-white/60 text-sm">Join our list for exclusive offers and nail care tips.</p>
          <div className="relative">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-white/5 border border-white/10 rounded-full py-3 px-6 text-sm focus:outline-none focus:border-gold transition-colors"
            />
            <button className="absolute right-2 top-1.5 bg-gold p-1.5 rounded-full text-black-luxury hover:bg-gold-light transition-colors">
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Contact info */}
        <div className="space-y-6">
          <h4 className="font-display text-xl text-gold">Contact</h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <MapPin className="text-gold shrink-0" size={18} />
              <span className="text-white/60 text-sm">306 N Spur 63, Longview, TX 75601, United States</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="text-gold shrink-0" size={18} />
              <span className="text-white/60 text-sm">+1 903-232-2706</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="text-gold shrink-0" size={18} />
              <span className="text-white/60 text-sm">hello@hannah-nails.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-xs tracking-widest uppercase text-white/40">
        <p>© {currentYear} HANNAH NAILS. ALL RIGHTS RESERVED.</p>
        <p>DEVELOPED BY <span className="text-gold/60 hover:text-gold transition-colors cursor-pointer">SERWIZEN.</span></p>
      </div>
    </footer>
  );
}
