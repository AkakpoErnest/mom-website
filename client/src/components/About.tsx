import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 text-primary border-primary/20">About Me</Badge>
            <h2 className="text-4xl font-serif font-bold text-primary mb-6">Academic & Educational Leader</h2>
            <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
          </div>

          <div className="prose prose-lg text-muted-foreground mx-auto text-justify">
            <p className="mb-6">
              Dr. Cecilia Esinam Eyaa Agbeh is a distinguished academic and the current 
              <strong className="text-primary font-semibold"> Deputy Registrar in charge of Operations</strong> at the National Teaching Council, Ghana.
            </p>
            
            <p className="mb-6">
              With a career spanning over a decade in higher education, she has established herself as a transformational leader. 
              She served as the <strong className="text-primary font-semibold">Principal of Mount Mary College of Education</strong> in Somanya, Ghana, 
              for eight years (2017–2025), where she championed numerous educational reforms and infrastructure developments.
            </p>
            
            <p>
              Prior to her role as Principal, she was a Senior Lecturer at the University of Education, Winneba, where she also held leadership positions 
              including Head of the Department of French Education. She is a renowned speaker at international conferences, focusing on Teacher Education 
              and the pedagogy of French as a foreign language.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
