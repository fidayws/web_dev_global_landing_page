import React from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

const glowVariants = {
  initial: { opacity: 0.5, scale: 1 },
  animate: { 
    opacity: [0.5, 1, 0.5], 
    scale: [1, 1.02, 1],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const Hero = () => {
  return (
    <motion.section
      className="relative bg-gradient-to-br from-primary-50 to-secondary-50 py-8 md:py-16 lg:py-20 pt-24 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeInUp}
    >
      {/* Animated Background Glow */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial="initial"
        animate="animate"
        variants={glowVariants}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-3xl transform -translate-y-1/2" />
        <div className="absolute inset-0 bg-gradient-to-l from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-3xl transform translate-y-1/2" />
      </motion.div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div className="space-y-8" variants={stagger}>
            <motion.div className="space-y-4" variants={fadeInUp}>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Professional Website Development for
                <span className="relative inline-block px-2">
                  <motion.span
                    className="absolute inset-0 bg-primary-200/50 -skew-y-3 rounded"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                  />
                  <span className="relative text-primary-600"> US Businesses</span>
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Transform your business with custom websites that drive results. From stunning designs to powerful functionality, we create websites that convert visitors into customers.
              </p>
            </motion.div>

            {/* Stats with Enhanced Visual Effects */}
            <motion.div className="flex flex-wrap gap-8" variants={stagger}>
              {[{
                value: '500+', label: 'Projects Delivered',
                gradient: 'from-blue-500 to-purple-500'
              }, {
                value: '98%', label: 'Client Satisfaction',
                gradient: 'from-purple-500 to-pink-500'
              }, {
                value: '24/7', label: 'Support',
                gradient: 'from-pink-500 to-red-500'
              }].map((stat, i) => (
                <motion.div
                  key={stat.value}
                  className="relative group"
                  variants={fadeInUp}
                >
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"
                    style={{ 
                      background: `linear-gradient(to right, var(--tw-gradient-from), var(--tw-gradient-to))`,
                      className: stat.gradient 
                    }}
                  />
                  <div className="relative bg-white rounded-xl shadow-md px-6 py-4 hover:scale-105 hover:shadow-xl transition-all duration-300">
                    <div className="text-3xl font-bold text-primary-600 bg-clip-text">{stat.value}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Enhanced CTAs */}
            <motion.div className="flex flex-col sm:flex-row gap-4" variants={fadeInUp}>
              <motion.a
                href="#contact"
                className="relative overflow-hidden btn-primary shadow-lg group px-8 py-4 rounded-lg text-white text-lg font-semibold bg-gradient-to-r from-primary-500 to-primary-600"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span
                  className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                />
                <span className="relative text-blue-600">Get Free Quote</span>
              </motion.a>
              <motion.a
                href="#portfolio"
                className="relative overflow-hidden btn-secondary shadow-lg group px-8 py-4 rounded-lg text-white text-lg font-semibold bg-gradient-to-r from-secondary-500 to-secondary-600"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span
                  className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                />
                <span className=" text-blue-600">View Our Work</span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Hero Image with Enhanced Effects */}
          <motion.div className="relative" variants={fadeInUp}>
            <motion.div
              className="relative bg-white p-8 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-sm"
              whileHover={{ scale: 1.03, boxShadow: '0 8px 32px rgba(0,0,0,0.18)' }}
              transition={{ type: 'spring', stiffness: 200 }}
            >
              <picture>
                <source
                  srcSet="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
                  type="image/webp"
                />
                <motion.img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
                  alt="Professional Web Development - Modern workspace with code on screen"
                  className="w-full h-80 object-cover rounded-lg shadow-md transition-all duration-300"
                  loading="eager"
                  width="800"
                  height="600"
                  fetchpriority="high"
                  initial={{ filter: 'brightness(0.8)' }}
                  whileHover={{ filter: 'brightness(1)' }}
                />
              </picture>
              
              {/* Floating Price Tag with Enhanced Animation */}
              <motion.div
                className="absolute -top-4 -right-4 bg-white text-primary-600 p-4 rounded-lg shadow-xl backdrop-blur-sm"
                initial={{ opacity: 0, scale: 0.7, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5, type: 'spring' }}
                whileHover={{ 
                  scale: 1.1,
                  boxShadow: '0 8px 32px rgba(0,0,0,0.18)',
                }}
              >
                <div className="text-sm font-semibold">Starting at</div>
                <div className="text-2xl font-bold">$2,999</div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;