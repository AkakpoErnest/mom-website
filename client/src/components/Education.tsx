import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Education() {
  const education = [
    {
      degree: "PhD in French (Linguistics and Didactics)",
      school: "University of Cape Coast",
      year: "Doctorate"
    },
    {
      degree: "MPhil in French",
      school: "University of Education, Winneba",
      year: "Postgraduate"
    },
    {
      degree: "M.Ed. in Computer Education and Technology",
      school: "Ohio University, USA",
      year: "Postgraduate"
    },
    {
      degree: "B.Ed. in French",
      school: "University of Education, Winneba",
      year: "Undergraduate"
    }
  ];

  const certifications = [
    "Lean Theory Programme Certificate - University of St Andrews, Scotland",
    "Diploma in Management of Higher Education Institutes - Galilee Institute, Israel",
    "Certificate in Educational Leadership - The Hague University of Applied Sciences, Holland"
  ];

  return (
    <section id="education" className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "30px 30px" }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Degrees Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-white/10 rounded-lg">
                <GraduationCap className="w-8 h-8 text-secondary" />
              </div>
              <h2 className="text-3xl font-serif font-bold text-white">Academic Degrees</h2>
            </div>

            <div className="space-y-8 border-l border-white/20 pl-8 ml-4">
              {education.map((edu, idx) => (
                <div key={idx} className="relative">
                  <div className="absolute -left-[41px] top-1 w-5 h-5 bg-secondary rounded-full border-4 border-primary"></div>
                  <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                  <p className="text-white/80 mt-1">{edu.school}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certifications Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-white/10 rounded-lg">
                <Award className="w-8 h-8 text-secondary" />
              </div>
              <h2 className="text-3xl font-serif font-bold text-white">Certifications</h2>
            </div>

            <div className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
              <ul className="space-y-6">
                {certifications.map((cert, idx) => (
                  <li key={idx} className="flex gap-4">
                    <div className="w-2 h-2 mt-2.5 bg-secondary rounded-full flex-shrink-0" />
                    <span className="text-lg text-white/90 leading-relaxed">{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
