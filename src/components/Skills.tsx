import { Code2, Database, Wrench, Monitor } from "lucide-react";

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    icon: <Code2 className="w-6 h-6" />,
    skills: ["C", "C++", "Java", "Python"]
  },
  {
    title: "Web Development",
    icon: <Monitor className="w-6 h-6" />,
    skills: ["HTML", "CSS", "JavaScript", "React.js", "Node.js"]
  },
  {
    title: "Database",
    icon: <Database className="w-6 h-6" />,
    skills: ["SQL", "MongoDB"]
  },
  {
    title: "Tools & OS",
    icon: <Wrench className="w-6 h-6" />,
    skills: ["Git", "GitHub", "Windows", "Linux"]
  }
];

const Skills = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Skills</h2>
        
        <div className="overflow-x-auto hide-scrollbar">
          <div className="flex gap-6 pb-4">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="min-w-[300px] bg-card p-6 rounded-lg border border-border hover-scale hover-glow cursor-pointer"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-primary">{category.icon}</div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;