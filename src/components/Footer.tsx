import { Github, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-8 border-t border-white/10 bg-background relative z-10">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} Akash Chinthala. Built with passion & data.
        </p>
        
        <div className="flex items-center gap-4">
          <a 
            href="https://github.com/akash-chinthala" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-white transition-colors p-2"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a 
            href="https://www.linkedin.com/in/akash-reddy-ch-045878283/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-[#5b8fff] transition-colors p-2"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
