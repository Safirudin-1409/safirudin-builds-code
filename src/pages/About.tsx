import { GraduationCap, Users, Trophy, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  const handleDownloadResume = () => {
    // In a real app, this would download the actual resume
    const link = document.createElement('a');
    link.href = '/safirudin-resume.pdf';
    link.download = 'Safirudin_KM_Resume.pdf';
    link.click();
  };

  const highlights = [
    {
      icon: GraduationCap,
      title: "Education Excellence",
      description: "Pursuing B.E. in Computer Science from RMK Engineering College"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Strong teamwork and leadership abilities in project environments"
    },
    {
      icon: Trophy,
      title: "Problem Solving",
      description: "Passionate about DSA and creating efficient algorithmic solutions"
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-neutral-800 mb-6 fade-in">
              About <span className="text-gradient">Me</span>
            </h1>
            <p className="text-xl text-neutral-600 fade-in stagger-1">
              Passionate developer building the future one line of code at a time
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Bio Section */}
            <div className="space-y-8">
              <div className="card-modern fade-in">
                <h2 className="text-3xl font-bold text-neutral-800 mb-6">My Journey</h2>
                <p className="text-neutral-600 text-lg leading-relaxed mb-6">
                  I am <strong>Safirudin K M</strong>, a dedicated and hardworking Computer Science and 
                  Engineering student with a strong interest in Data Structures & Algorithms and 
                  Full-Stack Development.
                </p>
                <p className="text-neutral-600 text-lg leading-relaxed mb-6">
                  I enjoy developing applications that provide practical solutions to real-world 
                  challenges. My passion lies in creating efficient, scalable systems that make 
                  a meaningful impact on users' lives.
                </p>
                <p className="text-neutral-600 text-lg leading-relaxed">
                  My long-term goal is to become a versatile software engineer capable of building 
                  impactful applications, while continuously improving my technical expertise and 
                  leadership abilities.
                </p>
              </div>

              <div className="card-gradient fade-in stagger-1">
                <h3 className="text-2xl font-bold text-neutral-800 mb-4">Education</h3>
                <div className="space-y-2">
                  <p className="font-semibold text-lg text-neutral-700">
                    B.E. Computer Science and Engineering
                  </p>
                  <p className="text-neutral-600">RMK Engineering College</p>
                  <p className="text-neutral-500">Expected Graduation: 2026</p>
                </div>
              </div>

              <Button
                onClick={handleDownloadResume}
                className="btn-hero w-full sm:w-auto fade-in stagger-2"
                size="lg"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </Button>
            </div>

            {/* Highlights Grid */}
            <div className="space-y-6">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className={`card-modern group hover:border-primary/30 fade-in stagger-${index + 1}`}
                >
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-primary-soft rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <highlight.icon className="w-8 h-8 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-neutral-800 mb-3">
                        {highlight.title}
                      </h4>
                      <p className="text-neutral-600 leading-relaxed">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="fade-in">
              <div className="text-4xl font-bold text-gradient mb-2">2026</div>
              <p className="text-neutral-600">Expected Graduation</p>
            </div>
            <div className="fade-in stagger-1">
              <div className="text-4xl font-bold text-gradient mb-2">Full-Stack</div>
              <p className="text-neutral-600">Development Focus</p>
            </div>
            <div className="fade-in stagger-2">
              <div className="text-4xl font-bold text-gradient mb-2">DSA</div>
              <p className="text-neutral-600">Problem Solving</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;