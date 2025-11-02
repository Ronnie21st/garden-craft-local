import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Scissors, Leaf, Sprout, Trees, Calendar, Wrench } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Scissors,
      title: "Lawn Care & Mowing",
      description: "Regular mowing, edging, and feeding to keep your lawn lush and healthy all season."
    },
    {
      icon: Trees,
      title: "Hedge Trimming",
      description: "Professional trimming and shaping for hedges, shrubs, and decorative plants."
    },
    {
      icon: Sprout,
      title: "Planting & Design",
      description: "From colorful flower beds to seasonal planting, we help your garden bloom."
    },
    {
      icon: Leaf,
      title: "Garden Tidy-Ups",
      description: "One-time or seasonal clean-ups to refresh overgrown or neglected spaces."
    },
    {
      icon: Calendar,
      title: "Maintenance Plans",
      description: "Weekly, bi-weekly, or monthly visits to keep your garden in top shape year-round."
    },
    {
      icon: Wrench,
      title: "Garden Features",
      description: "Paths, borders, raised beds, and other features to enhance your outdoor space."
    }
  ];

  return (
    <section className="section-spacing bg-background">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-16 reveal">
          <span className="px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full">
            What We Do
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mt-6 mb-4">
            Garden Services You Can Trust
          </h2>
          <p className="text-lg text-muted-foreground">
            From regular maintenance to complete transformations, we bring care 
            and craft to every garden we work on.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group reveal bg-card border-2 border-border rounded-2xl p-8 hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 reveal">
          <Button size="lg" variant="outline" asChild>
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
