import { motion } from "framer-motion";
import { CalendarDays, Briefcase, GraduationCap, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Experience() {
  const experiences = [
    {
      role: "Deputy Registrar (Operations)",
      org: "National Teaching Council, Ghana",
      period: "2025 - Present",
      description: "Overseeing operational strategies and implementation for teacher regulation in Ghana."
    },
    {
      role: "Principal",
      org: "Mount Mary College of Education, Somanya",
      period: "2017 - 2025",
      description: "Led an 8-year tenure driving academic excellence for 1,400+ students. Achieved 60% female enrollment and managed 140+ staff. Launched the STS program across 124 schools."
    },
    {
      role: "Senior Lecturer & HOD (French Education)",
      org: "University of Education, Winneba",
      period: "2013 - 2017",
      description: "Taught advanced French linguistics and led departmental administration."
    }
  ];

  return (
    <section id="experience" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-primary mb-4">Professional Trajectory</h2>
          <p className="text-muted-foreground">A timeline of leadership and service</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-6 text-primary">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">{exp.role}</h3>
                  <p className="text-secondary-foreground font-medium mb-4">{exp.org}</p>
                  
                  <div className="flex items-center text-sm text-muted-foreground mb-4">
                    <CalendarDays className="w-4 h-4 mr-2" />
                    {exp.period}
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
