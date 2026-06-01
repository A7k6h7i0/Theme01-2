import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/sections/Hero';
import Features from '../components/sections/Features';
import Stats from '../components/sections/Stats';
import Testimonials from '../components/sections/Testimonials';
import CTA from '../components/sections/CTA';
import LogoCloud from '../components/sections/LogoCloud';
import Portfolio from '../components/sections/Portfolio';
import Team from '../components/sections/Team';
import Section from '../components/ui/Section';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import { CheckCircle2, ArrowRight, TrendingUp, Award, Layers } from 'lucide-react';

const CorporateHome = () => {
  return (
    <>
      <Hero
        variant="split"
        title="Elevate Your Business with Enterprise Solutions"
        subtitle="Avada React provides the most flexible and powerful UI system for modern corporate websites, designed to scale from Series A to global enterprise."
        primaryCTA="Explore Solutions"
        secondaryCTA="Watch Demo"
        image="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2301"
      />

      <LogoCloud />

      <Stats />

      {/* Mission Section */}
      <Section background="white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-wider text-primary-700 uppercase bg-primary-50 rounded-full border border-primary-100">
                Why Avada
              </span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-secondary-900 mb-8 leading-tight">
                Designed for the{' '}
                <span className="text-gradient">modern enterprise</span>
              </h2>
              <p className="text-lg text-secondary-600 mb-8 leading-relaxed">
                Our modular approach allows you to build complex pages in minutes, not days. Every component is highly configurable, battle-tested, and follows industry-best design standards.
              </p>
              <ul className="space-y-5 mb-10">
                {[
                  'Fully modular and configurable UI components',
                  'Enterprise-grade security & GDPR compliance',
                  'Seamless integration with your existing tech stack',
                  'Dedicated support with SLA guarantees'
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-4 text-secondary-700"
                  >
                    <div className="w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="text-primary-600 w-4 h-4" />
                    </div>
                    <span className="font-medium">{item}</span>
                  </motion.li>
                ))}
              </ul>
              <Button className="gap-2">Learn More <ArrowRight size={16} /></Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2070"
                  alt="Team working"
                  className="w-full h-auto"
                />
              </div>
              {/* Stats card overlay */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-8 -left-8 glass-card rounded-2xl p-5 hidden md:block"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-600 flex items-center justify-center">
                    <TrendingUp size={22} className="text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-secondary-500 mb-1">Average Revenue Growth</div>
                    <div className="text-2xl font-bold text-secondary-900">+128% <span className="text-green-500 text-sm">↑</span></div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="absolute -top-8 -right-8 glass-card rounded-2xl p-5 hidden md:block"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-yellow-500 flex items-center justify-center">
                    <Award size={22} className="text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-secondary-500 mb-1">Industry Recognition</div>
                    <div className="font-bold text-secondary-900">#1 Rated Theme</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Full-width split image section */}
      <section className="overflow-hidden">
        <div className="grid lg:grid-cols-2 min-h-[600px]">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1200"
              alt="Office"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-primary-900/60" />
            <div className="relative z-10 p-16 flex flex-col justify-end h-full">
              <h3 className="text-3xl font-bold text-white mb-4">Global Headquarters</h3>
              <p className="text-primary-200">Silicon Valley, CA — with offices in 12 countries</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200"
              alt="Team"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-secondary-900/60" />
            <div className="relative z-10 p-16 flex flex-col justify-end h-full">
              <h3 className="text-3xl font-bold text-white mb-4">World-Class Team</h3>
              <p className="text-secondary-300">50+ experts across design, engineering, and success</p>
            </div>
          </motion.div>
        </div>
      </section>

      <Features
        background="light"
        title="Everything you need for corporate success"
        subtitle="We've built the most comprehensive UI kit for businesses — ensuring your brand stands out."
      />

      <Portfolio />

      <Team />

      <Testimonials />

      <CTA
        bgImage="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=2069"
      />
    </>
  );
};

export default CorporateHome;
