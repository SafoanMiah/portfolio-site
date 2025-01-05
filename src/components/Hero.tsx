import { Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import TerminalPortfolio from './TerminalPortfolio';
import { useState } from 'react';
import data from "../lib/data.json";

const aboutMe = data.aboutMe;
const contacts = data.contacts;
const name = data.name;
const buttons = data.buttons;
const profession = data.profession;

export const Hero = () => {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [showNotice, setShowNotice] = useState(false);

  const handleTerminalClick = () => {
    if (window.innerWidth < 768) {
      setShowNotice(true);
    } else {
      setIsTerminalOpen(true);
    }
  };

  const handleCloseNotice = () => {
    setShowNotice(false);
  };

  return (
    <section className="min-h-[70vh] flex flex-col md:flex-row items-center relative px-4">
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-background to-background -z-10"
      />

      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-left space-y-6 max-w-2xl animate-fade-in relative">
          <div
            className="absolute -left-8 top-0 h-full w-1 bg-gradient-to-b from-primary/50 via-primary/20 to-transparent"
          />

          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
            {name}
            <span className="text-primary animate-pulse">_</span>
          </h1>

          <h2 className="text-xl md:text-2xl text-primary relative inline-block">
            {profession}
            <div
              className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary/50 animate-pulse"
            />
          </h2>

          <p className="text-[rgb(155,164,184)] text-sm md:text-base">
            {aboutMe}
          </p>

          <div className="flex flex-col items-start gap-4 mt-8">
            <div className="flex gap-4 flex-wrap">
              {buttons.filter(button => button.icon !== 'mail').map((button, index) => (
                <a href={button.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 w-full md:w-auto">
                  <Button key={index} variant="outline" size="lg" className="gap-2 relative group overflow-hidden w-full md:w-auto">
                    <div className="absolute inset-0 bg-primary/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    {button.icon === 'github' && <Github className="w-5 h-5" />}
                    {button.icon === 'linkedin' && <Linkedin className="w-5 h-5" />}
                    {button.icon === 'download' && <Download className="w-5 h-5" />}
                    {button.label}
                  </Button>
                </a>
              ))}
            </div>
            <Button
              variant="default"
              size="lg"
              className="w-full md:w-4/6 bg-primary text-white hover:bg-white hover:text-primary"
              onClick={handleTerminalClick}
            >
              Terminal
            </Button>
          </div>
        </div>

        <div className="hidden lg:block w-full md:w-1/3 mt-8 md:mt-0">
          <div className="relative w-64 h-64 mx-auto">
            <div className="absolute inset-0 bg-primary/20 rounded-full animate-pulse" />
            <div className="absolute inset-4 bg-primary/30 rounded-full animate-pulse delay-75" />
            <div className="absolute inset-8 bg-primary/40 rounded-full animate-pulse delay-150" />
          </div>
        </div>
      </div>
      {isTerminalOpen && <TerminalPortfolio isOpen={isTerminalOpen} onClose={() => setIsTerminalOpen(false)} />}
      {showNotice && (
        <div className="fixed bottom-4 left-0 w-full bg-primary text-white p-4 rounded shadow-lg">
          <p>Please use desktop mode to access the terminal.</p>
          <button onClick={handleCloseNotice} className="mt-2 underline">Close</button>
        </div>
      )}
    </section>
  );
};