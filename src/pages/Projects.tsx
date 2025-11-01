import { ExternalLink, Award, Users, DollarSign, FileCheck, TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const featuredProjects = [
    {
      title: "AdaptEV",
      subtitle: "Founder & Lead Developer",
      period: "2025 - Present",
      description:
        "Developed India's first low-cost, student-led electric car designed for paraplegic drivers, featuring innovative upper-limb-only controls and enhanced accessibility adaptations.",
      achievements: [
        { icon: DollarSign, text: "Secured ₹3,00,000 in funding" },
        { icon: Award, text: "CREST Gold Award by the British Science Association for Innovation and Social Impact" },
        { icon: Users, text: "Co-validated by Exicom, Suzuki and IIT Madras" },
        { icon: FileCheck, text: "Under review by the Indian Ministry of Social Justice and Empowerment" },
      ],
      tags: ["Electric Vehicles", "Accessibility", "Innovation", "Social Impact"],
    },
    {
      title: "Teleperformance CSR – Citizens of the World",
      subtitle: "Internship",
      period: "2024 - Present",
      description:
        "Curated student friendly mechanics curriculum for rural schools hosting underserved students.",
      achievements: [
        { icon: Users, text: "Impacted 10K+ Students" },
        { icon: TrendingUp, text: "Drove 32% Rise in STEM Adoption" },
        { icon: Award, text: "Honored by CSR Board" },
      ],
      tags: ["Education", "Social Impact", "STEM", "Curriculum Development"],
    },
    {
      title: "InsightAI",
      subtitle: "Lead Developer",
      period: "2024",
      description:
        "Trained AI model to pre-diagnose Major Depressive Disorder based on tester demographics.",
      achievements: [
        { icon: FileCheck, text: "Executive Detail Published and Peer Reviewed" },
        { icon: Award, text: "Presented in UNESCO HK Conference on the use of AI in Education" },
        { icon: TrendingUp, text: "98% Success Rate in Identifying Depressive Cases" },
      ],
      tags: ["AI/ML", "Healthcare", "Mental Health", "UNESCO"],
    },
    {
      title: "Seed&Serve",
      subtitle: "Co-Founder",
      period: "2022",
      description:
        "Hosted fundraisers to combat food insecurity and sessions on food waste management.",
      achievements: [
        { icon: Users, text: "Partnered with Local Orphanage" },
        { icon: DollarSign, text: "300+ Meals Sponsored" },
        { icon: FileCheck, text: "Directed Primary & Secondary Research" },
      ],
      tags: ["Social Impact", "Food Security", "Community Service", "Research"],
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold">
              <span className="text-gradient">Projects & Experience</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Building innovative solutions at the intersection of technology and social impact
            </p>
          </div>

          {/* Featured Projects */}
          <div className="space-y-6">
            <div className="mb-4">
              <Badge variant="default" className="text-sm">
                Featured Projects
              </Badge>
            </div>
            {featuredProjects.map((project, projectIndex) => (
              <Card 
                key={projectIndex}
                className="border-primary/20 bg-gradient-to-br from-card via-card to-primary/5 shadow-xl animate-fade-in border-l-4 border-l-primary"
                style={{ animationDelay: `${projectIndex * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-3xl mb-2">{project.title}</CardTitle>
                      <CardDescription className="text-base">
                        {project.subtitle} • {project.period}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-lg leading-relaxed">{project.description}</p>

                  <div className="grid md:grid-cols-3 gap-4">
                    {project.achievements.map((achievement, index) => (
                      <div
                        key={index}
                        className={`flex items-start space-x-3 p-4 bg-background/50 rounded-lg ${
                          index === 3 ? "md:col-start-2" : ""
                        }`}
                      >
                        <achievement.icon className="h-5 w-5 text-primary mt-0.5" />
                        <span className="text-sm">{achievement.text}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
