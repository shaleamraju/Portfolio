import { Award, Trophy } from "lucide-react";

interface Certification {
  title: string;
  organization: string;
  type: "certification" | "achievement";
}

const certifications: Certification[] = [
  {
    title: "Embedded Systems Internship",
    organization: "Microchip AICTE",
    type: "certification"
  },
  {
    title: "Android Development Internship",
    organization: "Google for Developers (AICTE)",
    type: "certification"
  },
  {
    title: "Web Design Participant",
    organization: "RIPPLE2K24",
    type: "achievement"
  }
];

const Certifications = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Certifications & Achievements</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-lg border border-border hover-scale hover-glow cursor-pointer group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors">
                  {cert.type === "certification" ? (
                    <Award className="w-6 h-6 text-primary" />
                  ) : (
                    <Trophy className="w-6 h-6 text-primary" />
                  )}
                </div>
                
                <div className="flex-1">
                  <h3 className="text-lg font-bold mb-2">{cert.title}</h3>
                  <p className="text-muted-foreground text-sm">{cert.organization}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;