import React from 'react';
import { motion } from 'framer-motion';
import Section from '../components/ui/Section';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import { Mail, Phone, MapPin, Send, Clock, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-20 md:pt-40 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2301"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary-950/95 to-secondary-950/70" />
        </div>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl"
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-wider text-primary-400 uppercase bg-primary-900/50 rounded-full border border-primary-800">
              Contact Us
            </span>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight">
              Let's build something great
            </h1>
            <p className="text-xl text-secondary-300">
              Our team is ready to help you choose the right plan, answer questions, or walk you through a personalized demo.
            </p>
          </motion.div>
        </Container>
      </section>

      <Section background="light">
        <Container>
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Cards */}
            <div className="space-y-6">
              {[
                { icon: Mail, title: 'Email Us', detail: 'hello@avada-react.com', sub: 'We reply within 2 hours', color: 'bg-primary-600' },
                { icon: Phone, title: 'Call Us', detail: '+1 (555) 000-0000', sub: 'Mon–Fri, 8am–6pm PST', color: 'bg-violet-600' },
                { icon: MessageCircle, title: 'Live Chat', detail: 'Start a conversation', sub: 'Available now, avg 3min', color: 'bg-emerald-600' },
                { icon: MapPin, title: 'Visit Us', detail: '123 Business Ave, Suite 100', sub: 'Silicon Valley, CA 94025', color: 'bg-orange-600' },
              ].map(({ icon: Icon, title, detail, sub, color }, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-secondary-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className={`w-12 h-12 ${color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <Icon size={22} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-secondary-900 mb-0.5">{title}</h3>
                    <p className="text-secondary-800 font-medium text-sm">{detail}</p>
                    <p className="text-secondary-400 text-xs mt-1">{sub}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-2 bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-secondary-100"
            >
              <h2 className="text-2xl font-bold text-secondary-900 mb-8">Send us a message</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {[['First Name', 'Jane', 'text'], ['Last Name', 'Doe', 'text']].map(([label, ph, type]) => (
                    <div key={label} className="space-y-2">
                      <label className="text-sm font-semibold text-secondary-700">{label}</label>
                      <input type={type} placeholder={ph}
                        className="w-full px-4 py-3 rounded-xl border border-secondary-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all bg-secondary-50 focus:bg-white"
                      />
                    </div>
                  ))}
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {[['Email Address', 'jane@company.com', 'email'], ['Company', 'Acme Inc.', 'text']].map(([label, ph, type]) => (
                    <div key={label} className="space-y-2">
                      <label className="text-sm font-semibold text-secondary-700">{label}</label>
                      <input type={type} placeholder={ph}
                        className="w-full px-4 py-3 rounded-xl border border-secondary-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all bg-secondary-50 focus:bg-white"
                      />
                    </div>
                  ))}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-secondary-700">Subject</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-secondary-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all bg-secondary-50 focus:bg-white text-secondary-700">
                    <option>General Inquiry</option>
                    <option>Sales & Pricing</option>
                    <option>Technical Support</option>
                    <option>Partnership</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-secondary-700">Message</label>
                  <textarea rows="5" placeholder="Tell us how we can help you..."
                    className="w-full px-4 py-3 rounded-xl border border-secondary-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all resize-none bg-secondary-50 focus:bg-white"
                  />
                </div>

                <Button className="w-full gap-2" size="lg">
                  <Send size={18} /> Send Message
                </Button>

                <p className="text-xs text-secondary-400 text-center">
                  By sending this message, you agree to our Privacy Policy. We'll never share your information.
                </p>
              </form>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Map placeholder */}
      <div className="h-80 bg-secondary-100 relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=2070"
          alt="Location"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="glass-card rounded-2xl px-8 py-4 text-center">
            <MapPin size={24} className="text-primary-600 mx-auto mb-2" />
            <p className="font-bold text-secondary-900">123 Business Ave, Suite 100</p>
            <p className="text-secondary-500 text-sm">Silicon Valley, CA 94025</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
