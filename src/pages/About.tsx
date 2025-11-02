import { Heart, Shield, Users, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import teamPhoto from "@/assets/team-photo.jpg";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Respect",
      description: "We treat every garden—and every homeowner—with genuine care and consideration."
    },
    {
      icon: Shield,
      title: "Quality",
      description: "Professional tools, skilled team, and attention to detail in everything we do."
    },
    {
      icon: Users,
      title: "Reliability",
      description: "On time, on budget, and always ready to answer your questions."
    },
    {
      icon: Leaf,
      title: "Nature",
      description: "We love what we do. Gardening is our craft, our passion, and our pride."
    }
  ];

  return (
    <main>
      {/* Hero */}
      <section className="section-spacing bg-gradient-to-br from-primary/10 via-background to-accent/5">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center reveal">
            <span className="px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full">
              About Us
            </span>
            <h1 className="text-5xl md:text-6xl font-heading font-bold mt-6 mb-6">
              Meet the Team Behind Your Garden
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A family-run business built on care, trust, and a genuine love for nature.
            </p>
          </div>
        </div>
      </section>

      {/* Team Photo */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="reveal">
            <img
              src={teamPhoto}
              alt="GreenCraft landscaping team"
              className="w-full max-w-5xl mx-auto rounded-3xl shadow-2xl h-[400px] md:h-[500px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-spacing bg-muted/30">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto space-y-8 reveal">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-8">
              Our Story
            </h2>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                GreenCraft began over 15 years ago with a simple idea: gardens should be 
                places of pride, beauty, and peace—not stress. What started as one person 
                with a passion for nature has grown into a trusted, family-run team serving 
                homeowners across our local community.
              </p>
              
              <p>
                We're not a corporate landscaping company. We're your neighbours. We live 
                here, we work here, and we care about the spaces we create. Every lawn we 
                mow, every hedge we trim, every flower we plant—it matters to us because 
                it matters to you.
              </p>
              
              <p>
                Our team brings years of experience, proper training, and the right tools 
                to every job. But more than that, we bring a friendly approach and genuine 
                respect for your home. Fully insured, reliable, and always ready to listen, 
                we're here to make garden care easy and enjoyable.
              </p>

              <div className="bg-card border-2 border-primary/20 rounded-2xl p-8 mt-8">
                <p className="text-xl font-heading text-foreground mb-4 italic">
                  "Every garden is different, and every homeowner has their own vision. 
                  Our job is to listen, advise, and bring that vision to life with skill 
                  and care."
                </p>
                <p className="text-sm font-medium text-primary">
                  — The GreenCraft Team
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16 reveal">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Our Values
            </h2>
            <p className="text-lg text-muted-foreground">
              The principles that guide everything we do.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="reveal bg-card border-2 border-border rounded-2xl p-8 text-center hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-bold mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community */}
      <section className="section-spacing bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center reveal">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Proudly Serving Your Local Community
            </h2>
            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              We've had the privilege of working with hundreds of local families, 
              helping them create outdoor spaces they love. Insured, experienced, 
              and always committed to doing right by our neighbours.
            </p>
            <p className="text-lg font-medium text-primary">
              Thank you for trusting us with your gardens.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="bg-gradient-to-br from-primary to-moss text-primary-foreground rounded-3xl p-12 md:p-16 text-center reveal">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Let's Chat About Your Garden
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Free visit, friendly advice, and a clear plan tailored to your space.
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="bg-background text-primary hover:bg-background/90"
              asChild
            >
              <Link to="/contact">Schedule Your Free Visit</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
