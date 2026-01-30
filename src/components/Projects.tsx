import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Hotel, Languages, FileText, ExternalLink } from "lucide-react";

interface Project {
  title: string;
  description: string;
  icon: React.ReactNode;
  technologies: string[];
  highlight: string;
  color: "cyan" | "emerald";
}

const projects: Project[] = [
  {
    title: "Hotel Booking System",
    description: "A full-featured hotel room booking platform with secure authentication and real-time availability checking.",
    icon: <Hotel className="w-8 h-8" />,
    technologies: ["MongoDB", "Express", "React", "Node.js", "JWT"],
    highlight: "MERN Stack with JWT Authentication",
    color: "cyan"
  },
  {
    title: "C-to-Telugu Translator",
    description: "A unique NLP tool that translates C programming declarations into Telugu, making programming accessible to regional language speakers.",
    icon: <Languages className="w-8 h-8" />,
    technologies: ["Python", "Flask", "NLP", "HTML/CSS"],
    highlight: "Natural Language Processing",
    color: "emerald"
  },
  {
    title: "Post Blog CMS",
    description: "A content management system supporting full CRUD operations with a clean, intuitive interface for bloggers.",
    icon: <FileText className="w-8 h-8" />,
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    highlight: "Full CRUD Operations",
    color: "cyan"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          <span className="text-primary">&gt;</span> Project Gallery
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className={`${project.color === "cyan" ? "glass hover-glow" : "glass-emerald hover-glow-emerald"} border-0 hover-scale cursor-pointer group overflow-hidden`}
            >
              <div className={`relative h-48 flex items-center justify-center ${
                project.color === "cyan" 
                  ? "bg-gradient-to-br from-primary/20 to-primary/5" 
                  : "bg-gradient-to-br from-accent/20 to-accent/5"
              }`}>
                <div className={`p-6 rounded-2xl ${
                  project.color === "cyan" ? "bg-primary/20 text-primary" : "bg-accent/20 text-accent"
                } group-hover:scale-110 transition-transform duration-300`}>
                  {project.icon}
                </div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className={`flex items-center gap-2 ${project.color === "cyan" ? "text-primary" : "text-accent"}`}>
                    <ExternalLink className="w-5 h-5" />
                    <span className="font-medium">View Project</span>
                  </div>
                </div>
              </div>
              
              <CardHeader>
                <div className={`text-xs font-bold uppercase tracking-wider mb-2 ${
                  project.color === "cyan" ? "text-primary" : "text-accent"
                }`}>
                  {project.highlight}
                </div>
                <CardTitle className="text-xl text-foreground">{project.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        project.color === "cyan" 
                          ? "bg-primary/20 text-primary" 
                          : "bg-accent/20 text-accent"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
