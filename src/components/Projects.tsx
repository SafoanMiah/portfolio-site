import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import projectData from "../lib/data.json";

const projects = projectData.projects;

export const Projects = () => {
  return (
    <section className="py-20 px-4 animate-fade-in" id="projects">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-white">Projects</h2>

        <Carousel className="max-w-4xl mx-auto">
          <CarouselContent>
            {projects.map((project, index) => (
              <CarouselItem key={index} className="hover:scale-[0.98] transition-transform duration-300">
                <Card className="overflow-hidden backdrop-blur-sm bg-card/50 border border-white/10 hover:border-primary/50 transition-all duration-300">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-500 animate-rotate"
                  />
                  <div className="p-6">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                    </a>
                    <p className="text-gray-400 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="w-10 h-10" />
          <CarouselNext className="w-10 h-10" />
        </Carousel>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="p-4 backdrop-blur-sm bg-card/50 border border-white/10 hover:border-primary/50 transition-all duration-300 hover:scale-[0.98] group"
            >
              <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-primary transition-colors">{project.title}</h4>
              <p className="text-sm text-gray-400">{project.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};