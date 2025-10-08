import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl mb-6" data-testid="text-cta-headline">
          Ready to Grow Your Business?
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto" data-testid="text-cta-subtitle">
          Let's discuss how we can help you achieve your digital marketing goals. 
          Schedule a free consultation today.
        </p>
        <Button 
          size="lg"
          data-testid="button-contact"
        >
          Contact Us Today
          <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
      </div>
    </section>
  );
}
