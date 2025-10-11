import { Sparkles } from "lucide-react";
import craftsmanshipImage from "@/assets/craftsmanship.jpg";
import collectionImage from "@/assets/collection-display.jpg";

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            Nossa História
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Nossa Essência, Sua Inspiração
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6 animate-slide-up">
            <p className="text-lg text-foreground leading-relaxed">
              Há mais de 5 anos, a Shekinah Calçados nasceu de um sonho e de uma profunda 
              conexão com valores que transcendem o universo da moda. O nome <span className="font-semibold text-primary">'Shekinah'</span>, 
              de origem hebraica, representa a <span className="font-semibold">'Glória de Deus'</span> ou 
              <span className="font-semibold"> 'Presença Divina'</span>. Para nós, essa presença se manifesta em cada detalhe, 
              em cada costura, no cuidado e na paixão que dedicamos à criação de calçados femininos.
            </p>
            
            <p className="text-lg text-foreground leading-relaxed">
              Nossa jornada é guiada pela crença de que cada mulher merece sentir-se especial, 
              confiante e conectada com sua própria essência. É por isso que cada par de sapatos 
              Shekinah é mais do que um acessório; é um reflexo de beleza, conforto e um toque 
              de inspiração divina.
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl" />
            <img 
              src={craftsmanshipImage} 
              alt="Artesão trabalhando cuidadosamente em sapato de luxo - Processo artesanal Shekinah Calçados" 
              className="relative rounded-3xl shadow-soft w-full h-auto object-cover"
            />
          </div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="absolute inset-0 bg-gradient-to-bl from-secondary/20 to-primary/20 rounded-3xl blur-2xl" />
            <img 
              src={collectionImage} 
              alt="Coleção de calçados femininos elegantes Shekinah dispostos artisticamente" 
              className="relative rounded-3xl shadow-soft w-full h-auto object-cover"
            />
          </div>
          
          <div className="order-1 lg:order-2 space-y-6 animate-slide-up">
            <p className="text-lg text-foreground leading-relaxed">
              Com um olhar atento às tendências e um compromisso inabalável com a qualidade, 
              a Shekinah Calçados orgulha-se de sua trajetória, consolidando-se como referência 
              no mercado de calçados femininos.
            </p>
            
            <p className="text-lg text-foreground leading-relaxed">
              Sempre inovando e elevando o padrão de elegância e bem-estar, buscamos criar 
              experiências memoráveis que acompanham cada passo da mulher moderna.
            </p>
            
            <div className="gradient-divine p-6 rounded-2xl shadow-elegant">
              <p className="text-foreground text-center font-medium text-lg">
                "Cada par é criado com amor e dedicação, refletindo nossa crença 
                de que trabalhar com paixão e propósito eleva cada criação."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
