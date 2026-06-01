import React from 'react';
import { motion } from 'framer-motion';
import Container from '../ui/Container';
import Section from '../ui/Section';
import { 
  BarChart3, ShieldCheck, Zap, Users, Globe, Smartphone, ArrowRight
} from 'lucide-react';

const Features = ({ title, subtitle, features, background = 'white', imageLeft }) => {
  const defaultFeatures = [
    {
      title: 'Enterprise Security',
      description: 'Bank-grade encryption and SOC 2 compliance keep your data protected at all times.',
      icon: ShieldCheck,
      color: 'text-blue-600',
      bg: 'bg-blue-50',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=600',
    },
    {
      title: 'Lightning Fast',
      description: 'Sub-100ms response times with edge-optimized infrastructure across 50+ regions.',
      icon: Zap,
      color: 'text-yellow-600',
      bg: 'bg-yellow-50',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=600',
    },
    {
      title: 'Global Scale',
      description: 'Auto-scaling infrastructure that grows from 100 to 10 million users without a config change.',
      icon: Globe,
      color: 'text-green-600',
      bg: 'bg-green-50',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600',
    },
    {
      title: 'Real-time Analytics',
      description: 'Unified dashboards giving you instant visibility into every metric that matters.',
      icon: BarChart3,
      color: 'text-purple-600',
      bg: 'bg-purple-50',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600',
    },
    {
      title: 'Team Collaboration',
      description: 'Real-time co-editing, commenting, and workflow automation for remote-first teams.',
      icon: Users,
      color: 'text-pink-600',
      bg: 'bg-pink-50',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=600',
    },
    {
      title: 'Mobile First',
      description: 'Progressive Web App capabilities with native-like experiences on every device.',
      icon: Smartphone,
      color: 'text-indigo-600',
      bg: 'bg-indigo-50',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=600',
    }
  ];

  const displayFeatures = features || defaultFeatures;

  return (
    <Section background={background}>
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 mb-4 text-sm font-bold tracking-wider text-primary-700 uppercase bg-primary-50 rounded-full border border-primary-100"
          >
            Features
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-secondary-900 mb-6"
          >
            {title || 'Everything you need to'}
            <br />
            <span className="text-gradient">scale your business</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-secondary-600"
          >
            {subtitle || 'Powerful features designed to help you build, manage, and grow your professional online presence.'}
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group rounded-2xl overflow-hidden bg-white border border-secondary-100 hover:border-primary-200 hover:shadow-2xl hover:shadow-primary-500/5 transition-all duration-300"
            >
              {/* Feature image */}
              {feature.image && (
                <div className="overflow-hidden h-48">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              )}
              <div className="p-8">
                <div className={`w-12 h-12 ${feature.bg || 'bg-primary-50'} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`w-6 h-6 ${feature.color || 'text-primary-600'}`} />
                </div>
                <h3 className="text-xl font-bold text-secondary-900 mb-3">{feature.title}</h3>
                <p className="text-secondary-600 leading-relaxed mb-4">{feature.description}</p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Learn more <ArrowRight size={14} />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Features;
