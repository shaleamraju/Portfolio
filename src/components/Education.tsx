import { GraduationCap } from "lucide-react";

interface EducationItem {
  degree: string;
  institution: string;
  score: string;
  year?: string;
}

const educationData: EducationItem[] = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    institution: "Rajeev Gandhi Memorial College of Engineering & Technology",
    score: "6.41 CGPA",
    year: "2022 – 2025"
  },
  {
    degree: "Diploma in Computer Engineering",
    institution: "Polytechnic College",
    score: "7.0 CGPA"
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
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {educationData.map((item, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-lg border border-border hover-scale hover-glow cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/20 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">{item.degree}</h3>
                  <p className="text-muted-foreground mb-2">{item.institution}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-primary font-semibold">{item.score}</span>
                    {item.year && (
                      <span className="text-sm text-muted-foreground">{item.year}</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;