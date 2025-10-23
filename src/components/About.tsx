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
              I'm a <span className="text-foreground font-semibold">Senior Flutter Developer</span> passionate about 
              building intelligent, scalable mobile experiences. With <span className="text-secondary font-semibold">3+ years</span> of 
              hands-on experience, I specialize in creating cross-platform applications that seamlessly integrate 
              <span className="text-foreground font-semibold"> AI capabilities</span>, real-time features, and robust Firebase backends.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Currently serving as a Mobile Application Developer at <span className="text-foreground font-semibold">TAM Development</span>, 
              where I architect and deliver production-ready Flutter apps. I also mentor the next generation of developers 
              as an instructor at <span className="text-foreground font-semibold">innovaAcademy</span>, sharing industry best 
              practices and emerging mobile technologies.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My expertise spans the entire mobile development lifecycle—from ideation and architecture to deployment 
              and optimization. I'm driven by clean code, exceptional UX, and the challenge of solving complex problems 
              with elegant solutions.
            </p>
          </Card>

          <div className="space-y-4 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Smartphone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">AI Integration</h4>
                  <p className="text-muted-foreground text-sm">
                    Implementing intelligent features with machine learning and AI APIs for smarter apps
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
                  <h4 className="font-semibold text-lg mb-2">Production Ready</h4>
                  <p className="text-muted-foreground text-sm">
                    Delivering polished, tested apps ready for App Store & Play Store deployment
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
