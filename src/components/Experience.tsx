import { Card } from "@/components/ui/card";
import { Briefcase, GraduationCap } from "lucide-react";

export const Experience = () => {
  const experiences = [
    {
      type: "work",
      title: "Mobile Application Developer",
      company: "TAM Development LLC",
      period: "Current Position",
      description: "Developing cross-platform mobile applications using Flutter, working with modern development practices and delivering high-quality solutions.",
      icon: Briefcase,
    },
    {
      type: "work",
      title: "Mobile Application Developer (Flutter)",
      company: "innovaDigits",
      period: "Previous Experience",
      description: "Built and maintained Flutter applications, collaborated with cross-functional teams, and contributed to the company's mobile development initiatives.",
      icon: Briefcase,
    },
    {
      type: "education",
      title: "Instructor",
      company: "innovaAcademy",
      period: "Teaching Role",
      description: "Teaching Flutter development to students, sharing industry best practices, and mentoring aspiring mobile developers.",
      icon: GraduationCap,
    },
  ];

  return (
    <section id="experience" className="py-24 px-6 bg-gradient-to-b from-background to-card/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Experience & <span className="bg-gradient-firebase bg-clip-text text-transparent">Education</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My professional journey in mobile development
          </p>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card 
              key={index}
              className="p-6 md:p-8 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 animate-slide-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-lg bg-gradient-firebase flex items-center justify-center group-hover:shadow-glow-orange transition-all duration-300">
                    <exp.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                    <div>
                      <h3 className="text-2xl font-bold mb-1">{exp.title}</h3>
                      <p className="text-lg text-primary font-semibold">{exp.company}</p>
                    </div>
                    <span className="text-sm text-muted-foreground bg-muted/50 px-3 py-1 rounded-full mt-2 md:mt-0 w-fit">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    {exp.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
