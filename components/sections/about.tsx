'use client'

import { Code, Brain, Database, Smartphone } from 'lucide-react'

const skills = [
  { name: 'Software Engineering', icon: Code, level: 90 },
  { name: 'AI/ML Technologies', icon: Brain, level: 85 },
  { name: 'Web Development', icon: Database, level: 88 },
  { name: 'Cloud Platforms', icon: Database, level: 82 },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Computer Science student passionate about Software Engineering, AI/ML, and building innovative web applications
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-6">
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-gray-300 leading-relaxed">
                I'm a passionate Computer Science undergraduate at PCET NMIET, Pune, with hands-on experience in Software Engineering 
                and AI/ML technologies. Currently working as an AI & Cloud Technologies Intern at Edunet Foundation 
                in collaboration with AICTE & IBM SkillsBuild.
              </p>
              <p className="text-gray-300 leading-relaxed">
                With expertise in JavaScript, TypeScript, Python, React.js, and cloud platforms like AWS, Azure, and GCP, 
                I've developed web applications ranging from AI-powered platforms to intelligent document analysis systems. 
                I'm passionate about building scalable web applications and exploring the intersection of AI/ML with modern development.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">3+</div>
                <div className="text-gray-400">Major Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">8.3</div>
                <div className="text-gray-400">CGPA (TE)</div>
              </div>
            </div>
          </div>

          {/* Right side - Skills */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white mb-6">Skills & Expertise</h3>
            {skills.map((skill, index) => (
              <div key={index} className="space-y-2 group cursor-pointer">
                <div className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-800 transition-colors duration-200">
                  <div className="flex items-center space-x-3">
                    <skill.icon className="w-5 h-5 text-blue-400 group-hover:text-blue-300 transition-colors duration-200" />
                    <span className="text-gray-300 font-medium group-hover:text-white transition-colors duration-200">{skill.name}</span>
                  </div>
                  <span className="text-gray-400 group-hover:text-gray-300 transition-colors duration-200">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2 group-hover:bg-gray-600 transition-colors duration-200">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out group-hover:from-blue-400 group-hover:to-purple-500"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
