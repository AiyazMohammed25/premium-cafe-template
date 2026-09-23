import Footer from "../../components/Footer";
import HeroSection from "../../components/HeroSection";
import MenuHighlights from "../../components/MenuHighlights";
import Nav from "../../components/Nav";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-900 text-neutral-100 font-sans">
      {/* Navigation Bar */}
      <Nav />

      {/* Hero Section */}
      <HeroSection />

      {/* Menu Highlights Section */}
      <MenuHighlights />
      
      {/* Footer Section */}
      <Footer />
    </main>
  );
}