import { Sparkles, Award, Heart, Palette, ShieldCheck, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const values = [
  {
    icon: Heart,
    title: "Fé e Propósito",
    description: "Acreditamos que o trabalho com paixão e propósito eleva cada criação.",
  },
  {
    icon: Award,
    title: "Qualidade Impecável",
    description: "Comprometimento com materiais nobres e acabamento artesanal.",
  },
  {
    icon: Palette,
    title: "Elegância Atemporal",
    description: "Designs que combinam tendências com um clássico duradouro.",
  },
  {
    icon: ShieldCheck,
    title: "Conforto Essencial",
    description: "Criamos calçados que abraçam os pés com delicadeza.",
  },
  {
    icon: TrendingUp,
    title: "Inovação Constante",
    description: "Buscamos sempre aprimorar e surpreender.",
  },
];

const Values = () => {
  return (
    <section id="valores" className="py-20 bg-background/50 backdrop-blur-sm relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            Nossos Valores
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Pilares que Nos Sustentam
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Princípios que guiam cada passo da nossa jornada e inspiram cada criação
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <Card 
              key={index} 
              className="gradient-card border-0 shadow-soft hover:shadow-elegant transition-divine group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8 text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 group-hover:shadow-divine transition-divine">
                  <value.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-divine" />
                </div>
                <h3 className="text-xl font-bold text-foreground">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
