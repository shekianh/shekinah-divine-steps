import { ShoppingCart, Store, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const marketplaces = [
  {
    name: "Site Oficial",
    icon: Globe,
    url: "#",
    color: "bg-primary",
    description: "Compre direto da fábrica"
  },
  {
    name: "Mercado Livre",
    icon: ShoppingCart,
    url: "https://mercadolivre.com.br",
    color: "bg-[#FFE600]",
    description: "Frete grátis disponível"
  },
  {
    name: "Shopee",
    icon: ShoppingCart,
    url: "https://shopee.com.br",
    color: "bg-[#EE4D2D]",
    description: "Ofertas exclusivas"
  },
  {
    name: "Shein",
    icon: ShoppingCart,
    url: "https://shein.com.br",
    color: "bg-[#000000]",
    description: "Tendências internacionais"
  },
  {
    name: "Dafiti",
    icon: ShoppingCart,
    url: "https://dafiti.com.br",
    color: "bg-[#F5831F]",
    description: "Moda e estilo"
  },
  {
    name: "TikTok Shop",
    icon: ShoppingCart,
    url: "https://tiktok.com",
    color: "bg-[#000000]",
    description: "Novidades em vídeo"
  },
  {
    name: "Lojas Credenciadas",
    icon: Store,
    url: "#lojas",
    color: "bg-secondary",
    description: "Encontre perto de você"
  }
];

const WhereToBuy = () => {
  return (
    <section id="onde-comprar" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
            <ShoppingCart className="w-4 h-4" />
            Onde Comprar
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Encontre Shekinah Perto de Você
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Compre com segurança em nossos canais oficiais e parceiros credenciados
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {marketplaces.map((marketplace, index) => {
            const Icon = marketplace.icon;
            return (
              <Card
                key={index}
                className="gradient-card border-0 shadow-soft hover:shadow-elegant transition-divine group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 text-center space-y-4">
                  <div
                    className={`w-16 h-16 mx-auto rounded-2xl ${marketplace.color} flex items-center justify-center group-hover:scale-110 transition-divine shadow-soft`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    {marketplace.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {marketplace.description}
                  </p>
                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-smooth"
                    onClick={() => window.open(marketplace.url, '_blank')}
                  >
                    Visitar Loja
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button variant="hero" size="xl">
            <ShoppingCart className="mr-2" />
            Ver Todos os Canais
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhereToBuy;
