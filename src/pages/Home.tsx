import { motion } from "motion/react";
import { ArrowRight, Star, ShieldCheck, Sparkles, Clock, Heart, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  const services = [
    {
      title: "Acrylic Nails",
      price: "From $45",
      image: "https://images.unsplash.com/photo-1604654894611-6973b376cbde?auto=format&fit=crop&q=80&w=800",
      description: "Durable, high-fashion extensions with custom shaping."
    },
    {
      title: "Gel Manicure",
      price: "From $35",
      image: "https://images.unsplash.com/photo-1632345031435-819711cbe763?auto=format&fit=crop&q=80&w=800",
      description: "Long-lasting shine with zero dry time and chip resistance."
    },
    {
      title: "Luxury Pedicure",
      price: "From $50",
      image: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&q=80&w=800",
      description: "Rejuvenating spa treatment with salt scrub and massage."
    },
    {
      title: "Custom Nail Art",
      price: "From $15",
      image: "https://images.unsplash.com/photo-1600007157211-16ba48011116?auto=format&fit=crop&q=80&w=800",
      description: "Hand-painted masterpieces tailored to your unique style."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Jenkins",
      text: "The most elegant salon in Longview! My nails have never looked so polished and professional. The black and gold theme is stunning.",
      rating: 5,
      image: "https://i.pravatar.cc/150?u=sarah"
    },
    {
      name: "Maria Gonzales",
      text: "Exceptional service! They really take their time to ensure everything is perfect. The hygiene here is top-notch.",
      rating: 5,
      image: "https://i.pravatar.cc/150?u=maria"
    },
    {
      name: "Jessica Taylor",
      text: "Best acrylic set I've ever had. They lasted for weeks without any lifting. I'm a loyal customer now!",
      rating: 5,
      image: "https://i.pravatar.cc/150?u=jessica"
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Announcement Bar */}
      <div className="bg-gold text-black-luxury py-2 text-center text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">
        Luxury Nail Care Experience in Longview — Book Your Appointment Today
      </div>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=2000"
            alt="Luxury Salon Interior"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
        </div>

        <div className="relative z-10 text-center max-w-4xl px-6">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gold tracking-[0.4em] uppercase text-xs md:text-sm mb-6 block font-medium"
          >
            Welcome to Hannah Nails
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-white text-5xl md:text-8xl font-display mb-8 leading-tight"
          >
            Artistry in Every <span className="italic text-gold">Detail</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-white/80 text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Experience the ultimate in luxury nail care. We combine premium products with expert craftsmanship to celebrate your unique beauty.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/booking"
              className="w-full sm:w-auto bg-gold hover:bg-gold-dark text-black-luxury px-10 py-5 rounded-full font-bold uppercase tracking-widest transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-gold/20 flex items-center justify-center gap-2"
            >
              Book Appointment <ArrowRight size={18} />
            </Link>
            <Link
              to="/services"
              className="w-full sm:w-auto border border-white/30 hover:border-gold hover:text-gold text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest transition-all flex items-center justify-center"
            >
              Explore Services
            </Link>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-px h-12 bg-gold/50" />
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 px-6 bg-beige">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="aspect-[4/5] overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&q=80&w=1000"
                alt="Manicure hands"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-black-luxury p-8 rounded-2xl hidden md:block border border-gold/20 shadow-2xl">
              <span className="text-gold font-display text-4xl block mb-1">10+</span>
              <span className="text-white/60 text-[10px] tracking-widest uppercase">Years of Excellence</span>
            </div>
          </div>
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-gold uppercase tracking-[0.3em] text-xs font-bold">Our Philosophy</span>
              <h2 className="text-4xl md:text-6xl font-display leading-tight text-black-luxury">
                Defining Elegance <br /> Since 2014
              </h2>
            </div>
            <p className="text-black-luxury/70 text-lg font-light leading-relaxed">
              At Hannah Nails, we believe that nail care is an essential part of self-care. Our salon was founded on the idea that premium beauty services should be accessible in a serene, luxurious environment.
            </p>
            <p className="text-black-luxury/70 text-lg font-light leading-relaxed">
              Located in the heart of Longview, our team of expert technicians is dedicated to staying at the forefront of nail trends and hygienic standards.
            </p>
            <div className="pt-6">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 group text-black-luxury font-bold uppercase tracking-widest text-sm"
              >
                Learn More About Us <ChevronRight className="group-hover:translate-x-1 transition-transform text-gold" size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview Grid */}
      <section className="py-24 px-6 bg-black-luxury relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none overflow-hidden">
          <div className="absolute -top-20 -left-20 w-96 h-96 border border-gold rounded-full" />
          <div className="absolute -bottom-40 -right-20 w-[500px] h-[500px] border border-gold rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="space-y-4">
              <span className="text-gold uppercase tracking-[0.3em] text-xs font-bold">What We Offer</span>
              <h2 className="text-4xl md:text-6xl font-display text-white">Signature Services</h2>
            </div>
            <Link to="/services" className="text-gold hover:text-white transition-colors uppercase tracking-widest text-xs font-bold flex items-center gap-2">
              View Price List <ChevronRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-white/5 border border-white/10 p-4 rounded-3xl hover:border-gold/30 transition-all duration-500"
              >
                <div className="aspect-[4/5] overflow-hidden rounded-2xl mb-6">
                  <img src={s.image} alt={s.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" referrerPolicy="no-referrer" />
                </div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-white text-xl font-display">{s.title}</h3>
                  <span className="text-gold font-sans font-bold text-sm tracking-tight">{s.price}</span>
                </div>
                <p className="text-white/50 text-sm font-light leading-relaxed mb-6">{s.description}</p>
                <Link to="/booking" className="w-full py-3 border border-white/10 rounded-full text-white text-[10px] font-bold uppercase tracking-widest group-hover:bg-gold group-hover:text-black-luxury group-hover:border-gold transition-all flex items-center justify-center">
                  Book Service
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-gold uppercase tracking-[0.3em] text-xs font-bold">The Hannah Standard</span>
            <h2 className="text-4xl md:text-6xl font-display">Why Choose Us</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Expert Technicians", icon: <Sparkles />, desc: "Highly trained professionals dedicated to salon excellence." },
              { title: "Premium Products", icon: <ShieldCheck />, desc: "We use only top-tier brands and toxin-free polishes." },
              { title: "Ultimate Hygiene", icon: <Heart />, desc: "Hospital-grade sterilization with individualized kits." }
            ].map((feature, i) => (
              <div key={i} className="text-center space-y-6 flex flex-col items-center">
                <div className="w-16 h-16 bg-beige rounded-full flex items-center justify-center text-gold">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-display">{feature.title}</h3>
                <p className="text-black-luxury/60 font-light leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Gallery Section */}
      <section className="py-24 px-6 bg-beige overflow-hidden">
        <div className="max-w-7xl mx-auto mb-16 text-center space-y-4">
          <span className="text-gold uppercase tracking-[0.3em] text-xs font-bold">Portfolio</span>
          <h2 className="text-4xl md:text-6xl font-display">Gallery of Elegance</h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {[
            "https://images.unsplash.com/photo-1604654894611-6973b376cbde",
            "https://images.unsplash.com/photo-1632345031435-819711cbe763",
            "https://images.unsplash.com/photo-1600007157211-16ba48011116",
            "https://images.unsplash.com/photo-1519014816548-bf5fe059798b",
            "https://images.unsplash.com/photo-1599426417084-20dcd2f48344",
            "https://images.unsplash.com/photo-1628151240315-779872583842",
            "https://images.unsplash.com/photo-1627383637172-52028682cb3e",
            "https://images.unsplash.com/photo-1616140134446-f94d975a507a"
          ].map((url, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="aspect-square rounded-2xl overflow-hidden group border border-gold/10"
            >
              <img 
                src={`${url}?auto=format&fit=crop&q=80&w=600`} 
                alt={`Nail Art ${i}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-125"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto relative z-10">
           <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
              <span className="text-gold uppercase tracking-[0.3em] text-xs font-bold">Customer Love</span>
              <h2 className="text-4xl md:text-6xl font-display uppercase tracking-tight">Our Glowing Reviews</h2>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((t, i) => (
                <div key={i} className="bg-beige p-8 rounded-3xl border border-gold/10 space-y-6">
                  <div className="flex gap-1 text-gold">
                    {[...Array(t.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                  </div>
                  <p className="italic text-black-luxury/80 font-light leading-relaxed">"{t.text}"</p>
                  <div className="flex items-center gap-4 pt-4 border-t border-gold/20">
                    <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover" referrerPolicy="no-referrer" />
                    <div>
                      <h4 className="font-display text-lg leading-none">{t.name}</h4>
                      <span className="text-[10px] uppercase tracking-widest text-black-luxury/40">Verified Customer</span>
                    </div>
                  </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 bg-white border-t border-gold/10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <span className="text-gold uppercase tracking-[0.3em] text-xs font-bold">Questions</span>
            <h2 className="text-4xl md:text-6xl font-display uppercase tracking-tight">Frequently Asked Questions</h2>
          </div>
          
          <div className="space-y-8">
            {[
              { q: "Do you accept walk-ins?", a: "Yes, we do! However, scheduled appointments are always prioritized. We recommend booking in advance to ensure your preferred time and technician." },
              { q: "How long do acrylic nails typically last?", a: "With proper care, our high-end acrylic sets last 3-4 weeks. We recommend coming in for a fill every 2-3 weeks to maintain health and aesthetics." },
              { q: "What is your cancellation policy?", a: "We require at least 24 hours notice for any cancellations or rescheduling. This allows us to offer the slot to another client." },
              { q: "Do you offer group bookings for bridal parties?", a: "Absolutely! We love hosting bridal parties. Please call us directly to discuss custom packages and private salon bookings." }
            ].map((faq, i) => (
              <div key={i} className="group border-b border-gold/10 pb-8 last:border-0">
                <h3 className="text-xl font-display text-black-luxury mb-4 flex items-center gap-4 transition-colors group-hover:text-gold">
                  <span className="text-gold opacity-30">0{i+1}</span> {faq.q}
                </h3>
                <p className="text-black-luxury/60 font-light leading-relaxed md:pl-10 max-w-3xl">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 bg-black-luxury text-center">
        <div className="max-w-4xl mx-auto space-y-10">
          <h2 className="text-4xl md:text-7xl font-display text-white leading-tight">
            Ready for your <br /> <span className="text-gold italic">Dream Set?</span>
          </h2>
          <p className="text-white/60 text-lg md:text-xl font-light">
            Luxury nail care is just a few clicks away. Secure your preferred slot now and experience the art of beauty.
          </p>
          <div className="pt-6">
            <Link
              to="/booking"
              className="inline-block bg-gold hover:bg-gold-dark text-black-luxury px-12 py-6 rounded-full font-bold uppercase tracking-widest transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-gold/40"
            >
              Book Your Appointment
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
