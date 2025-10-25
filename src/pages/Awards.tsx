import { Trophy, Medal, Award as AwardIcon, Star } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Awards = () => {
  const categories = [
    {
      title: "Academic Olympiads",
      icon: Star,
      color: "text-yellow-500",
      awards: [
        {
          name: "National Astronomy Challenge",
          achievement: "Top Performance",
          year: "2023",
        },
        {
          name: "Sir Isaac Newton Olympiad",
          achievement: "Merit Recognition",
          year: "2023",
        },
      ],
    },
    {
      title: "Model United Nations",
      icon: Trophy,
      color: "text-blue-500",
      awards: [
        {
          name: "Harvard Model United Nations",
          achievement: "Distinguished Delegate",
          year: "2024",
        },
        {
          name: "Yale Model United Nations",
          achievement: "Honorable Mention",
          year: "2024",
        },
        {
          name: "UNESCO Hong Kong Model UN",
          achievement: "Best Delegate",
          year: "2023",
        },
        {
          name: "IIMUN (International)",
          achievement: "Outstanding Delegate",
          year: "2023",
        },
        {
          name: "Various MUNs",
          achievement: "Multiple Awards",
          year: "2022-2024",
        },
      ],
    },
    {
      title: "Innovation & Technology",
      icon: AwardIcon,
      color: "text-purple-500",
      awards: [
        {
          name: "Crest Award",
          achievement: "Innovation and Social Impact (AdaptEV)",
          year: "2024",
        },
        {
          name: "F1 in Schools",
          achievement: "Best Media Outreach - North India",
          year: "2023",
        },
        {
          name: "Adobe Ambassador",
          achievement: "Official Certification",
          year: "2023",
        },
      ],
    },
    {
      title: "Sports & Athletics",
      icon: Medal,
      color: "text-green-500",
      awards: [
        {
          name: "ISSO Table Tennis Nationals",
          achievement: "Team Captain - National Competition",
          year: "2022-2023",
        },
        {
          name: "Basketball Leadership",
          achievement: "Founded 150-member Heritage Basketball League",
          year: "2022-2023",
        },
      ],
    },
    {
      title: "Music & Arts",
      icon: Star,
      color: "text-pink-500",
      awards: [
        {
          name: "School Music Performances",
          achievement: "Multiple Recognition Awards",
          year: "2020-2024",
        },
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
              <span className="text-gradient">Awards & Achievements</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Recognition for excellence across academics, innovation, leadership, and athletics
            </p>
          </div>

          {/* Awards Grid */}
          <div className="space-y-8">
            {categories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className="animate-fade-in"
                style={{ animationDelay: `${categoryIndex * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-10 h-10 bg-background rounded-lg flex items-center justify-center border-2 ${category.color.replace('text-', 'border-')}`}>
                    <category.icon className={`h-5 w-5 ${category.color}`} />
                  </div>
                  <h2 className="text-2xl font-bold">{category.title}</h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.awards.map((award, awardIndex) => (
                    <Card
                      key={awardIndex}
                      className="hover:shadow-lg transition-all hover:scale-[1.02] group"
                    >
                      <CardHeader>
                        <div className="flex items-start justify-between mb-2">
                          <Badge variant="outline" className="mb-2">
                            {award.year}
                          </Badge>
                        </div>
                        <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
                          {award.name}
                        </CardTitle>
                        <CardDescription className="text-sm">
                          {award.achievement}
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Highlight Stats */}
          <Card className="bg-gradient-to-br from-primary/5 via-background to-accent/5 border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Achievement Highlights</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold text-primary">15+</div>
                  <div className="text-sm text-muted-foreground">Total Awards</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold text-primary">5+</div>
                  <div className="text-sm text-muted-foreground">MUN Recognitions</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold text-primary">2</div>
                  <div className="text-sm text-muted-foreground">Olympiad Medals</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold text-primary">3</div>
                  <div className="text-sm text-muted-foreground">Innovation Awards</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Awards;
