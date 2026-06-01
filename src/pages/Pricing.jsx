import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Section from '../components/ui/Section';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import CTA from '../components/sections/CTA';
import { Check, ArrowRight } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: { monthly: '$29', annual: '$19' },
    description: 'Perfect for freelancers and small projects.',
    features: ['5 Projects', 'Basic Analytics', 'Community Support', '1GB Storage', 'Standard Security', '3 Team Members'],
    buttonText: 'Get Started',
    popular: false,
    color: 'secondary',
  },
  {
    name: 'Professional',
    price: { monthly: '$99', annual: '$69' },
    description: 'Ideal for growing startups and agencies.',
    features: ['Unlimited Projects', 'Advanced Analytics', 'Priority Support', '10GB Storage', 'Enterprise Security', 'Custom Domains', 'API Access', '25 Team Members'],
    buttonText: 'Start Free Trial',
    popular: true,
    color: 'primary',
  },
  {
    name: 'Enterprise',
    price: { monthly: 'Custom', annual: 'Custom' },
    description: 'For large organizations with complex needs.',
    features: ['Unlimited Everything', 'Dedicated Account Manager', '24/7 Phone Support', 'Unlimited Storage', 'SLA Guarantee', 'Custom Integrations', 'On-premise Deployment', 'Unlimited Team'],
    buttonText: 'Contact Sales',
    popular: false,
    color: 'dark',
  }
];

const Pricing = () => {
  const [annual, setAnnual] = useState(false);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-20 md:pt-44 text-center overflow-hidden bg-mesh">
        <div className="absolute -top-40 left-1/4 w-[600px] h-[600px] rounded-full bg-primary-100/40 blur-[140px] -z-10" />
        <Container>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-display font-bold text-secondary-900 mb-6 leading-tight">
              Simple, transparent <span className="text-gradient">pricing</span>
            </h1>
            <p className="text-xl text-secondary-600 mb-10">
              Choose the plan that's right for your business. All plans include a 14-day free trial.
            </p>
            {/* Toggle */}
            <div className="inline-flex items-center gap-4 bg-secondary-100 rounded-xl p-1.5">
              <button
                onClick={() => setAnnual(false)}
                className={`px-6 py-2 rounded-lg text-sm font-semibold transition-all ${!annual ? 'bg-white shadow text-secondary-900' : 'text-secondary-500'}`}
              >
                Monthly
              </button>
              <button
                onClick={() => setAnnual(true)}
                className={`px-6 py-2 rounded-lg text-sm font-semibold transition-all ${annual ? 'bg-white shadow text-secondary-900' : 'text-secondary-500'}`}
              >
                Annual
                <span className="ml-2 text-xs text-green-600 font-bold">Save 30%</span>
              </button>
            </div>
          </motion.div>
        </Container>
      </section>

      <Section padding="medium" background="light">
        <Container>
          <div className="grid lg:grid-cols-3 gap-8">
            {plans.map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`relative flex flex-col rounded-3xl p-8 border ${
                  plan.popular
                    ? 'bg-primary-600 border-primary-500 text-white shadow-2xl shadow-primary-500/30'
                    : plan.color === 'dark'
                    ? 'bg-secondary-950 border-secondary-800 text-white'
                    : 'bg-white border-secondary-100 shadow-sm'
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-yellow-400 text-secondary-900 px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase">
                    Most Popular
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="flex items-baseline gap-1 mb-3">
                    <span className="text-5xl font-bold">
                      {annual ? plan.price.annual : plan.price.monthly}
                    </span>
                    {plan.price.monthly !== 'Custom' && (
                      <span className={plan.popular ? 'text-primary-200' : 'text-secondary-400'}>
                        /mo
                      </span>
                    )}
                  </div>
                  <p className={plan.popular ? 'text-primary-200' : plan.color === 'dark' ? 'text-secondary-400' : 'text-secondary-500'}>
                    {plan.description}
                  </p>
                </div>

                <ul className="space-y-4 mb-10 flex-grow">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${plan.popular ? 'bg-white/20' : plan.color === 'dark' ? 'bg-secondary-700' : 'bg-primary-50'}`}>
                        <Check size={12} className={plan.popular ? 'text-white' : 'text-primary-600'} />
                      </div>
                      <span className={plan.popular ? 'text-primary-100' : plan.color === 'dark' ? 'text-secondary-300' : 'text-secondary-700'}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full gap-2 ${plan.popular ? 'bg-white text-primary-700 hover:bg-primary-50' : ''}`}
                  variant={plan.popular ? 'white' : 'outline'}
                  size="lg"
                >
                  {plan.buttonText} <ArrowRight size={16} />
                </Button>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section background="white">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-secondary-900 text-center mb-12">
              Frequently asked questions
            </h2>
            <div className="space-y-6">
              {[
                ['Can I change plans later?', 'Yes, you can upgrade or downgrade your plan at any time from your dashboard settings.'],
                ['What happens after my trial?', "You'll be asked to select a plan. If you don't, your account moves to read-only mode."],
                ['Do you offer refunds?', 'We offer a 30-day money-back guarantee on all paid plans, no questions asked.'],
                ['Is my data secure?', 'Absolutely. All data is encrypted at rest and in transit. We are SOC 2 Type II certified.'],
              ].map(([q, a], i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 rounded-2xl border border-secondary-100 bg-secondary-50 hover:border-primary-200 transition-colors"
                >
                  <h4 className="font-bold text-secondary-900 mb-2">{q}</h4>
                  <p className="text-secondary-600">{a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <CTA title="Not sure which plan is right?" subtitle="Talk to our team. We'll help you choose the right plan for your exact needs and budget." primaryCTA="Talk to Sales" secondaryCTA="Start Free Trial" />
    </>
  );
};

export default Pricing;
