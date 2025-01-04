import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin } from "lucide-react";

export const Contact = () => {
  return (
    <footer className="bg-card/50 border-t border-white/10 py-12 px-4 animate-fade-in" id="contact">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="animate-slide-in">
            <h2 className="text-2xl font-bold mb-2 text-white">Safoan Miah</h2>
            <p className="text-gray-400">Data Science Student</p>
          </div>
          
          <div className="flex justify-center">
            <Button variant="outline" size="lg" className="gap-2 hover:scale-105 transition-transform">
              <Mail className="w-5 h-5" />
              Contact Me
            </Button>
          </div>
          
          <div className="flex justify-end gap-4">
            <Button variant="outline" size="icon" className="hover:scale-110 transition-transform">
              <Github className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="icon" className="hover:scale-110 transition-transform">
              <Linkedin className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};