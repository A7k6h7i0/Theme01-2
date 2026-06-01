import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { Play, ArrowRight, Star, TrendingUp, Shield, Zap } from 'lucide-react';

const FloatingCard = ({ children, className, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.6 }}
    className={`glass-card rounded-2xl p-4 shadow-xl ${className}`}
  >
    {children}
  </motion.div>
);

const Hero = ({ title, subtitle, primaryCTA, secondaryCTA, image, variant = 'center', badge }) => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 160]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } }
  };
  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
  };

  if (variant === 'fullscreen') {
    return (
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Parallax BG */}
        <motion.div style={{ y }} className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary-950 via-secondary-900 to-primary-950" />
          <img
            src={image || 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2301'}
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-luminosity"
          />
        </motion.div>

        {/* Mesh blobs */}
        <div className="absolute top-20 left-10 w-80 h-80 rounded-full bg-primary-600/20 blur-[100px] animate-blob" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-accent-600/15 blur-[120px] animate-blob" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full bg-primary-400/10 blur-[80px]" />

        <Container className="relative z-10 py-32">
          <motion.div variants={stagger} initial="hidden" animate="visible" className="max-w-4xl mx-auto text-center">
            <motion.div variants={item}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-primary-300 bg-primary-900/50 border border-primary-700/50 mb-8 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-primary-400 animate-pulse" />
                {badge || 'Trusted by 2,500+ Businesses Worldwide'}
              </span>
            </motion.div>

            <motion.h1 variants={item} className="text-6xl md:text-7xl lg:text-8xl font-display font-bold text-white leading-[1.05] mb-8">
              {title?.split(' ').slice(0, -2).join(' ')}{' '}
              <span className="text-gradient">{title?.split(' ').slice(-2).join(' ')}</span>
            </motion.h1>

            <motion.p variants={item} className="text-xl md:text-2xl text-secondary-300 mb-12 leading-relaxed max-w-2xl mx-auto">
              {subtitle}
            </motion.p>

            <motion.div variants={item} className="flex flex-wrap justify-center gap-4 mb-16">
              <Button size="lg" className="gap-2 animate-pulse-glow">{primaryCTA} <ArrowRight size={18} /></Button>
              <Button size="lg" className="border-white/30 text-white hover:bg-white/10 gap-2 backdrop-blur-sm" variant="outline">
                <Play size={18} className="fill-white" /> {secondaryCTA}
              </Button>
            </motion.div>

            <motion.div variants={item} className="flex justify-center items-center gap-8 flex-wrap text-secondary-400 text-sm">
              {[['500K+', 'Projects Built'], ['99.9%', 'Uptime SLA'], ['150+', 'Countries'], ['24/7', 'Support']].map(([val, label]) => (
                <div key={label} className="text-center">
                  <div className="text-2xl font-bold text-white">{val}</div>
                  <div>{label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </Container>

        {/* Scroll hint */}
        <motion.div style={{ opacity }} className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-white/60"
            />
          </div>
        </motion.div>
      </section>
    );
  }

  if (variant === 'split') {
    return (
      <section className="relative pt-28 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-mesh">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-50 to-transparent -z-10 hidden lg:block" />
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-primary-100/40 blur-[120px] -z-10" />
        <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] rounded-full bg-accent-100/30 blur-[100px] -z-10" />

        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Text */}
            <motion.div variants={stagger} initial="hidden" animate="visible">
              <motion.div variants={item}>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-primary-700 bg-primary-100 border border-primary-200 mb-8">
                  <Zap size={14} className="fill-primary-600 text-primary-600" />
                  {badge || 'Premium Multi-Purpose Theme'}
                </span>
              </motion.div>
              <motion.h1 variants={item} className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-secondary-900 leading-[1.05] mb-6">
                {title?.split(' ').slice(0, Math.ceil(title.split(' ').length / 2)).join(' ')}
                <br />
                <span className="text-gradient">{title?.split(' ').slice(Math.ceil(title.split(' ').length / 2)).join(' ')}</span>
              </motion.h1>
              <motion.p variants={item} className="text-xl text-secondary-600 mb-10 leading-relaxed max-w-xl">
                {subtitle}
              </motion.p>
              <motion.div variants={item} className="flex flex-wrap gap-4 mb-12">
                <Button size="lg" className="gap-2">{primaryCTA} <ArrowRight size={18} /></Button>
                <Button variant="outline" size="lg" className="gap-2">
                  <Play size={18} className="fill-primary-600 text-primary-600" /> {secondaryCTA}
                </Button>
              </motion.div>
              <motion.div variants={item} className="flex items-center gap-6">
                <div className="flex -space-x-3">
                  {[11, 12, 14, 15].map((i) => (
                    <img key={i} src={`https://i.pravatar.cc/80?img=${i}`} alt="" className="w-10 h-10 rounded-full border-2 border-white ring-1 ring-secondary-200" />
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />)}
                    <span className="ml-1 font-bold text-secondary-900">4.9</span>
                  </div>
                  <div className="text-sm text-secondary-500">2,500+ happy businesses</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="relative z-10 rounded-3xl shadow-2xl overflow-hidden border-4 border-white">
                <img src={image || 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426'} alt="Hero" className="w-full h-auto" />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/20 to-transparent" />
              </div>

              {/* Floating badges */}
              <FloatingCard delay={0.8} className="absolute -bottom-6 -left-6 hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">
                    <TrendingUp size={20} className="text-green-600" />
                  </div>
                  <div>
                    <div className="text-xs text-secondary-500">Revenue Growth</div>
                    <div className="font-bold text-secondary-900">+128% YoY</div>
                  </div>
                </div>
              </FloatingCard>

              <FloatingCard delay={1.0} className="absolute -top-6 -right-6 hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center">
                    <Shield size={20} className="text-primary-600" />
                  </div>
                  <div>
                    <div className="text-xs text-secondary-500">Uptime</div>
                    <div className="font-bold text-secondary-900">99.9% SLA</div>
                  </div>
                </div>
              </FloatingCard>

              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-primary-300/20 rounded-full blur-3xl" />
              <div className="absolute -top-10 -left-10 w-48 h-48 bg-accent-300/20 rounded-full blur-3xl" />
            </motion.div>
          </div>
        </Container>
      </section>
    );
  }

  // Default center variant
  return (
    <section className="relative pt-28 pb-20 md:pt-44 md:pb-32 text-center overflow-hidden bg-mesh">
      <div className="absolute -top-40 left-1/4 w-[600px] h-[600px] rounded-full bg-primary-100/40 blur-[140px] -z-10" />
      <div className="absolute -bottom-20 right-1/4 w-[500px] h-[500px] rounded-full bg-accent-100/30 blur-[120px] -z-10" />

      <Container>
        <motion.div variants={stagger} initial="hidden" animate="visible" className="max-w-4xl mx-auto">
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-primary-700 bg-primary-100 border border-primary-200 mb-8">
              <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
              {badge || 'The Future of Web Design'}
            </span>
          </motion.div>
          <motion.h1 variants={item} className="text-5xl md:text-7xl font-display font-bold text-secondary-900 leading-[1.05] mb-8">
            {title?.split(' ').slice(0, -3).join(' ')}{' '}
            <span className="text-gradient">{title?.split(' ').slice(-3).join(' ')}</span>
          </motion.h1>
          <motion.p variants={item} className="text-xl text-secondary-600 mb-12 leading-relaxed max-w-2xl mx-auto">
            {subtitle}
          </motion.p>
          <motion.div variants={item} className="flex flex-wrap justify-center gap-4 mb-20">
            <Button size="lg" className="gap-2">{primaryCTA} <ArrowRight size={18} /></Button>
            <Button variant="outline" size="lg">{secondaryCTA}</Button>
          </motion.div>

          {/* Hero image with frame */}
          <motion.div
            variants={item}
            className="relative rounded-2xl overflow-hidden shadow-[0_40px_120px_-20px_rgba(14,165,233,0.3)] border-4 border-white"
          >
            <img
              src={image || 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2072'}
              alt="Dashboard"
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/30 via-transparent to-transparent" />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Hero;
