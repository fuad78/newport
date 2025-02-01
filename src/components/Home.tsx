import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Download, Award, Terminal, Server } from 'lucide-react';

const Home = () => {
  const CV_LINK = "https://drive.google.com/file/d/1BzjPG9y8S8yC9QGx6wo0h0Ch3a44rSv4/view?usp=sharing";
  const [isVisible, setIsVisible] = useState(false);
  const [activeSkill, setActiveSkill] = useState(1); // Start with Technical Support in the middle

  // Reordered skills array with Technical Support in the middle
  const skills = [
    { icon: <Server className="w-8 h-8" />, name: "System Administration", description: "Expert in Linux/Unix systems, server management, and infrastructure optimization" },
    { icon: <Award className="w-8 h-8" />, name: "Technical Support", description: "Specialized in hardware troubleshooting and performance optimization" },
    { icon: <Terminal className="w-8 h-8" />, name: "DevOps Engineering", description: "Proficient in CI/CD, Docker, Kubernetes, and cloud platforms" }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveSkill((prev) => (prev + 1) % skills.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {/* Profile Image with Animated Border */}
          <div className="relative mb-8 inline-block">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-spin-slow"></div>
            <img
              src="https://i.postimg.cc/CKXsRKMZ/IMG-20240726-180920.jpg"
              alt="KM Fuad Hasan"
              className="relative w-48 h-48 rounded-full border-4 border-white shadow-2xl transform hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Name and Title with Animation */}
          <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4 animate-fade-in">
            KM Fuad Hasan
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-700 mb-8 font-light">
            System Administrator & DevOps Engineer
          </h2>

          {/* Animated Skills Carousel */}
          <div className="max-w-3xl mx-auto mb-12 h-32 relative">
            {skills.map((skill, index) => (
              <div
                key={index}
                className={`transition-all duration-500 absolute w-full transform ${
                  index === activeSkill 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10 pointer-events-none'
                }`}
              >
                <div className="bg-white rounded-xl shadow-xl p-6 flex flex-col items-center">
                  <div className="text-blue-600 mb-2">{skill.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
                  <p className="text-gray-600">{skill.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Introduction with Gradient Background */}
          <div className="max-w-2xl mx-auto mb-12 bg-white bg-opacity-90 rounded-2xl p-6 shadow-xl backdrop-blur-sm">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              I have extensive experience managing VPS configurations and hosting applications at XeonBD, 
              ensuring smooth operations for clients. I also specialize in hardware troubleshooting to 
              maintain optimal performance and reliability.
            </p>
          </div>

          {/* Contact Information with Hover Effects */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: <Mail className="w-6 h-6" />, text: "fuadxeonbd@gmail.com" },
              { icon: <Phone className="w-6 h-6" />, text: "01872841507" },
              { icon: <MapPin className="w-6 h-6" />, text: "Dhaka, Bangladesh" }
            ].map((contact, index) => (
              <div
                key={index}
                className="group bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-center justify-center space-x-3">
                  <div className="text-blue-600 group-hover:scale-110 transition-transform duration-300">
                    {contact.icon}
                  </div>
                  <span className="text-gray-700">{contact.text}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Call-to-Action Buttons with Enhanced Styling */}
          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6">
            <Link
              to="/contact"
              className="group relative px-8 py-3 rounded-lg font-semibold text-white overflow-hidden"
            >
              <div className="absolute inset-0 w-full h-full transition-all duration-300 bg-gradient-to-r from-blue-600 via-blue-700 to-purple-600 group-hover:bg-gradient-to-l"></div>
              <span className="relative flex items-center justify-center">
                Get in Touch
              </span>
            </Link>
            <a
              href={CV_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-3 rounded-lg font-semibold overflow-hidden border-2 border-blue-600"
            >
              <div className="absolute inset-0 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></div>
              <span className="relative flex items-center justify-center text-blue-600 group-hover:text-white">
                <Download className="mr-2" size={20} />
                Download CV
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;