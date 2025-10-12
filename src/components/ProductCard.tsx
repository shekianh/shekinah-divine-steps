import { Card, CardContent } from "@/components/ui/card";

interface ProductCardProps {
  image: string;
  name: string;
  description: string;
  alt: string;
}

const ProductCard = ({ image, name, description, alt }: ProductCardProps) => {
  return (
    <Card className="group border-0 shadow-soft hover:shadow-neon transition-divine hover-lift hover-shine overflow-hidden bg-card">
      <div className="relative overflow-hidden aspect-square bg-secondary/30">
        <img 
          src={image} 
          alt={alt}
          className="w-full h-full object-cover group-hover:scale-110 transition-divine"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-divine flex items-end p-6">
          <div className="text-foreground">
            <h3 className="text-xl font-bold text-primary mb-2">{name}</h3>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
        </div>
        <div className="absolute top-4 right-4 w-12 h-12 bg-primary/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-divine animate-pulse-glow">
          <span className="text-primary text-xl">✨</span>
        </div>
      </div>
      <CardContent className="p-6 bg-card/95 backdrop-blur-sm">
        <h3 className="text-xl font-bold mb-2 text-foreground">{name}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
