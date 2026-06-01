import React from 'react';
import { motion } from 'framer-motion';
import Container from '../ui/Container';
import { Star } from 'lucide-react';

const defaultTestimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO at TechFlow',
    content: 'Avada has completely transformed how we build websites. The flexibility and ease of use are unmatched. We shipped our new corporate site in under two weeks.',
    image: 'https://i.pravatar.cc/200?img=32',
    company: 'TechFlow',
    companyLogo: 'TF',
    bgImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Product Designer',
    content: 'The UI system is incredibly robust. Every component is thoughtfully designed, pixel-perfect, and fully customizable. It has saved our team hundreds of hours.',
    image: 'https://i.pravatar.cc/200?img=12',
    company: 'Designlab',
    companyLogo: 'DL',
    bgImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200',
    rating: 5,
  },
  {
    name: 'Elena Rodriguez',
    role: 'VP Marketing',
    content: 'Our conversion rates increased by 40% after launching our new Avada-powered site. The professional design language instantly builds trust with enterprise clients.',
    image: 'https://i.pravatar.cc/200?img=45',
    company: 'GrowthCo',
    companyLogo: 'GC',
    bgImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
    rating: 5,
  },
];

const Testimonials = ({ title, subtitle, testimonials }) => {
  const items = testimonials || defaultTestimonials;

  return (
    <section className="py-24 bg-secondary-950 overflow-hidden">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 mb-4 text-sm font-bold tracking-wider text-primary-400 uppercase bg-primary-900/50 rounded-full border border-primary-800"
          >
            Testimonials
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold text-white mb-4"
          >
            {title || 'Loved by industry leaders'}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-secondary-400 text-lg"
          >
            {subtitle || 'Real results from real teams building the future of the web.'}
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group relative rounded-3xl overflow-hidden"
            >
              {/* BG image */}
              <div className="absolute inset-0">
                <img
                  src={t.bgImage}
                  alt=""
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-secondary-950/75 group-hover:bg-secondary-950/65 transition-colors duration-300" />
              </div>

              {/* Content */}
              <div className="relative z-10 p-8 flex flex-col min-h-[360px]">
                <div className="flex mb-6">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} size={16} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-white/90 text-lg italic leading-relaxed flex-grow mb-8">
                  "{t.content}"
                </p>

                <div className="flex items-center gap-4">
                  <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full border-2 border-white/30" />
                  <div>
                    <h4 className="font-bold text-white">{t.name}</h4>
                    <p className="text-sm text-secondary-400">{t.role}</p>
                  </div>
                  <div className="ml-auto w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
                    <span className="text-white text-xs font-bold">{t.companyLogo}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-secondary-800 pt-16"
        >
          {[
            ['4.9 / 5', 'Average Rating'],
            ['2,500+', 'Companies Using Avada'],
            ['98%', 'Customer Retention Rate'],
            ['<2hrs', 'Average Support Response'],
          ].map(([val, label]) => (
            <div key={label} className="text-center">
              <div className="text-3xl font-bold text-white mb-1">{val}</div>
              <div className="text-secondary-500 text-sm">{label}</div>
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default Testimonials;
