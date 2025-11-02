import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";

const CTA = () => {
  return (
    <section className="section-spacing bg-gradient-to-br from-primary to-moss text-primary-foreground relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center reveal">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
            Ready for a Garden You'll Love?
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-10 leading-relaxed">
            Let's chat about your space. Free garden visit, no obligation, 
            just friendly advice and honest pricing.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="bg-background text-primary hover:bg-background/90"
              asChild
            >
              <Link to="/contact">
                Schedule Free Visit
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
              asChild
            >
              <a href="tel:+1234567890">
                <Phone className="mr-2 w-5 h-5" />
                Call Us Now
              </a>
            </Button>
          </div>

          <p className="text-sm text-primary-foreground/70 mt-8">
            Usually respond within 2 hours · Proudly serving your local community
          </p>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-moss/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-56 h-56 bg-primary-foreground/10 rounded-full blur-3xl" />
    </section>
  );
};

export default CTA;
