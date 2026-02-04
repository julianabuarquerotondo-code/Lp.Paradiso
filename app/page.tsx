import dynamic from "next/dynamic";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";

// Lazy load components below the fold
const AboutSection = dynamic(
  () => import("@/components/about-section").then((mod) => mod.AboutSection),
  { ssr: true }
);

const ExperiencesSection = dynamic(
  () => import("@/components/experiences-section").then((mod) => mod.ExperiencesSection),
  { ssr: true }
);

const AmbientSection = dynamic(
  () => import("@/components/ambient-section").then((mod) => mod.AmbientSection),
  { ssr: true }
);

const CTASection = dynamic(
  () => import("@/components/cta-section").then((mod) => mod.CTASection),
  { ssr: true }
);

const ContactSection = dynamic(
  () => import("@/components/contact-section").then((mod) => mod.ContactSection),
  { ssr: true }
);

const Footer = dynamic(
  () => import("@/components/footer").then((mod) => mod.Footer),
  { ssr: true }
);

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <AboutSection />
      <ExperiencesSection />
      <AmbientSection />
      <CTASection />
      <ContactSection />
      <Footer />
    </main>
  );
}
