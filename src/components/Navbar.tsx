import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "motion/react";
import { Menu, X, Instagram, Facebook } from "lucide-react";
import { cn } from "../lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Booking", href: "/booking" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        scrolled ? "bg-black-luxury/90 backdrop-blur-md py-3 shadow-xl" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 border-2 border-gold rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
            <span className="font-display text-gold font-bold text-xl">H</span>
          </div>
          <div className="flex flex-col">
            <span className={cn("font-display text-xl leading-none font-bold", scrolled ? "text-gold" : "text-gold")}>HANNAH</span>
            <span className={cn("text-[10px] tracking-[0.3em] font-sans", scrolled ? "text-white/80" : "text-white/90")}>NAILS</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                "text-sm uppercase tracking-widest transition-colors hover:text-gold",
                location.pathname === link.href ? "text-gold font-medium" : "text-white/90"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/booking"
            className="bg-gold hover:bg-gold-dark text-black-luxury px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all hover:scale-105 active:scale-95 shadow-lg shadow-gold/20"
          >
            Book Now
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gold p-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-full left-0 right-0 bg-black-luxury border-t border-gold/10 overflow-hidden"
          >
            <div className="flex flex-col p-8 gap-6 items-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={cn(
                    "text-lg uppercase tracking-widest",
                    location.pathname === link.href ? "text-gold" : "text-white"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/booking"
                className="w-full text-center bg-gold py-4 rounded-full text-black-luxury font-bold uppercase tracking-widest"
                onClick={() => setIsOpen(false)}
              >
                Book Appointment
              </Link>
              <div className="flex gap-4 pt-4">
                <Instagram className="text-gold" size={20} />
                <Facebook className="text-gold" size={20} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { AnimatePresence } from "motion/react";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
