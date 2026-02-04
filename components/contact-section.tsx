"use client";

import { useEffect, useRef, useState } from "react";
import { Clock, Calendar, Phone, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactInfo = [
  {
    icon: Clock,
    title: "Funcionamento",
    content: "Quarta a domingo",
  },
  {
    icon: Calendar,
    title: "Eventos",
    content: "Casamentos, eventos corporativos e celebrações",
    phone: "(31) 98417-6744",
  },
  {
    icon: Phone,
    title: "Reservas",
    content: "(31) 99605-5288",
  },
  {
    icon: MapPin,
    title: "Endereço",
    content: "Rua Leopoldina, 347",
    subContent: "Belo Horizonte - MG | CEP 30330-230",
  },
];

export function ContactSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Delay map loading for better performance
          setTimeout(() => setShowMap(true), 500);
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
    <section id="contato" ref={sectionRef} className="py-24 md:py-32 bg-[#9a5a2e]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-opacity duration-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <span className="font-[var(--font-cinzel)] text-[#d4915f] text-sm tracking-[0.3em] uppercase">
            Venha Nos Visitar
          </span>
          <h2 className="mt-4 font-[var(--font-cinzel)] text-3xl sm:text-4xl md:text-5xl font-medium text-white leading-tight uppercase">
            Informações e Contato
          </h2>
          <div className="mt-6 mx-auto w-20 h-px bg-[#d4915f]/50" />
        </div>

        {/* Contact Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactInfo.map((item, index) => (
            <div
              key={item.title}
              className={`text-center transition-opacity duration-500 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div className="w-14 h-14 bg-[#d4915f]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <item.icon className="w-6 h-6 text-[#d4915f]" />
              </div>
              <h3 className="font-[var(--font-cinzel)] text-xl font-medium text-white mb-3 uppercase">
                {item.title}
              </h3>
              <p className="font-serif text-white/80 text-base">
                {item.content}
              </p>
              {item.phone && (
                <p className="font-serif text-white/80 text-base mt-1">
                  {item.phone}
                </p>
              )}
              {item.subContent && (
                <p className="font-serif text-white/60 text-sm mt-1">
                  {item.subContent}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* WhatsApp CTA */}
        <div
          className={`mt-16 text-center transition-opacity duration-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <Button
            asChild
            size="lg"
            className="bg-[#c2703a] hover:bg-[#5c3d2e] text-white font-[var(--font-cinzel)] text-base tracking-widest uppercase px-8 py-6"
          >
            <a
              href="https://wa.me/5531996055288"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Fale Conosco pelo WhatsApp
            </a>
          </Button>
        </div>

        {/* Map Embed - Lazy loaded */}
        <div
          className={`mt-16 rounded-lg overflow-hidden transition-opacity duration-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {showMap ? (
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.4!2d-43.94!3d-19.93!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDU1JzQ4LjAiUyA0M8KwNTYnMjQuMCJX!5e0!3m2!1sen!2sbr!4v1600000000000!5m2!1sen!2sbr"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização do Paradiso Restaurante"
              className="grayscale-[30%]"
            />
          ) : (
            <div className="w-full h-[350px] bg-[#5c3d2e]/50 flex items-center justify-center">
              <p className="text-white/60 font-serif">Carregando mapa...</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
