import { motion } from 'motion/react';
import { Button } from '@/components/ui/Button';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0 bg-brand-black/90">
        </div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="absolute top-10 left-4 text-[80px] md:text-[180px] font-black text-white/5 pointer-events-none select-none leading-none z-[-1]">BADELLO</div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl space-y-8"
          >
            <span className="text-brand-gold font-semibold tracking-[0.4em] uppercase text-xs md:text-sm mb-4 block">
              Industrial Luxury & Excellence
            </span>
            <h1 className="text-5xl md:text-7xl font-display font-light italic leading-tight text-white">
              Built Strong. <br/>
              <span className="font-bold not-italic">Finished Right.</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed max-w-lg font-light">
              Professional contracting, flooring, and concrete solutions designed to deliver durability, performance, and long-lasting value across Trinidad & Tobago.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-6 pt-6">
              <Button href="/services" size="lg" className="w-full sm:w-auto">
                Explore Services
              </Button>
              <div className="hidden sm:flex flex-col justify-center border-l border-white/20 pl-6 h-full py-1">
                <span className="text-[10px] text-gray-400 uppercase tracking-[0.2em] mb-1">Call Specialist</span>
                <span className="text-lg font-mono text-white tracking-tighter">+1 (868) 238-8667</span>
              </div>
            </div>

            <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-xs font-bold uppercase tracking-wider text-gray-400 border-t border-white/10 mt-10">
              <div className="flex items-center gap-2 mt-4">
                <div className="w-2 h-2 bg-brand-gold rounded-none"></div>
                <span>Premium Quality</span>
              </div>
              <div className="flex items-center gap-2 mt-4">
                <div className="w-2 h-2 bg-brand-gold rounded-none"></div>
                <span>Reliable Service</span>
              </div>
              <div className="flex items-center gap-2 mt-4">
                <div className="w-2 h-2 bg-brand-gold rounded-none"></div>
                <span>Durable Systems</span>
              </div>
              <div className="flex items-center gap-2 mt-4">
                <div className="w-2 h-2 bg-brand-gold rounded-none"></div>
                <span>Trusted Local</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-24 bg-brand-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mb-16"
          >
            <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-display font-light text-white mb-4 flex items-center">
              <span className="w-12 h-[1px] bg-brand-gold mr-4"></span>
              Our Specialties
            </motion.h2>
            <motion.p variants={fadeIn} className="text-lg text-gray-400 max-w-2xl font-light">
              Delivering high-performance surfaces tailored for any environment.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                id: "01",
                category: "Custom",
                title: "Flooring",
                desc: "Durable and attractive flooring solutions customized to suit your space and requirements.",
              },
              {
                id: "02",
                category: "Concrete",
                title: "Restoration",
                desc: "Professional repair and restoration services that extend the life and appearance of damaged concrete.",
              },
              {
                id: "03",
                category: "Resinous",
                title: "Industrial",
                desc: "High-performance resin flooring systems designed for durability, aesthetics, and easy maintenance.",
              },
              {
                id: "04",
                category: "Commercial",
                title: "Flooring",
                desc: "Flooring solutions built to withstand heavy traffic while maintaining a professional appearance.",
              },
              {
                id: "05",
                category: "Industrial",
                title: "Flooring",
                desc: "Heavy-duty flooring systems designed for warehouses, factories, and industrial environments.",
              },
              {
                id: "06",
                category: "General",
                title: "Contracting",
                desc: "Reliable contracting services tailored to meet residential and commercial project needs.",
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-8 bg-brand-graphite border border-white/5 hover:border-brand-gold/50 transition-all cursor-default flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <h4 className="text-brand-gold text-xs font-bold uppercase tracking-[0.2em]">{service.id}. {service.title}</h4>
                    <span className="text-white/20 text-2xl font-display italic">{service.category}</span>
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed">{service.desc}</p>
                </div>
                <div className="mt-8">
                  <Link to="/services" className="inline-flex items-center text-xs font-bold text-white group-hover:text-brand-gold uppercase tracking-widest transition-colors">
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12 bg-gradient-to-br from-brand-gold/20 to-transparent border border-brand-gold/30 p-8 max-w-2xl mx-auto rounded-none">
            <p className="text-xs text-brand-gold uppercase tracking-widest font-bold mb-2">Project Inquiry</p>
            <p className="text-sm text-white/80 italic font-display">"Quality work that speaks for itself. Trusted by leading enterprises in Chaguanas."</p>
            <div className="mt-6">
               <Button href="/services" variant="secondary">View All Services</Button>
            </div>
          </div>
        </div>
      </section>


      {/* Why Choose Us */}
      <section className="py-24 bg-brand-charcoal text-white border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.span variants={fadeIn} className="text-brand-gold font-bold tracking-wider uppercase text-sm mb-4 block">
                The Badello Difference
              </motion.span>
              <motion.h2 variants={fadeIn} className="text-3xl lg:text-4xl font-display font-light mb-6 flex items-center">
                <span className="w-12 h-[1px] bg-brand-gold mr-4"></span>
                Why Choose Badello?
              </motion.h2>
              <motion.p variants={fadeIn} className="text-gray-400 text-lg mb-8">
                We bring years of expertise, premium materials, and an unwavering commitment to quality to every project. Your satisfaction is our benchmark for success.
              </motion.p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 border-t border-white/10 pt-8 mt-8">
                {[
                  { title: "Experienced Contractors", desc: "Decades of expertise." },
                  { title: "Premium Materials", desc: "Highest grade available." },
                  { title: "Reliable Service", desc: "On-time delivery." },
                  { title: "Attention To Detail", desc: "Flawless finish." },
                  { title: "Long-Lasting Results", desc: "Built to endure." },
                  { title: "Customer Satisfaction", desc: "Trusted by leaders." }
                ].map((feature, index) => (
                  <motion.div key={index} variants={fadeIn} className="flex items-start space-x-4">
                    <div className="w-2 h-2 mt-2 bg-brand-gold"></div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider mb-1">{feature.title}</h4>
                      <p className="text-xs text-gray-500">{feature.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[4/5] bg-brand-graphite border border-white/10 p-2">
                <img 
                  src="https://i.ibb.co/qbbCGpF/b9c2131905d187e7cf44fb1d4957cd6c.jpg" 
                  alt="Quality Craftsmanship" 
                  className="w-full h-full object-cover transition-all duration-700"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-brand-graphite border border-white/10 p-8 shadow-xl max-w-xs hidden md:block">
                <p className="text-2xl font-display font-light text-brand-gold italic mb-2">100%</p>
                <p className="text-white text-xs tracking-widest uppercase font-bold">Commitment to Quality & Durability</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-24 bg-brand-surface border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
             <h2 className="text-3xl md:text-4xl font-display font-light text-white mb-4 flex items-center justify-center">
              <span className="w-12 h-[1px] bg-brand-gold mr-4 hidden sm:block"></span>
              Our Process
              <span className="w-12 h-[1px] bg-brand-gold ml-4 hidden sm:block"></span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto font-light">
              A streamlined approach ensures your project is completed on time and to the highest standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", desc: "We discuss your needs and assess the space." },
              { step: "02", title: "Planning", desc: "Detailed proposal and material selection." },
              { step: "03", title: "Installation", desc: "Professional execution by experts." },
              { step: "04", title: "Final Delivery", desc: "Quality check and project handover." }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative p-8 border border-white/5 bg-brand-graphite hover:border-brand-gold/30 transition-all cursor-default"
              >
                <span className="text-6xl font-display font-light italic text-white/5 absolute top-4 right-4 z-0">
                  {item.step}
                </span>
                <div className="relative z-10 pt-8">
                  <h3 className="text-sm font-bold uppercase tracking-widest text-[#D4AF37] mb-3">{item.title}</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 border-t border-white/10 relative overflow-hidden bg-brand-charcoal">
        <div className="absolute inset-0 z-0 opacity-10">
           <img 
            src="https://images.unsplash.com/photo-1504307651254-35680f356fce?q=80&w=2000&auto=format&fit=crop" 
            alt="Pattern" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-light text-white mb-8 italic"
          >
            Ready To Start Your Next Project?
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Button href="/contact" size="lg" className="bg-brand-gold text-black hover:brightness-110">
              Request A Free Quote
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
