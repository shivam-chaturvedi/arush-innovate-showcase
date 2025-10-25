import { ArrowRight, Code, Brain, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              ACT 35/36 | IB Student | Innovator
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="text-gradient">Arush Mukker</span>
            </h1>
            
            <p className="text-2xl md:text-3xl text-muted-foreground font-light">
              Innovator. Researcher. Builder.
            </p>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              High school student at Heritage International Xperiential School, passionate about 
              converting ideas into impact through technology, research, and leadership.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <Link to="/projects">
                <Button size="lg" className="group">
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-primary rounded-full" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              About Me
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:scale-105 border border-border">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Innovation</h3>
                <p className="text-muted-foreground">
                  Founder of AdaptEV, converting ICE vehicles to electric for physically disabled drivers. 
                  Secured ₹3,00,000 funding and Crest Award recognition.
                </p>
              </div>
              
              <div className="bg-card p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:scale-105 border border-border">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Research</h3>
                <p className="text-muted-foreground">
                  Published research on regenerative braking in IRJET. Developing AI models for 
                  depression prediction and conducting independent studies.
                </p>
              </div>
              
              <div className="bg-card p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:scale-105 border border-border">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Trophy className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Leadership</h3>
                <p className="text-muted-foreground">
                  Founded Hi-Tech, APEX, Heritage Basketball League. Trained 110+ MUN students. 
                  Led 500+ students in tech and sports initiatives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold text-primary">35/36</div>
              <div className="text-sm text-muted-foreground">ACT Score</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold text-primary">₹3L</div>
              <div className="text-sm text-muted-foreground">Funding Secured</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Students Impacted</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold text-primary">15+</div>
              <div className="text-sm text-muted-foreground">Awards Won</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
