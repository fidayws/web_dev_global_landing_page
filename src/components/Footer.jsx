import React from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

const Footer = () => {
  const services = [
    "Business Websites",
    "E-commerce Development",
    "WordPress Development",
    "React Applications",
    "Website Redesign",
    "SEO Optimization"
  ];

  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Our Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Process", href: "#process" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" }
  ];

  const locations = [
    "San Francisco, CA",
    "Los Angeles, CA", 
    "New York, NY",
    "Chicago, IL",
    "Austin, TX",
    "Miami, FL"
  ];

  return (
    <motion.footer
      className="bg-gray-900 text-white px-4 rounded-lg"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInUp}
    >
      <div className="container-custom py-16">
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" variants={stagger}>
          {/* Company Info */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-2xl font-bold text-white mb-4">WebDev Pro</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              We help businesses across America build powerful websites that drive growth, 
              increase sales, and create lasting customer relationships.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-gray-300">
                <span className="mr-3">📞</span>
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center text-gray-300">
                <span className="mr-3">✉️</span>
                <span>hello@webdevpro.com</span>
              </div>
              <div className="flex items-center text-gray-300">
                <span className="mr-3">📍</span>
                <span>San Francisco, CA</span>
              </div>
            </div>
          </motion.div>
          {/* Services */}
          <motion.div variants={fadeInUp}>
            <h4 className="text-lg font-semibold text-white mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#services" className="text-gray-300 hover:text-white transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
          {/* Quick Links */}
          <motion.div variants={fadeInUp}>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-300 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
          {/* Service Areas */}
          <motion.div variants={fadeInUp}>
            <h4 className="text-lg font-semibold text-white mb-4">Service Areas</h4>
            <ul className="space-y-2">
              {locations.map((location, index) => (
                <li key={index} className="text-gray-300">
                  {location}
                </li>
              ))}
            </ul>
            <p className="text-gray-300 text-sm mt-4">
              Plus all 50 states via remote collaboration
            </p>
          </motion.div>
        </motion.div>
        {/* Social Links & CTA */}
        <motion.div className="border-t border-gray-800 pt-8 mt-12" variants={fadeInUp}>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex space-x-6 mb-4 md:mb-0">
              {['LinkedIn', 'Twitter', 'Facebook', 'Instagram'].map((platform, idx) => (
                <motion.a
                  key={platform}
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {platform}
                </motion.a>
              ))}
            </div>
            <motion.a
              href="#contact"
              className="btn-primary"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.97 }}
            >
              Start Your Project Today
            </motion.a>
          </div>
        </motion.div>
        {/* Copyright */}
        <motion.div className="border-t border-gray-800 pt-8 mt-8 text-center" variants={fadeInUp}>
          <p className="text-gray-400">
            © {new Date().getFullYear()} WebDev Pro. All rights reserved. 
            <span className="mx-4">|</span>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span className="mx-4">|</span>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;