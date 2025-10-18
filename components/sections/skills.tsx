'use client'

import { 
  Code, 
  Database, 
  Cloud,
  Brain,
  Server,
  Globe
} from 'lucide-react'

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: ["JavaScript", "TypeScript", "Python", "SQL"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Frontend Development", 
    icon: Globe,
    skills: ["React.js", "Next.js", "HTML5", "CSS3", "Tailwind CSS"],
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "Backend Development",
    icon: Server,
    skills: ["Node.js", "Express.js", "FastAPI", "Python", "OpenCV", "MediaPipe"],
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "AI/ML Technologies",
    icon: Brain,
    skills: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenCV", "MediaPipe", "FAISS"],
    color: "from-orange-500 to-red-500"
  },
  {
    title: "Cloud Platforms",
    icon: Cloud,
    skills: ["AWS (Lex, EC2, S3)", "Microsoft Azure", "Google Cloud"],
    color: "from-pink-500 to-rose-500"
  },
  {
    title: "Databases & Tools",
    icon: Database,
    skills: ["MongoDB", "MySQL", "Git", "GitHub", "VS Code"],
    color: "from-yellow-500 to-orange-500"
  }
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Skills & Technologies
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A comprehensive toolkit for Software Engineering, Web Development, and AI/ML technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="group relative bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} mr-4`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="flex items-center justify-between py-2 px-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-200"
                  >
                    <span className="text-gray-300 text-sm font-medium">
                      {skill}
                    </span>
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></div>
                  </div>
                ))}
              </div>
              
              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-8 bg-gray-900 rounded-2xl p-8 border border-gray-800">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">15+</div>
              <div className="text-gray-400">Technologies</div>
            </div>
            <div className="w-px h-12 bg-gray-700"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">3+</div>
              <div className="text-gray-400">Major Projects</div>
            </div>
            <div className="w-px h-12 bg-gray-700"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">Always</div>
              <div className="text-gray-400">Learning</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


