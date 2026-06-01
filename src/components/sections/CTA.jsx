import React from 'react';
import { motion } from 'framer-motion';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { ArrowRight, Sparkles } from 'lucide-react';

const CTA = ({ 
  title, subtitle, primaryCTA, secondaryCTA,
  bgImage = 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=2070'
}) => {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 -z-10">
        <img src={bgImage} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-950/95 via-secondary-950/90 to-secondary-950/95" />
      </div>

      {/* Blobs */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-primary-600/10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-accent-600/10 blur-[120px]" />

      {/* Animated grid lines */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-semibold mb-10"
          >
            <Sparkles size={16} className="text-yellow-400" />
            Start building for free today
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-8 leading-[1.05]"
          >
            {title || 'Ready to build your'}
            <br />
            <span className="text-gradient animate-gradient bg-gradient-to-r from-primary-400 via-accent-400 to-primary-300">
              next big idea?
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-secondary-300 mb-12 leading-relaxed max-w-2xl mx-auto"
          >
            {subtitle || 'Join thousands of businesses already using Avada to create stunning websites. Start your 14-day free trial today — no credit card required.'}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            <Button variant="white" size="lg" className="gap-2 shadow-2xl shadow-primary-500/20">
              {primaryCTA || 'Get Started Now'} <ArrowRight size={18} />
            </Button>
            <Button size="lg" className="bg-transparent border-2 border-white/30 text-white hover:bg-white/10 gap-2 backdrop-blur-sm">
              {secondaryCTA || 'Contact Sales'}
            </Button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-8 text-secondary-400 text-sm"
          >
            {['No credit card required', 'Cancel anytime', '24/7 support included', 'GDPR compliant'].map((item) => (
              <span key={item} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-500" />
                {item}
              </span>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default CTA;
