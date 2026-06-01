import React from 'react';
import { motion } from 'framer-motion';
import Container from '../ui/Container';
import { Users, Globe, Rocket, MessageSquare } from 'lucide-react';

const Stats = ({ stats, background = 'primary' }) => {
  const defaultStats = [
    { label: 'Active Users', value: '150K+', icon: Users },
    { label: 'Countries', value: '80+', icon: Globe },
    { label: 'Projects Built', value: '12M+', icon: Rocket },
    { label: 'Customer Support', value: '24/7', icon: MessageSquare },
  ];

  const displayStats = stats || defaultStats;

  const bgClasses = {
    primary: 'bg-gradient-to-r from-primary-700 to-primary-600 text-white',
    light: 'bg-secondary-50 text-secondary-900',
    dark: 'bg-secondary-900 text-white',
    white: 'bg-white text-secondary-900',
  };

  const iconBg = {
    primary: 'bg-white/15',
    light: 'bg-secondary-200/60',
    dark: 'bg-white/10',
    white: 'bg-secondary-100',
  };

  const iconColor = {
    primary: 'text-white',
    light: 'text-primary-600',
    dark: 'text-primary-400',
    white: 'text-primary-600',
  };

  return (
    <section className={`py-16 ${bgClasses[background] || bgClasses.primary}`}>
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {displayStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {Icon && (
                  <div className={`w-12 h-12 rounded-2xl ${iconBg[background] || iconBg.primary} flex items-center justify-center mx-auto mb-4`}>
                    <Icon size={22} className={iconColor[background] || iconColor.primary} />
                  </div>
                )}
                <div className="text-4xl md:text-5xl font-display font-bold mb-2 leading-none">
                  {stat.value}
                </div>
                <div className={
                  background === 'primary' ? 'text-primary-200 text-sm' :
                  background === 'dark' ? 'text-secondary-400 text-sm' :
                  'text-secondary-500 text-sm'
                }>
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Stats;
