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
              I'm an <span className="text-foreground font-semibold">Intermediate Flutter Developer</span> with 
              three years of experience developing mobile applications. Based in Al Gharbiyah, Egypt, I specialize 
              in creating high-quality, performant mobile applications that users love.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Currently working as a Mobile Application Developer at TAM Development and serving as an 
              instructor at innovaAcademy, where I share my knowledge and passion for Flutter development 
              with aspiring developers.
            </p>
          </Card>

          <div className="space-y-4 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Smartphone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Mobile First</h4>
                  <p className="text-muted-foreground text-sm">
                    Specialized in building cross-platform mobile applications with Flutter
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
                  <h4 className="font-semibold text-lg mb-2">Clean Code</h4>
                  <p className="text-muted-foreground text-sm">
                    Writing maintainable, scalable code following best practices
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
                  <h4 className="font-semibold text-lg mb-2">Fast Delivery</h4>
                  <p className="text-muted-foreground text-sm">
                    Efficient development process with focus on timely delivery
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
