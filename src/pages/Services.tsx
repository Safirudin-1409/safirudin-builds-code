import { Globe, Server, Code, Smartphone, Database, Zap } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Frontend Development",
      description: "Creating responsive, interactive user interfaces using React, Next.js, and modern CSS frameworks.",
      features: [
        "Responsive Design",
        "Modern UI/UX",
        "Performance Optimization",
        "Cross-browser Compatibility"
      ]
    },
    {
      icon: Server,
      title: "Backend Development", 
      description: "Building robust server-side applications and APIs using Node.js with scalable architecture.",
      features: [
        "RESTful APIs",
        "Authentication Systems",
        "Server Architecture",
        "Performance Optimization"
      ]
    },
    {
      icon: Database,
      title: "Database Design",
      description: "Designing and implementing efficient database solutions for both SQL and NoSQL systems.",
      features: [
        "MySQL Database Design",
        "MongoDB Integration",
        "Data Modeling",
        "Query Optimization"
      ]
    },
    {
      icon: Code,
      title: "Algorithm Solutions",
      description: "Developing efficient algorithms and data structures for complex problem-solving scenarios.",
      features: [
        "Problem Analysis", 
        "Algorithm Design",
        "Code Optimization",
        "Performance Analysis"
      ]
    },
    {
      icon: Zap,
      title: "Real-time Applications",
      description: "Building live applications with socket integration for real-time communication and updates.",
      features: [
        "Socket.io Integration",
        "Live Chat Systems",
        "Real-time Updates",
        "Event Handling"
      ]
    },
    {
      icon: Smartphone,
      title: "Project Execution",
      description: "End-to-end project management from concept to deployment with agile methodologies.",
      features: [
        "Project Planning",
        "Agile Development",
        "Quality Assurance",
        "Deployment & Maintenance"
      ]
    }
  ];

  const mainService = {
    title: "Full-Stack Development",
    description: "I design and build scalable, interactive web applications from front to back, ensuring seamless user experiences and robust backend functionality.",
    highlights: [
      "Complete web application development",
      "Modern tech stack implementation",
      "Scalable architecture design",
      "User-centered development approach",
      "Performance optimization",
      "Security best practices"
    ]
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-neutral-800 mb-6 fade-in">
              My <span className="text-gradient">Services</span>
            </h1>
            <p className="text-xl text-neutral-600 fade-in stagger-1">
              Comprehensive development solutions tailored to your needs
            </p>
          </div>
        </div>
      </section>

      {/* Main Service Highlight */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="card-gradient text-center fade-in">
              <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-glow">
                <Globe className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-neutral-800 mb-6">
                {mainService.title}
              </h2>
              <p className="text-xl text-neutral-600 leading-relaxed mb-8 max-w-3xl mx-auto">
                {mainService.description}
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
                {mainService.highlights.map((highlight, index) => (
                  <div
                    key={index}
                    className="bg-white/50 rounded-lg p-4 border border-card-border hover:border-primary/30 transition-colors duration-200"
                  >
                    <p className="text-neutral-700 font-medium">{highlight}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-neutral-800 mb-4 fade-in">
              Specialized <span className="text-gradient">Expertise</span>
            </h2>
            <p className="text-lg text-neutral-600 fade-in stagger-1">
              Individual services that combine to create comprehensive solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`card-modern group hover:border-primary/30 h-full fade-in stagger-${(index % 3) + 1}`}
              >
                <div className="w-14 h-14 bg-primary-soft rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                
                <h3 className="text-xl font-bold text-neutral-800 mb-4">
                  {service.title}
                </h3>
                
                <p className="text-neutral-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-neutral-600"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-neutral-800 mb-6 fade-in">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-lg text-neutral-600 mb-8 fade-in stagger-1">
              Let's discuss your project and how I can help bring your ideas to life with 
              modern technology and best practices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in stagger-2">
              <a 
                href="/contact"
                className="btn-hero inline-flex items-center justify-center px-8 py-4 text-decoration-none"
              >
                Get Started Today
              </a>
              <a 
                href="/portfolio"
                className="btn-hero-outline inline-flex items-center justify-center px-8 py-4 text-decoration-none"
              >
                View My Work
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;