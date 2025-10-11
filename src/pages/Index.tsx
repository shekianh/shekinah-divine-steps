import Hero from "@/components/Hero";
import About from "@/components/About";
import Values from "@/components/Values";
import Collections from "@/components/Collections";
import Categories from "@/components/Categories";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Values />
      <Collections />
      <Categories />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
