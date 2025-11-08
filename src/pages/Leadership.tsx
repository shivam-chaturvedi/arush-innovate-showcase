import { Lightbulb, Users, Trophy, Target } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Leadership = () => {
  const leadershipRoles = [
    {
      title: "Founder & President",
      organization: "APEX - Automobiles and Motorsport Club",
      period: "2024 - Present",
      icon: Target,
      description:
        "Founded and led the school's automobiles and motorsport club. Conducted 50+ hours of sessions on engineering principles, types of engines, and car mechanics. Led hands-on workshops on Go-Kart design and construction.",
      impact: ["50+ hours of sessions", "Go-Kart workshop"],
      tags: ["Automotive", "Engineering", "Motorsport"],
    },
    {
      title: "Founder & Director",
      organization: "Hi Tech",
      period: "2024 - Present",
      icon: Lightbulb,
      description:
        "Founded and led Hi Tech, the school's first pan-India tech initiative integrating robotics, hackathons, and esports tournaments. Designed and hosted events engaging 500+ students nationwide.",
      impact: ["500+ students engaged", "Pan-India reach", "First tech initiative"],
      tags: ["Robotics", "Hackathons", "Esports"],
    },
    {
      title: "Chairperson & Trainer",
      organization: "School MUNSOC",
      period: "2023-2025",
      icon: Users,
      description:
        "Trained and mentored 110+ students over 100+ hours, developing debating and diplomacy skills. Chaired multiple MUNs with a total of 300+ delegates impacted.",
      impact: ["110+ students trained", "100+ training hours", "150+ MUN participants"],
      tags: ["Model UN", "Diplomacy", "Public Speaking"],
    },
    {
      title: "Co-Founder & Director",
      organization: "Heritage Basketball League",
      period: "2024-2025",
      icon: Trophy,
      description:
        "Launched and managed a 150-member student league, overseeing logistics, scheduling, and team match-making. Directed multimedia, outreach, and technology platforms.",
      impact: ["150 members", "First structured league", "Full operations management"],
      tags: ["Sports", "Operations", "Technology"],
    },
  ];

  const otherRoles = [
    {
      title: "Mercury Racing",
      organization: "F1 in Schools - Team Mercury",
      period: "2023-2024",
      achievements: [
        "Led team to national level competition",
        "Best Media Outreach in North India",
        "Coordinated sponsorship and operations",
      ],
    },
    {
      title: "Manager",
      organization: "School Esports Team",
      period: "2022-2024",
      achievements: [
        "Managed official school Esports team",
        "External award for Best Esports Team Manager",
        "Coordinated practice schedules and competitions",
      ],
    },
    {
      title: "Table Tennis Captain",
      organization: "Heritage International Xperiential School",
      period: "2 Years",
      achievements: [
        "Captained team for two years",
        "Competed at ISSO Nationals",
        "Led team training and strategy",
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold">
              <span className="text-gradient">Leadership & Impact</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Building communities, empowering students, and driving innovation through leadership
            </p>
          </div>

          {/* Major Leadership Roles */}
          <div className="space-y-8">
            {leadershipRoles.map((role, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all animate-fade-in overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex">
                  <div className="w-2 bg-gradient-to-b from-primary to-accent" />
                  <div className="flex-1">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                              <role.icon className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                              <CardTitle className="text-2xl">{role.title}</CardTitle>
                              <CardDescription className="text-base">
                                {role.organization} • {role.period}
                              </CardDescription>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <p className="text-lg leading-relaxed">{role.description}</p>

                      <div className="bg-muted/50 rounded-lg p-4">
                        <h4 className="text-sm font-semibold mb-3 text-muted-foreground">
                          Key Impact
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {role.impact.map((item, i) => (
                            <Badge key={i} variant="default">
                              {item}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {role.tags.map((tag) => (
                          <Badge key={tag} variant="outline">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Other Leadership Roles */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Additional Leadership Roles</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {otherRoles.map((role, index) => (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-all hover:scale-[1.02] animate-fade-in"
                  style={{ animationDelay: `${(leadershipRoles.length + index) * 0.1}s` }}
                >
                  <CardHeader>
                    <CardTitle className="text-lg">{role.title}</CardTitle>
                    <CardDescription>
                      {role.organization}
                      <br />
                      {role.period}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {role.achievements.map((achievement, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
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

export default Leadership;
