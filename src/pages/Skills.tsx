import { useState, useEffect } from "react";
import { Code, Database, Globe, Cpu, Settings, Lightbulb } from "lucide-react";

const Skills = () => {
  const [animatedBars, setAnimatedBars] = useState(false);

  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      skills: [
        { name: "Java", level: 90 },
        { name: "Python", level: 85 },
        { name: "JavaScript", level: 88 }
      ]
    },
    {
      icon: Globe,
      title: "Frontend Development",
      skills: [
        { name: "React", level: 85 },
        { name: "Next.js", level: 80 }
      ]
    },
    {
      icon: Database,
      title: "Backend & Database",
      skills: [
        { name: "Node.js", level: 82 },
        { name: "REST API", level: 88 },
        { name: "MySQL", level: 85 },
        { name: "MongoDB", level: 80 }
      ]
    },
    {
      icon: Cpu,
      title: "Core Concepts",
      skills: [
        { name: "Data Structures", level: 90 },
        { name: "Algorithms", level: 88 },
        { name: "Problem Solving", level: 92 }
      ]
    },
    {
      icon: Settings,
      title: "Other Technologies",
      skills: [
        { name: "Socket Integration", level: 85 },
        { name: "Project Execution", level: 88 }
      ]
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedBars(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-neutral-800 mb-6 fade-in">
              My <span className="text-gradient">Skills</span>
            </h1>
            <p className="text-xl text-neutral-600 fade-in stagger-1">
              Technical expertise across the full development stack
            </p>
          </div>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className={`card-modern fade-in stagger-${categoryIndex % 3 + 1}`}
              >
                {/* Category Header */}
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-12 h-12 bg-primary-soft rounded-lg flex items-center justify-center">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-800">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-neutral-700">
                          {skill.name}
                        </span>
                        <span className="text-sm text-neutral-500 font-medium">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="skill-bar">
                        <div
                          className="skill-progress"
                          style={{
                            width: animatedBars ? `${skill.level}%` : "0%"
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="card-gradient text-center fade-in">
              <div className="w-16 h-16 bg-primary-soft rounded-full flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-neutral-800 mb-6">
                My Development Philosophy
              </h3>
              <p className="text-lg text-neutral-600 leading-relaxed mb-6">
                I believe in writing clean, efficient code that not only solves problems but also 
                scales gracefully. My approach combines strong algorithmic thinking with modern 
                development practices to create robust, maintainable solutions.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gradient mb-2">Clean Code</div>
                  <p className="text-neutral-600">Readable & Maintainable</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gradient mb-2">Efficiency</div>
                  <p className="text-neutral-600">Optimized Performance</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gradient mb-2">Innovation</div>
                  <p className="text-neutral-600">Modern Solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;