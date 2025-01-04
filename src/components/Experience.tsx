import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, ChevronUp, Circle } from "lucide-react";

const experiences = [
  {
    role: "Data Science Intern",
    company: "Tech Company A",
    period: "Summer 2023",
    description: "Worked on machine learning models and data analysis projects.",
    details: [
      "Developed and implemented machine learning models",
      "Analyzed large datasets using Python and Pandas",
      "Collaborated with senior data scientists on research projects"
    ],
    icon: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=100&h=100&q=80",
  },
  {
    role: "Research Assistant",
    company: "University Lab",
    period: "2022 - 2023",
    description: "Assisted in research projects focused on AI and machine learning.",
    details: [
      "Conducted experiments and analyzed results",
      "Supported the development of AI algorithms",
      "Presented findings at academic conferences"
    ],
    icon: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=100&h=100&q=80",
  },
  {
    role: "Software Developer",
    company: "Startup B",
    period: "Summer 2022",
    description: "Developed mobile applications using Kotlin and Android Studio.",
    details: [
      "Designed user interfaces and user experiences",
      "Collaborated with cross-functional teams",
      "Implemented features based on user feedback"
    ],
    icon: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&w=100&h=100&q=80",
  },
  {
    role: "Teaching Assistant",
    company: "University",
    period: "2021 - 2022",
    description: "Assisted in teaching programming fundamentals to first-year students.",
    details: [
      "Led lab sessions and provided one-on-one support",
      "Graded assignments and provided feedback",
      "Organized study groups and review sessions"
    ],
    icon: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=100&h=100&q=80",
  },
];

export const Experience = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-4 relative" id="experience">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-white">Experience</h2>
        
        <div className="max-w-3xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary to-transparent hidden md:block" />
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative group">
                {/* Timeline dot */}
                <div className="absolute left-8 -translate-x-1/2 w-4 h-4 hidden md:flex items-center justify-center">
                  <Circle className="w-4 h-4 text-primary animate-pulse" fill="currentColor" />
                </div>
                
                <Card
                  className={`ml-0 md:ml-16 p-6 backdrop-blur-sm bg-card/50 border border-white/10 
                    hover:border-primary/50 transition-all duration-300 cursor-pointer
                    transform hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/20
                    ${expandedIndex === index ? 'border-primary/50 shadow-lg shadow-primary/20' : ''}`}
                  onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                >
                  <div className="flex flex-col md:flex-row gap-6">
                    <img
                      src={exp.icon}
                      alt={exp.company}
                      className="w-16 h-16 rounded-full object-cover ring-2 ring-primary/30"
                    />
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2">
                        <div>
                          <h3 className="text-xl font-semibold text-white group-hover:text-primary transition-colors">
                            {exp.role}
                          </h3>
                          <p className="text-primary">{exp.company}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="bg-card/50">
                            {exp.period}
                          </Badge>
                          {expandedIndex === index ? (
                            <ChevronUp className="w-5 h-5 text-primary" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-primary" />
                          )}
                        </div>
                      </div>
                      <p className="text-gray-400">{exp.description}</p>
                      
                      {expandedIndex === index && (
                        <div className="mt-4 pl-4 border-l-2 border-primary/50 space-y-2 animate-fade-in">
                          {exp.details.map((detail, idx) => (
                            <p key={idx} className="text-gray-400 hover:text-white transition-colors">
                              {detail}
                            </p>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};