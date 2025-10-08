import { Card } from "@/components/ui/card";
import { Target, Eye } from "lucide-react";

export default function AgencyIntro() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl mb-4" data-testid="text-intro-title">
            About DigitalPro
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We are a full-service digital marketing agency committed to helping businesses 
            thrive in the digital age through innovative strategies and measurable results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          <Card className="p-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-md flex items-center justify-center flex-shrink-0">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-2xl mb-3">Our Mission</h3>
                <p className="text-muted-foreground">
                  To empower businesses with cutting-edge digital marketing solutions that drive 
                  growth, increase visibility, and deliver exceptional ROI. We believe in creating 
                  long-term partnerships built on trust, transparency, and proven results.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-md flex items-center justify-center flex-shrink-0">
                <Eye className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-2xl mb-3">Our Vision</h3>
                <p className="text-muted-foreground">
                  To be the leading digital marketing agency recognized for innovation, creativity, 
                  and measurable impact. We envision a future where every business, regardless of 
                  size, can leverage the power of digital marketing to achieve their goals.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
