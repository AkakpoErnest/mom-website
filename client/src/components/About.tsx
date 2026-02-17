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
              As the <strong className="text-primary font-semibold">Principal of Mount Mary College of Education</strong> in Somanya (2017–2025), 
              she oversaw a significant period of growth, managing a community of over 1,400 students and 140 staff members. Under her leadership, 
              the college achieved a 60% female enrollment rate, reflecting her commitment to gender balance in teacher education.
            </p>

            <p className="mb-6">
              She successfully spearheaded the <strong className="text-primary font-semibold">Support Teaching in Schools (STS)</strong> program, 
              partnering with 124 basic schools to provide practical internship opportunities for student teachers. Her tenure was marked by 
              the celebration of the college's 75th Anniversary in 2025, an event that highlighted her visionary approach to institutional excellence.
            </p>
            
            <p>
              Dr. Agbeh is also a vocal advocate for educational infrastructure, frequently engaging with national policy makers to address 
              resource needs and teacher welfare. Her academic expertise in French Linguistics and Didactics, combined with her 
              leadership experience, makes her a unique voice in the landscape of Ghanaian Teacher Education.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
