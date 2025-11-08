import { FileText, ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Research = () => {
  const publications = [
    {
      title: "Hydrothermal Enhancement of Regenerative Braking",
      subtitle: "A Critical Examination of Water-Cooling Integration Strategies",
      link: "https://www.irjet.net/archives/V12/i9/IRJET-V12I933.pdf",
      status: "Published",
      journal: "IRJET (International Research Journal of Engineering and Technology)",
      description:
        "This research examines water-cooling integration strategies to enhance regenerative braking efficiency in electric vehicles, analyzing thermal management systems and energy recovery optimization.",
      tags: ["Electric Vehicles", "Thermal Management", "Energy Efficiency"],
    },
    {
      title: "Multivariate-Input Univariate-Output Predictive Random Forest Model",
      subtitle: "For Major Depression Disorder Detection",
      status: "Published",
      journal: "Curieux Academic Journal",
      description:
        "Developed an AI-driven predictive model using Random Forest algorithms to assess the likelihood of major depression disorder based on multivariate input factors.",
      tags: ["Machine Learning", "Healthcare", "Mental Health"],
    },
  ];

  const independentResearch = [
    {
      title: "Golf Ball Aerodynamics: Dimple Geometry vs Magnus Coefficient",
      link: "https://www.irjet.net/archives/V12/i9/IRJET-V12I933.pdf",
      description:
        "Quantified the correlation between dimple depth and dimple count on the Magnus Forces applied to a golf ball. The study employed 625 data points using Navier–Stokes simulations, visualized in a 3 dimensional surface plot.",
      tags: ["Physics", "Sports Science", "Aerodynamics", "Python"],
    },
    {
      title: "Formula 1 Aerodynamics: Angle of Attack vs Top Speed",
      description:
        "Analysis of relationship between aerodynamic angle of attack and top speed performance in Formula 1 vehicles, quantifying and deriving trade-offs.",
      tags: ["Aerodynamics", "Motorsport", "Physics"],
    },
    {
      title: "Literature Review on Corporal Punishment in Parenting",
      description:
        "Comprehensive review of academic literature examining the psychological and developmental impacts of corporal punishment on children.",
      tags: ["Psychology", "Child Development", "Ethics", "Python"],
    },
    {
      title: "Ball Physics: Internal Pressure vs Rebound Height",
      description:
        "Triangulated experimental and simulation study investigating the correlation between internal air pressure and rebound characteristics in sports balls.",
      tags: ["Physics", "Sports Science", "Experimental"],
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold">
              <span className="text-gradient">Research & Publications</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Exploring interdisciplinary topics from electric vehicles to mental health through rigorous research
            </p>
          </div>

          {/* Published & Pending Research */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Published & Pending Publications</h2>
            {publications.map((paper, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all animate-fade-in border-l-4 border-l-primary"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <FileText className="h-5 w-5 text-primary" />
                        <Badge variant={paper.status === "Published" ? "default" : "secondary"}>
                          {paper.status}
                        </Badge>
                      </div>
                      <CardTitle className="text-2xl mb-2">{paper.title}</CardTitle>
                      <CardDescription className="text-base mb-1">
                        {paper.subtitle}
                      </CardDescription>
                      <p className="text-sm text-muted-foreground italic">{paper.journal}</p>
                    </div>
                    {
                      paper.link && (
                    
                    <a 
                      href={paper.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink className="h-5 w-5" />
                      <span>View Publication</span>
                    </a>
                      )}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="leading-relaxed">{paper.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {paper.tags.map((tag) => (
                      <Badge key={tag} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Independent Research */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Independent Research Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {independentResearch.map((research, index) => (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-all hover:scale-[1.02] animate-fade-in"
                  style={{ animationDelay: `${(publications.length + index) * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                      <FileText className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg leading-tight">
                      {research.link ? (
                        <a 
                          href={research.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="hover:text-primary transition-colors flex items-center gap-2 group"
                        >
                          {research.title}
                          <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </a>
                      ) : (
                        research.title
                      )}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {research.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {research.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Research Interests */}
          <Card className="bg-gradient-to-br from-primary/5 to-background">
            <CardHeader>
              <CardTitle className="text-xl">Research Interests</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3">
                {[
                  "Electric Vehicles",
                  "Renewable Energy",
                  "Artificial Intelligence",
                  "Mental Health Technology",
                  "Automotive Engineering",
                  "Sports Science",
                  "Aerodynamics",
                  "Machine Learning",
                ].map((interest) => (
                  <Badge key={interest} variant="secondary" className="text-sm">
                    {interest}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Research;
