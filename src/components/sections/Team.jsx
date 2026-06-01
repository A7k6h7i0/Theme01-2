import React from 'react';
import { motion } from 'framer-motion';
import Container from '../ui/Container';
import { MessageCircle, Send, Briefcase } from 'lucide-react';

const members = [
  {
    name: 'Alexandra Pierce',
    role: 'CEO & Co-Founder',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?auto=format&fit=crop&q=80&w=400',
    bio: 'Former VP at Google with 15 years building world-class products.',
    gradient: 'from-blue-600 to-primary-600',
  },
  {
    name: 'Marcus Chen',
    role: 'CTO & Co-Founder',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
    bio: 'Ex-Meta engineer and open-source contributor with 200k+ GitHub stars.',
    gradient: 'from-violet-600 to-purple-600',
  },
  {
    name: 'Sofia Martinez',
    role: 'Head of Design',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400',
    bio: 'Award-winning designer who has shaped products used by millions.',
    gradient: 'from-pink-600 to-accent-600',
  },
  {
    name: 'James Okafor',
    role: 'VP of Engineering',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400',
    bio: 'Led platform teams at Stripe and Shopify before joining Avada.',
    gradient: 'from-emerald-600 to-teal-600',
  },
];

const Team = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 mb-4 text-sm font-bold tracking-wider text-primary-700 uppercase bg-primary-50 rounded-full border border-primary-100"
          >
            Our Team
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold text-secondary-900 mb-4"
          >
            Meet the people{' '}
            <span className="text-gradient">behind Avada</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-secondary-500"
          >
            A diverse team of world-class engineers, designers, and business leaders united by one mission.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group text-center"
            >
              <div className="relative mb-6 inline-block">
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-105`} />
                <img
                  src={member.image}
                  alt={member.name}
                  className="relative w-48 h-48 rounded-3xl object-cover mx-auto shadow-xl group-hover:shadow-2xl transition-shadow duration-300 group-hover:scale-105 group-hover:-translate-y-2 transition-transform"
                />
                <div className="absolute -bottom-3 -right-3 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a href="#" className="w-8 h-8 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-primary-600 hover:text-white transition-colors">
                    <Send size={12} className="text-secondary-600" />
                  </a>
                  <a href="#" className="w-8 h-8 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-primary-600 hover:text-white transition-colors">
                    <Briefcase size={12} className="text-secondary-600" />
                  </a>
                </div>
              </div>
              <h3 className="text-lg font-bold text-secondary-900 mb-1">{member.name}</h3>
              <p className="text-sm text-primary-600 font-semibold mb-3">{member.role}</p>
              <p className="text-sm text-secondary-500 leading-relaxed px-2">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Team;
