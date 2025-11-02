import beforeImage from "@/assets/before-garden-1.jpg";
import afterImage from "@/assets/after-garden-1.jpg";
import plantingImage from "@/assets/planting-flowers.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Northside Garden Transformation",
      location: "Riverside",
      challenge: "Overgrown lawn and neglected flower beds",
      result: "Complete garden renovation with new lawn and seasonal planting",
      before: beforeImage,
      after: afterImage,
    },
    {
      title: "Maple Grove Maintenance",
      location: "Maple Grove",
      challenge: "Busy family needed reliable ongoing care",
      result: "Weekly maintenance plan keeping garden pristine year-round",
      before: plantingImage,
      after: afterImage,
    },
    {
      title: "Oak Hill Garden Refresh",
      location: "Oak Hill",
      challenge: "Tired garden needing seasonal update",
      result: "New planting scheme with colorful perennials and improved structure",
      before: beforeImage,
      after: plantingImage,
    },
  ];

  return (
    <main>
      {/* Hero */}
      <section className="section-spacing bg-gradient-to-br from-primary/10 via-background to-accent/5">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center reveal">
            <span className="px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full">
              Our Work
            </span>
            <h1 className="text-5xl md:text-6xl font-heading font-bold mt-6 mb-6">
              Real Gardens, Real Results
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Every garden tells a story. Here are some of our favourite transformations 
              from local homes just like yours.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="space-y-24">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-start ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Images */}
                <div className={`space-y-6 reveal ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  {/* Before Image */}
                  <div className="relative group">
                    <div className="absolute top-4 left-4 bg-foreground/90 text-background px-3 py-1.5 rounded-full text-sm font-medium z-10">
                      Before
                    </div>
                    <img
                      src={project.before}
                      alt={`${project.title} before landscaping`}
                      className="w-full h-[300px] object-cover rounded-2xl shadow-lg hover-lift"
                    />
                  </div>

                  {/* After Image */}
                  <div className="relative group">
                    <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1.5 rounded-full text-sm font-medium z-10">
                      After
                    </div>
                    <img
                      src={project.after}
                      alt={`${project.title} after landscaping`}
                      className="w-full h-[300px] object-cover rounded-2xl shadow-lg hover-lift"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className={`space-y-6 reveal ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div>
                    <div className="inline-block px-3 py-1 bg-accent/20 text-accent-foreground text-sm font-medium rounded-full mb-4">
                      {project.location}
                    </div>
                    <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                      {project.title}
                    </h2>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        The Challenge
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {project.challenge}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        The Result
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {project.result}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4">
                    <div className="bg-muted/50 border-2 border-border rounded-xl p-6">
                      <p className="text-sm italic text-muted-foreground">
                        "The transformation exceeded our expectations. Professional, 
                        reliable, and the garden looks amazing. We couldn't be happier."
                      </p>
                      <p className="text-sm font-medium text-foreground mt-3">
                        — Homeowner, {project.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center reveal">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Ready to Transform Your Garden?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's discuss your vision and create a garden you'll love.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-full text-lg font-medium bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
              >
                Book Free Garden Visit
              </a>
              <a
                href="tel:+1234567890"
                className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-full text-lg font-medium border-2 border-primary bg-transparent text-primary hover:bg-primary/5 transition-all duration-300"
              >
                Call to Discuss
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Projects;
