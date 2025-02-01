import React from 'react';
import { Server, Cloud, Shield, Settings } from 'lucide-react';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      icon: <Server className="w-12 h-12 text-blue-600" />,
      title: 'Server Management',
      description: 'Configuration and optimization of Dell Supermicro servers for web hosting services.',
    },
    {
      icon: <Cloud className="w-12 h-12 text-blue-600" />,
      title: 'Cloud Infrastructure',
      description: 'Deployment and management of private cloud infrastructure using VMware ESXi.',
    },
    {
      icon: <Shield className="w-12 h-12 text-blue-600" />,
      title: 'System Security',
      description: 'Implementation of firewall and security protocols for network protection.',
    },
    {
      icon: <Settings className="w-12 h-12 text-blue-600" />,
      title: 'High Availability Setup',
      description: 'Configuration of clustering and load balancing for seamless service uptime.',
    },
  ];

  // Animation variants for the service cards
  const cardVariants = {
    offscreen: {
      y: 50,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        bounce: 0.4,
        duration: 0.8,
      },
    },
    hover: {
      scale: 1.05,
      boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.1)',
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Services</h2>
          <p className="mt-4 text-lg text-gray-600">
           <b> Comprehensive IT solutions for your infrastructure needs</b>
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md cursor-pointer"
              initial="offscreen"
              whileInView="onscreen"
              whileHover="hover"
              viewport={{ once: true, amount: 0.5 }}
              variants={cardVariants}
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;