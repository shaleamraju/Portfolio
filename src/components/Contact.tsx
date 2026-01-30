import { Mail, Linkedin, Github, Terminal } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "shaleamraj4@gmail.com",
      href: "mailto:shaleamraj4@gmail.com",
      color: "cyan"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      value: "Connect on LinkedIn",
      href: "https://www.linkedin.com/in/bethi-shaleam-raju-48b412258/",
      color: "cyan"
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      value: "shaleamraju",
      href: "https://github.com/shaleamraju",
      color: "emerald"
    }
  ];

  return (
    <footer id="contact" className="bg-card border-t border-border py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary">&gt;</span> Get In Touch
          </h2>
          <p className="text-muted-foreground text-lg terminal-text">
            <span className="text-primary">$</span> Ready to collaborate on your next project or discuss security solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {contactInfo.map((contact, index) => (
            <a
              key={index}
              href={contact.href}
              className={`${contact.color === "cyan" ? "glass hover-glow" : "glass-emerald hover-glow-emerald"} p-6 rounded-xl hover-scale group flex items-center gap-4`}
              target={contact.href.startsWith('http') ? '_blank' : undefined}
              rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
              <div className={`p-3 rounded-lg ${
                contact.color === "cyan" 
                  ? "bg-primary/20 text-primary group-hover:bg-primary/30" 
                  : "bg-accent/20 text-accent group-hover:bg-accent/30"
              } transition-colors`}>
                {contact.icon}
              </div>
              
              <div>
                <h3 className="font-semibold text-sm text-muted-foreground mb-1">
                  {contact.label}
                </h3>
                <p className={`font-medium ${
                  contact.color === "cyan" ? "text-primary" : "text-accent"
                }`}>
                  {contact.value}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Terminal-style footer */}
        <div className="glass p-6 rounded-xl terminal-text">
          <div className="flex items-center gap-2 mb-4">
            <Terminal className="w-5 h-5 text-primary" />
            <span className="text-muted-foreground text-sm">terminal</span>
          </div>
          <div className="space-y-2 text-sm">
            <p>
              <span className="text-primary">shaleam@portfolio</span>
              <span className="text-muted-foreground">:</span>
              <span className="text-accent">~</span>
              <span className="text-muted-foreground">$ </span>
              <span className="text-foreground">echo "Thanks for visiting!"</span>
            </p>
            <p className="text-muted-foreground">Thanks for visiting!</p>
            <p>
              <span className="text-primary">shaleam@portfolio</span>
              <span className="text-muted-foreground">:</span>
              <span className="text-accent">~</span>
              <span className="text-muted-foreground">$ </span>
              <span className="text-foreground cursor-blink"></span>
            </p>
          </div>
        </div>

        <div className="pt-8 mt-8 border-t border-border text-center text-muted-foreground">
          <p>© 2025 Shaleam Raju Bethi. Building & Securing the Web.</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
