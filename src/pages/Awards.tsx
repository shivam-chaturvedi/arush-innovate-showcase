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
          name: "Sir Isaac Newton Olympiad",
          achievement: "Distinction",
          year: "2025",
          highlight: true,
        },
        {
          name: "National Astronomy Challenge",
          achievement: "Top Performance",
          year: "2023",
        },
      ],
    },
    {
      title: "Innovation & Technology",
      icon: AwardIcon,
      color: "text-purple-500",
      awards: [
        {
          name: "Emerging Engineering Innovator",
          achievement: "Presented by Exicom Ltd",
          year: "2025",
          highlight: true,
        },
        {
          name: "CREST Gold Award",
          achievement: "Presented by the British Science Association for Innovation and Social Impact",
          year: "2024",
          highlight: true,
        },
        {
          name: "AdaptEV Recognition",
          achievement: "Recognized by Suzuki & IIT Madras | Under Consideration by Ministry of Social Justice and Empowerment",
          year: "2025",
          highlight: true,
        },
        {
          name: "F1 in Schools",
          achievement: "Best Media Outreach - North India | Selected for Nationals",
          year: "2023",
        },
        {
          name: "Adobe Youth Ambassador",
          achievement: "Official Certification",
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
          name: "Various Executive Boards",
          achievement: "Invited to Chair & Direct 6 Committees",
          year: "2024-2025",
          highlight: true,
        },
        {
          name: "UNESCO Hong Kong Conference",
          achievement: "Two Time Awardee & Press Release Feature",
          year: "2024 & 2025",
          highlight: true,
        },
        {
          name: "Yale Model United Nations",
          achievement: "Honorable Mention",
          year: "2024",
        },
        
        {
          name: "Harvard Model United Nations",
          achievement: "Honorable Mention",
          year: "2024",
        },
        {
          name: "Various MUNs",
          achievement: "Multiple Awards",
          year: "2022-2024",
        },
      ],
    },
    {
      title: "Sports & Athletics",
      icon: Medal,
      color: "text-green-500",
      awards: [
        {
          name: "PADI Advanced Open Water Diver",
          achievement: "12 Dives • 350+ Minutes",
          year: "2024 - Present",
          highlight: true,
        },
        {
          name: "ISSO Table Tennis Nationals",
          achievement: "Team Captain - National Competition",
          year: "2024-2025",
          highlight: true,
        },
        {
          name: "Basketball Leadership",
          achievement: "Founded 150-member Heritage Basketball League",
          year: "2024-2025",
        },
      ],
    },
    {
      title: "Music & Arts",
      icon: Star,
      color: "text-pink-500",
      awards: [
        {
          name: "WIRED National Music Competition",
          achievement: "1st Place",
          year: "2025",
        },
        {
          name: "TEDx Performances",
          achievement: "Performed 2 Years in a Row",
          year: "2023-2024",
        },
        {
          name: "Charity Concert Performances",
          achievement: "Raised Funds for Underprivileged Schools and Children",
          year: "2025",
        },
        {
          name: "School Music Performances",
          achievement: "Multiple Recognition Awards",
          year: "2022-2025",
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
                      className={`hover:shadow-lg transition-all hover:scale-[1.02] group ${
                        award.highlight ? "border-l-4 border-l-primary bg-primary/10" : ""
                      }`}
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
                  <div className="text-sm text-muted-foreground">Awards</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold text-primary">10+</div>
                  <div className="text-sm text-muted-foreground">National Level Recognition</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold text-primary">2</div>
                  <div className="text-sm text-muted-foreground">Olympiad Medals</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold text-primary">3+</div>
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
