import { Calendar, ClipboardList, Sparkles } from "lucide-react";

const Process = () => {
  const steps = [
    {
      icon: Calendar,
      number: "01",
      title: "Free Garden Visit",
      description: "We come to you for a friendly, no-pressure chat about your garden needs and vision."
    },
    {
      icon: ClipboardList,
      number: "02",
      title: "Plan & Quote",
      description: "Clear pricing, honest advice, and a custom plan designed around your budget and goals."
    },
    {
      icon: Sparkles,
      number: "03",
      title: "Care & Results",
      description: "Our skilled team brings your garden to life with quality work, respect, and attention to detail."
    }
  ];

  return (
    <section className="section-spacing bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-16 reveal">
          <span className="px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full">
            How It Works
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mt-6 mb-4">
            Simple, Clear, Reliable
          </h2>
          <p className="text-lg text-muted-foreground">
            From first contact to beautiful results, we make garden care easy.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative">
          {/* Connection Line */}
          <div className="hidden md:block absolute top-16 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-primary via-accent to-primary opacity-20" />

          {steps.map((step, index) => (
            <div
              key={step.title}
              className="reveal text-center relative"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Icon Circle */}
              <div className="relative inline-flex items-center justify-center mb-6">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                  <step.icon className="w-10 h-10 text-primary-foreground" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center shadow-md">
                  <span className="text-xs font-bold text-accent-foreground">
                    {step.number}
                  </span>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-heading font-bold mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl" />
    </section>
  );
};

export default Process;
