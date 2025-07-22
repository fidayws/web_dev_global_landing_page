import React from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStartup Inc.",
      location: "Austin, TX",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5,
      text: "WebDev Pro transformed our online presence completely. Our lead generation increased by 150% within the first three months. The team was professional, responsive, and delivered exactly what they promised.",
      result: "150% increase in leads"
    },
    {
      name: "Michael Chen",
      company: "Fashion Boutique",
      location: "Los Angeles, CA",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5,
      text: "The e-commerce website they built for us is incredible. The design is stunning and the functionality is flawless. We've seen our online sales grow from $10K to $50K monthly since launch.",
      result: "$50K+ monthly sales"
    },
    {
      name: "Jennifer Martinez",
      company: "Creative Agency",
      location: "Miami, FL",
      image: "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5,
      text: "Our new portfolio website perfectly showcases our creative work. The attention to detail and user experience is outstanding. Client inquiries have doubled since the launch.",
      result: "200% more inquiries"
    },
    {
      name: "David Thompson",
      company: "Local Restaurant Chain",
      location: "Chicago, IL",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5,
      text: "The team delivered a beautiful website with online ordering capabilities for all our locations. Our online orders increased by 75% and customer satisfaction is through the roof.",
      result: "75% increase in orders"
    },
    {
      name: "Dr. Lisa Roberts",
      company: "Healthcare Practice",
      location: "Phoenix, AZ",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5,
      text: "They understood our HIPAA compliance requirements perfectly and created a secure, professional website. Patient bookings through our website have increased by 90%.",
      result: "90% more bookings"
    },
    {
      name: "Robert Wilson",
      company: "Real Estate Group",
      location: "Seattle, WA",
      image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5,
      text: "The property listing platform they built is exactly what we needed. The search functionality and map integration work perfectly. Property views have increased by 120%.",
      result: "120% more views"
    }
  ];

  return (
    <motion.section
      id="testimonials"
      className="py-8 md:py-16 lg:py-20 bg-gray-50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInUp}
    >
      <div className="container-custom">
        <motion.div className="text-center mb-16" variants={fadeInUp}>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say About Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what business owners across America 
            say about working with WebDev Pro.
          </p>
        </motion.div>

        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" variants={stagger}>
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              variants={fadeInUp}
              whileHover={{ scale: 1.04 }}
            >
              {/* Stars */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                  </svg>
                ))}
              </div>
              {/* Testimonial Text */}
              <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
              {/* Result Badge */}
              <div className="mb-4">
                <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                  {testimonial.result}
                </span>
              </div>
              {/* Client Info */}
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.company}</p>
                  <p className="text-sm text-primary-600">{testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div className="mt-16 bg-primary-500 rounded-3xl p-8 md:p-12 text-white text-center" variants={fadeInUp}>
          <h3 className="text-3xl font-bold mb-8 text-blue-600">Our Track Record Speaks for Itself</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div variants={fadeInUp} whileHover={{ scale: 1.08 }}>
              <div className="text-4xl font-bold mb-2 text-blue-500">500+</div>
              <div className=" text-blue-500">Projects Completed</div>
            </motion.div>
            <motion.div variants={fadeInUp} whileHover={{ scale: 1.08 }}>
              <div className="text-4xl font-bold mb-2 text-blue-500 ">98%</div>
              <div className=" text-blue-500">Client Satisfaction</div>
            </motion.div>
            <motion.div variants={fadeInUp} whileHover={{ scale: 1.08 }}>
              <div className="text-4xl font-bold mb-2 text-blue-500">$10M+</div>
              <div className=" text-blue-500">Revenue Generated</div>
            </motion.div>
            <motion.div variants={fadeInUp} whileHover={{ scale: 1.08 }}>
              <div className="text-4xl font-bold mb-2 text-blue-500">50+</div>
              <div className=" text-blue-500">States Served</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Testimonials;