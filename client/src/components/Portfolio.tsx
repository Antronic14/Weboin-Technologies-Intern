import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import ecommerceImg from "@assets/generated_images/E-commerce_project_showcase_de70c455.png";
import mobileAppImg from "@assets/generated_images/Mobile_app_project_showcase_156a1f8f.png";
import corporateImg from "@assets/generated_images/Corporate_website_project_showcase_f55b5a8c.png";

const projects = [
  {
    image: ecommerceImg,
    title: "E-Commerce Platform",
    description: "Increased online sales by 150% through comprehensive SEO and paid advertising campaigns.",
  },
  {
    image: mobileAppImg,
    title: "Fitness App Launch",
    description: "Successfully launched mobile app with 50K+ downloads in the first month through targeted marketing.",
  },
  {
    image: corporateImg,
    title: "Corporate Rebranding",
    description: "Complete brand transformation resulting in 200% increase in brand awareness and engagement.",
  },
];

export default function Portfolio() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl mb-4" data-testid="text-portfolio-title">
            Our Work
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto" data-testid="text-portfolio-subtitle">
            Recent projects that showcase our expertise and results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="overflow-hidden hover-elevate active-elevate-2 transition-all cursor-pointer"
              data-testid={`card-project-${index}`}
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle className="font-heading">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{project.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
