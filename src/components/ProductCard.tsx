import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";

interface ProductCardProps {
  image: string;
  name: string;
  description: string;
  alt: string;
}

const ProductCard = ({ image, name, description, alt }: ProductCardProps) => {
  return (
    <Card className="gradient-card border-0 shadow-soft hover:shadow-elegant transition-divine group overflow-hidden">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={alt}
          className="w-full h-80 object-cover group-hover:scale-110 transition-divine"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent opacity-0 group-hover:opacity-100 transition-smooth flex items-end justify-center pb-8">
          <Button variant="hero" size="lg">
            <Eye className="mr-2" />
            Ver Detalhes
          </Button>
        </div>
      </div>
      <CardContent className="p-6 text-center space-y-3">
        <h3 className="text-2xl font-bold text-foreground">{name}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
