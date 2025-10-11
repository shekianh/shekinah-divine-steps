import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    text: "Os sapatos da Shekinah são puro luxo e conforto! Sinto-me poderosa e elegante ao usá-los.",
    author: "Maria Silva",
    location: "São Paulo, SP"
  },
  {
    text: "Além da beleza, a qualidade é impecável. Virou minha marca favorita!",
    author: "Ana Santos",
    location: "Rio de Janeiro, RJ"
  },
  {
    text: "É incrível como cada detalhe é pensado. Realmente, a presença divina está em cada par.",
    author: "Juliana Costa",
    location: "Belo Horizonte, MG"
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Shekinah nos Pés, Sorrisos no Rosto
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A satisfação de nossas clientes é a nossa maior recompensa. 
            Veja o que elas têm a dizer sobre a experiência Shekinah.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="gradient-card border-0 shadow-soft hover:shadow-elegant transition-divine"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8 space-y-6">
                <div className="flex justify-between items-start">
                  <Quote className="w-10 h-10 text-primary/30" />
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
                
                <p className="text-foreground leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                
                <div className="pt-4 border-t border-border">
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
