import { ArrowRight, Code2, Database, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  return <div className="section-hero min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full float-animation" />
      <div className="absolute top-40 right-20 w-32 h-32 bg-white/5 rounded-full float-animation" style={{
      animationDelay: '2s'
    }} />
      <div className="absolute bottom-20 left-20 w-16 h-16 bg-white/10 rounded-full float-animation" style={{
      animationDelay: '4s'
    }} />

      <div className="container mx-auto px-6 text-center text-white relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Avatar */}
          <div className="w-40 h-40 mx-auto mb-8 rounded-full bg-gradient-to-br from-primary via-purple-500 to-pink-500 border-4 border-white/30 flex items-center justify-center shadow-glow fade-in">
            <div className="text-white font-bold text-4xl">
              SK
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 fade-in stagger-1">
            Safirudin K M
          </h1>
          
          <p className="text-xl md:text-2xl mb-4 font-light fade-in stagger-2">Full-Stack Developer | Problem Solver </p>
          
          <p className="text-lg md:text-xl mb-12 text-blue-100 max-w-2xl mx-auto fade-in stagger-3">
            Building impactful applications through modern technology and innovative solutions
          </p>

          {/* Tech Stack Icons */}
          <div className="flex justify-center space-x-8 mb-12 fade-in stagger-4">
            <div className="flex flex-col items-center group hover:scale-110 transition-transform duration-300">
              <Code2 size={32} className="mb-2 group-hover:text-blue-200" />
              <span className="text-sm">Frontend</span>
            </div>
            <div className="flex flex-col items-center group hover:scale-110 transition-transform duration-300">
              <Database size={32} className="mb-2 group-hover:text-blue-200" />
              <span className="text-sm">Backend</span>
            </div>
            <div className="flex flex-col items-center group hover:scale-110 transition-transform duration-300">
              <Cpu size={32} className="mb-2 group-hover:text-blue-200" />
              <span className="text-sm">Algorithms</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center fade-in stagger-5">
            <Button onClick={() => navigate("/portfolio")} className="btn-hero group" size="lg">
              View My Work
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button onClick={() => navigate("/contact")} className="btn-hero-outline group" size="lg">
              Contact Me
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-pulse" />
        <div className="absolute top-3/4 left-1/3 w-1 h-1 bg-white rounded-full animate-pulse" style={{
        animationDelay: '1s'
      }} />
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-white rounded-full animate-pulse" style={{
        animationDelay: '2s'
      }} />
        <div className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-white rounded-full animate-pulse" style={{
        animationDelay: '3s'
      }} />
      </div>
    </div>;
};
export default Home;