import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Data Analysis Project",
    description: "Analysis of large datasets using Python and Pandas",
    tags: ["Python", "Pandas", "Data Analysis"],
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Machine Learning Model",
    description: "Implemented deep learning models using PyTorch",
    tags: ["PyTorch", "Machine Learning", "Python"],
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Mobile App Development",
    description: "Developed Android applications using Kotlin",
    tags: ["Kotlin", "Android", "Mobile"],
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
  },
];

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
                    <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
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
          <CarouselPrevious className="hover:scale-110 transition-transform" />
          <CarouselNext className="hover:scale-110 transition-transform" />
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