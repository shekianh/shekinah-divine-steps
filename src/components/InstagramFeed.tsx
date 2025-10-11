import { Instagram, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import scarpinImage from "@/assets/scarpin-elegante.jpg";
import sandaliaImage from "@/assets/sandalia-divina.jpg";
import sapatilhaImage from "@/assets/sapatilha-aurora.jpg";
import botaImage from "@/assets/bota-shekinah.jpg";
import heroImage from "@/assets/hero-shoe.jpg";
import collectionImage from "@/assets/collection-display.jpg";

const instagramPosts = [
  {
    image: scarpinImage,
    likes: 1245,
    caption: "Elegância em cada detalhe ✨"
  },
  {
    image: sandaliaImage,
    likes: 2103,
    caption: "Delicadeza que encanta 💖"
  },
  {
    image: sapatilhaImage,
    likes: 1876,
    caption: "Conforto & Estilo para o dia a dia"
  },
  {
    image: botaImage,
    likes: 1534,
    caption: "Contemporâneo com toque clássico 🌟"
  },
  {
    image: heroImage,
    likes: 3421,
    caption: "Nossa mais nova coleção chegou!"
  },
  {
    image: collectionImage,
    likes: 2890,
    caption: "Shekinah: onde fé encontra elegância"
  }
];

const InstagramFeed = () => {
  return (
    <section id="instagram" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#f09433] via-[#e6683c] to-[#bc1888] text-white rounded-full text-sm font-medium mb-4">
            <Instagram className="w-4 h-4" />
            @shekinahcalcados
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Nos Siga no Instagram
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Acompanhe nossas novidades, tendências e inspirações diárias
          </p>
          <Button
            variant="hero"
            size="lg"
            onClick={() => window.open('https://instagram.com/shekinahcalcados', '_blank')}
          >
            <Instagram className="mr-2" />
            Seguir no Instagram
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {instagramPosts.map((post, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden border-0 shadow-soft hover:shadow-elegant transition-divine cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => window.open('https://instagram.com/shekinahcalcados', '_blank')}
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={post.image}
                  alt={post.caption}
                  className="w-full h-full object-cover group-hover:scale-110 transition-divine"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent opacity-0 group-hover:opacity-100 transition-smooth flex flex-col items-center justify-center p-4 text-white">
                  <Instagram className="w-8 h-8 mb-2" />
                  <p className="text-sm font-medium text-center mb-2">
                    {post.caption}
                  </p>
                  <div className="flex items-center gap-1 text-xs">
                    <span>❤️</span>
                    <span>{post.likes.toLocaleString('pt-BR')}</span>
                  </div>
                  <ExternalLink className="w-4 h-4 mt-2" />
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            💫 Marque @shekinahcalcados nas suas fotos para aparecer aqui!
          </p>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
