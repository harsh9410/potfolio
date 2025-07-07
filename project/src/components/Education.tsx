import React from 'react';
import { GraduationCap, Calendar, Trophy } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const Education = () => {
  const { ref, inView } = useInView({ threshold: 0.3 });

  const education = [
    {
      degree: 'Bachelor of Technology',
      field: 'Computer Science & Engineering',
      institution: 'Global Institute of Technology, Jaipur',
      year: '2022-2026',
      percentage: '8.5 CGPA',
      status: 'Pursuing'
    },
    {
      degree: 'Senior Secondary (12th)',
      field: 'Science (PCM)',
      institution: 'Kendriya Vidyalaya',
      year: '2021-2022',
      percentage: '87.2%',
      status: 'Completed'
    },
    {
      degree: 'Secondary (10th)',
      field: 'All Subjects',
      institution: 'Kendriya Vidyalaya',
      year: '2019-2020',
      percentage: '91.8%',
      status: 'Completed'
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-6">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              Education
            </span>
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {education.map((item, index) => (
                <div
                  key={index}
                  className={`relative group transition-all duration-500 ${
                    inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  {/* Timeline Line */}
                  {index !== education.length - 1 && (
                    <div className="absolute left-6 top-16 w-0.5 h-16 bg-gradient-to-b from-purple-500 to-pink-500 opacity-50"></div>
                  )}
                  
                  <div className="flex items-start space-x-6">
                    {/* Timeline Dot */}
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <GraduationCap size={20} className="text-white" />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 bg-gray-800/50 rounded-2xl p-6 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:scale-105">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-white mb-2">{item.degree}</h3>
                          <p className="text-lg text-purple-400">{item.field}</p>
                        </div>
                        <div className="flex items-center space-x-4 mt-2 md:mt-0">
                          <div className="flex items-center text-gray-300">
                            <Calendar size={16} className="mr-2" />
                            <span>{item.year}</span>
                          </div>
                          <div className="flex items-center text-green-400">
                            <Trophy size={16} className="mr-2" />
                            <span className="font-semibold">{item.percentage}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <p className="text-gray-300">{item.institution}</p>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          item.status === 'Pursuing' 
                            ? 'bg-blue-500/20 text-blue-400' 
                            : 'bg-green-500/20 text-green-400'
                        }`}>
                          {item.status}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;