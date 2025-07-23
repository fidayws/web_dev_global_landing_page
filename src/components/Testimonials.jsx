import React from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
      content: "Working with this team was incredible. They transformed our outdated website into a modern, high-converting platform that our customers love. The ROI has been exceptional.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Founder, EcoStore",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      content: "Our e-commerce sales increased by 150% within three months of launching the new website. Their attention to detail and focus on user experience made all the difference.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director, CreativeHub",
      image: "https://randomuser.me/api/portraits/women/3.jpg",
      content: "The team delivered exactly what we needed - a beautiful, fast, and SEO-optimized website. Their communication was excellent throughout the project.",
      rating: 5
    }
  ];

  const clientLogos = [
    {
      name: "Microsoft",
      logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/microsoft.svg",
    },
    {
      name: "Google",
      logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/google.svg",
    },
    {
      name: "Amazon",
      logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/amazon.svg",
    },
    {
      name: "IBM",
      logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/ibm.svg",
    },
    {
      name: "Intel",
      logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/intel.svg",
    }
  ];

  return (
    <motion.section
      id="testimonials"
      className="py-16 bg-gradient-to-br from-primary-50 to-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInUp}
    >
      <div className="container-custom">
        <motion.div className="text-center mb-16" variants={fadeInUp}>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We've helped leading companies transform their digital presence and achieve exceptional results.
          </p>
        </motion.div>

        {/* Client Logos */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center mb-16"
          variants={stagger}
        >
          {clientLogos.map((client, index) => (
            <motion.div
              key={client.name}
              className="flex items-center justify-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={client.logo}
                alt={`${client.name} logo`}
                className="h-12 w-auto object-contain transition-opacity hover:opacity-80 filter grayscale hover:grayscale-0"
                loading="lazy"
                style={{ fill: 'currentColor' }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={stagger}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="bg-white p-8 rounded-2xl shadow-lg"
              variants={fadeInUp}
              whileHover={{ scale: 1.03 }}
            >
              {/* Rating */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>

              {/* Author */}
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          variants={fadeInUp}
        >
          <motion.a
            href="#contact"
            className="inline-block bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Project Today
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Testimonials;