import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-bg.jpg";

const Hero = () => {
  const handleViewProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleViewResume = () => {
    // Update this with actual resume link
    window.open('#', '_blank');
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroBackground} 
          alt="Hero Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center max-w-7xl">
        <div className="space-y-6 animate-fade-in">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight">
            SHALEAM RAJU BETHI
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl font-medium">
            Full-Stack Developer | C, C++, Java, Python | React | Node | SQL | MongoDB
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-8 py-6 rounded hover-glow"
              onClick={handleViewProjects}
            >
              See Projects
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-foreground/50 text-foreground hover:bg-foreground/10 font-bold text-lg px-8 py-6 rounded"
              onClick={handleViewResume}
            >
              Resume
            </Button>
          </div>
        </div>
      </div>

      {/* Fade to content indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <div className="w-6 h-10 border-2 border-foreground/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;