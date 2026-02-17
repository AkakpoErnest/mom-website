import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-background pt-16">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -z-10 w-1/3 h-full bg-secondary/5 blur-[120px]" />
      <div className="absolute bottom-0 left-0 -z-10 w-1/3 h-full bg-primary/5 blur-[120px]" />

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="inline-block px-3 py-1 bg-secondary/20 text-primary rounded-full text-sm font-medium tracking-wide">
            Deputy Registrar (Operations)
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-serif font-bold leading-tight text-primary">
            Dr. Cecilia Esinam <br />
            <span className="text-secondary-foreground/80">Eyaa Agbeh</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
            A visionary and transformational leader dedicated to advancing education and teacher training in Ghana.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Button 
              size="lg" 
              className="bg-primary text-white hover:bg-primary/90 cursor-pointer"
              onClick={() => scrollToSection('#about')}
            >
              Read Biography
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary/20 hover:bg-secondary/10 cursor-pointer"
              onClick={() => scrollToSection('#contact')}
            >
              Contact Me <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative lg:h-[600px] flex items-center justify-center"
        >
          <div className="relative w-full max-w-md aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-8 border-white/50">
             {/* Placeholder for professional image */}
            <img 
              src="/images/dr-cecilia-agbeh.jpg" 
              alt="Dr. Cecilia Agbeh"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-60"></div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-secondary rounded-full blur-xl opacity-50"></div>
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary rounded-full blur-xl opacity-20"></div>
        </motion.div>
      </div>
    </section>
  );
}
