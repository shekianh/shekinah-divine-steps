import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import scarpinImage from "@/assets/scarpin-elegante.jpg";
import sandaliaImage from "@/assets/sandalia-divina.jpg";
import sapatilhaImage from "@/assets/sapatilha-aurora.jpg";
import botaImage from "@/assets/bota-shekinah.jpg";

const categories = [
  {
    image: scarpinImage,
    name: "Scarpins",
    description: "Elegância clássica",
    alt: "Categoria Scarpins - Calçados femininos de salto alto elegantes"
  },
  {
    image: sandaliaImage,
    name: "Sandálias",
    description: "Sofisticação leve",
    alt: "Categoria Sandálias - Calçados femininos delicados e sofisticados"
  },
  {
    image: sapatilhaImage,
    name: "Sapatilhas",
    description: "Conforto charmoso",
    alt: "Categoria Sapatilhas - Calçados femininos confortáveis e elegantes"
  },
  {
    image: botaImage,
    name: "Botas",
    description: "Estilo contemporâneo",
    alt: "Categoria Botas - Calçados femininos modernos e versáteis"
  },
];

const Categories = () => {
  return (
    <section className="py-20 gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Encontre o Par Perfeito para Você
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Da elegância do scarpin ao conforto das sapatilhas, nossa gama de produtos 
            é pensada para acompanhar você em todos os momentos.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Card 
              key={index} 
              className="gradient-card border-0 shadow-soft hover:shadow-elegant transition-divine group cursor-pointer overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-divine"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent" />
                <CardContent className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                  <p className="text-white/90 mb-4">{category.description}</p>
                  <div className="flex items-center text-white group-hover:translate-x-2 transition-smooth">
                    <span className="font-medium">Explorar</span>
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
