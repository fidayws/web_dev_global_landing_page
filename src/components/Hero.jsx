import React from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

const Hero = () => {
  return (
    <motion.section
      className="bg-gradient-to-br from-primary-50 to-secondary-50 py-8 md:py-16 lg:py-20 pt-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeInUp}
    >
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div className="space-y-8" variants={stagger}>
            <motion.div className="space-y-4" variants={fadeInUp}>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Professional Website Development for
                <span className="text-primary-600"> US Businesses</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Transform your business with custom websites that drive results. From stunning designs to powerful functionality, we create websites that convert visitors into customers.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div className="flex flex-wrap gap-8" variants={stagger}>
              {[{
                value: '500+', label: 'Projects Delivered'
              }, {
                value: '98%', label: 'Client Satisfaction'
              }, {
                value: '24/7', label: 'Support'
              }].map((stat, i) => (
                <motion.div
                  key={stat.value}
                  className="text-center bg-white/80 rounded-xl shadow-md px-6 py-4 hover:scale-105 hover:shadow-xl transition-transform duration-300"
                  variants={fadeInUp}
                >
                  <div className="text-3xl font-bold text-primary-600">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div className="flex flex-col sm:flex-row gap-4" variants={fadeInUp}>
              <motion.a
                href="#contact"
                className="btn-primary shadow-lg hover:scale-105 focus:scale-105 transition-transform duration-300 bg-blue-500 text-white p-4 rounded-lg"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.97 }}
              >
                Get Free Quote
              </motion.a>
              <motion.a
                href="#portfolio"
                className="btn-secondary shadow-lg hover:scale-105 focus:scale-105 transition-transform duration-300 bg-blue-500 text-white p-4 rounded-lg"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.97 }}
              >
                View Our Work
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div className="relative" variants={fadeInUp}>
            <motion.div
              className="bg-white p-8 rounded-2xl shadow-2xl relative overflow-hidden"
              whileHover={{ scale: 1.03, boxShadow: '0 8px 32px rgba(0,0,0,0.18)' }}
              transition={{ type: 'spring', stiffness: 200 }}
            >
              <img
                src="https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Web Development"
                className="w-full h-80 object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              />
              <motion.div
                className="absolute -top-4 -right-4 bg-secondary-500 text-white p-4 rounded-lg shadow-lg"
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <div className="text-sm font-semibold text-blue-500">Starting at</div>
                <div className="text-2xl font-bold text-blue-500">$2,999</div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;