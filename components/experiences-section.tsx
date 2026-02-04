"use client";

import { useEffect, useRef, useState } from "react";
import { Heart, Utensils, Sparkles, Users } from "lucide-react";

const experiences = [
  {
    icon: Heart,
    title: "Comemorações",
    description:
      "Ambiente ideal para celebrar datas especiais com conforto, elegância e uma gastronomia marcante.",
  },
  {
    icon: Utensils,
    title: "Almoços Especiais",
    description:
      "Perfeito para quem busca um restaurante em Belo Horizonte com ambiente tranquilo e pratos elaborados.",
  },
  {
    icon: Sparkles,
    title: "Experiências Gastronômicas",
    description:
      "Cozinha autoral, ingredientes selecionados e apresentação refinada.",
  },
  {
    icon: Users,
    title: "Eventos e Networking",
    description:
      "Espaço ideal para eventos corporativos, reuniões e celebrações especiais.",
  },
];

export function ExperiencesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="experiencias"
      ref={sectionRef}
      className="py-24 md:py-32 bg-[#5c3d2e]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-opacity duration-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <span className="font-[var(--font-cinzel)] text-[#d4915f] text-sm tracking-[0.3em] uppercase">
            Momentos Únicos
          </span>
          <h2 className="mt-4 font-[var(--font-cinzel)] text-3xl sm:text-4xl md:text-5xl font-medium text-white leading-tight uppercase">
            Experiências
          </h2>
          <div className="mt-6 mx-auto w-20 h-px bg-[#d4915f]/50" />
        </div>

        {/* Experience Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {experiences.map((experience, index) => (
            <div
              key={experience.title}
              className={`group p-8 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-opacity duration-500 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div className="w-14 h-14 bg-[#d4915f]/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#d4915f]/30 transition-colors duration-300">
                <experience.icon className="w-7 h-7 text-[#d4915f]" />
              </div>
              <h3 className="font-[var(--font-cinzel)] text-xl font-medium text-white mb-4 uppercase">
                {experience.title}
              </h3>
              <p className="font-serif text-white/70 text-base leading-relaxed">
                {experience.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
