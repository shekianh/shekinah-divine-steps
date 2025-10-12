import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive",
      });
      return;
    }

    // Here you would normally send the data to your backend
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve.",
    });
    
    // Reset form
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contato" className="py-20 gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Conecte-se Conosco
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Seja para dúvidas, sugestões ou apenas para um bate-papo, 
            estamos sempre à disposição para atendê-la.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <Card className="gradient-card border-0 shadow-elegant">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6">Envie sua Mensagem</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Nome Completo *</label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Seu nome"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">E-mail *</label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">Telefone</label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="(00) 00000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Mensagem *</label>
                  <Textarea
                    id="message"
                    placeholder="Como podemos ajudar?"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>
                
                <Button type="submit" variant="hero" size="lg" className="w-full">
                  Enviar Mensagem
                </Button>
              </form>
            </CardContent>
          </Card>
          
          <div className="space-y-8">
            <Card className="gradient-card border-0 shadow-soft hover:shadow-elegant transition-smooth">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">E-mail</h4>
                  <p className="text-muted-foreground">contato@shekinahcalcados.com.br</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="gradient-card border-0 shadow-soft hover:shadow-elegant transition-smooth">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Telefone</h4>
                  <p className="text-muted-foreground">(11) 98765-4321</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="gradient-card border-0 shadow-soft hover:shadow-elegant transition-smooth">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Localização</h4>
                  <p className="text-muted-foreground">São Paulo - SP, Brasil</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="gradient-card border-0 shadow-elegant p-8">
              <h4 className="font-semibold mb-4 text-center">Siga-nos nas Redes Sociais</h4>
              <div className="flex justify-center gap-4">
                <a 
                  href="https://instagram.com/calcadoshekinah" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-gradient-to-r from-[#f09433] via-[#e6683c] to-[#bc1888] hover:opacity-90 transition-smooth rounded-full"
                >
                  <Instagram className="w-5 h-5 text-white" />
                </a>
                <button 
                  className="w-12 h-12 rounded-full bg-primary/20 hover:bg-primary/30 flex items-center justify-center transition-smooth"
                  aria-label="Facebook Shekinah Calçados"
                >
                  <Facebook className="w-6 h-6 text-primary" />
                </button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
