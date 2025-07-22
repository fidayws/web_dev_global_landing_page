import React from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

const Portfolio = () => {
  const projects = [
    {
      title: "TechStartup Inc.",
      category: "Corporate Website",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Modern corporate website with lead generation focus",
      technologies: ["WordPress", "Custom Theme", "SEO"],
      results: "+150% Lead Generation"
    },
    {
      title: "Fashion Boutique",
      category: "E-commerce Store",
      image: "https://images.pexels.com/photos/974911/pexels-photo-974911.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Complete e-commerce solution with inventory management",
      technologies: ["Shopify", "Custom Design", "Payment Integration"],
      results: "$50K+ Monthly Sales"
    },
    {
      title: "Creative Agency",
      category: "Portfolio Website",
      image: "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Stunning portfolio showcasing creative work",
      technologies: ["React", "Custom CMS", "Animation"],
      results: "+200% Client Inquiries"
    },
    {
      title: "Local Restaurant Chain",
      category: "Business Website",
      image: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Multi-location restaurant website with online ordering",
      technologies: ["WordPress", "WooCommerce", "Booking System"],
      results: "+75% Online Orders"
    },
    {
      title: "Healthcare Practice",
      category: "Professional Website",
      image: "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "HIPAA-compliant medical practice website",
      technologies: ["Custom PHP", "Patient Portal", "Security"],
      results: "+90% Patient Bookings"
    },
    {
      title: "Real Estate Group",
      category: "Business Platform",
      image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Property listing platform with advanced search",
      technologies: ["React", "Database", "Map Integration"],
      results: "+120% Property Views"
    }
  ];

  return (
    <motion.section
      id="portfolio"
      className="py-8 md:py-16 lg:py-20 bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInUp}
    >
      <div className="container-custom">
        <motion.div className="text-center mb-16" variants={fadeInUp}>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Recent Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how we've helped businesses across America grow with custom websites that deliver real results.
          </p>
        </motion.div>

        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" variants={stagger}>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow "
              variants={fadeInUp}
              whileHover={{ scale: 1.04 }}
            >
              <div className="relative overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.15 * index, duration: 0.5 }}
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-green-600 font-semibold">{project.results}</span>
                  <motion.button
                    className="text-primary-500 hover:text-primary-600 font-semibold"
                    whileTap={{ scale: 0.97 }}
                    whileHover={{ scale: 1.08 }}
                  >
                    View Details →
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="text-center mt-12" variants={fadeInUp}>
          <motion.button
            className="btn-primary bg-blue-500 text-white p-4 rounded-lg"
            whileTap={{ scale: 0.97 }}
            whileHover={{ scale: 1.08 }}
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Portfolio;