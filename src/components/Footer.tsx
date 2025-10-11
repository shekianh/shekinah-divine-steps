import { Heart } from "lucide-react";

const Footer = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 font-serif">Shekinah</h3>
            <p className="text-background/80 leading-relaxed">
              Onde a fé encontra a elegância. Transformando passos femininos em obras de arte há mais de 5 anos.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection("sobre")}
                  className="text-background/80 hover:text-background transition-smooth"
                >
                  Sobre Nós
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("colecoes")}
                  className="text-background/80 hover:text-background transition-smooth"
                >
                  Coleções
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("contato")}
                  className="text-background/80 hover:text-background transition-smooth"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Categorias</h4>
            <ul className="space-y-2 text-background/80">
              <li>Scarpins</li>
              <li>Sandálias</li>
              <li>Sapatilhas</li>
              <li>Botas</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Informações</h4>
            <ul className="space-y-2 text-background/80">
              <li>Política de Privacidade</li>
              <li>Termos de Uso</li>
              <li>Trocas e Devoluções</li>
              <li>FAQ</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-background/20 pt-8 text-center">
          <p className="text-background/80 flex items-center justify-center gap-2">
            © {new Date().getFullYear()} Shekinah Calçados. Todos os direitos reservados. 
            <span className="flex items-center gap-1">
              Feito com <Heart className="w-4 h-4 fill-primary text-primary" /> e fé
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
