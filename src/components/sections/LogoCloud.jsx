import React from 'react';
import { motion } from 'framer-motion';
import Container from '../ui/Container';

const logos = [
  { name: 'Stripe', text: 'stripe', color: '#635BFF' },
  { name: 'Shopify', text: 'shopify', color: '#96BF48' },
  { name: 'Notion', text: 'notion', color: '#000000' },
  { name: 'Slack', text: 'slack', color: '#4A154B' },
  { name: 'Figma', text: 'figma', color: '#F24E1E' },
  { name: 'Vercel', text: 'vercel', color: '#000000' },
  { name: 'Supabase', text: 'supabase', color: '#3ECF8E' },
  { name: 'Linear', text: 'linear', color: '#5E6AD2' },
  { name: 'GitHub', text: 'github', color: '#181717' },
  { name: 'Zapier', text: 'zapier', color: '#FF4A00' },
];

const LogoCloud = ({ title }) => {
  return (
    <section className="py-12 bg-secondary-50 border-y border-secondary-100 overflow-hidden">
      <Container>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm font-semibold tracking-widest uppercase text-secondary-400 mb-10"
        >
          {title || 'Trusted by world-class companies'}
        </motion.p>
      </Container>

      {/* Marquee */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-secondary-50 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-secondary-50 to-transparent z-10" />
        <div className="flex gap-0 overflow-hidden">
          <div className="flex gap-0 animate-marquee whitespace-nowrap">
            {[...logos, ...logos].map((logo, i) => (
              <div
                key={i}
                className="inline-flex items-center justify-center mx-8 px-8 py-3 rounded-xl bg-white border border-secondary-100 shadow-sm hover:shadow-md transition-shadow duration-200 min-w-[140px]"
              >
                <span
                  className="font-display font-bold text-xl tracking-tight"
                  style={{ color: logo.color }}
                >
                  {logo.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoCloud;
