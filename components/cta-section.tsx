"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function CTASection() {
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-32 md:py-40 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/menu.jpg"
          alt="Interior acolhedor do Paradiso com mesa decorada"
          fill
          className="object-cover"
          sizes="100vw"
          loading="lazy"
          quality={70}
        />
        <div className="absolute inset-0 bg-[#5c3d2e]/80" />
      </div>

      {/* Content */}
      <div
        className={`relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center transition-opacity duration-700 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <h2 className="font-[var(--font-cinzel)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-white leading-tight text-balance uppercase">
          Viva a Experiência Paradiso
        </h2>

        <p className="mt-8 font-serif text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
          Descubra um restaurante em Belo Horizonte onde cada encontro se
          transforma em uma lembrança especial.
        </p>

        <div className="mt-12">
          <Button
            asChild
            size="lg"
            className="bg-[#c2703a] hover:bg-[#9a5a2e] text-white font-[var(--font-cinzel)] text-lg tracking-widest uppercase px-10 py-7"
          >
            <a
              href="https://wa.me/5531996055288"
              target="_blank"
              rel="noopener noreferrer"
            >
              Reservar Agora
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
