import React from 'react';
import { motion } from 'framer-motion';
import Section from '../components/ui/Section';
import Container from '../components/ui/Container';
import Stats from '../components/sections/Stats';
import Team from '../components/sections/Team';
import CTA from '../components/sections/CTA';

const About = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-20 md:pt-40 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=2071"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-secondary-950/80" />
        </div>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-wider text-primary-400 uppercase bg-primary-900/50 rounded-full border border-primary-800">
              Our Story
            </span>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-8 leading-tight">
              We're on a mission to empower every business
            </h1>
            <p className="text-xl text-secondary-300 leading-relaxed">
              Avada was founded with a simple belief: that building a professional, high-performance website should be accessible to everyone — from solo freelancers to global enterprises.
            </p>
          </motion.div>
        </Container>
      </section>

      <Stats background="primary" />

      {/* Story */}
      <Section background="white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-6">
                Built out of frustration, <span className="text-gradient">refined with passion</span>
              </h2>
              <p className="text-lg text-secondary-600 mb-6 leading-relaxed">
                Founded in 2020, Avada started as a small team of designers and developers frustrated with the limitations of existing website builders. We wanted something combining the ease of a drag-and-drop builder with the power of modern React.
              </p>
              <p className="text-lg text-secondary-600 leading-relaxed">
                Today, we're a global team of 50+ experts helping thousands of businesses worldwide build their digital future. We believe in clean code, beautiful design, and putting our customers first.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2070"
                alt="Team"
                className="rounded-3xl shadow-2xl w-full"
              />
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Office images */}
      <Section background="light">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-secondary-900 mb-4">
              Our <span className="text-gradient">culture & values</span>
            </h2>
            <p className="text-lg text-secondary-600">The principles that guide everything we build at Avada.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { title: 'Customer Obsession', description: 'We start with the customer and work backwards. Trust is earned, never assumed.', color: 'bg-primary-600' },
              { title: 'Innovation First', description: 'We never stop asking "how could this be better?" and act on the answers.', color: 'bg-violet-600' },
              { title: 'Excellence Always', description: 'We hold ourselves to the highest standards of design and engineering quality.', color: 'bg-emerald-600' },
            ].map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-2xl border border-secondary-100 shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className={`w-10 h-1 ${v.color} rounded-full mb-6`} />
                <h3 className="text-xl font-bold text-secondary-900 mb-3">{v.title}</h3>
                <p className="text-secondary-600 leading-relaxed">{v.description}</p>
              </motion.div>
            ))}
          </div>

          {/* 4-image grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=600',
              'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=600',
              'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600',
              'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=600',
            ].map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl overflow-hidden aspect-square"
              >
                <img src={src} alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      <Team />

      <CTA
        title="Want to work with us?"
        subtitle="We're always looking for talented people who share our passion for great design and technology."
        primaryCTA="View Open Roles"
        secondaryCTA="Contact Us"
        bgImage="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2070"
      />
    </>
  );
};

export default About;
