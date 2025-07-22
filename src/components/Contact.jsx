import React, { useState } from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you! We\'ll get back to you within 24 hours.');
  };

  return (
    <motion.section
      id="contact"
      className="py-8 md:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-primary-50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInUp}
    >
      <div className="container-custom">
        <motion.div className="text-center mb-16" variants={fadeInUp}>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get a free quote for your website development project. We'll analyze your needs 
            and provide a detailed proposal within 24 hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <motion.div className="lg:col-span-1" variants={fadeInUp}>
            <motion.div className="bg-white p-8 rounded-2xl shadow-lg" whileHover={{ scale: 1.03 }}>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    📞
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                    <p className="text-gray-600">(555) 123-4567</p>
                    <p className="text-sm text-gray-500">Mon-Fri 9AM-6PM EST</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    ✉️
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                    <p className="text-gray-600">hello@webdevpro.com</p>
                    <p className="text-sm text-gray-500">We respond within 24 hours</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    📍
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Office</h4>
                    <p className="text-gray-600">123 Tech Street<br />San Francisco, CA 94105</p>
                    <p className="text-sm text-gray-500">By appointment only</p>
                  </div>
                </div>
              </div>
              {/* Benefits */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-4">What You Get:</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Free consultation & quote
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Detailed project proposal
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Timeline & budget breakdown
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    No obligation to proceed
                  </li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
          {/* Contact Form */}
          <motion.div className="lg:col-span-2" variants={fadeInUp}>
            <motion.form
              onSubmit={handleSubmit}
              className="bg-white p-8 rounded-2xl shadow-lg"
              variants={stagger}
              initial="hidden"
              animate="visible"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Request Your Free Quote</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { label: 'Full Name *', id: 'name', type: 'text', required: true, placeholder: 'Your full name' },
                  { label: 'Email Address *', id: 'email', type: 'email', required: true, placeholder: 'your.email@example.com' },
                  { label: 'Phone Number', id: 'phone', type: 'tel', required: false, placeholder: '(555) 123-4567' },
                  { label: 'Company Name', id: 'company', type: 'text', required: false, placeholder: 'Your company name' },
                ].map((field, idx) => (
                  <motion.div key={field.id} variants={fadeInUp}>
                    <label htmlFor={field.id} className="block text-sm font-medium text-gray-700 mb-2">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      id={field.id}
                      name={field.id}
                      required={field.required}
                      value={formData[field.id]}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder={field.placeholder}
                    />
                  </motion.div>
                ))}
                <motion.div variants={fadeInUp}>
                  <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Type *
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    required
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  >
                    <option value="">Select project type</option>
                    <option value="business">Business Website</option>
                    <option value="ecommerce">E-commerce Store</option>
                    <option value="portfolio">Portfolio Website</option>
                    <option value="blog">Blog/Content Site</option>
                    <option value="redesign">Website Redesign</option>
                    <option value="other">Other</option>
                  </select>
                </motion.div>
                <motion.div variants={fadeInUp}>
                  <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  >
                    <option value="">Select budget range</option>
                    <option value="under-3k">Under $3,000</option>
                    <option value="3k-5k">$3,000 - $5,000</option>
                    <option value="5k-10k">$5,000 - $10,000</option>
                    <option value="10k-25k">$10,000 - $25,000</option>
                    <option value="25k-plus">$25,000+</option>
                  </select>
                </motion.div>
                <motion.div className="md:col-span-2" variants={fadeInUp}>
                  <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
                    Desired Timeline
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  >
                    <option value="">Select timeline</option>
                    <option value="asap">ASAP (Rush project)</option>
                    <option value="1-month">Within 1 month</option>
                    <option value="2-months">1-2 months</option>
                    <option value="3-months">2-3 months</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </motion.div>
                <motion.div className="md:col-span-2" variants={fadeInUp}>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Description *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="Tell us about your project requirements, goals, and any specific features you need..."
                  />
                </motion.div>
              </div>
              <motion.div className="mt-8" variants={fadeInUp}>
                <motion.button
                  type="submit"
                  className="w-full btn-primary text-lg py-4"
                  whileTap={{ scale: 0.97 }}
                  whileHover={{ scale: 1.04 }}
                >
                  Get My Free Quote
                </motion.button>
                <p className="text-sm text-gray-500 text-center mt-3">
                  We'll respond within 24 hours with a detailed proposal.
                </p>
              </motion.div>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;