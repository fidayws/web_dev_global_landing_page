import React from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

const Technologies = () => {
  const technologies = [
    { name: "WordPress", logo: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=100", description: "Flexible CMS for any website" },
    { name: "React", logo: "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=100", description: "Modern JavaScript framework" },
    { name: "Node.js", logo: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=100", description: "Server-side JavaScript runtime" },
    { name: "Shopify", logo: "https://images.pexels.com/photos/6214476/pexels-photo-6214476.jpeg?auto=compress&cs=tinysrgb&w=100", description: "E-commerce platform" },
    { name: "HTML5/CSS3", logo: "https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=100", description: "Modern web standards" },
    { name: "PHP", logo: "https://images.pexels.com/photos/270632/pexels-photo-270632.jpeg?auto=compress&cs=tinysrgb&w=100", description: "Server-side scripting" }
  ];

  const features = [
    {
      title: "Mobile-First Design",
      description: "Every website we build is optimized for mobile devices first, ensuring perfect functionality across all screen sizes.",
      icon: "📱"
    },
    {
      title: "SEO Optimized",
      description: "Built-in SEO best practices to help your website rank higher in Google search results and attract more customers.",
      icon: "🔍"
    },
    {
      title: "Lightning Fast",
      description: "Optimized code and modern hosting solutions ensure your website loads quickly, improving user experience and SEO.",
      icon: "⚡"
    },
    {
      title: "Secure & Reliable",
      description: "Enterprise-level security measures and reliable hosting keep your website safe and always accessible.",
      icon: "🔒"
    }
  ];

  return (
    <motion.section
      className="py-8 md:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-primary-50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInUp}
    >
      <div className="container-custom">
        {/* Technologies */}
        <motion.div className="text-center mb-16" variants={fadeInUp}>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Cutting-Edge Technologies We Use
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We leverage the latest web technologies to build fast, secure, and scalable websites 
            that give your business a competitive edge.
          </p>
        </motion.div>

        <motion.div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-20" variants={stagger}>
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center group"
              variants={fadeInUp}
              whileHover={{ scale: 1.07 }}
            >
              <div className="mb-4 overflow-hidden rounded-lg">
                <motion.img
                  src={tech.logo}
                  alt={tech.name}
                  className="w-full h-16 object-cover group-hover:scale-110 transition-transform"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 * index, duration: 0.5 }}
                />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">{tech.name}</h4>
              <p className="text-sm text-gray-600">{tech.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Features */}
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" variants={stagger}>
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="text-center bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow"
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Technologies;