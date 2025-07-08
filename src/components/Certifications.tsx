import React from 'react';
import { Award, Calendar, ExternalLink } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const Certifications = () => {
  const { ref, inView } = useInView({ threshold: 0.3 });

  const certifications = [
    {
      title: 'AI Chatbot Bootcamp',
      organization: 'YHills Tech',
      date: 'January 2025',
      description: 'Comprehensive training on building intelligent chatbots using modern AI frameworks and NLP techniques.',
      skills: ['Natural Language Processing', 'Machine Learning', 'Python', 'TensorFlow'],
      color: 'from-blue-500 to-cyan-500',
      certificateUrl: 'https://example.com/certificate-ai-chatbot'
    },
    {
      title: 'Generative AI Workshop',
      organization: 'Learn and Built',
      date: 'December 2024',
      description: 'Hands-on workshop covering generative AI models, prompt engineering, and practical applications.',
      skills: ['Generative AI', 'Prompt Engineering', 'LLMs', 'AI Ethics'],
      color: 'from-purple-500 to-pink-500',
      certificateUrl: 'https://example.com/certificate-generative-ai'
    },
    {
      title: 'Programming in Java',
      organization: 'NPTEL',
      date: 'January - April 2025',
      description: 'Comprehensive Java programming course covering core concepts, OOP, and advanced Java features.',
      skills: ['Core Java', 'OOP', 'Collections', 'Multithreading', 'Exception Handling'],
      color: 'from-orange-500 to-red-500',
      certificateUrl: 'https://example.com/certificate-java'
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-6">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>

          <div className="max-w-4xl mx-auto space-y-8">
            {certifications.map((cert, index) => (
              <div
                key={cert.title}
                className={`group bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 ${
                  inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-4">
                      <div className={`p-3 rounded-full bg-gradient-to-r ${cert.color} mr-4`}>
                        <Award size={24} className="text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white">{cert.title}</h3>
                        <p className="text-lg text-purple-400">{cert.organization}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed">{cert.description}</p>
                    
                    {/* Skills */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {cert.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full text-sm text-purple-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-end space-y-4 mt-4 md:mt-0">
                    <div className="flex items-center text-gray-300">
                      <Calendar size={16} className="mr-2" />
                      <span>{cert.date}</span>
                    </div>
                    <button 
                      onClick={() => window.open(cert.certificateUrl, '_blank')}
                      className="flex items-center px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-lg transition-all duration-200 hover:scale-105"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      View Certificate
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;