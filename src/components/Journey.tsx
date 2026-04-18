export function Journey() {
  const milestones = [
    {
      year: '2024',
      title: 'B.Tech Computer Science',
      description: 'Currently pursuing my degree, focusing on core computer science principles and data analysis.',
      current: true
    },
    {
      year: '2024',
      title: 'Open Source Contributions',
      description: 'Started building and publishing open-source data analysis projects on GitHub.',
    },
    {
      year: '2024',
      title: 'First Power BI Dashboard',
      description: 'Built comprehensive Power BI dashboards for academic projects, turning raw data into visual stories.',
    },
    {
      year: '2023',
      title: 'Python for Data Science',
      description: 'Completed specialized courses on Kaggle, mastering Pandas, NumPy, and Scikit-learn.',
    },
    {
      year: '2023',
      title: 'Discovering Data',
      description: 'Found my passion for data analysis through initial explorations with Excel and SQL.',
    }
  ];

  return (
    <section id="journey" className="py-24 relative z-10 bg-background/50">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <div className="flex flex-col items-center mb-16 reveal-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-white">
            My <span className="text-gradient">Journey</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary rounded-full"></div>
        </div>

        <div className="relative border-l border-white/10 ml-4 md:ml-0 md:left-1/2 md:-translate-x-1/2">
          {milestones.map((milestone, index) => (
            <div 
              key={index}
              className={`mb-12 relative flex flex-col md:flex-row items-start reveal-on-scroll ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Dot */}
              <div className="absolute left-[-5px] md:left-1/2 md:-translate-x-[5px] top-1 w-2.5 h-2.5 rounded-full bg-[#00e5b0] glow-cyan z-10">
                {milestone.current && (
                  <div className="absolute inset-0 rounded-full bg-[#00e5b0] animate-ping opacity-75"></div>
                )}
              </div>
              
              {/* Content */}
              <div className={`ml-8 md:ml-0 md:w-1/2 ${
                index % 2 === 0 ? 'md:pl-12' : 'md:pr-12 md:text-right'
              }`}>
                <div className="glass-card p-6 rounded-2xl border border-white/5 hover:border-[#00e5b0]/30 transition-colors group">
                  <span className="text-[#00e5b0] font-mono text-sm font-bold mb-2 block tracking-wider">
                    {milestone.year}
                  </span>
                  <h3 className="text-xl font-bold font-heading text-white mb-2 group-hover:text-gradient transition-colors">
                    {milestone.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
