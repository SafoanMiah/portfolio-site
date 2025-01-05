import { useState } from "react";
import { Card } from "@/components/ui/card";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import educationData from "../lib/data.json";

const education = educationData.education[0];

export const Education = () => {
  const [expandedYear, setExpandedYear] = useState<number | null>(null);
  const elementRef = useIntersectionObserver(() => {
    elementRef.current?.classList.add("animate-fade-in");
  }, { threshold: 0.1 });

  return (
    <section ref={elementRef} className="py-20 px-4 opacity-0" id="education">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-white">Education</h2>

        <Card className="max-w-3xl mx-auto p-8 backdrop-blur-sm bg-card/50 border border-white/10">
          <h3 className="text-2xl font-semibold mb-2 text-white">{education.degree}</h3>
          <p className="text-gray-400 mb-6">{education.university}</p>

          <div className="space-y-4">
            {Array.isArray(education.period) ? (
              education.period.map((year, index) => (
                <div
                  key={index}
                  className="border border-white/10 rounded-lg p-4 cursor-pointer hover:border-primary/50 transition-colors"
                  onClick={() => setExpandedYear(expandedYear === index ? null : index)}
                >
                  <div className="flex items-center justify-between">
                    <h4 className="text-lg font-semibold text-white">{year.period}</h4>
                    {expandedYear === index ? (
                      <ChevronUp className="w-5 h-5 text-gray-400" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    )}
                  </div>

                  {expandedYear === index && (
                    <div className="mt-4 space-y-4 animate-fade-in">
                      <div>
                        <h5 className="text-sm font-medium text-primary mb-2">Core Modules</h5>
                        <ul className="space-y-2 text-gray-400">
                          {year.electives.map((elective, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                              <span className="w-2 h-2 bg-primary rounded-full" />
                              {elective}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h5 className="text-sm font-medium text-primary mb-2">Electives</h5>
                        <ul className="space-y-2 text-gray-400">
                          {year.details.map((detail, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                              <span className="w-2 h-2 bg-secondary rounded-full" />
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div>{education.period}</div>
            )}
          </div>
        </Card>
      </div>
    </section>
  );
};
