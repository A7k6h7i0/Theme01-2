import React from 'react';
import { motion } from 'framer-motion';
import Container from '../ui/Container';

const Stats = ({ stats, background = 'primary' }) => {
  const defaultStats = [
    { label: 'Active Users', value: '150K+', icon: '👥' },
    { label: 'Countries', value: '80+', icon: '🌍' },
    { label: 'Projects Built', value: '12M+', icon: '🚀' },
    { label: 'Customer Support', value: '24/7', icon: '💬' },
  ];

  const displayStats = stats || defaultStats;

  const bgClasses = {
    primary: 'bg-gradient-to-r from-primary-700 to-primary-600 text-white',
    light: 'bg-secondary-50 text-secondary-900',
    dark: 'bg-secondary-900 text-white',
    white: 'bg-white text-secondary-900',
  };

  return (
    <section className={`py-16 ${bgClasses[background] || bgClasses.primary}`}>
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {displayStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {stat.icon && <div className="text-4xl mb-3">{stat.icon}</div>}
              <div className="text-4xl md:text-5xl font-display font-bold mb-2 leading-none">
                {stat.value}
              </div>
              <div className={background === 'primary' ? 'text-primary-200 text-sm' : background === 'dark' ? 'text-secondary-400 text-sm' : 'text-secondary-500 text-sm'}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Stats;
