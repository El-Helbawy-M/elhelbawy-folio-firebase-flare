import { Card } from "@/components/ui/card";
import { Code2, Smartphone, Zap } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            About <span className="bg-gradient-firebase bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate Flutter developer crafting exceptional mobile experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 animate-slide-up">
            <h3 className="text-2xl font-bold mb-4">Who I Am</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I'm a <span className="text-foreground font-semibold">Flutter Developer</span> with{" "}
              <span className="text-secondary font-semibold">3+ years</span> of experience building and delivering 
              Flutter applications for Android and iOS. I specialize in designing clean architectures, integrating 
              RESTful APIs, and optimizing performance.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Currently working as a Mobile Application Developer at <span className="text-foreground font-semibold">InnovaDigits</span>{" "}
              (Aug 2022 – Present) and as an outsource mobile developer for <span className="text-foreground font-semibold">TAM</span>{" "}
              (Sep 2023 – Present). I also served as a Flutter Instructor at Madarek Academy, mentoring students to become 
              job-ready developers.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I'm passionate about creating user-centric, scalable mobile solutions and continuously improving code quality. 
              I leverage AI-powered tools like Cursor and Windsurf to enhance my workflow and deliver high-quality solutions efficiently.
            </p>
          </Card>

          <div className="space-y-4 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Smartphone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Clean Architecture</h4>
                  <p className="text-muted-foreground text-sm">
                    Designing scalable, maintainable codebases with clean architecture principles and best practices
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-secondary/10 group-hover:bg-secondary/20 transition-colors">
                  <Code2 className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Firebase Expert</h4>
                  <p className="text-muted-foreground text-sm">
                    Full-stack capabilities with Firebase ecosystem—Auth, Firestore, Cloud Functions & more
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">AI-Powered Workflow</h4>
                  <p className="text-muted-foreground text-sm">
                    Leveraging AI tools like Cursor and Windsurf with advanced prompt & context engineering
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
