import { Card } from "@/components/ui/card";
import { Briefcase, GraduationCap } from "lucide-react";

export const Experience = () => {
  const experiences = [
    {
      type: "work",
      title: "Mobile Application Developer",
      company: "TAM (via InnovaDigits)",
      period: "Sep 2023 - Present",
      description: "Developed and launched the Razeen app used by judges and experts to evaluate submissions. Supported product scalability by fulfilling all client-side change requests, helping attract over 5 new clients. Ensured smooth releases on both Google Play and App Store through continuous improvement and testing.",
      icon: Briefcase,
    },
    {
      type: "work",
      title: "Mobile Application Developer",
      company: "InnovaDigits",
      period: "Aug 2022 - Present",
      description: "Building and delivering production-ready Flutter applications for Android and iOS. Working on HCM7 employee attendance app using Geofencing, Beacons, QR codes, and notifications. Refactored key modules to improve reliability and delivered updates resolving approximately 30 major critical issues.",
      icon: Briefcase,
    },
    {
      type: "work",
      title: "Flutter Instructor",
      company: "Madarek Academy",
      period: "Sep 2024 - Jan 2025",
      description: "Delivered a full master course in mobile app development, mentoring students to become job-ready Flutter developers. Designed hands-on lessons covering Flutter UI, state management, and Firebase integration.",
      icon: Briefcase,
    },
    {
      type: "education",
      title: "Bachelor's Degree in Computer Science",
      company: "Mansoura University",
      period: "2019 - Aug 2023",
      description: "Graduated with strong foundation in software engineering principles, algorithms, data structures, and mobile development. Developed solid understanding of clean architecture and agile methodologies.",
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
