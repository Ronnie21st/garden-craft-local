import teamPhoto from "@/assets/team-photo.jpg";

const Story = () => {
  return (
    <section className="section-spacing bg-muted/30">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="reveal">
            <div className="relative rounded-3xl overflow-hidden shadow-xl hover-lift">
              <img
                src={teamPhoto}
                alt="GreenCraft team of professional landscapers"
                className="w-full h-[450px] object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6 reveal">
            <div className="inline-block">
              <span className="px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full">
                Our Story
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-heading font-bold leading-tight text-foreground">
              Gardening is About Care, Trust, and Pride
            </h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                For over 15 years, we've been the trusted garden care partner for 
                homeowners in our local community. What started as a passion for 
                nature and craft has grown into a family-run business built on genuine 
                relationships and beautiful results.
              </p>
              <p>
                We believe every garden tells a story. Whether it's a weekly tidy-up 
                or a complete transformation, we treat each space with the same respect, 
                attention, and skill we'd give our own homes.
              </p>
              <p>
                Our team brings experience, care, and a friendly approach to every 
                garden visit. Insured, reliable, and always ready to answer your 
                questions—we're here to help your outdoor space thrive.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-6">
              {[
                { number: "500+", label: "Happy Homes" },
                { number: "15+", label: "Years Experience" },
                { number: "5★", label: "Local Reviews" }
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-heading font-bold text-primary">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
