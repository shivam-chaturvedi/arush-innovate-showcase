import { ExternalLink, Award, Users, DollarSign } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const featuredProject = {
    title: "AdaptEV",
    subtitle: "Founder & Lead Developer",
    period: "2024 - Present",
    description:
      "Converting an ICE car into an electric vehicle specifically designed for physically disabled drivers. Led a cross-disciplinary team to design adaptive controls and wheelchair accessibility features.",
    achievements: [
      { icon: DollarSign, text: "Secured ₹3,00,000 in funding" },
      { icon: Award, text: "Crest Award for innovation and social impact" },
      { icon: Users, text: "Co-validated by Exicom and IIT Madras" },
    ],
    tags: ["Electric Vehicles", "Accessibility", "Innovation", "Social Impact"],
  };

  const otherProjects = [
    {
      title: "AI Research Intern",
      company: "Pangea Society",
      period: "2024",
      description:
        "Developed a predictive AI model to assess the likelihood of depression, applying data science and machine learning techniques.",
      tags: ["AI/ML", "Healthcare", "Data Science"],
    },
    {
      title: "Research & Operations Intern",
      company: "99 Animals",
      period: "2023",
      description:
        "Supported a wellness-focused café inspired by Blue Zones. Contributed to product and menu design based on nutrition research while managing staff onboarding.",
      tags: ["Wellness", "Research", "Operations"],
    },
    {
      title: "Work Experience Program Intern",
      company: "Adobe",
      period: "2023",
      description:
        "Completed Adobe's Work Experience Program and certified as an official Adobe Ambassador. Gained exposure to creative tools and digital design workflows.",
      tags: ["Design", "Digital Tools", "Ambassador"],
    },
    {
      title: "Technical Intern",
      company: "Solar Innaroof",
      period: "2021-2023",
      description:
        "Designed solar panel layouts for commercial and residential projects. Assisted with on-site installations and gained hands-on experience in renewable energy systems.",
      tags: ["Renewable Energy", "Solar", "Sustainability"],
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

          {/* Featured Project */}
          <div className="animate-fade-in">
            <div className="mb-4">
              <Badge variant="default" className="text-sm">
                Featured Project
              </Badge>
            </div>
            <Card className="border-primary/20 bg-gradient-to-br from-card via-card to-primary/5 shadow-xl">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-3xl mb-2">{featuredProject.title}</CardTitle>
                    <CardDescription className="text-base">
                      {featuredProject.subtitle} • {featuredProject.period}
                    </CardDescription>
                  </div>
                  <ExternalLink className="h-5 w-5 text-primary" />
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-lg leading-relaxed">{featuredProject.description}</p>

                <div className="grid md:grid-cols-3 gap-4">
                  {featuredProject.achievements.map((achievement, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-3 p-4 bg-background/50 rounded-lg"
                    >
                      <achievement.icon className="h-5 w-5 text-primary mt-0.5" />
                      <span className="text-sm">{achievement.text}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {featuredProject.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Other Projects */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Other Experience</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {otherProjects.map((project, index) => (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-all hover:scale-[1.02] animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <CardDescription>
                      {project.company} • {project.period}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="outline">
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
    </div>
  );
};

export default Projects;
