import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Smartphone, Store } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "Razeen App",
      description: "Mobile extension of the Razeen platform for judges and experts to review and evaluate submissions. Enhanced client satisfaction by implementing all requested features and contributed to attracting 5+ new clients.",
      tech: ["Flutter", "Dart", "RESTful APIs", "State Management"],
      color: "from-primary/20 to-secondary/20",
      playStoreLink: "https://play.google.com/store/apps/details?id=com.razeen.app",
      appStoreLink: "https://apps.apple.com/app/razeen/id123456789",
    },
    {
      title: "HCM7 App",
      description: "Employee attendance management app using Geofencing, Beacons, QR codes, and push notifications. Refactored key modules to improve reliability and delivered updates resolving approximately 30 major critical issues.",
      tech: ["Flutter", "Firebase", "Geofencing", "Beacons", "QR Codes"],
      color: "from-secondary/20 to-primary/20",
      playStoreLink: "#",
      appStoreLink: "#",
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

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
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

                <div className="flex gap-2">
                  {project.playStoreLink && project.playStoreLink !== "#" && (
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="flex-1 gap-2 hover:border-primary/50"
                      asChild
                    >
                      <a href={project.playStoreLink} target="_blank" rel="noopener noreferrer">
                        <Store className="w-4 h-4" />
                        <span>Play Store</span>
                      </a>
                    </Button>
                  )}
                  {project.appStoreLink && project.appStoreLink !== "#" && (
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="flex-1 gap-2 hover:border-primary/50"
                      asChild
                    >
                      <a href={project.appStoreLink} target="_blank" rel="noopener noreferrer">
                        <Store className="w-4 h-4" />
                        <span>App Store</span>
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
