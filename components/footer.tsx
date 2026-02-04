import { Instagram, Facebook } from "lucide-react";
import Image from "next/image";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#5c3d2e] py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <div className="mb-6">
            <Image
              src="/logo-paradiso.png"
              alt="Paradiso Restaurante"
              width={200}
              height={130}
              className="h-28 w-auto"
            />
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6 mb-8">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-[#d4915f] transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-[#d4915f] transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5" />
            </a>
          </div>

          {/* Divider */}
          <div className="w-32 h-px bg-white/20 mb-8" />

          {/* Copyright */}
          <p className="font-serif text-sm text-white/50">
            {currentYear} Paradiso Restaurante. Todos os direitos reservados.
          </p>
          <p className="font-serif text-xs text-white/40 mt-2">
            Rua Leopoldina, 347 - Belo Horizonte - MG
          </p>
        </div>
      </div>
    </footer>
  );
}
