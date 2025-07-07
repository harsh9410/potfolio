import React from 'react';
import { Github, Linkedin, Instagram, Download } from 'lucide-react';
import ParticleBackground from './ParticleBackground';

const Hero = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/harshgupta', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/harshgupta', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://instagram.com/harshgupta', label: 'Instagram' },
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleBackground />
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 text-center md:text-left">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold">
                <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
                  Harsh Gupta
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 font-light">
                DevOps Enthusiast & Computer Science Student
              </p>
              <p className="text-lg text-gray-400 max-w-md mx-auto md:mx-0">
                Building innovative solutions and exploring cutting-edge technologies
              </p>
            </div>

            {/* Social Links */}
            <div className="flex justify-center md:justify-start space-x-6">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-gray-800 hover:bg-purple-600 transition-all duration-300 hover:scale-110 group"
                  aria-label={label}
                >
                  <Icon size={24} className="text-gray-300 group-hover:text-white" />
                </a>
              ))}
            </div>

            {/* Resume Download */}
            <div className="flex justify-center md:justify-start">
              <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-purple-500/25">
                <Download size={20} className="mr-2" />
                Download Resume
              </button>
            </div>
          </div>

          {/* Right Content - Profile Picture */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-r from-purple-400 to-pink-600 p-1 animate-pulse">
                <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center overflow-hidden">
                  <div className="w-72 h-72 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-6xl font-bold text-white animate-float">
                    HG
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-purple-500 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-500 rounded-full animate-bounce delay-300"></div>
              <div className="absolute top-1/2 -left-8 w-4 h-4 bg-blue-500 rounded-full animate-bounce delay-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;