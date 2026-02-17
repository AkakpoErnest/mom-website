import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-950 text-slate-400 py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          
          <div>
            <h2 className="text-3xl font-serif font-bold text-white mb-6">Contact Information</h2>
            <p className="mb-8 max-w-md">
              Available for speaking engagements, academic consultations, and educational leadership discussions.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <MapPin className="text-secondary" />
                <span>National Teaching Council, Accra, Ghana</span>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="text-secondary" />
                <span>info@ntc.gov.gh</span>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">
            <h3 className="text-white font-bold mb-4">Send a Message</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Input placeholder="Name" className="bg-slate-950 border-slate-800 text-white" />
                <Input placeholder="Email" className="bg-slate-950 border-slate-800 text-white" />
              </div>
              <Input placeholder="Subject" className="bg-slate-950 border-slate-800 text-white" />
              <Textarea placeholder="Message" className="bg-slate-950 border-slate-800 text-white min-h-[100px]" />
              <Button className="w-full bg-secondary text-primary hover:bg-secondary/90">Send Message</Button>
            </form>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Dr. Cecilia Esinam Eyaa Agbeh. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
