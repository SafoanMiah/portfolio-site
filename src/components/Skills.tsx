import { Card } from "@/components/ui/card";
import data from "../lib/data.json";

const programmingSkills = data.programmingSkills;
const dataSkills = data.dataSkills;

export const Skills = () => {
  return (
    <section className="py-20 px-4" id="skills">
      <div className="container mx-auto">
        <div className="space-y-12 max-w-5xl mx-auto">
          {/* Programming Languages Section */}
          <div className="animate-fade-in">
            <h3 className="text-xl font-semibold mb-6 text-primary">Programming Languages</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {programmingSkills.map((skill, index) => (
                <Card
                  key={index}
                  className={`p-6 backdrop-blur-sm bg-card/50 border border-white/10 hover:border-primary/50 transition-all duration-300 hover:scale-105 group animate-zoom-in ${skill === "Python" || skill === "PostgreSQL" ? "bg-primary/10" : ""}`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <p className={`text-lg font-medium text-center ${skill === "Python" || skill === "PostgreSQL" ? "text-primary" : "text-white"} group-hover:text-primary transition-colors`}>{skill}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Data Science Tools Section */}
          <div className="animate-fade-in" style={{ animationDelay: "400ms" }}>
            <h3 className="text-xl font-semibold mb-6 text-primary">Data Science Tools</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {dataSkills.map((skill, index) => (
                <Card
                  key={index}
                  className={`p-6 backdrop-blur-sm bg-card/50 border border-white/10 hover:border-primary/50 transition-all duration-300 hover:scale-105 group animate-zoom-in`}
                  style={{ animationDelay: `${(index + 4) * 100}ms` }}
                >
                  <p className="text-lg font-medium text-center text-white group-hover:text-primary transition-colors">{skill}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};