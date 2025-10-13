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
        {/* Profile Photo */}
        <div className="relative inline-block mb-8">
          <div className="absolute inset-0 bg-gradient-firebase rounded-full blur-xl opacity-50 animate-glow" />
          <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl">
            <img 
              src={profilePhoto} 
              alt="Mohamed EL-Helbawy - Flutter Developer" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Announcement banner */}
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-card/50 backdrop-blur-sm border border-border rounded-full">
          <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
          <span className="text-sm text-muted-foreground">Available for new projects</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
          Make your app{" "}
          <span className="bg-gradient-firebase bg-clip-text text-transparent">
            exceptional
          </span>{" "}
          with Flutter
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
          Build, develop & run modern mobile experiences users love with{" "}
          <span className="text-foreground font-semibold">Mohamed EL-Helbawy</span>, 
          a Flutter developer with 3+ years of experience.
        </p>

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
