import { Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-950 text-slate-400 py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 mb-16">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 18 }}
          >
            <h2 className="text-3xl font-serif font-bold text-white mb-6">Contact Information</h2>
            <p className="mb-8 max-w-md">
              Available for speaking engagements, academic consultations, and educational leadership discussions.
            </p>

            <div className="space-y-4">
              <motion.div whileHover={{ x: 6 }} className="flex items-center gap-4">
                <motion.span whileHover={{ scale: 1.3, rotate: -8 }} className="inline-flex">
                  <MapPin className="text-secondary w-5 h-5 flex-shrink-0" />
                </motion.span>
                <span>National Teaching Council, Accra, Ghana</span>
              </motion.div>
              <motion.div whileHover={{ x: 6 }} className="flex items-center gap-4">
                <motion.span whileHover={{ scale: 1.3, rotate: -8 }} className="inline-flex">
                  <Mail className="text-secondary w-5 h-5 flex-shrink-0" />
                </motion.span>
                <span>info@ntc.gov.gh</span>
              </motion.div>
              <motion.div whileHover={{ x: 6 }} className="flex items-center gap-4">
                <motion.span whileHover={{ scale: 1.3, rotate: -8 }} className="inline-flex">
                  <Phone className="text-secondary w-5 h-5 flex-shrink-0" />
                </motion.span>
                <span>+233 (0) 30 273 6555</span>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 18, delay: 0.15 }}
            className="bg-slate-900 p-8 rounded-2xl border border-slate-800"
          >
            <h3 className="text-white font-bold mb-4">Send a Message</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Input placeholder="Name" className="bg-slate-950 border-slate-800 text-white" />
                <Input placeholder="Email" className="bg-slate-950 border-slate-800 text-white" />
              </div>
              <Input placeholder="Subject" className="bg-slate-950 border-slate-800 text-white" />
              <Textarea placeholder="Message" className="bg-slate-950 border-slate-800 text-white min-h-[100px]" />
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Button className="w-full bg-secondary text-primary hover:bg-secondary/90">Send Message</Button>
              </motion.div>
            </form>
          </motion.div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Dr. Cecilia Esinam Eyaa Agbeh. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
