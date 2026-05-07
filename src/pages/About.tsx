import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight, Users, Sparkles, ShieldCheck } from "lucide-react";

export default function About() {
  return (
    <div className="pt-24 pb-24">
      {/* Page Header */}
      <section className="bg-black-luxury py-24 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=2000" 
            alt="Interior"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto space-y-4">
          <span className="text-gold uppercase tracking-[0.4em] text-sm block">Discover Our Story</span>
          <h1 className="text-white text-5xl md:text-8xl font-display">About Hannah Nails</h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <span className="text-gold uppercase tracking-[0.3em] text-sm font-bold">Est. 2014</span>
                <h2 className="text-4xl md:text-5xl font-display">Excellence and Elegance</h2>
              </div>
              <p className="text-black-luxury/70 text-lg leading-relaxed font-light">
                Hannah Nails was founded with a singular vision: to redefine the nail salon experience. We moved away from the rushed, noisy environment of traditional salons to create a sanctuary of sophistication and skill.
              </p>
              <p className="text-black-luxury/70 text-lg leading-relaxed font-light">
                In Longview, TX, we've become synonymous with high-end nail artistry. Our salon is built on the pillars of premium customer care, absolute hygiene, and artistic innovation. Every stroke of the brush and every detail of our service is designed to celebrate you.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-6">
                <div>
                  <h4 className="text-3xl font-display text-gold mb-2">10k+</h4>
                  <p className="text-xs uppercase tracking-widest text-black-luxury/50 font-bold">Happy Clients</p>
                </div>
                <div>
                  <h4 className="text-3xl font-display text-gold mb-2">10+</h4>
                  <p className="text-xs uppercase tracking-widest text-black-luxury/50 font-bold">Years of Service</p>
                </div>
              </div>
            </div>
            <div className="relative group">
              <div className="aspect-[4/5] rounded-[40px] overflow-hidden border border-gold/20 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1628151240315-779872583842?auto=format&fit=crop&q=80&w=1200" 
                  alt="Nail Art Process"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -top-10 -left-10 w-40 h-40 border border-gold rounded-full opacity-20 pointer-events-none" />
              <div className="absolute -bottom-10 -right-10 w-60 h-60 border border-gold rounded-full opacity-20 pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 px-6 bg-black-luxury text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="p-12 bg-white/5 border border-white/10 rounded-[2rem] space-y-6">
            <h3 className="text-3xl font-display text-gold uppercase tracking-tight">Our Mission</h3>
            <p className="text-white/60 font-light leading-relaxed text-lg">
              To provide an unparalleled nail care experience by combining premium artistic techniques with a serene, luxurious atmosphere that promotes wellness and self-confidence.
            </p>
          </div>
          <div className="p-12 bg-white/5 border border-white/10 rounded-[2rem] space-y-6">
            <h3 className="text-3xl font-display text-gold uppercase tracking-tight">Our Vision</h3>
            <p className="text-white/60 font-light leading-relaxed text-lg">
              To be the most respected luxury nail brand in Texas, known for our uncompromising standards of hospitality, hygiene, and innovative nail design.
            </p>
          </div>
        </div>
      </section>

      {/* Team Preview */}
      <section className="py-24 px-6 bg-beige">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-gold uppercase tracking-[0.3em] text-sm font-bold">Meet the Artists</span>
            <h2 className="text-4xl md:text-6xl font-display">Our Expert Team</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { name: "Hannah Nguyen", role: "Founder & Master Artist", img: "https://i.pravatar.cc/300?u=hannah" },
              { name: "Linda Tran", role: "Senior Technician", img: "https://i.pravatar.cc/300?u=linda" },
              { name: "Vicky Smith", role: "Nail Art Specialist", img: "https://i.pravatar.cc/300?u=vicky" }
            ].map((member, i) => (
              <div key={i} className="text-center space-y-6 group">
                <div className="aspect-square overflow-hidden rounded-full border-4 border-gold/20 shadow-xl mx-auto max-w-[280px]">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" referrerPolicy="no-referrer" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-2xl font-display text-black-luxury">{member.name}</h4>
                  <p className="text-[10px] uppercase tracking-widest text-gold font-bold">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Last CTA */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-5xl font-display">Experience our Artistry</h2>
          <p className="text-black-luxury/60 text-lg font-light">Join us for a session of pure relaxation and elite craftsmanship.</p>
          <div className="pt-4">
            <Link to="/booking" className="inline-flex items-center gap-3 bg-gold text-black-luxury px-10 py-5 rounded-full font-bold uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-xl shadow-gold/20">
              Book Appointment <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
