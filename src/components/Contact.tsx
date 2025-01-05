import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin } from "lucide-react";
import contactData from "../lib/data.json";

const { name, profession } = contactData;
const { email, github, linkedin } = contactData.contacts;

export const Contact = () => {
  return (
    <footer className="bg-card/50 border-t border-white/10 py-12 px-4 animate-fade-in" id="contact">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="animate-slide-in">
            <h2 className="text-2xl font-bold mb-2 text-white">{name}</h2>
            <p className="text-gray-400">{profession}</p>
            <p className="text-gray-400">Email: {email}</p>
          </div>

          <div className="flex justify-center mt-8 gap-4">
            <a href={`mailto:${email}`}>
              <Button variant="outline" size="lg" className="w-full gap-2 hover:scale-105 transition-transform">
                <Mail className="w-5 h-5" />
                Contact Me
              </Button>
            </a>
            <a href={github} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon" className="hover:scale-110 transition-transform">
                <Github className="w-5 h-5" />
              </Button>
            </a>
            <a href={linkedin} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon" className="hover:scale-110 transition-transform">
                <Linkedin className="w-5 h-5" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};