import React from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

const Process = () => {
  const steps = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "We start by understanding your business goals, target audience, and project requirements. This includes competitor analysis, user research, and technical planning.",
      duration: "1-2 weeks",
      deliverables: ["Project roadmap", "Technical specifications", "Design wireframes"],
      icon: "🔍"
    },
    {
      step: "02",
      title: "Design & Prototyping",
      description: "Our design team creates stunning visual designs that reflect your brand and engage your users. We focus on user experience and conversion optimization.",
      duration: "2-3 weeks",
      deliverables: ["Visual designs", "Interactive prototype", "Style guide"],
      icon: "🎨"
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "We bring the designs to life with clean, optimized code. Every feature is thoroughly tested across different devices and browsers to ensure perfect functionality.",
      duration: "3-6 weeks",
      deliverables: ["Fully functional website", "Quality assurance testing", "Performance optimization"],
      icon: "⚙️"
    },
    {
      step: "04",
      title: "Launch & Support",
      description: "We handle the complete launch process and provide ongoing support. Your success is our priority, so we're here to help your website grow with your business.",
      duration: "Ongoing",
      deliverables: ["Website launch", "Training materials", "Ongoing maintenance"],
      icon: "🚀"
    }
  ];

  return (
    <motion.section
      id="process"
      className="py-8 md:py-16 lg:py-20 bg-gradient-to-br from-primary-50 to-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInUp}
    >
      <div className="container-custom">
        <motion.div className="text-center mb-16" variants={fadeInUp}>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Proven Development Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We follow a systematic approach to ensure your website project is delivered on time, 
            within budget, and exceeds your expectations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Process Steps */}
          <motion.div className="space-y-8" variants={stagger}>
            {steps.map((step, index) => (
              <motion.div key={index} className="relative" variants={fadeInUp}>
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-6 top-16 w-0.5 h-20 bg-primary-200"></div>
                )}
                <div className="flex items-start space-x-4">
                  {/* Step Icon */}
                  <motion.div
                    className="flex-shrink-0 w-12 h-12 bg-primary-500 text-blue-500 rounded-full flex items-center justify-center font-bold text-lg shadow-lg"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.1 * index, duration: 0.4 }}
                  >
                    {step.step}
                  </motion.div>
                  {/* Step Content */}
                  <div className="flex-grow">
                    <div className="flex items-center space-x-3 mb-3">
                      <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                      <span className="text-2xl">{step.icon}</span>
                    </div>
                    <p className="text-gray-600 mb-4">{step.description}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Duration:</h4>
                        <p className="text-primary-600 font-medium">{step.duration}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Deliverables:</h4>
                        <ul className="space-y-1">
                          {step.deliverables.map((item, idx) => (
                            <li key={idx} className="text-gray-600 text-sm">• {item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Process Benefits */}
          <motion.div className="bg-white p-8 rounded-2xl shadow-lg" variants={fadeInUp} whileHover={{ scale: 1.03 }}>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Our Process Works</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                  ✓
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Transparent Communication</h4>
                  <p className="text-gray-600 text-sm">Regular updates and clear communication throughout the entire project.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                  ✓
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Agile Methodology</h4>
                  <p className="text-gray-600 text-sm">Flexible approach that adapts to changes and delivers value quickly.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                  ✓
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Quality Assurance</h4>
                  <p className="text-gray-600 text-sm">Rigorous testing ensures your website works perfectly across all devices.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                  ✓
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Post-Launch Support</h4>
                  <p className="text-gray-600 text-sm">Ongoing maintenance and support to keep your website running smoothly.</p>
                </div>
              </div>
            </div>
            <div className="mt-8 text-center text-blue-600 bg-gray-100 p-4 rounded-lg">
              <motion.a
                href="#contact"
                className="btn-primary"
                whileTap={{ scale: 0.97 }}
                whileHover={{ scale: 1.08 }}
              >
                Start Your Project 
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Process;