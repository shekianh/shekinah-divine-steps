import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-shoe.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Shekinah Calçados - Elegância e Sofisticação"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background"></div>
      </div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 backdrop-blur-sm rounded-full text-primary text-sm font-semibold border border-primary/30 hover:bg-primary/30 transition-smooth animate-pulse-glow">
              <Sparkles className="w-4 h-4 animate-glow" />
              Mais de 5 anos de excelência
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-foreground">Shekinah Calçados</span>
              <span className="block mt-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-shimmer">
                Onde a Fé Encontra a Beleza
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground/90 max-w-2xl leading-relaxed">
              Transformando cada passo em elegância. Calçados únicos com qualidade impecável e um toque divino.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="xl" 
                variant="hero"
                className="hover-glow shadow-glow group"
                onClick={() => scrollToSection("colecoes")}
              >
                Descubra Nossa Coleção
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-smooth" />
              </Button>
              <Button 
                size="xl" 
                variant="outline"
                className="hover-lift border-primary/30 hover:border-primary hover:bg-primary/10"
                onClick={() => scrollToSection("sobre")}
              >
                Conheça Nossa História
              </Button>
            </div>
          </div>
          
          <div className="relative animate-slide-up">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-3xl blur-3xl" />
            <img 
              src={heroImage} 
              alt="Calçado feminino elegante Shekinah - Sapato de salto alto em champanhe dourado" 
              className="relative rounded-3xl shadow-elegant w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
