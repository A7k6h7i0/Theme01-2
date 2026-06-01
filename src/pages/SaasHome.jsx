import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/sections/Hero';
import Features from '../components/sections/Features';
import Stats from '../components/sections/Stats';
import Testimonials from '../components/sections/Testimonials';
import CTA from '../components/sections/CTA';
import LogoCloud from '../components/sections/LogoCloud';
import Section from '../components/ui/Section';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import {
  Zap, Code, LineChart, Lock, RefreshCw, Layers, ArrowRight, Check,
  Activity, ShieldCheck, Link2, Users
} from 'lucide-react';

const SaasHome = () => {
  const saasFeatures = [
    {
      title: 'Developer Friendly',
      description: 'Clean code, comprehensive documentation, and a modular architecture developers love.',
      icon: Code,
      color: 'text-blue-600',
      bg: 'bg-blue-50',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=600',
    },
    {
      title: 'Scalable Infrastructure',
      description: 'Built to handle millions of requests with auto-scaling and global edge delivery.',
      icon: Layers,
      color: 'text-purple-600',
      bg: 'bg-purple-50',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=600',
    },
    {
      title: 'Advanced Analytics',
      description: 'Track every metric that matters to your business with real-time unified dashboards.',
      icon: LineChart,
      color: 'text-green-600',
      bg: 'bg-green-50',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600',
    },
    {
      title: 'Automated Workflows',
      description: 'Save hours daily by automating repetitive tasks with no-code workflow builder.',
      icon: RefreshCw,
      color: 'text-orange-600',
      bg: 'bg-orange-50',
      image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&q=80&w=600',
    },
    {
      title: 'Secure by Design',
      description: 'SOC 2 Type II certified with end-to-end encryption for every request.',
      icon: Lock,
      color: 'text-red-600',
      bg: 'bg-red-50',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=600',
    },
    {
      title: 'Instant Deployment',
      description: 'Go from merge to production in seconds with zero-downtime CI/CD pipelines.',
      icon: Zap,
      color: 'text-yellow-600',
      bg: 'bg-yellow-50',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=600',
    }
  ];

  return (
    <>
      <Hero
        variant="fullscreen"
        title="The Operating System for Modern SaaS"
        subtitle="Streamline development, automate marketing, and scale customer success — all with the most powerful React theme ever built."
        primaryCTA="Start Free Trial"
        secondaryCTA="Watch Demo"
        image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070"
        badge="Trusted by 50,000+ SaaS teams worldwide"
      />

      <LogoCloud title="Powering the world's fastest-growing SaaS companies" />

      <Stats
        background="light"
        stats={[
          { label: 'API Requests / day', value: '500M+', icon: Activity },
          { label: 'Uptime Guarantee', value: '99.99%', icon: ShieldCheck },
          { label: 'Native Integrations', value: '200+', icon: Link2 },
          { label: 'Active Developers', value: '50K+', icon: Users },
        ]}
      />

      {/* Dashboard showcase */}
      <Section background="white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-wider text-primary-700 uppercase bg-primary-50 rounded-full border border-primary-100">
                Powerful Dashboard
              </span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-secondary-900 mb-8 leading-tight">
                Every metric you need,{' '}
                <span className="text-gradient">in one place</span>
              </h2>
              <p className="text-lg text-secondary-600 mb-10 leading-relaxed">
                Our unified analytics dashboard gives your team complete visibility across acquisition, activation, retention, and revenue — the four pillars of SaaS growth.
              </p>
              <div className="space-y-4 mb-10">
                {[
                  'Real-time MRR, ARR, and churn tracking',
                  'Funnel analysis with drop-off attribution',
                  'Cohort analysis and LTV predictions',
                  'Automated anomaly detection & alerts',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-secondary-700">
                    <Check size={18} className="text-primary-600 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <Button className="gap-2">Explore Dashboard <ArrowRight size={16} /></Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl border border-secondary-100"
            >
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2070"
                alt="Dashboard"
                className="w-full h-auto"
              />
              {/* Live indicator */}
              <div className="absolute top-4 right-4 flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5 text-xs font-bold text-green-700">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Live
              </div>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* 3-image bento grid */}
      <Section background="light">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-secondary-900 mb-4">
              Built for teams that{' '}
              <span className="text-gradient">move fast</span>
            </h2>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              From solo founders to enterprise engineering teams, Avada scales with your ambition.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-7 relative rounded-3xl overflow-hidden group min-h-[400px]"
            >
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200"
                alt="Team"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary-950/80 to-transparent" />
              <div className="absolute bottom-0 p-8">
                <h3 className="text-2xl font-bold text-white mb-2">Real-time collaboration</h3>
                <p className="text-secondary-300">Work together seamlessly, no matter where your team is.</p>
              </div>
            </motion.div>
            <div className="md:col-span-5 flex flex-col gap-6">
              {[
                {
                  img: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&q=80&w=600',
                  title: 'Automated pipelines',
                  desc: 'Ship faster with zero manual steps.',
                },
                {
                  img: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=600',
                  title: 'Enterprise security',
                  desc: 'SOC 2 certified end-to-end protection.',
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="relative rounded-3xl overflow-hidden group flex-1 min-h-[180px]"
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary-950/80 to-transparent" />
                  <div className="absolute bottom-0 p-6">
                    <h3 className="font-bold text-white mb-1">{item.title}</h3>
                    <p className="text-secondary-300 text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Features
        title="Built for the next generation of SaaS"
        subtitle="Avada provides the foundation you need to build a world-class software product."
        features={saasFeatures}
      />

      <Testimonials title="Loved by SaaS founders worldwide" />

      <CTA
        title="Ready to accelerate your SaaS growth?"
        subtitle="Join 10,000+ SaaS companies already scaling with Avada React. No credit card required."
        bgImage="https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&q=80&w=2070"
      />
    </>
  );
};

export default SaasHome;
