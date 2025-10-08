import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import team1 from "@assets/generated_images/Female_marketing_director_headshot_9788c990.png";
import team2 from "@assets/generated_images/Male_creative_director_headshot_0550adfd.png";
import team3 from "@assets/generated_images/Female_SEO_specialist_headshot_1bf944e3.png";
import team4 from "@assets/generated_images/Male_social_media_manager_headshot_eab7c1ee.png";
import team5 from "@assets/generated_images/Female_content_strategist_headshot_73522697.png";
import team6 from "@assets/generated_images/Male_data_analyst_headshot_d152428d.png";

const team = [
  {
    avatar: team1,
    name: "Emma Williams",
    role: "Marketing Director",
    bio: "15+ years leading digital campaigns for Fortune 500 companies with proven track record of growth.",
  },
  {
    avatar: team2,
    name: "James Anderson",
    role: "Creative Director",
    bio: "Award-winning designer specializing in brand identity and creative storytelling that converts.",
  },
  {
    avatar: team3,
    name: "Sophia Martinez",
    role: "SEO Specialist",
    bio: "Expert in technical SEO and content optimization with hundreds of #1 rankings achieved.",
  },
  {
    avatar: team4,
    name: "Lucas Thompson",
    role: "Social Media Manager",
    bio: "Social media strategist who has grown accounts from zero to millions of engaged followers.",
  },
  {
    avatar: team5,
    name: "Olivia Davis",
    role: "Content Strategist",
    bio: "Content expert crafting compelling narratives that drive engagement and build brand loyalty.",
  },
  {
    avatar: team6,
    name: "Noah Garcia",
    role: "Data Analyst",
    bio: "Analytics specialist turning complex data into actionable insights for campaign optimization.",
  },
];

export default function TeamSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl mb-4" data-testid="text-team-title">
            Meet Our Team
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto" data-testid="text-team-subtitle">
            Talented professionals dedicated to your success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <Card 
              key={index} 
              className="hover-elevate active-elevate-2 transition-all"
              data-testid={`card-team-${index}`}
            >
              <CardHeader className="text-center">
                <Avatar className="w-24 h-24 mx-auto mb-4">
                  <AvatarImage src={member.avatar} alt={member.name} />
                  <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <CardTitle className="font-heading">{member.name}</CardTitle>
                <p className="text-sm text-primary font-medium">{member.role}</p>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground text-center">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
