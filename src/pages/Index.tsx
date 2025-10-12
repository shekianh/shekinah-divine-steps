import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Values from "@/components/Values";
import Collections from "@/components/Collections";
import Categories from "@/components/Categories";
import WhereToBuy from "@/components/WhereToBy";
import AutoGallery from "@/components/AutoGallery";
import InstagramFeed from "@/components/InstagramFeed";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll('.parallax-slow');
      parallaxElements.forEach((el) => {
        const speed = 0.5;
        (el as HTMLElement).style.setProperty('--scroll-y', `${scrolled * speed}px`);
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Values />
      <Collections />
      <Categories />
      <WhereToBuy />
      <AutoGallery />
      <InstagramFeed />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
