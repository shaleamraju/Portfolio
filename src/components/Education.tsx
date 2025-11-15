import { GraduationCap } from "lucide-react";

interface EducationItem {
  degree: string;
  institution: string;
  score: string;
  year?: string;
  highlights?: string[];
}

const educationData: EducationItem[] = [
  {
    degree: "Bachelor of Technology (B.Tech), Computer Science & Engineering",
    institution: "Rajeev Gandhi Memorial College of Engineering & Technology",
    score: "6.41 CGPA",
    year: "2022 – 2025",
    highlights: [
      "Strong focus on AI/ML, Full-Stack Development, and Cybersecurity",
      "Worked on multiple academic and personal real-world projects",
      "Actively improving skills in React, Python, Java, DBMS, Cloud, and 3D Web Development"
    ]
  },
  {
    degree: "Diploma in Computer Engineering",
    institution: "Polytechnic College",
    score: "7.0 / 10 CGPA",
    highlights: [
      "Gained foundational technical knowledge in programming, databases, operating systems, and networking",
      "Built early-stage projects and strengthened problem-solving skills",
      "Learned core software development principles and teamwork"
    ]
  },
  {
    degree: "Secondary School Certificate",
    institution: "High School",
    score: "9.2 CGPA"
  }
];

const Education = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Education</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {educationData.map((item, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-lg border border-border hover-scale hover-glow cursor-pointer"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-primary/20 rounded-lg flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">{item.degree}</h3>
                  <p className="text-muted-foreground mb-2">{item.institution}</p>
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <span className="text-primary font-semibold">{item.score}</span>
                    {item.year && (
                      <span className="text-sm text-muted-foreground">{item.year}</span>
                    )}
                  </div>
                </div>
              </div>
              
              {item.highlights && (
                <ul className="space-y-2 ml-2">
                  {item.highlights.map((highlight, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;