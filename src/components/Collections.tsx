import { Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";
import scarpinImage from "@/assets/scarpin-elegante.jpg";
import sandaliaImage from "@/assets/sandalia-divina.jpg";
import sapatilhaImage from "@/assets/sapatilha-aurora.jpg";
import botaImage from "@/assets/bota-shekinah.jpg";

const products = [
  {
    image: scarpinImage,
    name: "Scarpin Elegante",
    description: "Sofisticação para momentos especiais",
    alt: "Scarpin dourado champanhe Shekinah - Salto alto elegante para ocasiões especiais"
  },
  {
    image: sandaliaImage,
    name: "Sandália Divina",
    description: "Delicadeza e charme em cada passo",
    alt: "Sandália de tiras rose gold Shekinah - Calçado feminino delicado e sofisticado"
  },
  {
    image: sapatilhaImage,
    name: "Sapatilha Aurora",
    description: "Conforto e elegância para o dia a dia",
    alt: "Sapatilha nude Shekinah - Calçado feminino confortável e elegante para uso diário"
  },
  {
    image: botaImage,
    name: "Bota Shekinah",
    description: "Estilo contemporâneo com toque clássico",
    alt: "Bota ankle caramelo Shekinah - Calçado feminino moderno em couro legítimo"
  },
];

const Collections = () => {
  const navigate = useNavigate();
  
  return (
    <section id="colecoes" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            Nossa Coleção
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Descubra a Beleza em Cada Par
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore a sofisticação que define cada peça de nossa coleção. 
            Criada para a mulher contemporânea que não abre mão de estilo e conforto.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {products.map((product, index) => (
            <div 
              key={index} 
              className="animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button variant="hero" size="xl" onClick={() => navigate('/colecoes')}>
            Ver Todas as Coleções
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Collections;
