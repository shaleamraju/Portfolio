import { Mail, Phone, Linkedin, Github } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "shaleamraj4@gmail.com",
      href: "mailto:shaleamraj4@gmail.com"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+91 9440552067",
      href: "tel:+919440552067"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      value: "Connect on LinkedIn",
      href: "https://www.linkedin.com/in/bethi-shaleam-raju-48b412258/"
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      value: "View GitHub Profile",
      href: "https://github.com/shaleamraju"
    }
  ];

  return (
    <footer className="bg-card border-t border-border py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-muted-foreground text-lg">
            Feel free to reach out for collaborations, opportunities, or just a friendly chat!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((contact, index) => (
            <a
              key={index}
              href={contact.href}
              className="flex items-start gap-4 p-4 bg-background rounded-lg border border-border hover-scale hover-glow group"
              target={contact.href.startsWith('http') ? '_blank' : undefined}
              rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
              <div className="p-2 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors">
                <div className="text-primary">{contact.icon}</div>
              </div>
              
              <div>
                <h3 className="font-semibold mb-1 text-sm text-muted-foreground">
                  {contact.label}
                </h3>
                <p className="text-foreground group-hover:text-primary transition-colors">
                  {contact.value}
                </p>
              </div>
            </a>
          ))}
        </div>

        <div className="pt-8 border-t border-border text-center text-muted-foreground">
          <p>© 2025 Bethi Shaleam Raju. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;