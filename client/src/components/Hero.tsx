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
          className="relative flex items-center justify-center lg:min-h-[600px]"
        >
          <div className="absolute inset-x-8 top-10 bottom-12 -z-10 rounded-[2rem] border border-primary/10 bg-gradient-to-br from-white via-primary/[0.04] to-secondary/15" />

          <motion.div
            className="relative w-full max-w-[24rem] aspect-[1/1.08]"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            <div className="absolute -inset-4 -z-10 rotate-3 rounded-[2rem] bg-primary shadow-[0_30px_80px_-36px_rgba(15,23,42,0.65)]" />
            <div className="absolute -right-4 -top-4 z-10 h-24 w-24 rounded-tr-[2rem] border-r-4 border-t-4 border-secondary" />
            <div className="absolute -bottom-4 -left-4 z-10 h-24 w-24 rounded-bl-[2rem] border-b-4 border-l-4 border-secondary" />

            <div className="relative h-full overflow-hidden rounded-[1.75rem] border-[10px] border-white bg-white shadow-2xl">
              <img
                src="/images/dr-cecilia-agbeh.jpg"
                alt="Dr. Cecilia Agbeh"
                className="h-full w-full origin-bottom scale-[1.26] object-cover object-bottom"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/35 via-transparent to-transparent" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
