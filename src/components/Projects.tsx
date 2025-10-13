import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Smartphone } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Mobile App",
      description: "A full-featured e-commerce application with product browsing, cart management, payment integration, and order tracking. Built with Flutter and integrated with Firebase backend.",
      tech: ["Flutter", "Firebase", "REST API", "Payment Gateway"],
      color: "from-primary/20 to-secondary/20",
    },
    {
      title: "Social Media Platform",
      description: "Real-time social networking app with chat functionality, post sharing, likes, comments, and user profiles. Implemented using Flutter with WebSocket for real-time updates.",
      tech: ["Flutter", "WebSocket", "Provider", "Cloud Storage"],
      color: "from-secondary/20 to-primary/20",
    },
    {
      title: "Task Management System",
      description: "Productivity app for managing tasks, projects, and team collaboration. Features include task assignment, deadline tracking, notifications, and progress analytics.",
      tech: ["Flutter", "Bloc", "SQLite", "Local Notifications"],
      color: "from-primary/15 to-secondary/15",
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-gradient-to-b from-card/20 to-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Featured <span className="bg-gradient-firebase bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing my mobile development expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 animate-slide-up group overflow-hidden relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient background effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-lg bg-gradient-firebase flex items-center justify-center mb-4 group-hover:shadow-glow-orange transition-all duration-300">
                  <Smartphone className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="text-xs px-2 py-1 bg-muted rounded-md text-muted-foreground font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <Button 
                  size="sm" 
                  variant="ghost" 
                  className="w-full justify-between group/btn hover:bg-muted"
                >
                  <span>View Details</span>
                  <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
