import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code } from "lucide-react";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  features: string[];
}

const projects: Project[] = [
  {
    title: "C Declaration Translator",
    description: "A web application that translates C language declarations into Telugu, making programming concepts more accessible to Telugu-speaking students.",
    technologies: ["Python", "Flask", "HTML", "CSS", "JavaScript"],
    features: [
      "Built using Python Flask framework",
      "Parses complex C declarations accurately",
      "Translates technical terms into Telugu",
      "User-friendly interface for easy input",
      "Real-time translation output"
    ]
  },
  {
    title: "Hotel Room Booking UI",
    description: "A modern, responsive hotel room booking interface built with Vite and React, featuring an intuitive booking form and smooth user experience.",
    technologies: ["React", "Vite", "JavaScript", "CSS"],
    features: [
      "Built using Vite + React for fast performance",
      "Interactive booking form with modal",
      "Modern and responsive UI design",
      "Real-time form validation",
      "Smooth animations and transitions"
    ]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Projects</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="bg-card border-border hover-scale hover-glow cursor-pointer group overflow-hidden"
            >
              <div className="relative h-48 bg-gradient-to-br from-primary/20 to-secondary flex items-center justify-center">
                <Code className="w-16 h-16 text-primary" />
              </div>
              
              <CardHeader>
                <CardTitle className="text-2xl">{project.title}</CardTitle>
                <CardDescription className="text-base">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 text-sm text-muted-foreground">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-primary/20 text-primary rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2 text-sm text-muted-foreground">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
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