import React from 'react';
import { Code, Cloud, Database, Coffee, Users, Lightbulb } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const Skills = () => {
  const { ref, inView } = useInView({ threshold: 0.2 });

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Code,
      color: 'from-blue-500 to-cyan-500',
      skills: ['React', 'HTML5', 'CSS3', 'Tailwind CSS', 'JavaScript ']
    },
    {
      title: 'DevOps & Cloud',
      icon: Cloud,
      color: 'from-green-500 to-emerald-500',
      skills: ['Docker', 'Kubernetes', 'AWS' , 'Git', 'Linux']
    },
    {
      title: 'Data & Backend',
      icon: Database,
      color: 'from-purple-500 to-violet-500',
      skills: ['Python', 'SQL' , 'Data Analysis','Flask']
    },
    {
      title: 'Java Development',
      icon: Coffee,
      color: 'from-orange-500 to-red-500',
      skills: ['Core Java', 'Spring Framework', 'Design Patterns']
    },
    {
      title: 'Soft Skills',
      icon: Users,
      color: 'from-pink-500 to-rose-500',
      skills: ['Team Leadership', 'Communication', 'Problem Solving', 'Project Management', 'Mentoring']
    },
    {
      title: 'Innovation',
      icon: Lightbulb,
      color: 'from-yellow-500 to-amber-500',
      skills: ['IoT Development', 'Mobile Apps', 'Hackathon Participation', 'Rapid Prototyping', 'Tech Research']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className={`group p-6 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-full bg-gradient-to-r ${category.color} mr-4`}>
                    <category.icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                </div>
                
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skill}
                      className={`flex items-center text-gray-300 transition-all duration-300 ${
                        inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                      }`}
                      style={{ transitionDelay: `${(index * 100) + (skillIndex * 50)}ms` }}
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full mr-3"></div>
                      <span className="hover:text-purple-400 transition-colors duration-200">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;