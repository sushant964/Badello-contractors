import { motion } from 'motion/react';
import { Target, Shield, HeartHandshake, Award, ThumbsUp } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function About() {
  return (
    <div className="pt-24 pb-16 w-full">
      {/* Page Header */}
      <section className="bg-brand-surface pt-32 pb-20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <span className="text-brand-gold font-semibold tracking-[0.4em] uppercase text-xs md:text-sm mb-4 block">
            Our Story
          </span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display font-light italic mb-6"
          >
            Building Trust Through <br className="hidden sm:block" />
            <span className="font-bold text-brand-gold not-italic">Quality Workmanship</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto font-light"
          >
            Delivering reliable contracting services and high-performance flooring solutions across Trinidad & Tobago.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-brand-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-display font-light text-white flex items-center">
                <span className="w-12 h-[1px] bg-brand-gold mr-4"></span>
                About Badello
              </h2>
              
              <div className="space-y-4 text-gray-400 text-sm leading-relaxed font-light">
                <p>
                  At Badello Contractors Ltd, we are committed to delivering reliable contracting services backed by quality workmanship and professional service.
                </p>
                <p>
                  We specialize in custom flooring, concrete repair, resinous flooring systems, and a variety of contracting solutions tailored to residential, commercial, and industrial projects.
                </p>
                <p>
                  Our mission is simple: provide durable, high-quality results while maintaining professionalism, transparency, and customer satisfaction throughout every project.
                </p>
              </div>
              
              <div className="pt-4">
                <Button href="/contact">Get in Touch</Button>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="p-2 border border-white/10 bg-brand-graphite">
                <img 
                  src="https://i.ibb.co/Z624m29q/9e0b90fd319ade29a4bd82cb6c0cf71b.jpg" 
                  alt="Professional contractingwork" 
                  className="w-full h-auto object-cover aspect-[4/3] transition-all duration-700"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-brand-surface border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-light text-white mb-4 flex justify-center items-center">
              <span className="w-12 h-[1px] bg-brand-gold mr-4 hidden sm:block"></span>
              Our Core Values
              <span className="w-12 h-[1px] bg-brand-gold ml-4 hidden sm:block"></span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto font-light">The principles that guide our work and our relationships with clients.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Award, title: "Quality", desc: "We never compromise on the quality of materials or workmanship." },
              { icon: Shield, title: "Reliability", desc: "We show up on time and deliver what we promise, every time." },
              { icon: Target, title: "Integrity", desc: "Honest communication and transparent pricing with no hidden surprises." },
              { icon: HeartHandshake, title: "Professionalism", desc: "A respectful, clean, and organized approach to every job site." },
              { icon: ThumbsUp, title: "Customer Satisfaction", desc: "Our job isn't done until you are completely satisfied with the results." }
            ].map((val, index) => {
              const Icon = val.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-brand-graphite p-8 border border-white/5 hover:border-brand-gold/30 transition-all text-center group cursor-default"
                >
                  <div className="w-12 h-12 mx-auto border border-brand-gold/50 flex items-center justify-center mb-6 text-brand-gold group-hover:bg-brand-gold group-hover:text-black transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-xs uppercase tracking-widest font-bold text-white mb-3">{val.title}</h3>
                  <p className="text-xs text-gray-400 leading-relaxed font-light">{val.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
