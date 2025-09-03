import { ExternalLink, Github, MessageCircle, Brain, Code, Database } from "lucide-react";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Real-Time Chat Application",
      description: "A modern chat application built with React and real-time socket integration, featuring instant messaging, user authentication, and responsive design.",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB", "REST API"],
      features: [
        "Real-time messaging with Socket.io",
        "User authentication and authorization", 
        "Responsive design for all devices",
        "Message history and persistence",
        "Online status indicators"
      ],
      category: "FullStack",
      icon: MessageCircle,
      gradient: "from-blue-500 to-purple-600",
      livelink: "https://chat-app-client-jwik.onrender.com",
      githublink: "https://github.com/Safirudin-1409/Chat-app"
    },
    {
      id: 2,
      title: "AI-Powered Career Coach",
      description: "An intelligent career guidance platform that uses AI to help users with career planning, job preparation, and skill development recommendations.",
      technologies: ["Next.js", "Node.js", "PostgreSQL", "REST API"],
      features: [
        "AI-driven career recommendations",
        "Skill gap analysis and suggestions",
        "Interactive career planning tools",
        "Job market insights and trends",
        "Personalized learning paths"
      ],
      category: "FullStack",
      icon: Brain,
      gradient: "from-green-500 to-teal-600",
      livelink : "https://elevate-ai-puce.vercel.app/",
      githublink: "https://github.com/Safirudin-1409/ElevateAI"
    }
  ];

  const futureConcepts = [
    {
      title: "E-Commerce Platform",
      description: "Modern e-commerce solution with advanced features",
      technologies: ["React", "Node.js", "Stripe", "MongoDB"],
      icon: Code
    },
    {
      title: "Data Analytics Dashboard", 
      description: "Interactive dashboard for data visualization and insights",
      technologies: ["Next.js", "Python", "D3.js", "PostgreSQL"],
      icon: Database
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-neutral-800 mb-6 fade-in">
              My <span className="text-gradient">Portfolio</span>
            </h1>
            <p className="text-xl text-neutral-600 fade-in stagger-1">
              Showcasing projects that demonstrate technical expertise and creative problem-solving
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-neutral-800 text-center mb-16 fade-in">
            Featured <span className="text-gradient">Projects</span>
          </h2>

          <div className="space-y-16">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                {/* Project Visual */}
                <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""} fade-in`}>
                  <div className={`card-modern h-80 bg-gradient-to-br ${project.gradient} relative overflow-hidden group`}>
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="relative z-10 h-full flex items-center justify-center text-white">
                      <div className="text-center">
                        <project.icon size={80} className="mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                        <h3 className="text-2xl font-bold">{project.title}</h3>
                        <p className="text-lg opacity-90 mt-2">{project.category}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className={`${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""} fade-in stagger-1`}>
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center space-x-3 mb-4">
                        <span className="px-3 py-1 bg-primary-soft text-primary rounded-full text-sm font-semibold">
                          {project.category}
                        </span>
                      </div>
                      <h3 className="text-3xl font-bold text-neutral-800 mb-4">
                        {project.title}
                      </h3>
                      <p className="text-lg text-neutral-600 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Key Features */}
                    <div>
                      <h4 className="text-xl font-semibold text-neutral-800 mb-3">Key Features</h4>
                      <ul className="space-y-2">
                        {project.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                            <span className="text-neutral-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-xl font-semibold text-neutral-800 mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-4 py-2 bg-neutral-100 text-neutral-700 rounded-lg font-medium hover:bg-neutral-200 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-4">
                      <a href={project.livelink} target="_blank" rel="noopener noreferrer">
                        <Button className="btn-hero" size="lg">
                          <ExternalLink className="w-5 h-5 mr-2" />
                          Live Demo
                        </Button>
                      </a>
                      <a href={project.githublink} target="_blank" rel="noopener noreferrer">
                        <Button className="btn-hero-outline" size="lg">
                          <Github className="w-5 h-5 mr-2" />
                          Source Code
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;