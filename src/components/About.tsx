import React from 'react';
import { User, Server, Cloud, Terminal, Box, Cpu, GitPullRequest, Code2 } from 'lucide-react';
import { motion } from 'framer-motion'; // Import framer-motion

const About = () => {
  const skills = [
    { icon: <Server className="w-8 h-8 text-blue-600" />, name: 'Server Management' },
    { icon: <Cloud className="w-8 h-8 text-blue-600" />, name: 'Cloud Technologies' },
    { icon: <Terminal className="w-8 h-8 text-blue-600" />, name: 'DevOps Practices' },
    { icon: <User className="w-8 h-8 text-blue-600" />, name: 'System Administration' },
    { icon: <Box className="w-8 h-8 text-blue-600" />, name: 'Docker' },
    { icon: <Cpu className="w-8 h-8 text-blue-600" />, name: 'Kubernetes' },
    { icon: <GitPullRequest className="w-8 h-8 text-blue-600" />, name: 'GitHub Actions' },
    { icon: <Code2 className="w-8 h-8 text-blue-600" />, name: 'Python programming ' },
    { icon: <Code2 className="w-8 h-8 text-blue-600" />, name: 'C Programming' },
  ];

  return (
    <motion.section
      id="about"
      className="py-20 bg-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl font-bold text-gray-900"
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            About Me
          </motion.h2>
          <motion.p
            className="mt-4 text-lg text-gray-600"
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <b>Experienced System Administrator and DevOps Engineer</b>
          </motion.p>
        </div>

        <div className="flex justify-center">
          <div className="text-center max-w-2xl">
            <motion.p
              className="text-xl text-gray-700 mb-8"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              As a Support Engineer at XeonBD, I specialize in system administration and DevOps practices, ensuring seamless operations for client-facing systems. My expertise includes managing VPS configurations, hosting applications, and optimizing infrastructure for efficiency, security, and reliability.
            </motion.p>

            <motion.div
              className="grid grid-cols-2 md:grid-cols-3 gap-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="mb-2">{skill.icon}</div>
                  <span className="text-gray-700 font-medium">{skill.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
