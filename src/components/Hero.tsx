import React from 'react';
import { Server, Download } from 'lucide-react';

const Hero = () => {
  const CV_LINK = "YOUR_GOOGLE_DRIVE_CV_LINK";
  
  return (
    <div className="pt-16 bg-gradient-to-r from-blue-500 to-indigo-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            System Administrator & DevOps Engineer
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Building scalable infrastructure and optimizing system performance
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#contact"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Get in Touch
            </a>
            <a
              href={CV_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-colors flex items-center"
            >
              <Download className="mr-2" size={20} />
              Download CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;