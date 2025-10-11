import { useState } from "react";
import { ArrowLeft, Sparkles, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductCard from "@/components/ProductCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import scarpinImage from "@/assets/scarpin-elegante.jpg";
import sandaliaImage from "@/assets/sandalia-divina.jpg";
import sapatilhaImage from "@/assets/sapatilha-aurora.jpg";
import botaImage from "@/assets/bota-shekinah.jpg";
import { useNavigate } from "react-router-dom";

const allProducts = [
  {
    image: scarpinImage,
    name: "Scarpin Elegante",
    description: "Sofisticação para momentos especiais",
    alt: "Scarpin dourado champanhe Shekinah",
    category: "scarpins",
    collection: "classica"
  },
  {
    image: sandaliaImage,
    name: "Sandália Divina",
    description: "Delicadeza e charme em cada passo",
    alt: "Sandália de tiras rose gold Shekinah",
    category: "sandalias",
    collection: "atual"
  },
  {
    image: sapatilhaImage,
    name: "Sapatilha Aurora",
    description: "Conforto e elegância para o dia a dia",
    alt: "Sapatilha nude Shekinah",
    category: "sapatilhas",
    collection: "atual"
  },
  {
    image: botaImage,
    name: "Bota Shekinah",
    description: "Estilo contemporâneo com toque clássico",
    alt: "Bota ankle caramelo Shekinah",
    category: "botas",
    collection: "tendencia"
  },
  {
    image: scarpinImage,
    name: "Scarpin Noite",
    description: "Brilho para ocasiões especiais",
    alt: "Scarpin elegante para festas",
    category: "scarpins",
    collection: "tendencia"
  },
  {
    image: sandaliaImage,
    name: "Sandália Verão",
    description: "Frescor e elegância",
    alt: "Sandália leve para verão",
    category: "sandalias",
    collection: "tendencia"
  },
];

const CollectionsPage = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("todas");

  const filteredProducts = selectedCategory === "todas" 
    ? allProducts 
    : allProducts.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar ao Início
          </Button>

          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
              <Sparkles className="w-4 h-4" />
              Todas as Coleções
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Explore Nossa Linha Completa
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Descubra cada detalhe das nossas coleções, desde os clássicos atemporais até as últimas tendências
            </p>
          </div>

          <Tabs defaultValue="todas" className="w-full mb-12">
            <TabsList className="grid w-full grid-cols-3 lg:w-auto lg:inline-grid mb-12">
              <TabsTrigger value="todas" onClick={() => setSelectedCategory("todas")}>
                Todas
              </TabsTrigger>
              <TabsTrigger value="classica" onClick={() => setSelectedCategory("classica")}>
                <Sparkles className="w-4 h-4 mr-2" />
                Clássica
              </TabsTrigger>
              <TabsTrigger value="atual" onClick={() => setSelectedCategory("atual")}>
                Atual
              </TabsTrigger>
              <TabsTrigger value="tendencia" onClick={() => setSelectedCategory("tendencia")}>
                <TrendingUp className="w-4 h-4 mr-2" />
                Tendências
              </TabsTrigger>
            </TabsList>

            <TabsContent value="todas" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {allProducts.map((product, index) => (
                  <div
                    key={index}
                    className="animate-slide-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <ProductCard {...product} />
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="classica" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {allProducts.filter(p => p.collection === "classica").map((product, index) => (
                  <div
                    key={index}
                    className="animate-slide-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <ProductCard {...product} />
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="atual" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {allProducts.filter(p => p.collection === "atual").map((product, index) => (
                  <div
                    key={index}
                    className="animate-slide-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <ProductCard {...product} />
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="tendencia" className="mt-8">
              <div className="mb-8 p-6 bg-gradient-divine rounded-2xl text-white">
                <div className="flex items-center gap-3 mb-4">
                  <TrendingUp className="w-8 h-8" />
                  <h3 className="text-2xl font-bold">Tendências 2024</h3>
                </div>
                <p className="text-lg opacity-90">
                  As últimas novidades em calçados femininos, direto das passarelas para seus pés
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {allProducts.filter(p => p.collection === "tendencia").map((product, index) => (
                  <div
                    key={index}
                    className="animate-slide-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <ProductCard {...product} />
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CollectionsPage;
