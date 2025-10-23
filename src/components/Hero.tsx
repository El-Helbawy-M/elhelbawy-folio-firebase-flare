import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Gradient background effect */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute top-20 right-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-glow" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-glow" style={{ animationDelay: "1s" }} />
      
      <div className="relative z-10 max-w-5xl mx-auto text-center animate-fade-in">
        {/* Profile Card with Photo and Summary */}
        <div className="relative inline-block mb-12 w-full max-w-2xl">
          <div className="absolute inset-0 bg-gradient-firebase rounded-3xl blur-2xl opacity-20 animate-glow" />
          <div className="relative bg-card/50 backdrop-blur-sm border border-border rounded-3xl p-8 md:p-10 hover:border-primary/50 transition-all duration-300">
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
              {/* Photo */}
              <div className="relative flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-firebase rounded-full blur-lg opacity-40" />
                <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-primary/30 shadow-xl">
                  <img 
                    src={profilePhoto} 
                    alt="Mohamed EL-Helbawy - Senior Flutter Developer specializing in AI-driven mobile experiences" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Summary Text */}
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-lg md:text-xl text-foreground leading-relaxed">
                  <span className="font-bold bg-gradient-firebase bg-clip-text text-transparent block mb-2">
                    Senior Flutter Developer | AI-Driven Mobile Experiences
                  </span>
                  <span className="text-base md:text-lg text-muted-foreground">
                    Crafting intelligent, scalable mobile solutions with{" "}
                    <span className="font-semibold text-secondary">3+ years</span> of expertise in Flutter, Firebase & AI integration
                  </span>
                </h2>
                
                {/* Announcement badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 mt-4 bg-muted/50 rounded-full">
                  <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
                  <span className="text-xs text-muted-foreground">Available for new projects</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
          Build{" "}
          <span className="bg-gradient-firebase bg-clip-text text-transparent">
            intelligent
          </span>{" "}
          mobile apps that scale
        </h1>

        <p className="text-lg text-muted-foreground/80 mb-12">
          Trusted by innovaDigits and TAM Development
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            variant="firebase"
            onClick={() => scrollToSection("contact")}
            className="text-base px-8"
          >
            Get in touch
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            onClick={() => scrollToSection("projects")}
            className="text-base px-8 bg-transparent border-border hover:bg-card"
          >
            View my work
          </Button>
        </div>

        {/* Scroll indicator */}
        <button 
          onClick={() => scrollToSection("about")}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
          aria-label="Scroll to about section"
        >
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </button>
      </div>
    </section>
  );
};
