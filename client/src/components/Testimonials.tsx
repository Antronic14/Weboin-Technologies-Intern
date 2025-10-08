import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import testimonial1 from "@assets/generated_images/Female_startup_founder_headshot_7a015ef3.png";
import testimonial2 from "@assets/generated_images/Male_CEO_headshot_706041e0.png";
import testimonial3 from "@assets/generated_images/Male_business_owner_headshot_44628f70.png";

const testimonials = [
  {
    avatar: testimonial1,
    name: "Sarah Johnson",
    company: "TechStart Inc",
    quote: "DigitalPro transformed our online presence. Their SEO strategies helped us rank #1 for our key terms, leading to a 300% increase in qualified leads.",
  },
  {
    avatar: testimonial2,
    name: "Michael Chen",
    company: "Global Ventures",
    quote: "The team's expertise in paid advertising delivered exceptional ROI. We saw a 5x return on our ad spend within the first quarter.",
  },
  {
    avatar: testimonial3,
    name: "David Rodriguez",
    company: "Retail Plus",
    quote: "Their social media campaigns completely changed our brand perception. Engagement is up 400% and we've built a loyal community.",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl mb-4" data-testid="text-testimonials-title">
            Client Success Stories
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto" data-testid="text-testimonials-subtitle">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="p-8" data-testid="card-testimonial">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <Avatar className="w-20 h-20 mb-6">
                  <AvatarImage src={current.avatar} alt={current.name} />
                  <AvatarFallback>{current.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <blockquote className="text-lg mb-6 italic" data-testid="text-testimonial-quote">
                  "{current.quote}"
                </blockquote>
                <div>
                  <p className="font-heading font-semibold" data-testid="text-testimonial-name">{current.name}</p>
                  <p className="text-sm text-muted-foreground" data-testid="text-testimonial-company">{current.company}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex items-center justify-center gap-4 mt-8">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={prevTestimonial}
              data-testid="button-testimonial-prev"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? "bg-primary w-8" : "bg-muted"
                  }`}
                  onClick={() => setCurrentIndex(index)}
                  data-testid={`button-testimonial-dot-${index}`}
                />
              ))}
            </div>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={nextTestimonial}
              data-testid="button-testimonial-next"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
