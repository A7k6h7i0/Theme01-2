import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/sections/Hero';
import Features from '../components/sections/Features';
import Testimonials from '../components/sections/Testimonials';
import CTA from '../components/sections/CTA';
import Stats from '../components/sections/Stats';
import Section from '../components/ui/Section';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import {
  Heart, Activity, Stethoscope, Calendar, Shield, Clock, CheckCircle2, ArrowRight
} from 'lucide-react';

const HealthcareHome = () => {
  const healthcareFeatures = [
    {
      title: 'Telemedicine Ready',
      description: 'Secure, HIPAA-compliant video consultations built directly into your healthcare platform.',
      icon: Activity,
      color: 'text-emerald-600',
      bg: 'bg-emerald-50',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=600',
    },
    {
      title: 'Patient Portal',
      description: 'A comprehensive portal for patients to manage appointments, health records, and bills.',
      icon: Heart,
      color: 'text-rose-600',
      bg: 'bg-rose-50',
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=600',
    },
    {
      title: 'HIPAA Compliant',
      description: 'Every component designed with privacy and security standards required in healthcare.',
      icon: Shield,
      color: 'text-blue-600',
      bg: 'bg-blue-50',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=600',
    },
    {
      title: 'Smart Scheduling',
      description: 'AI-powered scheduling that reduces wait times and maximizes provider availability.',
      icon: Calendar,
      color: 'text-indigo-600',
      bg: 'bg-indigo-50',
      image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=600',
    },
    {
      title: 'EHR Integration',
      description: 'Seamlessly connect with Epic, Cerner, and other major EHR systems.',
      icon: Stethoscope,
      color: 'text-cyan-600',
      bg: 'bg-cyan-50',
      image: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&q=80&w=600',
    },
    {
      title: '24/7 Monitoring',
      description: 'Real-time patient vitals monitoring with instant critical care alert escalation.',
      icon: Clock,
      color: 'text-amber-600',
      bg: 'bg-amber-50',
      image: 'https://images.unsplash.com/photo-1535914254981-b5012eebbd15?auto=format&fit=crop&q=80&w=600',
    }
  ];

  return (
    <>
      <Hero
        variant="split"
        title="Modern Technology for Better Patient Care"
        subtitle="Avada Healthcare provides a secure, reliable, and compassionate digital experience for patients and healthcare providers alike."
        primaryCTA="Book a Demo"
        secondaryCTA="Our Services"
        image="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=2070"
        badge="Trusted by 800+ medical institutions"
      />

      <Stats
        background="primary"
        stats={[
          { label: 'Medical Institutions', value: '800+', icon: '🏥' },
          { label: 'Patients Served', value: '5M+', icon: '❤️' },
          { label: 'HIPAA Compliance', value: '100%', icon: '🔐' },
          { label: 'Response Time', value: '<2hr', icon: '⚡' },
        ]}
      />

      {/* Trust section */}
      <Section background="white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=2080"
                  alt="Healthcare professional"
                  className="w-full h-auto"
                />
              </div>
              {/* Badge overlay */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-6 -right-6 glass-card rounded-2xl p-5 hidden md:block"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500 flex items-center justify-center">
                    <Heart size={22} className="text-white fill-white" />
                  </div>
                  <div>
                    <div className="text-xs text-secondary-500 mb-0.5">Patient Satisfaction</div>
                    <div className="text-2xl font-bold text-secondary-900">98.3%</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-wider text-emerald-700 uppercase bg-emerald-50 rounded-full border border-emerald-100">
                Trusted Care
              </span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-secondary-900 mb-8 leading-tight">
                Trusted by leading{' '}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-600">
                  medical institutions
                </span>
              </h2>
              <p className="text-lg text-secondary-600 mb-8 leading-relaxed">
                We understand the unique challenges of healthcare technology. Our platform is built to be secure, accessible, and easy for both patients and clinicians to navigate.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-10">
                {[
                  'Secure Patient Data',
                  'Accessible Design',
                  'Mobile Consultations',
                  'Real-time Updates',
                  'Multi-provider Support',
                  'Insurance Integration'
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-center gap-2.5 text-secondary-700"
                  >
                    <CheckCircle2 className="text-emerald-600 w-5 h-5 flex-shrink-0" />
                    <span className="font-medium text-sm">{item}</span>
                  </motion.div>
                ))}
              </div>
              <Button className="gap-2 bg-emerald-600 hover:bg-emerald-700">
                See Patient Portal <ArrowRight size={16} />
              </Button>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Services image grid */}
      <Section background="light">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-secondary-900 mb-4">
              Comprehensive care,{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-600">
                digitally delivered
              </span>
            </h2>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              From telemedicine to chronic care management, every patient touchpoint covered.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=600',
                title: 'Telemedicine',
                desc: 'HD video consultations from any device',
                color: 'from-emerald-600/80',
              },
              {
                img: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&q=80&w=600',
                title: 'Diagnostics',
                desc: 'AI-assisted imaging and lab reports',
                color: 'from-blue-600/80',
              },
              {
                img: 'https://images.unsplash.com/photo-1535914254981-b5012eebbd15?auto=format&fit=crop&q=80&w=600',
                title: 'Remote Monitoring',
                desc: 'Continuous vitals for chronic care',
                color: 'from-violet-600/80',
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="group relative rounded-3xl overflow-hidden aspect-[4/3] cursor-pointer"
              >
                <img
                  src={service.img}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${service.color} to-transparent opacity-80`} />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-1">{service.title}</h3>
                  <p className="text-white/80 text-sm">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      <Features
        background="white"
        title="Comprehensive healthcare solutions"
        subtitle="Our modular components handle the complex requirements of modern medical practices."
        features={healthcareFeatures}
      />

      <Testimonials title="What medical professionals say" />

      <CTA
        title="Ready to modernize your medical practice?"
        subtitle="Join 800+ healthcare providers who have upgraded their digital presence with Avada."
        primaryCTA="Contact Our Experts"
        secondaryCTA="View Case Studies"
        bgImage="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=2070"
      />
    </>
  );
};

export default HealthcareHome;
