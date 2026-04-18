import { Mail, Linkedin, Github } from 'lucide-react';

const links = [
  {
    name: 'Email',
    value: 'akashreddych4@gmail.com',
    icon: Mail,
    href: 'mailto:akashreddych4@gmail.com',
    accent: '#00e5b0',
  },
  {
    name: 'LinkedIn',
    value: 'linkedin.com/in/akash-reddy-ch',
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/akash-reddy-ch-045878283/',
    accent: '#5b8fff',
  },
  {
    name: 'GitHub',
    value: 'github.com/akash-chinthala',
    icon: Github,
    href: 'https://github.com/akash-chinthala',
    accent: '#00e5b0',
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <div className="flex flex-col items-center mb-14 reveal-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-white">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-muted-foreground text-center max-w-xl">
            Open to internship opportunities and collaborations. Let's talk data.
          </p>
          <div className="w-20 h-1 bg-gradient-primary rounded-full mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {links.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-8 rounded-2xl border border-white/5 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 group reveal-on-scroll"
              style={{
                transitionDelay: `${index * 0.1}s`,
                boxShadow: '0 0 0 1px rgba(255,255,255,0.04)',
              }}
            >
              <div
                className="p-4 rounded-full mb-5 transition-colors duration-300"
                style={{ background: `${link.accent}18` }}
              >
                <link.icon size={28} style={{ color: link.accent }} />
              </div>
              <h3 className="text-lg font-bold font-heading text-white mb-1 group-hover:text-gradient transition-colors">
                {link.name}
              </h3>
              <p className="text-muted-foreground text-xs font-medium break-all">{link.value}</p>
              <div
                className="h-0.5 w-8 rounded-full mt-5"
                style={{ background: link.accent }}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
