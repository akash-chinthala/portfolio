import { Database, Code2, BarChart3, LineChart, Table2, Filter, Activity, GitMerge, PieChart } from 'lucide-react';

const PRIMARY = '#00e5b0';

const categories = [
  {
    label: 'Data Analyst',
    description: 'Core tools and methodologies for day-to-day analytics work',
    tools: [
      { name: 'SQL',              icon: Database, note: 'Querying, joins, aggregations, window functions' },
      { name: 'Python Basics',    icon: Code2,    note: 'Scripting, control flow, functions & modules' },
      { name: 'Data Handling',    icon: GitMerge, note: 'Structuring, merging & transforming datasets' },
      { name: 'Data Cleaning',    icon: Filter,   note: 'Missing values, duplicates & normalization' },
      { name: 'Python Libraries', icon: Activity, note: 'Pandas, NumPy for efficient data manipulation' },
    ],
  },
  {
    label: 'Visualization & Reporting',
    description: 'Translating data into clear, executive-ready visual narratives',
    tools: [
      { name: 'Power BI',             icon: PieChart,  note: 'Interactive dashboards & drill-through reports' },
      { name: 'Excel',                icon: Table2,    note: 'Advanced formulas, pivot tables, dynamic charts' },
      { name: 'Matplotlib / Seaborn', icon: LineChart, note: 'Python-based statistical visualizations' },
      { name: 'Data Storytelling',    icon: BarChart3, note: 'Communicating insights to business stakeholders' },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 relative z-10 bg-background/50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center mb-16 reveal-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-white">
            Skills & <span className="text-gradient">Capabilities</span>
          </h2>
          <p className="text-muted-foreground text-center max-w-xl text-base">
            A structured view of the tools and expertise I bring to every analytics challenge.
          </p>
          <div className="w-20 h-1 bg-gradient-primary rounded-full mt-6"></div>
        </div>

        <div className="flex flex-col gap-8">
          {categories.map((cat, catIdx) => (
            <div
              key={cat.label}
              className="glass-card rounded-2xl overflow-hidden reveal-on-scroll"
              style={{ transitionDelay: `${catIdx * 0.12}s` }}
            >
              <div
                className="px-8 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2"
                style={{ borderLeft: `3px solid ${PRIMARY}`, background: `linear-gradient(90deg, ${PRIMARY}0d 0%, transparent 60%)` }}
              >
                <div>
                  <h3 className="text-xl font-bold font-heading text-white">{cat.label}</h3>
                  <p className="text-sm text-muted-foreground mt-0.5">{cat.description}</p>
                </div>
                <span
                  className="self-start sm:self-auto text-xs font-semibold px-3 py-1 rounded-full border"
                  style={{ color: PRIMARY, borderColor: `${PRIMARY}40`, background: `${PRIMARY}12` }}
                >
                  {cat.tools.length} skills
                </span>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 divide-x divide-white/5">
                {cat.tools.map((tool) => (
                  <div
                    key={tool.name}
                    className="px-5 py-4 flex flex-col gap-2 hover:bg-white/[0.03] transition-colors duration-200 group"
                  >
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 rounded-md" style={{ background: `${PRIMARY}18` }}>
                        <tool.icon className="w-4 h-4" style={{ color: PRIMARY }} />
                      </div>
                      <span className="font-semibold text-white text-sm group-hover:text-gradient transition-colors leading-tight">
                        {tool.name}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">{tool.note}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
