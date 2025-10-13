import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, MapPin, Phone } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Let's <span className="bg-gradient-firebase bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Let's work together to bring your ideas to life
          </p>
        </div>

        <Card className="p-8 md:p-12 bg-card/50 backdrop-blur-sm border-border animate-slide-up">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  I'm always open to discussing new projects, creative ideas, or opportunities 
                  to be part of your vision.
                </p>
              </div>

              <div className="space-y-4">
                <a 
                  href="https://www.linkedin.com/in/mohamed-el-helbawy-ab89781bb/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Linkedin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">LinkedIn</p>
                    <p className="text-sm">mohamed-el-helbawy</p>
                  </div>
                </a>

                <div className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Location</p>
                    <p className="text-sm">Al Gharbiyah, Egypt</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Email</p>
                    <p className="text-sm">Available on LinkedIn</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center space-y-4">
              <Button 
                size="lg" 
                variant="firebase"
                asChild
                className="w-full"
              >
                <a 
                  href="https://www.linkedin.com/in/mohamed-el-helbawy-ab89781bb/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-5 h-5" />
                  Connect on LinkedIn
                </a>
              </Button>

              <Button 
                size="lg" 
                variant="outline"
                asChild
                className="w-full bg-transparent border-border hover:bg-card"
              >
                <a href="mailto:contact@example.com">
                  <Mail className="w-5 h-5" />
                  Send Email
                </a>
              </Button>

              <p className="text-sm text-muted-foreground text-center pt-4">
                Response time: Usually within 24 hours
              </p>
            </div>
          </div>
        </Card>

        {/* Footer */}
        <div className="text-center mt-16 animate-fade-in">
          <p className="text-muted-foreground text-sm">
            © 2025 Mohamed EL-Helbawy. Mobile Application Developer.
          </p>
          <p className="text-muted-foreground text-xs mt-2">
            Built with React & Tailwind CSS
          </p>
        </div>
      </div>
    </section>
  );
};
