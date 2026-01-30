import { Briefcase, Code2, Shield, Smartphone } from "lucide-react";

interface ExperienceItem {
  title: string;
  company: string;
  icon: React.ReactNode;
  description: string;
  color: "cyan" | "emerald" | "slate";
}

const experiences: ExperienceItem[] = [
  {
    title: "Web Fullstack Intern",
    company: "Development Team",
    icon: <Code2 className="w-6 h-6" />,
    description: "Built responsive MERN applications with modern UI/UX practices. Optimized MongoDB queries for improved performance and implemented RESTful API endpoints.",
    color: "cyan"
  },
  {
    title: "Security Intern",
    company: "SOC Operations",
    icon: <Shield className="w-6 h-6" />,
    description: "Conducted penetration testing on web applications and analyzed system logs for security breaches. Implemented automated threat detection workflows.",
    color: "emerald"
  },
  {
    title: "Android Intern",
    company: "Mobile Development",
    icon: <Smartphone className="w-6 h-6" />,
    description: "Developed Android applications using Java/XML with a focus on user experience. Achieved 20% improvement in app stability through code optimization.",
    color: "slate"
  }
];

const Experience = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          <span className="text-primary">&gt;</span> Experience Timeline
        </h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 timeline-line transform md:-translate-x-1/2" />
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-primary transform -translate-x-1/2 border-4 border-background glow-pulse" />
                
                {/* Content */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <div className={`glass p-6 rounded-xl hover-scale ${
                    exp.color === "cyan" ? "hover-glow" : exp.color === "emerald" ? "hover-glow-emerald" : "hover-glow"
                  }`}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`p-3 rounded-lg ${
                        exp.color === "cyan" 
                          ? "bg-primary/20 text-primary" 
                          : exp.color === "emerald" 
                            ? "bg-accent/20 text-accent" 
                            : "bg-muted text-muted-foreground"
                      }`}>
                        {exp.icon}
                      </div>
                      <div>
                        <h3 className={`text-xl font-bold ${
                          exp.color === "cyan" 
                            ? "text-primary" 
                            : exp.color === "emerald" 
                              ? "text-accent" 
                              : "text-foreground"
                        }`}>
                          {exp.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">{exp.company}</p>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
                
                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
