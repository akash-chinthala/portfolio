import { Github, AlertTriangle, TrendingDown, Package } from 'lucide-react';

const projects = [
  {
    title: 'User Activity & Risk Analysis',
    icon: AlertTriangle,
    description: 'Built a complete analytics pipeline to track user behavior and classify risk levels. Analyzed activity patterns, identified high-risk users, and created interactive dashboards for monitoring.',
    focus: 'Risk Intelligence',
    tech: ['SQL', 'Excel', 'Power BI', 'Python'],
    github: 'https://github.com/akash-chinthala/User-Activity-and-Risk-Analysis',
    accent: '#00e5b0'
  },
  {
    title: 'Revenue Leakage Analysis',
    icon: TrendingDown,
    description: 'Developed a data-driven solution to identify revenue gaps by comparing expected vs actual revenue. Highlighted leakage sources such as canceled orders and missing payments, with actionable insights via dashboards.',
    focus: 'Revenue Optimization',
    tech: ['SQL', 'Excel', 'Power BI'],
    github: 'https://github.com/akash-chinthala/Revenue-Leakage-Analysis',
    accent: '#5b8fff'
  },
  {
    title: 'Inventory Supply Risk Intelligence',
    icon: Package,
    description: 'Designed a reporting system to monitor stock levels, supplier performance, and delivery delays. Identified high-risk suppliers and supply chain bottlenecks to support operational decisions.',
    focus: 'Supply Chain Analytics',
    tech: ['Excel', 'SQL', 'Power BI'],
    github: 'https://github.com/akash-chinthala/Inventory-Supply-Risk-Intelligence',
    accent: '#00e5b0'
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center mb-16 reveal-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-white">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl text-base">
            Real-world analytics projects focused on risk detection, revenue insight, and operational intelligence.
          </p>
          <div className="w-20 h-1 bg-gradient-primary rounded-full mt-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="glass-card rounded-2xl overflow-hidden flex flex-col group transition-all duration-300 hover:-translate-y-2 relative reveal-on-scroll"
              style={{
                boxShadow: '0 0 0 1px rgba(255,255,255,0.05)',
                transitionDelay: `${index * 0.1}s`
              }}
            >
              {/* Top accent bar */}
              <div className="h-0.5 w-full" style={{ background: `linear-gradient(90deg, ${project.accent}, transparent)` }} />

              <div className="p-8 flex flex-col flex-grow">
                {/* Icon + Focus tag */}
                <div className="flex items-start justify-between mb-5">
                  <div
                    className="p-3 rounded-xl"
                    style={{ background: `${project.accent}18` }}
                  >
                    <project.icon className="w-6 h-6" style={{ color: project.accent }} />
                  </div>
                  <span
                    className="text-xs font-semibold px-3 py-1 rounded-full border"
                    style={{ color: project.accent, borderColor: `${project.accent}40`, background: `${project.accent}10` }}
                  >
                    {project.focus}
                  </span>
                </div>

                <h3 className="text-xl font-bold font-heading text-white mb-3 group-hover:text-gradient transition-colors leading-snug">
                  {project.title}
                </h3>

                <p className="text-muted-foreground mb-6 flex-grow leading-relaxed text-sm">
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map(t => (
                    <span key={t} className="px-2.5 py-1 text-xs font-medium rounded-md bg-white/5 border border-white/8 text-white/70">
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full py-2.5 rounded-lg border text-sm font-medium gap-2 transition-all hover:bg-white/5 hover:scale-[1.02]"
                  style={{ borderColor: `${project.accent}40`, color: project.accent }}
                >
                  <Github size={16} />
                  View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
