import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Mobile Development",
      skills: ["Flutter", "Dart", "Cross-Platform Development", "iOS Development", "Android Development"],
      gradient: "from-primary to-secondary",
    },
    {
      title: "State Management",
      skills: ["Provider", "Bloc", "Riverpod", "GetX"],
      gradient: "from-secondary to-primary",
    },
    {
      title: "Backend & APIs",
      skills: ["REST API", "Firebase", "GraphQL", "WebSockets"],
      gradient: "from-primary/80 to-secondary/80",
    },
    {
      title: "Tools & Others",
      skills: ["Git", "CI/CD", "App Store Publishing", "Play Store Publishing", "Agile Methodologies"],
      gradient: "from-secondary/80 to-primary/80",
    },
  ];

  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Technical <span className="bg-gradient-firebase bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 animate-slide-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-1 h-8 bg-gradient-to-b ${category.gradient} rounded-full`} />
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex}
                    variant="secondary"
                    className="px-3 py-1 bg-muted hover:bg-muted/80 text-foreground font-medium transition-all duration-300 hover:scale-105"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
