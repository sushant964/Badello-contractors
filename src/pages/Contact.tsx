import { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormState({ name: '', phone: '', email: '', service: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="pt-24 pb-16 w-full">
      {/* Page Header */}
      <section className="bg-brand-surface pt-32 pb-20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
           <span className="text-brand-gold font-semibold tracking-[0.4em] uppercase text-xs md:text-sm mb-4 block">
            Inquiries
          </span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display font-light mb-6 italic"
          >
            Let's Discuss <br className="hidden sm:block" />
            <span className="font-bold text-brand-gold not-italic">Your Project</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto font-light"
          >
            Contact Badello Contractors Ltd today for a free consultation and quote. We are ready to bring your vision to life.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-brand-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Information */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-12"
            >
              <div>
                <h2 className="text-2xl font-display font-light text-white flex items-center mb-10">
                  <span className="w-12 h-[1px] bg-brand-gold mr-4"></span>
                  Contact Information
                </h2>
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 border border-brand-gold/30 flex items-center justify-center flex-shrink-0 text-brand-gold bg-brand-gold/5">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xs uppercase tracking-widest text-white mb-1">Phone & WhatsApp</h3>
                      <a href="tel:+18682388667" className="text-gray-400 hover:text-brand-gold transition-colors font-mono tracking-tight text-sm">
                        +1 (868) 238-8667
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 border border-brand-gold/30 flex items-center justify-center flex-shrink-0 text-brand-gold bg-brand-gold/5">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xs uppercase tracking-widest text-white mb-1">Email</h3>
                      <a href="mailto:badellocontractorstt@gmail.com" className="text-gray-400 hover:text-brand-gold transition-colors text-sm">
                        badellocontractorstt@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 border border-brand-gold/30 flex items-center justify-center flex-shrink-0 text-brand-gold bg-brand-gold/5">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xs uppercase tracking-widest text-white mb-1">Location</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        #4A Boodram Street,<br />
                        Enterprise Village,<br />
                        Chaguanas, Trinidad and Tobago
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 border border-brand-gold/30 flex items-center justify-center flex-shrink-0 text-brand-gold bg-brand-gold/5">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xs uppercase tracking-widest text-white mb-1">Business Hours</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        Monday – Friday<br />
                        8:00 AM – 4:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-brand-graphite p-8 md:p-10 border border-white/5 shadow-2xl"
            >
              <h2 className="text-xs uppercase tracking-widest font-bold text-brand-gold mb-6">Send Us A Message</h2>
              
              {submitted ? (
                <div className="bg-brand-gold/10 border border-brand-gold/30 text-brand-gold p-6 text-center">
                  <div className="w-10 h-10 bg-brand-gold text-black rounded-none flex items-center justify-center mx-auto mb-4">
                    <MessageSquare className="w-5 h-5 text-black" />
                  </div>
                  <h3 className="font-bold text-sm uppercase tracking-widest mb-2">Message Sent!</h3>
                  <p className="text-xs text-gray-400">Thank you for reaching out. We will get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-[10px] uppercase tracking-widest text-gray-400 font-bold">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formState.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-brand-charcoal border border-white/10 text-white focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/50 outline-none transition-all text-sm font-light placeholder:text-gray-600"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="block text-[10px] uppercase tracking-widest text-gray-400 font-bold">Phone/WhatsApp</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formState.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-brand-charcoal border border-white/10 text-white focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/50 outline-none transition-all text-sm font-light placeholder:text-gray-600 font-mono"
                        placeholder="+1 (868) 000-0000"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-[10px] uppercase tracking-widest text-gray-400 font-bold">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formState.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-brand-charcoal border border-white/10 text-white focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/50 outline-none transition-all text-sm font-light placeholder:text-gray-600"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="service" className="block text-[10px] uppercase tracking-widest text-gray-400 font-bold">Service Required</label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formState.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-brand-charcoal border border-white/10 text-white focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/50 outline-none transition-all text-sm font-light appearance-none"
                    >
                      <option value="" disabled className="text-gray-500">Select a service...</option>
                      <option value="Custom Flooring" className="bg-brand-charcoal">Custom Flooring</option>
                      <option value="Concrete Repair" className="bg-brand-charcoal">Concrete Repair</option>
                      <option value="Resinous Flooring" className="bg-brand-charcoal">Resinous Flooring</option>
                      <option value="Commercial Flooring" className="bg-brand-charcoal">Commercial Flooring</option>
                      <option value="Industrial Flooring" className="bg-brand-charcoal">Industrial Flooring</option>
                      <option value="General Contracting" className="bg-brand-charcoal">General Contracting</option>
                      <option value="Other" className="bg-brand-charcoal">Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-[10px] uppercase tracking-widest text-gray-400 font-bold">Project Details</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formState.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-brand-charcoal border border-white/10 text-white focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/50 outline-none transition-all text-sm font-light placeholder:text-gray-600 resize-none"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>

                  <Button type="submit" className="w-full bg-brand-gold text-black hover:brightness-110" size="lg" disabled={isSubmitting}>
                    {isSubmitting ? 'SENDING...' : 'REQUEST FREE QUOTE'}
                  </Button>
                </form>
              )}
            </motion.div>

          </div>
        </div>
      </section>

    </div>
  );
}
