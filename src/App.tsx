import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Github, Facebook, Instagram, Linkedin } from 'lucide-react';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Contact from './components/Contact';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <nav className="bg-gray-800 p-4">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div>
              <Link to="/" className="text-white font-bold text-xl">KM Fuad Hasan</Link>
            </div>
            <ul className="flex space-x-6">
              <li><Link to="/" className="text-white hover:text-gray-300">Home</Link></li>
              <li><Link to="/about" className="text-white hover:text-gray-300">About</Link></li>
              <li><Link to="/services" className="text-white hover:text-gray-300">Services</Link></li>
              <li><Link to="/projects" className="text-white hover:text-gray-300">Projects</Link></li>
              <li><Link to="/blog" className="text-white hover:text-gray-300">Blog</Link></li>
              <li><Link to="/contact" className="text-white hover:text-gray-300">Contact</Link></li>
            </ul>
          </div>
        </nav>
        <main className="py-10 px-4 sm:px-6 lg:px-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <footer className="bg-gray-900 text-white py-8 w-full">
          <div className="max-w-7xl mx-auto px-4 flex flex-col items-center space-y-4">
            {/* Social Media Icons */}
            <div className="flex justify-center space-x-6">
              <a
                href="https://github.com/fuad78"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white transition-transform transform hover:scale-110 hover:text-blue-400"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100008623637751"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white transition-transform transform hover:scale-110 hover:text-blue-400"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/fuad_127078/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white transition-transform transform hover:scale-110 hover:text-pink-400"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/%EC%9C%A4%ED%98%9C-%EA%B9%80-480631265/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white transition-transform transform hover:scale-110 hover:text-blue-500"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
            {/* Copyright Text */}
            <div className="text-gray-400">
              © {new Date().getFullYear()} KM Fuad Hasan. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;
