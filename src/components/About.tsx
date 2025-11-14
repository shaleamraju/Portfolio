const About = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">About Me</h2>
        
        <div className="bg-card p-8 rounded-lg border border-border">
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Motivated CSE student skilled in full-stack development, debugging, and problem-solving. 
            Experienced in Python, Java, C, C++, React, SQL, MongoDB and Linux. 
            Passionate about building real-world applications that solve complex problems.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;