import { motion } from "motion/react";
import { Phone, Mail, MapPin, Clock, Instagram, Facebook } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(r => setTimeout(r, 1500));
    setSubmitted(true);
    setIsSubmitting(false);
  };

  return (
    <div className="pt-24 pb-24">
      {/* Page Header */}
      <section className="bg-black-luxury py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="text-gold uppercase tracking-[0.4em] text-sm block">Contact Us</span>
          <h1 className="text-white text-5xl md:text-8xl font-display">Get in Touch</h1>
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Contact Info */}
            <div className="space-y-12">
              <div className="space-y-8">
                <h2 className="text-4xl font-display text-black-luxury">Location & Hours</h2>
                <div className="space-y-6">
                  <div className="flex gap-6 items-start">
                    <div className="w-12 h-12 bg-beige rounded-full flex items-center justify-center text-gold shrink-0">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-black-luxury uppercase tracking-widest text-xs mb-2">Our Address</h4>
                      <p className="text-black-luxury/60 font-light leading-relaxed">
                        306 N Spur 63, Longview, TX 75601,<br /> United States
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-6 items-start">
                    <div className="w-12 h-12 bg-beige rounded-full flex items-center justify-center text-gold shrink-0">
                      <Clock size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-black-luxury uppercase tracking-widest text-xs mb-2">Business Hours</h4>
                      <ul className="text-black-luxury/60 font-light space-y-1">
                        <li className="flex justify-between w-64"><span>Mon - Sat:</span> <span>9:00 AM - 7:00 PM</span></li>
                        <li className="flex justify-between w-64"><span>Sun:</span> <span>11:00 AM - 5:00 PM</span></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-8 pt-8 border-t border-gold/10">
                <h2 className="text-4xl font-display text-black-luxury">Quick Contact</h2>
                <div className="space-y-6">
                  <a href="tel:+19032322706" className="flex gap-6 items-start group">
                    <div className="w-12 h-12 bg-beige rounded-full flex items-center justify-center text-gold shrink-0 group-hover:bg-gold group-hover:text-black-luxury transition-colors">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-black-luxury uppercase tracking-widest text-xs mb-1 group-hover:text-gold transition-colors">Phone Support</h4>
                      <p className="text-black-luxury/60 font-bold tracking-[0.1em]">+1 903-232-2706</p>
                    </div>
                  </a>
                  <a href="mailto:hello@hannah-nails.com" className="flex gap-6 items-start group">
                    <div className="w-12 h-12 bg-beige rounded-full flex items-center justify-center text-gold shrink-0 group-hover:bg-gold group-hover:text-black-luxury transition-colors">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-black-luxury uppercase tracking-widest text-xs mb-1 group-hover:text-gold transition-colors">Email Us</h4>
                      <p className="text-black-luxury/60 font-bold tracking-[0.1em]">hello@hannah-nails.com</p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="flex gap-4 pt-10">
                 <div className="w-px h-12 bg-gold/30" />
                 <div className="flex items-center gap-6">
                    <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-black-luxury/30">Follow Us</span>
                    <Instagram className="text-gold hover:scale-110 cursor-pointer transition-transform" />
                    <Facebook className="text-gold hover:scale-110 cursor-pointer transition-transform" />
                 </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-beige p-8 md:p-12 rounded-[2.5rem] border border-gold/20 shadow-2xl h-fit">
              {submitted ? (
                <div className="text-center py-20 space-y-6">
                  <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mx-auto text-gold">
                    <Mail size={40} />
                  </div>
                  <h3 className="text-3xl font-display">Message Sent!</h3>
                  <p className="text-black-luxury/60 font-light">We've received your inquiry and will get back to you within 24 hours.</p>
                  <button onClick={() => setSubmitted(false)} className="text-gold font-bold uppercase tracking-widest text-xs">Send another message</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="space-y-4">
                    <h3 className="text-3xl font-display text-black-luxury">Send a Message</h3>
                    <p className="text-black-luxury/50 font-light text-sm">Have a question? We're here to help.</p>
                  </div>
                  <div className="space-y-6">
                    <input 
                      required
                      type="text" 
                      placeholder="Your Full Name"
                      className="w-full bg-white border border-transparent focus:border-gold rounded-full py-4 px-8 outline-none transition-all text-sm shadow-sm"
                    />
                    <input 
                      required
                      type="email" 
                      placeholder="Email Address"
                      className="w-full bg-white border border-transparent focus:border-gold rounded-full py-4 px-8 outline-none transition-all text-sm shadow-sm"
                    />
                    <textarea 
                      required
                      placeholder="How can we help you?"
                      className="w-full bg-white border border-transparent focus:border-gold rounded-[2rem] py-4 px-8 outline-none transition-all text-sm shadow-sm h-40 resize-none"
                    />
                  </div>
                  <button 
                    disabled={isSubmitting}
                    className="w-full py-6 bg-black-luxury text-white rounded-full font-bold uppercase tracking-widest text-xs hover:bg-gold hover:text-black-luxury transition-all disabled:opacity-50"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="h-[500px] w-full pt-10 px-6">
        <div className="max-w-7xl mx-auto h-full rounded-[3rem] overflow-hidden border border-gold/20 shadow-2xl bg-beige flex items-center justify-center relative group">
          {/* Iframe for Google Maps */}
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3356.123456789!2d-94.743210!3d32.520123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86363ea1234567:0xabcdef1234567!2s306%20N%20Spur%2063%2C%20Longview%2C%20TX%2075601%2C%20USA!5e0!3m2!1sen!2sus!4v1234567890" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale group-hover:grayscale-0 transition-all duration-1000"
          ></iframe>
        </div>
      </section>
    </div>
  );
}
