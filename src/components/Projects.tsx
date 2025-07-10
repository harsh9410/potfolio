import React from 'react';
import { ExternalLink, Github, Zap, MapPin, Bus, Trophy } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const Projects = () => {
  const { ref, inView } = useInView({ threshold: 0.2 });

  const projects = [
    {
      title: 'Smart Waste Management System',
      description: 'IoT-based solution for optimizing waste collection routes and monitoring bin levels in real-time using sensors and machine learning algorithms.',
      tech: ['IoT', 'Python', 'Arduino', 'Machine Learning', 'React', 'TypeScript'],
      icon: Zap,
      color: 'from-green-500 to-emerald-500',
      highlights: ['Real-time monitoring', 'Route optimization', 'Cost reduction by 40%'],
      codeUrl: 'https://github.com/harsh9410/Waste-to-energy',
      demoUrl: 'https://harsh1000.netlify.app/'
    },
    {
      title: 'Geo-Fencing Attendance Tracker',
      description: 'GPS-based attendance system that automatically marks attendance when users enter designated geographical boundaries, perfect for remote work management.',
      tech: ['React Native', 'GPS API', 'Firebase', 'Node.js', 'MongoDB', 'TypeScript'],
      icon: MapPin,
      color: 'from-blue-500 to-cyan-500',
      highlights: ['Automatic tracking', 'Location accuracy', 'Admin dashboard'],
      codeUrl: 'https://github.com/harsh9410/Attendance-tracking-system',
      demoUrl: 'https://harsh101.netlify.app/'
    },
    {
      title: 'Real-Time Voice Auctions',
      description: 'A web application enabling users to participate in live auctions using real-time voice communication, powered by WebRTC and socket.io for seamless bidding experiences.',
      tech: ['React', 'Node.js', 'WebRTC', 'Socket.io', 'Express', 'TypeScript'],
      icon: Zap,
      color: 'from-indigo-500 to-blue-500',
      highlights: ['Live voice bidding', 'Real-time updates', 'Secure authentication'],
      codeUrl: 'https://github.com/harsh9410/Voice-auction?tab=Apache-2.0-1-ov-file',
      demoUrl: 'https://harsh1002.netlify.app/'
    },
    {
      title: 'SSH Menu',
      description: 'A web-based SSH client that allows users to execute Linux and Docker commands on remote servers through an intuitive menu-driven interface. Supports real-time command execution, output streaming, and session management.',
      tech: ['SSH2', 'Docker', 'Streamlit', 'Paramiko', 'Subprocess', 'Linux'],
      icon: Bus,
      color: 'from-teal-500 to-blue-400',
      highlights: ['Run all Linux commands', 'Docker command support', 'Real-time output', 'Session management'],
      codeUrl: 'https://github.com/harsh9410/-SSH-Menu-App',
      demoUrl: 'https://github.com/harsh9410/-SSH-Menu-App'
    },
    {
      title: 'Automation Web App',
      description: 'A comprehensive automation platform that performs repetitive web tasks such as sending WhatsApp messages, SMS, making calls, and more, all without human intervention. Integrates with multiple APIs and services for seamless automation workflows.',
      tech: ['Python', 'Selenium', 'Twilio API', 'Streamlit', 'pyautogui', 'pywhatkit', 'gTTS', 'smtplib'],
      icon: Zap,
      color: 'from-purple-500 to-blue-500',
      highlights: [
        'Automated WhatsApp messaging',
        'Bulk SMS and call automation',
        'No human intervention required',
        'Customizable workflow engine'
      ],
      codeUrl: 'https://github.com/harsh9410/Automation-Web-App',
      demoUrl: 'https://github.com/harsh9410/Automation-Web-App'
    }
  ];

  const achievements = [
    {
      title: 'Top 20 at GDG Hackathon',
      organizer: 'LNMIIT Jaipur',
      description: 'Secured position in top 20 among 200+ participants',
      icon: Trophy,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Active Hackathon Participant',
      organizer: 'Various Organizations',
      description: 'Participates in 4-5 hackathons every year',
      icon: Zap,
      color: 'from-red-500 to-pink-500'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              Projects & Achievements
            </span>
          </h2>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10 ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-full bg-gradient-to-r ${project.color} mr-4`}>
                    <project.icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                </div>
                
                <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full text-sm text-purple-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Highlights */}
                <div className="space-y-2 mb-4">
                  {project.highlights.map((highlight) => (
                    <div key={highlight} className="flex items-center text-sm text-gray-400">
                      <div className="w-1.5 h-1.5 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full mr-2"></div>
                      {highlight}
                    </div>
                  ))}
                </div>
                
                {/* Action Buttons */}
                <div className="flex space-x-3 mt-6">
                  {project.demoUrl ? (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-lg transition-all duration-200 hover:scale-105"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Demo
                    </a>
                  ) : (
                    <button className="flex items-center px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-lg transition-all duration-200 hover:scale-105" disabled>
                      <ExternalLink size={16} className="mr-2" />
                      Demo
                    </button>
                  )}
                  {project.codeUrl ? (
                    <a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors duration-200"
                    >
                      <Github size={16} className="mr-2" />
                      Code
                    </a>
                  ) : (
                    <button className="flex items-center px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors duration-200" disabled>
                      <Github size={16} className="mr-2" />
                      Code
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Achievements */}
          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={achievement.title}
                className={`group bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-yellow-500/50 transition-all duration-300 hover:scale-105 ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${(projects.length + index) * 150}ms` }}
              >
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-full bg-gradient-to-r ${achievement.color} mr-4`}>
                    <achievement.icon size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{achievement.title}</h3>
                    <p className="text-sm text-gray-400">{achievement.organizer}</p>
                  </div>
                </div>
                <p className="text-gray-300">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;