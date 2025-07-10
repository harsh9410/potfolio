import React from 'react';
import { Github, Linkedin, Instagram, Heart } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/harsh9410', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/harsh-gupta-898852327/', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/harsh_gupta_9410/', label: 'Instagram' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col items-center space-y-8">
          {/* Logo/Name */}
          <div className="text-center">
            <button
              onClick={scrollToTop}
              className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-200"
            >
              Harsh Gupta
            </button>
            <p className="text-gray-400 mt-2">DevOps Enthusiast & Computer Science Student</p>
          </div>

          {/* Social Links */}
          <div className="flex space-x-6">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-800 hover:bg-purple-600 transition-all duration-300 hover:scale-110 group"
                aria-label={label}
              >
                <Icon size={20} className="text-gray-300 group-hover:text-white" />
              </a>
            ))}
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            {['About', 'Skills', 'Projects', 'Education', 'Contact'].map((link) => (
              <button
                key={link}
                onClick={() => {
                  const element = document.getElementById(link.toLowerCase());
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
              >
                {link}
              </button>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;