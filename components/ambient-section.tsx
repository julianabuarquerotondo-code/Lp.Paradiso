"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const images = [
  {
    src: "/images/table-setup.jpg",
    alt: "Mesa preparada no jardim do Paradiso com flores vermelhas",
    span: "lg:col-span-2 lg:row-span-2",
  },
  {
    src: "/images/elegant-table.jpeg",
    alt: "Mesa longa decorada com flores brancas e velas",
    span: "lg:col-span-1 lg:row-span-1",
  },
  {
    src: "/images/event.jpg",
    alt: "Evento no jardim do Paradiso com convidados",
    span: "lg:col-span-1 lg:row-span-1",
  },
  {
    src: "/images/garden.png",
    alt: "Jardim noturno com mesa de doces e flores brancas",
    span: "lg:col-span-1 lg:row-span-1",
  },
  {
    src: "/images/cabinet.jpeg",
    alt: "Armário rústico com arranjos de flores coloridas",
    span: "lg:col-span-1 lg:row-span-1",
  },
];

export function AmbientSection() {
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
    <section id="ambiente" ref={sectionRef} className="py-24 md:py-32 bg-[#fdf8f3]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-opacity duration-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <span className="font-[var(--font-cinzel)] text-[#c2703a] text-sm tracking-[0.3em] uppercase">
            Nosso Espaço
          </span>
          <h2 className="mt-4 font-[var(--font-cinzel)] text-3xl sm:text-4xl md:text-5xl font-medium text-[#5c3d2e] leading-tight uppercase">
            Ambiente
          </h2>
          <p className="mt-6 font-serif text-[#8b5a3c] text-lg max-w-2xl mx-auto leading-relaxed">
            O Paradiso oferece um ambiente elegante, com iluminação aconchegante
            e elementos naturais que criam uma experiência sensorial completa.
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div
              key={image.src}
              className={`${image.span} overflow-hidden rounded-lg transition-opacity duration-500 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div className="relative h-full min-h-[250px] lg:min-h-[300px] group">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes={index === 0 ? "(max-width: 1024px) 100vw, 50vw" : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"}
                  loading="lazy"
                  quality={70}
                />
                <div className="absolute inset-0 bg-[#9a5a2e]/0 group-hover:bg-[#9a5a2e]/20 transition-colors duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
