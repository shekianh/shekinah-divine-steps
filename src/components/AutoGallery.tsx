import { useState } from "react";
import { collections, Collection } from "@/data/collections";
import ProductCard from "./ProductCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Sparkles, Package, TrendingUp } from "lucide-react";

const AutoGallery = () => {
  const [selectedCollection, setSelectedCollection] = useState<string>("all");

  const filteredCollections = selectedCollection === "all" 
    ? collections 
    : collections.filter(col => col.id === selectedCollection);

  return (
    <section id="galeria" className="py-20 bg-background/50 backdrop-blur-sm relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
            <Package className="w-4 h-4" />
            Galeria Automática
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Nossas Linhas e Coleções
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore cada linha organizada por código e temporada
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-3 lg:w-auto lg:inline-grid mb-12">
            <TabsTrigger value="all" onClick={() => setSelectedCollection("all")}>
              <Sparkles className="w-4 h-4 mr-2" />
              Todas
            </TabsTrigger>
            {collections.map((collection) => (
              <TabsTrigger 
                key={collection.id} 
                value={collection.id}
                onClick={() => setSelectedCollection(collection.id)}
              >
                {collection.name}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="all" className="space-y-20">
            {collections.map((collection, colIndex) => (
              <CollectionSection key={collection.id} collection={collection} index={colIndex} />
            ))}
          </TabsContent>

          {collections.map((collection) => (
            <TabsContent key={collection.id} value={collection.id}>
              <CollectionSection collection={collection} index={0} />
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

interface CollectionSectionProps {
  collection: Collection;
  index: number;
}

const CollectionSection = ({ collection, index }: CollectionSectionProps) => {
  return (
    <div 
      className="animate-fade-in"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="mb-8 p-6 bg-gradient-card rounded-2xl border border-border/50 backdrop-blur-sm">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-3xl font-bold mb-2">{collection.name}</h3>
            <p className="text-lg text-muted-foreground mb-2">
              {collection.description}
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full text-primary text-sm">
              <TrendingUp className="w-3 h-3" />
              {collection.season}
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          {collection.products.map((product, productIndex) => (
            <div 
              key={product.id}
              className="animate-slide-up"
              style={{ animationDelay: `${productIndex * 100}ms` }}
            >
              <ProductCard 
                image={product.image}
                name={product.name}
                description={product.description}
                alt={`${product.name} - Código ${product.code}`}
              />
              <div className="mt-3 text-center">
                <span className="text-xs font-mono text-muted-foreground bg-muted px-2 py-1 rounded">
                  {product.code}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AutoGallery;
