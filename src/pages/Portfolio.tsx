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
      gradient: "from-blue-500 to-purple-600"
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
      category: "AI/ML",
      icon: Brain,
      gradient: "from-green-500 to-teal-600"
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
                      <Button className="btn-hero" size="lg">
                        <ExternalLink className="w-5 h-5 mr-2" />
                        Live Demo
                      </Button>
                      <Button className="btn-hero-outline" size="lg">
                        <Github className="w-5 h-5 mr-2" />
                        Source Code
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Projects */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-neutral-800 mb-4 fade-in">
              Future <span className="text-gradient">Concepts</span>
            </h2>
            <p className="text-lg text-neutral-600 fade-in stagger-1">
              Exciting projects in development and planning stages
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {futureConcepts.map((concept, index) => (
              <div
                key={index}
                className={`card-modern group border-2 border-dashed border-neutral-300 hover:border-primary/50 fade-in stagger-${index + 1}`}
              >
                <div className="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary-soft transition-colors duration-300">
                  <concept.icon className="w-6 h-6 text-neutral-600 group-hover:text-primary" />
                </div>
                
                <h3 className="text-xl font-bold text-neutral-800 mb-3">
                  {concept.title}
                </h3>
                
                <p className="text-neutral-600 mb-4">
                  {concept.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {concept.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-neutral-100 text-neutral-600 rounded-md text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="card-gradient fade-in">
              <h2 className="text-4xl font-bold text-neutral-800 mb-6">
                Interested in Working Together?
              </h2>
              <p className="text-lg text-neutral-600 mb-8">
                I'm always excited to take on new challenges and collaborate on innovative projects. 
                Let's discuss how we can bring your ideas to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="btn-hero" size="lg">
                  Start a Project
                </Button>
                <Button className="btn-hero-outline" size="lg">
                  View More Work
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;