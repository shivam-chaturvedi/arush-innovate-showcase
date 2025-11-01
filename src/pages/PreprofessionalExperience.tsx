import { ExternalLink, Award, Users, DollarSign, FileCheck } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const PreprofessionalExperience = () => {
  const featuredExperiences = [
    {
      title: "Innaroof Solar",
      subtitle: "Technical Intern",
      period: "2021 - 2023",
      description:
        "Designed solar panel layouts for commercial and residential projects. Assisted with on-site installations and gained hands-on experience in renewable energy systems. Established ROI of Rooftop solar Installation for 84 Residential Projects; 15% savings improvement by optimizing panel choices and installation design.",
      achievements: [],
      tags: ["Renewable Energy", "Solar", "Sustainability"],
    },
    {
      title: "Pangea Society",
      subtitle: "AI Research Intern",
      period: "2024",
      description:
        "Developed a Random Forest Predictive AI model in 23 dimensions to assess the likelihood of Major Depressive Disorder, applying data science and machine learning techniques.",
      achievements: [],
      tags: ["AI/ML", "Healthcare", "Data Science"],
    },
    {
      title: "Adobe",
      subtitle: "Work Experience Program Intern",
      period: "2023",
      description:
        "Completed Adobe's Work Experience Program and certified as an official Adobe Ambassador. Gained exposure to creative tools and digital design workflows, promoting cybersecurity.",
      achievements: [],
      tags: ["Design", "Digital Tools", "Ambassador"],
    },
    {
      title: "99 Animals",
      subtitle: "Research & Operations Intern",
      period: "2023",
      description:
        "Supported a wellness-focused café inspired by Blue Zones. Contributed to product and menu design based on nutrition research while managing staff onboarding.",
      achievements: [],
      tags: ["Wellness", "Research", "Operations"],
    },
   
  ];

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold">
              <span className="text-gradient">Pre-Professional Experience</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Gaining hands-on experience across technology, sustainability, healthcare, and design
            </p>
          </div>

          {/* Featured Experiences */}
          <div className="space-y-6">
            <div className="mb-4">
              <Badge variant="default" className="text-sm">
                Featured Experiences
              </Badge>
            </div>
            {featuredExperiences.map((experience, index) => (
              <Card 
                key={index}
                className="border-primary/20 bg-gradient-to-br from-card via-card to-primary/5 shadow-xl animate-fade-in border-l-4 border-l-primary"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-3xl mb-2">{experience.title}</CardTitle>
                      <CardDescription className="text-base">
                        {experience.subtitle} • {experience.period}
                      </CardDescription>
                    </div>
                   
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-lg leading-relaxed">{experience.description}</p>

                  {experience.achievements.length > 0 && (
                    <div className="grid md:grid-cols-3 gap-4">
                      {experience.achievements.map((achievement, idx) => (
                        <div
                          key={idx}
                          className={`flex items-start space-x-3 p-4 bg-background/50 rounded-lg ${
                            idx === 3 ? "md:col-start-2" : ""
                          }`}
                        >
                          <achievement.icon className="h-5 w-5 text-primary mt-0.5" />
                          <span className="text-sm">{achievement.text}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2">
                    {experience.tags.map((tag) => (
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

export default PreprofessionalExperience;

