import React from 'react';
import { useInView } from '../hooks/useInView';

const About = () => {
  const { ref, inView } = useInView({ threshold: 0.3 });

  return (
    <section id="about" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-6">
        <div
          ref={ref}
          className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          
          <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
            <p>
              Hello! I'm <span className="text-purple-400 font-semibold">Harsh Gupta</span>, 
              a passionate Computer Science student from the 
              <span className="text-pink-400 font-semibold"> Global Institute of Technology, Jaipur</span>.
            </p>
            
            <p>
              Outside of the classroom, I'm actively involved in hackathons and bootcamps, 
              constantly experimenting with new technologies and pushing the boundaries of what's possible. 
              I thrive on problem-solving and embracing new challenges in the ever-evolving tech landscape.
            </p>
            
            <p>
              My journey in technology is driven by curiosity and a desire to create meaningful impact. 
              I love exploring the intersection of DevOps, software development, and emerging technologies, 
              always seeking innovative solutions to complex problems.
            </p>
            
            <p className="text-xl font-semibold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              My goal is to pursue a career in software engineering and make impactful contributions 
              to the tech industry while continuously learning and growing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;