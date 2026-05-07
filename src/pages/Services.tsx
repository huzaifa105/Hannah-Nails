import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, Check, Star } from "lucide-react";

export default function Services() {
  const serviceCategories = [
    {
      name: "Acrylic Services",
      description: "Durable extensions with high-fashion shaping and strength.",
      items: [
        { name: "Full Set (Short/Medium)", price: "$45+", desc: "Includes basic gel polish" },
        { name: "Full Set (Long/XL)", price: "$60+", desc: "Custom shaping included" },
        { name: "Acrylic Fill-In", price: "$35+", desc: "Recommended every 2-3 weeks" },
        { name: "Pink & White Full Set", price: "$65+", desc: "Classic French look with powder" }
      ]
    },
    {
      name: "Manicure & Gel",
      description: "Nourishing care for your natural nails and cuticles.",
      items: [
        { name: "Classic Manicure", price: "$25", desc: "Soak, shape, cuticle care, and regular polish" },
        { name: "Gel Polish Change", price: "$20", desc: "For natural nails" },
        { name: "Luxury Gel Manicure", price: "$40", desc: "Signature care with extended wear" },
        { name: "Dipping Powder (SNS)", price: "$50", desc: "Odourless, vitamin-infused strength" }
      ]
    },
    {
      name: "Spa Pedicures",
      description: "The ultimate relaxation for your feet.",
      items: [
        { name: "Classic Pedicure", price: "$35", desc: "Sugar scrub and moisture massage" },
        { name: "Deluxe Spa Pedicure", price: "$50", desc: "Callus removal and paraffin wax" },
        { name: "Luxury Pearl Pedicure", price: "$65", desc: "Exfoliation with real pearl powder" },
        { name: "Bridal Spa Treatment", price: "$80", desc: "Ultimate luxury for the bride-to-be" }
      ]
    },
    {
      name: "Art & Add-ons",
      description: "Personalize your set with artistic flourishes.",
      items: [
        { name: "Basic Nail Art", price: "$10+", desc: "Stickers, simple lines, dots" },
        { name: "Premium Hand-Painted Art", price: "$25+", desc: "Custom designs per nail" },
        { name: "Swarovski Crystals", price: "$5+", desc: "Per finger / cluster" },
        { name: "Paraffin Treatment", price: "$10", desc: "Intense hydration for hands/feet" }
      ]
    }
  ];

  return (
    <div className="pt-24 pb-24">
      <section className="bg-black-luxury py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="text-gold uppercase tracking-[0.4em] text-sm block">Our Menu</span>
          <h1 className="text-white text-5xl md:text-8xl font-display">Signature Services</h1>
          <p className="text-white/60 text-lg md:text-xl font-light max-w-2xl mx-auto pt-6 leading-relaxed">
            Every service we provide is a blend of artistry, relaxation, and the highest standards of nail health.
          </p>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {serviceCategories.map((category, idx) => (
              <motion.div 
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="space-y-8"
              >
                <div className="space-y-4 border-b border-gold/20 pb-6">
                  <h2 className="text-3xl md:text-4xl font-display text-black-luxury">{category.name}</h2>
                  <p className="text-black-luxury/50 font-light italic">{category.description}</p>
                </div>
                <div className="space-y-6">
                  {category.items.map((item) => (
                    <div key={item.name} className="flex justify-between items-start group">
                      <div className="space-y-1">
                        <h4 className="text-lg font-bold text-black-luxury tracking-tight">{item.name}</h4>
                        <p className="text-xs text-black-luxury/40 uppercase tracking-widest">{item.desc}</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="h-px bg-gold/10 w-12 hidden md:block" />
                        <span className="text-gold font-bold">{item.price}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-black-luxury text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-4xl md:text-6xl font-display">Special Packages</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Basic Glam", price: "$65", items: ["Gel Manicure", "Regular Pedicure"], popular: false },
              { name: "Luxury Experience", price: "$95", items: ["Acrylic Set", "Spa Pedicure", "Nail Art"], popular: true },
              { name: "Bridal Suite", price: "$145", items: ["Bridal Set", "Pearl Pedicure", "Crystals"], popular: false }
            ].map((pkg, i) => (
              <div key={pkg.name} className={`p-10 rounded-[2rem] border ${pkg.popular ? 'border-gold bg-white/10' : 'border-white/10 bg-white/5'}`}>
                <h3 className="text-2xl font-display text-gold mb-6">{pkg.name}</h3>
                <div className="text-4xl font-display mb-8">{pkg.price}</div>
                <ul className="space-y-4 mb-10">
                  {pkg.items.map(item => <li key={item} className="flex items-center gap-3 text-sm text-white/70"><Check size={16} className="text-gold" /> {item}</li>)}
                </ul>
                <Link to="/booking" className="block w-full py-4 rounded-full text-center font-bold uppercase tracking-widest text-[10px] bg-gold text-black-luxury">Select Package</Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
