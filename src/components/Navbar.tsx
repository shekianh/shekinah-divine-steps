import { useState, useEffect } from "react";
import { Menu, X, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/shekinah-logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-divine ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-elegant"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Shekinah Calçados" className="h-12 w-auto" />
            <span className="text-2xl font-serif font-bold text-foreground">
              Shekinah
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("sobre")}
              className="text-foreground hover:text-primary transition-smooth"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("valores")}
              className="text-foreground hover:text-primary transition-smooth"
            >
              Valores
            </button>
            <button
              onClick={() => scrollToSection("colecoes")}
              className="text-foreground hover:text-primary transition-smooth"
            >
              Coleções
            </button>
            <button
              onClick={() => scrollToSection("galeria")}
              className="text-foreground hover:text-primary transition-smooth"
            >
              Galeria
            </button>
            <button
              onClick={() => scrollToSection("onde-comprar")}
              className="text-foreground hover:text-primary transition-smooth"
            >
              Onde Comprar
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="text-foreground hover:text-primary transition-smooth"
            >
              Contato
            </button>
            <Button variant="hero" size="lg">
              <ShoppingBag className="mr-2 h-4 w-4" />
              Comprar
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-foreground"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-6 animate-fade-in">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("sobre")}
                className="text-foreground hover:text-primary transition-smooth text-left py-2"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection("valores")}
                className="text-foreground hover:text-primary transition-smooth text-left py-2"
              >
                Valores
              </button>
              <button
                onClick={() => scrollToSection("colecoes")}
                className="text-foreground hover:text-primary transition-smooth text-left py-2"
              >
                Coleções
              </button>
              <button
                onClick={() => scrollToSection("galeria")}
                className="text-foreground hover:text-primary transition-smooth text-left py-2"
              >
                Galeria
              </button>
              <button
                onClick={() => scrollToSection("onde-comprar")}
                className="text-foreground hover:text-primary transition-smooth text-left py-2"
              >
                Onde Comprar
              </button>
              <button
                onClick={() => scrollToSection("contato")}
                className="text-foreground hover:text-primary transition-smooth text-left py-2"
              >
                Contato
              </button>
              <Button variant="hero" size="lg" className="w-full">
                <ShoppingBag className="mr-2 h-4 w-4" />
                Comprar
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
