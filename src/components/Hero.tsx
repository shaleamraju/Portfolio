import { Button } from "@/components/ui/button";
import { Shield, Code2 } from "lucide-react";
import heroBackground from "@/assets/hero-bg.jpg";

const Hero = () => {
  const handleViewProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroBackground} 
          alt="Hero Background" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 gradient-overlay" />
        <div className="absolute inset-0 gradient-cyber opacity-50" />
      </div>

      {/* Animated grid overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(hsl(186 100% 50% / 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(186 100% 50% / 0.3) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 min-h-screen flex flex-col justify-center max-w-7xl py-20">
        <div className="space-y-8 animate-fade-in">
          {/* Badge */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-4 py-2 glass rounded-full">
              <Code2 className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Full Stack Developer</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 glass-emerald rounded-full">
              <Shield className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">Cybersecurity</span>
            </div>
          </div>

          {/* Main heading */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight">
              <span className="text-foreground">Shaleam Raju Bethi</span>
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold terminal-text">
              <span className="text-primary">Building Scalable Apps.</span>
              <br />
              <span className="text-accent">Securing the Modern Web.</span>
            </h2>
          </div>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl font-medium">
            A versatile engineer proficient in the MERN stack, automating workflows with Bash, 
            and defending systems through SOC operations.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-8 py-6 rounded-lg hover-glow glow-pulse"
              onClick={handleViewProjects}
            >
              <Code2 className="w-5 h-5 mr-2" />
              View Projects
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-accent text-accent hover:bg-accent/10 font-bold text-lg px-8 py-6 rounded-lg hover-glow-emerald"
              onClick={handleContact}
            >
              <Shield className="w-5 h-5 mr-2" />
              Contact Me
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
