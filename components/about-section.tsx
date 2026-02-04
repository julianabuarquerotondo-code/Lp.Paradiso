"use client";

import { useEffect, useRef, useState } from "react";
import { Award } from "lucide-react";
import Image from "next/image";

export function AboutSection() {
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
    <section id="sobre" ref={sectionRef} className="py-24 md:py-32 bg-[#fdf8f3]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div
            className={`relative transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
              <Image
                src="/images/about.jpeg"
                alt="Mesa decorada com flores e velas no ambiente intimista do Paradiso"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                loading="lazy"
                quality={75}
              />
            </div>
            {/* Decorative frame */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-[#c2703a]/30 rounded-lg -z-10" />
          </div>

          {/* Content */}
          <div
            className={`transition-all duration-700 delay-100 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
          >
            <div className="mb-6">
              <span className="font-[var(--font-cinzel)] text-[#c2703a] text-sm tracking-[0.3em] uppercase">
                Sobre Nós
              </span>
            </div>

            <h2 className="font-[var(--font-cinzel)] text-3xl sm:text-4xl md:text-5xl font-medium text-[#5c3d2e] leading-tight mb-8 uppercase">
              Onde a Experiência Vai Além do Sabor
            </h2>

            <div className="space-y-6 font-serif text-[#8b5a3c] text-lg leading-relaxed">
              <p>
                O Paradiso Restaurante, localizado em Belo Horizonte, é
                reconhecido por unir gastronomia de alto nível, ambiente
                acolhedor e uma experiência sofisticada.
              </p>
              <p>
                Instalado em uma charmosa casa com quintal cercado por árvores
                frutíferas, o restaurante oferece um espaço ideal para quem
                busca tranquilidade, conforto e boa gastronomia.
              </p>
              <p>
                O cardápio apresenta receitas com influências italianas e
                francesas, incluindo carnes, peixes, frutos do mar, massas e
                risotos, preparados com técnica, cuidado e ingredientes
                selecionados.
              </p>
            </div>

            {/* Tripadvisor Badge */}
            <div className="mt-10 flex items-center gap-4 p-6 bg-white rounded-lg border border-[#c2703a]/20">
              <div className="flex-shrink-0 w-14 h-14 bg-[#c2703a]/10 rounded-full flex items-center justify-center">
                <Award className="w-7 h-7 text-[#c2703a]" />
              </div>
              <div>
                <p className="font-serif text-xl font-medium text-[#5c3d2e]">
                  {"Travellers' Choice"}
                </p>
                <p className="font-serif text-sm text-[#8b5a3c]">
                  Tripadvisor - Um dos restaurantes mais bem avaliados de BH
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
