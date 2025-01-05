import { useState } from "react";
import { Card } from "@/components/ui/card";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import educationData from "../lib/data.json";

const education = educationData.education;

export const Education = () => {
  const [expandedYear, setExpandedYear] = useState<{ [key: number]: number | null }>({});
  const elementRef = useIntersectionObserver(() => {
    elementRef.current?.classList.add("animate-fade-in");
  }, { threshold: 0.1 });

  const toggleYear = (eduIndex: number, yearIndex: number) => {
    setExpandedYear((prev) => ({
      ...prev,
      [eduIndex]: prev[eduIndex] === yearIndex ? null : yearIndex,
    }));
  };

  return (
    <section ref={elementRef} className="py-20 px-4 opacity-0" id="education">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-white">Education</h2>

        {education.map((edu, eduIndex) => (
          <Card key={eduIndex} className="max-w-3xl mx-auto p-8 mb-8 backdrop-blur-sm bg-card/50 border border-white/10">
            <h3 className="text-2xl font-semibold mb-2 text-white">{edu.degree}</h3>
            <p className="text-gray-400 mb-6">{edu.university}</p>

            <div className="space-y-4">
              {Array.isArray(edu.years) ? (
                edu.years.map((year, index) => (
                  <div
                    key={index}
                    className="border border-white/10 rounded-lg p-4 cursor-pointer hover:border-primary/50 transition-colors"
                    onClick={() => toggleYear(eduIndex, index)}
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="text-lg font-semibold text-white">{year.year}</h4>
                      {expandedYear[eduIndex] === index ? (
                        <ChevronUp className="w-5 h-5 text-gray-400" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-400" />
                      )}
                    </div>

                    {expandedYear[eduIndex] === index && (
                      <div className="mt-4 space-y-4 animate-fade-in">
                        <div>
                          {year.core && (
                            <>
                              <h5 className="text-sm font-medium text-primary mb-2">Core Modules</h5>
                              <ul className="space-y-2 text-gray-400">
                                {year.core.map((coreItem, idx) => (
                                  <li key={idx} className="flex items-center gap-2">
                                    <span className="w-2 h-2 bg-primary rounded-full" />
                                    {coreItem}
                                  </li>
                                ))}
                              </ul>
                            </>
                          )}
                          {year.electives && (
                            <>
                              <h5 className="text-sm font-medium text-orange-500 mb-2 mt-4">Electives</h5>
                              <ul className="space-y-2 text-gray-400">
                                {year.electives.map((detail, idx) => (
                                  <li key={`detail-${idx}`} className="flex items-center gap-2">
                                    <span className="w-2 h-2 bg-orange-500 rounded-full" />
                                    {detail}
                                  </li>
                                ))}
                              </ul>
                            </>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                ))
              ) : null}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};
