import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import TerminalPortfolio from './TerminalPortfolio';
import { useState } from 'react';

export const Hero = () => {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  return (
    <section className="min-h-[70vh] flex items-center relative px-4">
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-background to-background -z-10"
      />

      <div className="container mx-auto flex justify-between items-center">
        <div className="text-left space-y-6 max-w-2xl animate-fade-in relative">
          <div
            className="absolute -left-8 top-0 h-full w-1 bg-gradient-to-b from-primary/50 via-primary/20 to-transparent"
          />

          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
            Safoan Miah
            <span className="text-primary animate-pulse">_</span>
          </h1>

          <h2 className="text-xl text-primary relative inline-block">
            Data Science Student
            <div
              className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary/50 animate-pulse"
            />
          </h2>

          <p className="text-lg text-gray-400">
            Passionate about leveraging data science to solve complex problems and create meaningful insights.
            Currently focused on developing innovative solutions using Python and PyTorch,
            combining technical expertise with creative problem-solving to extract meaningful
            insights from complex datasets.
          </p>

          <div className="flex gap-4 mt-8">
            <Button variant="outline" size="lg" className="gap-2 relative group overflow-hidden">
              <div className="absolute inset-0 bg-primary/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <Github className="w-5 h-5" />
              GitHub
            </Button>
            <Button variant="outline" size="lg" className="gap-2 relative group overflow-hidden">
              <div className="absolute inset-0 bg-primary/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </Button>
            <Button variant="outline" size="lg" className="gap-2 relative group overflow-hidden">
              <div className="absolute inset-0 bg-primary/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <Mail className="w-5 h-5" />
              Contact
            </Button>
          </div>

          <Button
            variant="default"
            size="lg"
            className="w-full lg:w-2/3 mt-4 bg-primary text-white hover:bg-white hover:text-primary"
            onClick={() => setIsTerminalOpen(true)}
          >
            Terminal
          </Button>
        </div>

        <div className="hidden lg:block w-1/3">
          <div className="relative w-64 h-64 mx-auto">
            <div className="absolute inset-0 bg-primary/20 rounded-full animate-pulse" />
            <div className="absolute inset-4 bg-primary/30 rounded-full animate-pulse delay-75" />
            <div className="absolute inset-8 bg-primary/40 rounded-full animate-pulse delay-150" />
          </div>
        </div>
      </div>
      {isTerminalOpen && <TerminalPortfolio isOpen={isTerminalOpen} onClose={() => setIsTerminalOpen(false)} />}
    </section>
  );
};