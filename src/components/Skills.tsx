import { Code2, Shield, Terminal } from "lucide-react";

interface SkillCard {
  title: string;
  icon: React.ReactNode;
  skills: string[];
  color: "cyan" | "emerald";
}

const skillCards: SkillCard[] = [
  {
    title: "Dev Stack",
    icon: <Code2 className="w-8 h-8" />,
    skills: ["React.js", "Node.js", "Express", "MongoDB", "REST APIs"],
    color: "cyan"
  },
  {
    title: "Security Stack",
    icon: <Shield className="w-8 h-8" />,
    skills: ["Splunk", "Elastic (ELK)", "YARA", "Vulnerability Assessment", "Ethical Hacking"],
    color: "emerald"
  }
];

const Skills = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          <span className="text-primary">&gt;</span> Skills Dashboard
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skillCards.map((card, index) => (
            <div
              key={index}
              className={`${card.color === "cyan" ? "glass hover-glow" : "glass-emerald hover-glow-emerald"} p-8 rounded-xl cursor-pointer hover-scale`}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-lg ${card.color === "cyan" ? "bg-primary/20 text-primary" : "bg-accent/20 text-accent"}`}>
                  {card.icon}
                </div>
                <h3 className={`text-2xl font-bold ${card.color === "cyan" ? "text-primary" : "text-accent"}`}>
                  {card.title}
                </h3>
              </div>
              
              {/* Terminal-style skills display */}
              <div className="bg-background/50 rounded-lg p-4 terminal-text">
                <div className="flex items-center gap-2 mb-4 text-muted-foreground text-sm">
                  <Terminal className="w-4 h-4" />
                  <span>skills.config</span>
                </div>
                <div className="space-y-2">
                  {card.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex items-center gap-3"
                    >
                      <span className={card.color === "cyan" ? "text-primary" : "text-accent"}>▹</span>
                      <span className="text-foreground font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
