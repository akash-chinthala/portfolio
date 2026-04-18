import { useEffect, useState } from "react";
const avatarImg = "/logo.webp";

import {
  ArrowRight,
  Github,
  BarChart2,
  Table2,
  Database,
  Code2,
} from "lucide-react";

const taglines = [
  "Transforming Data Into Business Intelligence",
  "Risk, Revenue & Supply Chain Analytics",
  "Always-On Analytics for Smarter Decisions",
  "Turning Raw Data Into Strategic Insight",
];

export function Hero() {
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const currentWord = taglines[taglineIndex];
    const speed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        const next = currentWord.substring(0, displayText.length + 1);
        setDisplayText(next);

        if (next === currentWord) {
          setIsPaused(true);
          setTimeout(() => {
            setIsPaused(false);
            setIsDeleting(true);
          }, 2200);
        }
      } else {
        const next = displayText.substring(0, displayText.length - 1);
        setDisplayText(next);

        if (next === "") {
          setIsDeleting(false);
          setTaglineIndex((prev) => (prev + 1) % taglines.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, taglineIndex, isPaused]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative pt-20 pb-16 overflow-hidden"
    >
      <div className="mesh-bg"></div>

      <div className="container mx-auto px-6 md:px-12 flex flex-col-reverse lg:grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
        {/* LEFT SIDE */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left z-10 w-full">
          <div className="inline-flex items-center px-3 py-1 rounded-full glass border-white/10 mb-6 animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-[#00e5b0] mr-2 animate-pulse"></span>
            <span className="text-xs font-medium text-white/80">
              Open to Opportunities
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold font-heading mb-4 tracking-tight animate-fade-in-up">
            Akash <br className="hidden lg:block" />
            <span className="text-gradient">Chinthala</span>
          </h1>

          <div className="min-h-[2rem] mb-5 animate-fade-in-up">
            <p className="text-base md:text-xl text-muted-foreground font-medium">
              {displayText}
              <span className="animate-pulse text-[#00e5b0]">|</span>
            </p>
          </div>

          <p className="text-muted-foreground max-w-lg mb-8 leading-relaxed animate-fade-in-up text-sm md:text-base">
            I build "always-on" analytics workflows that transform complex data
            into clear, decision-ready intelligence. With expertise in SQL,
            Python, and BI tools, I help organizations bridge the gap between
            raw data and strategic action — identifying risks and revenue
            opportunities before they escalate.
          </p>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 animate-fade-in-up">
            <a
              href="#projects"
              className="bg-gradient-primary text-background font-semibold px-6 py-3 rounded-lg flex items-center gap-2 transition-transform hover:scale-105"
            >
              View Projects
              <ArrowRight size={18} />
            </a>

            <a
              href="https://github.com/akash-chinthala"
              target="_blank"
              rel="noopener noreferrer"
              className="glass border-white/20 text-white font-medium px-6 py-3 rounded-lg flex items-center gap-2 transition-all hover:bg-white/5 hover:scale-105"
            >
              <Github size={18} />
              GitHub
            </a>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex justify-center z-10 animate-fade-in w-full">
          <div className="relative" style={{ width: "260px", height: "260px" }}>
            {/* glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-primary blur-2xl opacity-15 animate-pulse"></div>

            {/* avatar */}
            <div className="absolute inset-0 rounded-full glass border border-[#00e5b0]/30 flex items-center justify-center overflow-hidden z-10">
              <img
                src={avatarImg}
                alt="Akash Chinthala"
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* SQL */}
            <div className="absolute -top-5 -left-14 glass px-2.5 py-1.5 rounded-xl border flex items-center gap-1.5">
              <Database size={13} style={{ color: "#00e5b0" }} />
              <span className="text-xs font-semibold text-[#00e5b0]">SQL</span>
            </div>

            {/* Power BI */}
            <div className="absolute -top-5 -right-16 glass px-2.5 py-1.5 rounded-xl border flex items-center gap-1.5">
              <BarChart2 size={13} style={{ color: "#00e5b0" }} />
              <span className="text-xs font-semibold text-[#00e5b0]">
                Power BI
              </span>
            </div>

            {/* Python */}
            <div className="absolute -bottom-5 -left-14 glass px-2.5 py-1.5 rounded-xl border flex items-center gap-1.5">
              <Code2 size={13} style={{ color: "#5b8fff" }} />
              <span className="text-xs font-semibold text-[#5b8fff]">
                Python
              </span>
            </div>

            {/* Excel */}
            <div className="absolute -bottom-5 -right-14 glass px-2.5 py-1.5 rounded-xl border flex items-center gap-1.5">
              <Table2 size={13} style={{ color: "#5b8fff" }} />
              <span className="text-xs font-semibold text-[#5b8fff]">
                Excel
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* scroll icon */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
        <a
          href="#about"
          className="p-2 rounded-full glass flex items-center justify-center"
        >
          <ArrowRight size={20} className="rotate-90" />
        </a>
      </div>
    </section>
  );
}
