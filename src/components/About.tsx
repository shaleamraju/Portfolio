import { Terminal, Shield, Server } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          <span className="text-primary">&gt;</span> About Me
        </h2>
        
        <div className="glass p-8 rounded-xl">
          <div className="flex items-start gap-4 mb-6">
            <Terminal className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
            <div>
              <p className="text-lg md:text-xl text-foreground leading-relaxed terminal-text">
                <span className="text-primary">$</span> A versatile engineer with dual expertise in{" "}
                <span className="text-primary font-bold">Full Stack Development</span> and{" "}
                <span className="text-accent font-bold">Cybersecurity Operations</span>.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="flex items-start gap-4 p-4 rounded-lg bg-primary/5 border border-primary/20">
              <Server className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-primary mb-2">Development</h3>
                <p className="text-muted-foreground">
                  Proficient in the MERN stack (MongoDB, Express, React, Node.js), 
                  building responsive web applications and optimizing database queries.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-lg bg-accent/5 border border-accent/20">
              <Shield className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-accent mb-2">Security</h3>
                <p className="text-muted-foreground">
                  Experienced in SOC operations, penetration testing, log analysis, 
                  and automating workflows with Bash scripting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
