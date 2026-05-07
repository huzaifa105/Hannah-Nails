import { useState } from "react";
import { motion } from "motion/react";
import { Calendar, Clock, User, Phone, Mail, MessageSquare, CheckCircle2 } from "lucide-react";

export default function Booking() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    date: "",
    time: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const services = [
    "Acrylic Full Set", "Acrylic Fill-In", "Gel Manicure", "Luxury Pedicure", 
    "Dipping Powder", "Custom Nail Art", "Bridal Package", "Other"
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      if (data.success) {
        setIsSuccess(true);
      }
    } catch (error) {
      console.error("Booking error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="pt-32 pb-24 px-6 min-h-screen bg-beige flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full bg-white p-12 rounded-[2rem] shadow-2xl border border-gold/20 text-center space-y-6"
        >
          <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mx-auto text-gold">
            <CheckCircle2 size={40} />
          </div>
          <h2 className="text-3xl font-display text-black-luxury">Booking Requested!</h2>
          <p className="text-black-luxury/60 font-light leading-relaxed">
            Thank you, {formData.name}. We have received your appointment request. Our team will contact you shortly at {formData.phone} to confirm your slot.
          </p>
          <button 
            onClick={() => setIsSuccess(false)}
            className="w-full py-4 bg-black-luxury text-white rounded-full font-bold uppercase tracking-widest text-xs"
          >
            Make Another Booking
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-24">
      <section className="bg-black-luxury py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="text-gold uppercase tracking-[0.4em] text-sm block">Reservations</span>
          <h1 className="text-white text-5xl md:text-8xl font-display">Book Appointment</h1>
        </div>
      </section>

      <section className="py-24 px-6 bg-beige">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1 space-y-12">
              <div className="space-y-6">
                <h3 className="text-2xl font-display text-gold">Booking Policy</h3>
                <ul className="space-y-4 text-sm font-light text-black-luxury/70">
                  <li className="flex gap-3">
                    <div className="w-1.5 h-1.5 bg-gold rounded-full mt-1.5 shrink-0" />
                    <span>Please arrive 5 minutes early for your check-in.</span>
                  </li>
                  <li className="flex gap-3">
                    <div className="w-1.5 h-1.5 bg-gold rounded-full mt-1.5 shrink-0" />
                    <span>24-hour notice required for cancellations.</span>
                  </li>
                  <li className="flex gap-3">
                    <div className="w-1.5 h-1.5 bg-gold rounded-full mt-1.5 shrink-0" />
                    <span>Walk-ins are welcome but based on availability.</span>
                  </li>
                </ul>
              </div>
              
              <div className="p-8 bg-black-luxury rounded-2xl border border-gold/20 space-y-4">
                <h4 className="text-gold font-display text-lg">Need Help?</h4>
                <p className="text-white/60 text-sm font-light">Call us directly for group bookings or special bridal requests.</p>
                <p className="text-white font-bold tracking-widest">+1 903-232-2706</p>
              </div>
            </div>

            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-gold/10 space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-black-luxury/40 px-4">Full Name</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gold/50" size={18} />
                      <input 
                        required
                        type="text" 
                        placeholder="e.g. Jane Doe"
                        className="w-full bg-beige/50 border border-transparent focus:border-gold focus:bg-white rounded-full py-4 pl-12 pr-6 outline-none transition-all text-sm"
                        value={formData.name}
                        onChange={e => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-black-luxury/40 px-4">Phone Number</label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gold/50" size={18} />
                      <input 
                        required
                        type="tel" 
                        placeholder="+1 (555) 000-0000"
                        className="w-full bg-beige/50 border border-transparent focus:border-gold focus:bg-white rounded-full py-4 pl-12 pr-6 outline-none transition-all text-sm"
                        value={formData.phone}
                        onChange={e => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-black-luxury/40 px-4">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gold/50" size={18} />
                      <input 
                        required
                        type="email" 
                        placeholder="jane@example.com"
                        className="w-full bg-beige/50 border border-transparent focus:border-gold focus:bg-white rounded-full py-4 pl-12 pr-6 outline-none transition-all text-sm"
                        value={formData.email}
                        onChange={e => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-black-luxury/40 px-4">Select Service</label>
                    <select 
                      required
                      className="w-full bg-beige/50 border border-transparent focus:border-gold focus:bg-white rounded-full py-4 px-6 outline-none transition-all text-sm appearance-none cursor-pointer"
                      value={formData.service}
                      onChange={e => setFormData({...formData, service: e.target.value})}
                    >
                      <option value="">Choose a service...</option>
                      {services.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-black-luxury/40 px-4">Preferred Date</label>
                    <div className="relative">
                      <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-gold/50" size={18} />
                      <input 
                        required
                        type="date" 
                        className="w-full bg-beige/50 border border-transparent focus:border-gold focus:bg-white rounded-full py-4 pl-12 pr-6 outline-none transition-all text-sm"
                        value={formData.date}
                        onChange={e => setFormData({...formData, date: e.target.value})}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-black-luxury/40 px-4">Preferred Time</label>
                    <div className="relative">
                      <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-gold/50" size={18} />
                      <input 
                        required
                        type="time" 
                        className="w-full bg-beige/50 border border-transparent focus:border-gold focus:bg-white rounded-full py-4 pl-12 pr-6 outline-none transition-all text-sm"
                        value={formData.time}
                        onChange={e => setFormData({...formData, time: e.target.value})}
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-black-luxury/40 px-4">Special Requests (Optional)</label>
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-6 text-gold/50" size={18} />
                    <textarea 
                      placeholder="Tell us about any specific designs or requirements..."
                      className="w-full bg-beige/50 border border-transparent focus:border-gold focus:bg-white rounded-[2rem] py-4 pl-12 pr-6 outline-none transition-all text-sm h-32 resize-none"
                      value={formData.message}
                      onChange={e => setFormData({...formData, message: e.target.value})}
                    />
                  </div>
                </div>

                <button 
                  disabled={isSubmitting}
                  type="submit"
                  className="w-full py-6 bg-gold hover:bg-gold-dark text-black-luxury rounded-full font-bold uppercase tracking-widest transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed shadow-xl shadow-gold/20"
                >
                  {isSubmitting ? "Processing..." : "Confirm Booking Request"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
