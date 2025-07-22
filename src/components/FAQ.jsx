import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "How much does a website development project cost?",
      answer: "Our website development costs vary based on complexity and requirements. Business websites start at $2,999, e-commerce solutions at $4,999, and portfolio sites at $1,999. We provide detailed quotes after understanding your specific needs during our free consultation."
    },
    {
      question: "How long does it take to build a website?",
      answer: "Timeline depends on the project scope. A basic business website typically takes 4-6 weeks, while complex e-commerce sites may take 8-12 weeks. We provide a detailed timeline during the planning phase and keep you updated throughout the process."
    },
    {
      question: "Do you provide website maintenance and support?",
      answer: "Yes! We offer ongoing maintenance packages that include security updates, content updates, performance monitoring, and technical support. Our team is available 24/7 to ensure your website runs smoothly."
    },
    {
      question: "Will my website be mobile-friendly and responsive?",
      answer: "Absolutely! Every website we build is mobile-first and fully responsive. We ensure your site looks and functions perfectly on all devices - smartphones, tablets, and desktop computers."
    },
    {
      question: "Do you help with SEO and digital marketing?",
      answer: "Yes, we build SEO best practices into every website. This includes optimized code, fast loading speeds, proper meta tags, and structured data. We also offer additional SEO and digital marketing services to help grow your online presence."
    },
    {
      question: "Can you redesign my existing website?",
      answer: "Definitely! We specialize in website redesigns that improve user experience, modernize design, and boost conversions. We can work with your existing content or help create new content that better serves your goals."
    },
    {
      question: "What if I need changes after the website is launched?",
      answer: "We include a revision period after launch for minor adjustments. For ongoing changes, we offer flexible maintenance packages or project-based updates. We're here to help your website evolve with your business."
    },
    {
      question: "Do you work with businesses outside the United States?",
      answer: "While we primarily serve US businesses, we do work with international clients. Our team is experienced in different markets and can adapt our approach to meet various regional requirements and preferences."
    }
  ];

  return (
    <motion.section
      className="py-8 md:py-16 lg:py-20 bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInUp}
    >
      <div className="container-custom">
        <motion.div className="text-center mb-16" variants={fadeInUp}>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Got questions? We've got answers. Here are the most common questions 
            we get from businesses looking to build their web presence.
          </p>
        </motion.div>

        <motion.div className="max-w-3xl mx-auto" variants={stagger}>
          {faqs.map((faq, index) => (
            <motion.div key={index} className="mb-4" variants={fadeInUp}>
              <motion.button
                className={`w-full text-left p-6 rounded-lg transition-colors flex flex-col items-start focus:outline-none ${
                  openIndex === index 
                    ? 'bg-primary-50 border-2 border-primary-200' 
                    : 'bg-gray-50 hover:bg-gray-100'
                }`}
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center justify-between w-full">
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <motion.svg
                    className={`w-6 h-6 text-primary-500 transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    initial={false}
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </motion.svg>
                </div>
                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      className="mt-4 text-gray-600 leading-relaxed"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        {/* Still Have Questions CTA */}
        <motion.div className="text-center mt-12 p-8 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl text-white" variants={fadeInUp}>
          <h3 className="text-2xl font-bold mb-4 text-black">Still Have Questions?</h3>
          <p className="mb-6 text-blue-500">
            Our team is here to help! Schedule a free consultation to discuss your project.
          </p>
          <motion.a
            href="#contact"
            className=" text-primary-600 px-8 py-3 rounded-lg font-semibold bg-gray-100 transition-colors text-blue-500 text-2xl"
            whileTap={{ scale: 0.97 }}
            whileHover={{ scale: 1.08 }}
          >
            Get Free Consultation
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default FAQ;