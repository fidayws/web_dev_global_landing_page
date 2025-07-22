import React from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

const Services = () => {
  const services = [
    {
      title: "Business Websites",
      description: "Professional corporate websites that establish credibility and drive growth for your business.",
      features: ["Responsive Design", "SEO Optimized", "Contact Forms", "Analytics Integration"],
      price: "From $2,999",
      popular: false
    },
    {
      title: "E-commerce Solutions",
      description: "Complete online stores with payment processing, inventory management, and customer accounts.",
      features: ["Shopping Cart", "Payment Gateway", "Inventory Management", "Order Tracking"],
      price: "From $4,999",
      popular: true
    },
    {
      title: "Portfolio Websites",
      description: "Showcase your work with stunning visual portfolios that impress potential clients.",
      features: ["Gallery System", "Client Testimonials", "Contact Integration", "Mobile Optimized"],
      price: "From $1,999",
      popular: false
    }
  ];

  const websiteTypes = [
    { name: "Corporate Websites", icon: "🏢", description: "Professional business presence online" },
    { name: "E-commerce Stores", icon: "🛒", description: "Online retail and product sales" },
    { name: "Portfolio Sites", icon: "🎨", description: "Creative showcase and personal branding" },
    { name: "Blog Platforms", icon: "📝", description: "Content management and publishing" },
    { name: "Landing Pages", icon: "🎯", description: "Conversion-focused marketing pages" },
    { name: "Membership Sites", icon: "👥", description: "Exclusive content and community features" }
  ];

  return (
    <motion.section
      id="services"
      className="py-8 md:py-16 lg:py-20 bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInUp}
    >
      <div className="container-custom">
        {/* Services Overview */}
        <motion.div className="text-center mb-16" variants={fadeInUp}>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Complete Web Development Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We specialize in creating custom websites that drive results for businesses across the United States. 
            From small businesses to enterprise solutions, we've got you covered.
          </p>
        </motion.div>

        {/* Service Packages */}
        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20" variants={stagger}>
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`relative p-8 rounded-2xl shadow-lg transition-transform hover:scale-105 ${
                service.popular ? 'bg-primary-500 text-white border-4 border-secondary-500' : 'bg-white border border-gray-200'
              }`}
              variants={fadeInUp}
              whileHover={{ scale: 1.06, boxShadow: '0 8px 32px rgba(0,0,0,0.18)' }}
            >
              {service.popular && (
                <motion.div className="absolute -top-4 left-1/2 transform -translate-x-1/2" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
                  <span className="bg-secondary-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                    Most Popular
                  </span>
                </motion.div>
              )}
              <div className="text-center mb-6">
                <h3 className={`text-2xl font-bold mb-2 ${service.popular ? 'text-blue-600' : 'text-gray-900'}`}>
                  {service.title}
                </h3>
                <p className={`${service.popular ? 'text-blue-500' : 'text-gray-600'} mb-4`}>
                  {service.description}
                </p>
                <div className={`text-3xl font-bold ${service.popular ? 'text-blue-500' : 'text-primary-600'}`}>
                  {service.price}
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, idx) => (
                  <li key={idx} className={`flex items-center ${service.popular ? 'text-blue-500' : 'text-gray-600'}`}>
                    <svg className={`w-5 h-5 mr-3 ${service.popular ? 'text-green-300' : 'text-green-500'}`} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <motion.button
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                  service.popular 
                    ? 'bg-white text-primary-600 hover:bg-gray-100' 
                    : 'bg-primary-500 text-white hover:bg-primary-600'
                }`}
                whileTap={{ scale: 0.97 }}
                whileHover={{ scale: 1.04 }}
              >
                Get Started
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        {/* Website Types */}
        <motion.div className="bg-gray-50 rounded-3xl p-8 md:p-12" variants={fadeInUp}>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Types of Websites We Build</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              No matter what type of online presence you need, we have the expertise to bring your vision to life.
            </p>
          </div>
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" variants={stagger}>
            {websiteTypes.map((type, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center group"
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-4xl mb-3 group-hover:scale-125 transition-transform duration-300">{type.icon}</div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">{type.name}</h4>
                <p className="text-gray-600">{type.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Services;