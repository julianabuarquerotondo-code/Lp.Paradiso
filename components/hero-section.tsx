import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background Image - LCP element */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpeg"
          alt="Ambiente do Paradiso Restaurante"
          fill
          className="object-cover"
          priority
          sizes="100vw"
          quality={60}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIhAAAgEDAwUBAAAAAAAAAAAAAQIDAAQRBRIhBhMiMUFR/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAZEQEAAwEBAAAAAAAAAAAAAAABAAIDESH/2gAMAwEAAhEDEQA/ANB0bqS8v9Rt4J9PghidwrSLKWKg+yMDkVdoqFhbMxZiQCT8p//Z"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-28 pb-24">
        <div className="mx-auto max-w-5xl text-center">
          {/* Logo */}
          <div className="mb-8">
            <Image
              src="/logo-paradiso.png"
              alt="Paradiso"
              width={280}
              height={180}
              className="mx-auto h-40 md:h-48 w-auto"
              priority
            />
          </div>

          <h1 className="font-[var(--font-cinzel)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-white leading-tight tracking-wide text-balance uppercase">
            Muito mais que um restaurante.
            <br />
            <span className="text-[#d4915f]">Uma experiência.</span>
          </h1>

          <p className="mt-8 font-serif text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed text-pretty">
            Gastronomia, natureza e momentos que marcam em um dos restaurantes
            mais acolhedores de Belo Horizonte.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-[#c2703a] hover:bg-[#9a5a2e] text-white font-[var(--font-cinzel)] text-base tracking-widest uppercase px-10 py-6"
            >
              <a
                href="https://wa.me/5531996055288"
                target="_blank"
                rel="noopener noreferrer"
              >
                Fazer Reserva
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/60 text-white hover:bg-white/10 hover:text-white font-[var(--font-cinzel)] text-base tracking-widest uppercase px-10 py-6 bg-transparent"
            >
              <a href="#sobre">Conheça o Paradiso</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="relative z-10 pb-8">
        <a
          href="#sobre"
          className="flex flex-col items-center text-white/70 hover:text-white"
          aria-label="Rolar para baixo"
        >
          <span className="font-[var(--font-cinzel)] text-xs tracking-widest uppercase mb-2">
            Descubra
          </span>
          <ChevronDown className="h-5 w-5" />
        </a>
      </div>
    </section>
  );
}
