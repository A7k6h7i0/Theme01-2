import React from 'react';
import { motion } from 'framer-motion';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { ExternalLink, ArrowRight } from 'lucide-react';

const projects = [
  {
    title: 'TechCorp Dashboard',
    category: 'Corporate',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    color: 'from-blue-600/80',
  },
  {
    title: 'HealthTrack App',
    category: 'Healthcare',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800',
    color: 'from-emerald-600/80',
  },
  {
    title: 'FinanceFlow Pro',
    category: 'Finance',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=800',
    color: 'from-violet-600/80',
  },
  {
    title: 'EduLearn Platform',
    category: 'Education',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800',
    color: 'from-orange-600/80',
  },
  {
    title: 'SaaSify Landing',
    category: 'SaaS',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    color: 'from-primary-600/80',
  },
  {
    title: 'AgencyX Website',
    category: 'Agency',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800',
    color: 'from-rose-600/80',
  },
];

const Portfolio = () => {
  return (
    <section className="py-24 bg-secondary-950 overflow-hidden">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 mb-4 text-sm font-bold tracking-wider text-primary-400 uppercase bg-primary-900/50 rounded-full border border-primary-800"
            >
              Our Work
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-display font-bold text-white"
            >
              Built for every industry
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Button variant="outline" className="border-secondary-700 text-secondary-300 hover:border-primary-500 hover:text-primary-400 gap-2">
              View All Projects <ArrowRight size={16} />
            </Button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t ${project.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400`} />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary-950/80 via-transparent to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-white/20 text-white backdrop-blur-sm mb-2">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
              </div>

              {/* Icon */}
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-white/20">
                <ExternalLink size={16} className="text-white" />
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Portfolio;
