import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Scissors, Leaf, Sprout, Trees, Calendar, Wrench, Hammer, Droplets } from "lucide-react";
import plantingImage from "@/assets/planting-flowers.jpg";
import hedgeImage from "@/assets/hedge-trimming.jpg";

const Services = () => {
  const services = [
    {
      icon: Scissors,
      title: "Lawn Care & Mowing",
      description: "Professional mowing, edging, and feeding to maintain a lush, healthy lawn throughout the growing season.",
      features: ["Regular scheduled visits", "Precision edging", "Lawn feeding programs", "Weed control"]
    },
    {
      icon: Trees,
      title: "Hedge Trimming & Pruning",
      description: "Expert trimming and shaping for hedges, shrubs, and ornamental plants to enhance your garden's structure.",
      features: ["Shape and style maintenance", "Seasonal pruning", "Height reduction", "Hedge health care"]
    },
    {
      icon: Sprout,
      title: "Planting & Garden Design",
      description: "From colorful flower beds to seasonal displays, we help your garden bloom with carefully selected plants.",
      features: ["Seasonal planting", "Color schemes", "Perennial gardens", "Native plant selection"]
    },
    {
      icon: Leaf,
      title: "Garden Tidy-Ups",
      description: "One-time or seasonal clean-ups to refresh overgrown spaces and prepare your garden for the season ahead.",
      features: ["Seasonal clearance", "Leaf removal", "Bed preparation", "General tidying"]
    },
    {
      icon: Calendar,
      title: "Maintenance Plans",
      description: "Regular scheduled visits to keep your garden in top shape year-round with our flexible maintenance packages.",
      features: ["Weekly visits", "Bi-weekly care", "Monthly service", "Custom schedules"]
    },
    {
      icon: Wrench,
      title: "Garden Features",
      description: "Enhance your outdoor space with paths, borders, raised beds, and other features that add structure and style.",
      features: ["Raised beds", "Garden edging", "Simple paths", "Border installation"]
    },
    {
      icon: Hammer,
      title: "Landscape Projects",
      description: "Transform your outdoor space with complete garden makeovers, from concept to completion.",
      features: ["Garden redesign", "Patio areas", "Lawn installation", "Complete transformations"]
    },
    {
      icon: Droplets,
      title: "Irrigation & Water Features",
      description: "Efficient watering solutions and water features that keep your garden thriving while conserving resources.",
      features: ["Watering systems", "Drip irrigation", "Water feature installation", "System maintenance"]
    }
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="section-spacing bg-gradient-to-br from-primary/10 via-background to-accent/5">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center reveal">
            <span className="px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full">
              Our Services
            </span>
            <h1 className="text-5xl md:text-6xl font-heading font-bold mt-6 mb-6">
              Complete Garden Care Services
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              From regular maintenance to complete transformations, we bring professional 
              care and craft to every garden we work on.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="reveal bg-card border-2 border-border rounded-2xl p-8 hover-lift"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-heading font-bold mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Feature Sections */}
      <section className="section-spacing bg-muted/30">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="reveal">
              <img
                src={plantingImage}
                alt="Professional garden planting service"
                className="rounded-3xl shadow-xl w-full h-[400px] object-cover"
              />
            </div>
            <div className="space-y-6 reveal">
              <h2 className="text-4xl font-heading font-bold">
                Maintenance Plans
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Keep your garden looking its best all year with our flexible maintenance packages. 
                Choose from weekly, bi-weekly, or monthly visits tailored to your garden's needs and your schedule.
              </p>
              <ul className="space-y-3">
                {[
                  "Consistent, reliable service",
                  "Seasonal adjustments included",
                  "Priority booking",
                  "Flexible scheduling"
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Leaf className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 reveal lg:order-1">
              <h2 className="text-4xl font-heading font-bold">
                One-Time Garden Tidy-Ups
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Sometimes your garden just needs a fresh start. Our one-time tidy-up service 
                is perfect for seasonal refreshes, preparing for events, or tackling that 
                overgrown space you've been meaning to sort out.
              </p>
              <Button size="lg" asChild>
                <Link to="/contact">Get a Quick Quote</Link>
              </Button>
            </div>
            <div className="reveal lg:order-2">
              <img
                src={hedgeImage}
                alt="Professional hedge trimming service"
                className="rounded-3xl shadow-xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="bg-gradient-to-br from-primary to-moss text-primary-foreground rounded-3xl p-12 md:p-16 text-center reveal">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Not Sure What You Need?
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Book a free garden visit and we'll provide honest advice, 
              clear pricing, and a custom plan for your space.
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="bg-background text-primary hover:bg-background/90"
              asChild
            >
              <Link to="/contact">Schedule Free Visit</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
