import { Card } from "@/components/ui/card";

export const About = () => {
  return (
    <section className="py-20 px-4" id="about">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-white">About Me</h2>
          <Card className="p-8 backdrop-blur-sm bg-card/50 border border-white/10">
            <p className="text-gray-300 leading-relaxed">
              I'm a Data Science student with a passion for machine learning and data analysis. 
              Currently focused on developing innovative solutions using Python and PyTorch, 
              I combine technical expertise with creative problem-solving to extract meaningful 
              insights from complex datasets.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};