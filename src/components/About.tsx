export function About() {
  return (
    <section id="about" className="py-24 relative z-10">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <div className="flex flex-col items-center mb-14 reveal-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-white">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary rounded-full"></div>
        </div>

        <div className="glass-card rounded-2xl p-10 reveal-on-scroll">
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto">
            I'm Akash, an aspiring <span className="text-white font-medium">Data Analyst</span> with expertise in <span className="text-white font-medium">SQL, Excel, Power BI, and Python</span>. I focus on cleaning, analyzing, and transforming complex data into actionable insights. Passionate about data-driven decision-making, I'm actively seeking full-time opportunities to contribute to impactful analytics projects.
          </p>
        </div>
      </div>
    </section>
  );
}
