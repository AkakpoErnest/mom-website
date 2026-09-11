import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const textContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const textItem = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 260, damping: 20 },
  },
};

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
      <motion.div
        className="absolute top-0 right-0 -z-10 w-1/3 h-full bg-secondary/5 blur-[120px]"
        animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-0 -z-10 w-1/3 h-full bg-primary/5 blur-[120px]"
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          variants={textContainer}
          initial="hidden"
          animate="show"
          className="space-y-6"
        >
          <motion.div
            variants={textItem}
            className="inline-block px-3 py-1 bg-secondary/20 text-primary rounded-full text-sm font-medium tracking-wide"
          >
            Deputy Registrar (Operations)
          </motion.div>

          <motion.h1
            variants={textItem}
            className="text-5xl lg:text-7xl font-serif font-bold leading-tight text-primary"
          >
            Dr. Cecilia Esinam <br />
            <span className="text-secondary-foreground/80">Eyaa Agbeh</span>
          </motion.h1>

          <motion.p
            variants={textItem}
            className="text-xl text-muted-foreground max-w-lg leading-relaxed"
          >
            A visionary and transformational leader dedicated to advancing education and teacher training in Ghana.
          </motion.p>

          <motion.div variants={textItem} className="flex flex-wrap gap-4 pt-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-primary text-white hover:bg-primary/90 cursor-pointer"
                onClick={() => scrollToSection('#about')}
              >
                Read Biography
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                className="border-primary/20 hover:bg-secondary/10 cursor-pointer"
                onClick={() => scrollToSection('#contact')}
              >
                Contact Me <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -6 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.9, delay: 0.2, type: "spring", stiffness: 90, damping: 14 }}
          className="relative lg:h-[600px] flex items-center justify-center"
        >
          <motion.div
            className="relative w-full max-w-md aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-8 border-white/50"
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            {/* Placeholder for professional image */}
            <img
              src="/images/dr-cecilia-agbeh.jpg"
              alt="Dr. Cecilia Agbeh"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-60"></div>
          </motion.div>

          {/* Decorative elements */}
          <motion.div
            className="absolute -bottom-6 -right-6 w-24 h-24 bg-secondary rounded-full blur-xl opacity-50"
            animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -top-6 -left-6 w-32 h-32 bg-primary rounded-full blur-xl opacity-20"
            animate={{ scale: [1, 1.25, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          />
        </motion.div>
      </div>
    </section>
  );
}
