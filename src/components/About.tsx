// Import necessary components and data
import { Card } from "@/components/ui/card";
import aboutData from "../lib/data.json";

// Extract aboutMe data from JSON
const aboutMe = aboutData.aboutMe;

// About component definition
export const About = () => {
  return (
    <section className="py-20 px-4" id="about">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-white">About Me</h2>
          <Card className="p-8 backdrop-blur-sm bg-card/50 border border-white/10">
            <p className="text-gray-300 leading-relaxed">{aboutMe}</p>
          </Card>
        </div>
      </div>
    </section>
  );
};