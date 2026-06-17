import { motion } from 'motion/react';
import { Button } from '@/components/ui/Button';
import { Layers, Wrench, Spline, Factory, Building2, HardHat } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: Layers,
      title: "Custom Flooring",
      desc: "Durable and attractive flooring solutions customized to suit your space and requirements. From specialized coatings to unique finishes.",
      img: "https://i.ibb.co/DPjJBdZD/4baca12c2dd0a5822fbe42cdd4c59f6b.jpg"
    },
    {
      icon: Wrench,
      title: "Concrete Repair",
      desc: "Professional repair and restoration services that extend the life and appearance of damaged concrete surfaces, preventing future structural issues.",
      img: "https://i.ibb.co/kgLWj5v4/2df822906f3cee80b51e9c37f9c57823.jpg"
    },
    {
      icon: Spline,
      title: "Resinous Flooring",
      desc: "High-performance resin flooring systems designed for exceptional durability, aesthetics, and easy maintenance in demanding environments.",
      img: "https://i.ibb.co/NcWQyxh/8a0725645406207959531da748efcb2b.jpg"
    },
    {
      icon: Building2,
      title: "Commercial Flooring",
      desc: "Flooring solutions built to withstand heavy foot traffic while maintaining a professional appearance that reflects your brand's standards.",
      img: "https://i.ibb.co/p6gBKDZG/1c17d02fb8a9aa53bbf499a54233c850.jpg"
    },
    {
      icon: Factory,
      title: "Industrial Flooring",
      desc: "Heavy-duty flooring systems engineered for warehouses, factories, and industrial environments requiring chemical resistance and extreme durability.",
      img: "https://i.ibb.co/27H8dbnZ/cf8ebdd86597c4473c242864fb5b0fd3.jpg"
    },
    {
      icon: HardHat,
      title: "General Contracting",
      desc: "Reliable contracting services tailored to meet comprehensive residential and commercial project needs from start to finish.",
      img: "https://i.ibb.co/ksgDbq7Y/39b383ebb69703a67f002ff58ef3e01f.jpg"
    }
  ];

  return (
    <div className="pt-24 pb-16 w-full">
      {/* Page Header */}
      <section className="bg-brand-surface pt-32 pb-20 relative overflow-hidden border-b border-white/10">
         <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?q=80&w=2670&auto=format&fit=crop" 
            alt="Surfaces" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 text-white">
           <span className="text-brand-gold font-semibold tracking-[0.4em] uppercase text-xs md:text-sm mb-4 block">
            Expertise
          </span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display font-light mb-6 italic"
          >
            Our <span className="font-bold text-brand-gold not-italic">Services</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto font-light"
          >
            Comprehensive flooring and contracting solutions tailored to your specific needs and environment.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-brand-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-brand-graphite overflow-hidden group border border-white/5 hover:border-brand-gold/30 transition-all flex flex-col"
                >
                  <div className="h-56 overflow-hidden relative border-b border-white/5">
                    <img 
                      src={service.img} 
                      alt={service.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 to-transparent" />
                    <div className="absolute bottom-4 left-6 bg-brand-gold/10 border border-brand-gold/30 w-12 h-12 flex items-center justify-center text-brand-gold">
                       <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="p-8 flex-grow">
                    <h3 className="text-sm font-bold uppercase tracking-widest text-[#D4AF37] mb-3">{service.title}</h3>
                    <p className="text-xs text-gray-400 leading-relax font-light">{service.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-surface border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-display font-light text-white mb-6 italic">Need a custom solution not listed here?</h2>
          <p className="text-gray-400 text-sm mb-8 font-light">Contact us to discuss your specific requirements. We have the expertise to handle complex, bespoke contracting projects.</p>
          <Button href="/contact" size="lg">Discuss Your Project</Button>
        </div>
      </section>
    </div>
  );
}
