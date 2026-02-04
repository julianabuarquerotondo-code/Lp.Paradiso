"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#sobre", label: "Sobre" },
    { href: "#experiencias", label: "Experiências" },
    { href: "#ambiente", label: "Ambiente" },
    { href: "#contato", label: "Contato" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled
          ? "bg-[#fdf8f3] shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-24 items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <Image
              src="/logo-paradiso.png"
              alt="Paradiso Restaurante"
              width={200}
              height={130}
              className={`h-20 w-auto ${isScrolled ? "invert" : ""}`}
              priority
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`font-[var(--font-cinzel)] text-sm tracking-widest uppercase hover:text-[#d4915f] ${
                  isScrolled ? "text-[#5c3d2e]" : "text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
            <Button
              asChild
              className="bg-[#c2703a] hover:bg-[#9a5a2e] text-white font-[var(--font-cinzel)] text-sm tracking-widest uppercase px-6"
            >
              <a
                href="https://wa.me/5531996055288"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Phone className="mr-2 h-4 w-4" />
                Reservar
              </a>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className={`md:hidden ${
              isScrolled ? "text-[#5c3d2e]" : "text-white"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#fdf8f3] border-t border-[#c2703a]/20">
            <nav className="flex flex-col py-6 px-4 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-[var(--font-cinzel)] text-[#5c3d2e] text-base tracking-widest uppercase py-2 hover:text-[#c2703a]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button
                asChild
                className="bg-[#c2703a] hover:bg-[#9a5a2e] text-white font-[var(--font-cinzel)] mt-2 w-full tracking-widest uppercase"
              >
                <a
                  href="https://wa.me/5531996055288"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Fazer Reserva
                </a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
