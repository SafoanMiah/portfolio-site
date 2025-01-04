import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";
import { ProgressBar } from "@/components/ProgressBar";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-white">
      <ProgressBar />
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Contact />
    </div>
  );
};

export default Index;