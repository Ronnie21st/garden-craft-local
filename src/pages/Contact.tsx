import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name || !formData.email || !formData.phone) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: ""
    });
  };

  const faqs = [
    {
      question: "How much do your services cost?",
      answer: "Every garden is different, so we provide custom quotes based on your specific needs. We offer free garden visits where we can assess your space and provide clear, upfront pricing with no hidden fees."
    },
    {
      question: "What areas do you serve?",
      answer: "We proudly serve homeowners throughout the local community and surrounding areas. Contact us to confirm if we cover your location."
    },
    {
      question: "Are you insured?",
      answer: "Yes, we are fully insured for your peace of mind. Our team is experienced, trained, and equipped with professional tools."
    },
    {
      question: "Do you provide your own equipment?",
      answer: "Absolutely. We arrive with all necessary professional equipment, tools, and materials to complete the job to the highest standard."
    },
    {
      question: "What happens after the work is done?",
      answer: "We clean up thoroughly, remove all waste, and leave your property tidy. For maintenance plans, we schedule your next visit. We're always available for follow-up questions."
    },
    {
      question: "Can I get a one-time service or do I need a contract?",
      answer: "Both! We offer flexible one-time services for tidy-ups and seasonal work, as well as ongoing maintenance plans. No long-term contracts required."
    }
  ];

  return (
    <main>
      {/* Hero */}
      <section className="section-spacing bg-gradient-to-br from-primary/10 via-background to-accent/5">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center reveal">
            <span className="px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full">
              Get in Touch
            </span>
            <h1 className="text-5xl md:text-6xl font-heading font-bold mt-6 mb-6">
              Let's Talk About Your Garden
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Book a free garden visit or ask us anything. We're here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact Form */}
            <div className="lg:col-span-3 reveal">
              <div className="bg-card border-2 border-border rounded-3xl p-8 md:p-10">
                <h2 className="text-3xl font-heading font-bold mb-6">
                  Schedule Your Free Visit
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Your Name *
                    </label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Smith"
                      required
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Phone *
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(123) 456-7890"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium mb-2">
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full h-11 px-4 rounded-full border-2 border-border bg-background"
                    >
                      <option value="">Select a service...</option>
                      <option value="lawn-care">Lawn Care & Mowing</option>
                      <option value="hedge-trimming">Hedge Trimming</option>
                      <option value="planting">Planting & Design</option>
                      <option value="tidy-up">Garden Tidy-Up</option>
                      <option value="maintenance">Maintenance Plan</option>
                      <option value="other">Other / Not Sure</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Tell Us About Your Garden
                    </label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Any details about your garden, what you're looking for, or questions you have..."
                      rows={5}
                      className="rounded-2xl"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Send Message
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    We typically respond within 2 hours during business hours
                  </p>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6 reveal">
              <div className="bg-card border-2 border-border rounded-2xl p-6">
                <h3 className="font-heading text-xl font-bold mb-6">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <a
                    href="tel:+1234567890"
                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-muted/50 transition-colors group"
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-medium text-sm text-muted-foreground">
                        Call Us
                      </div>
                      <div className="font-semibold text-foreground">
                        (123) 456-7890
                      </div>
                    </div>
                  </a>

                  <a
                    href="mailto:hello@greencraft.com"
                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-muted/50 transition-colors group"
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-medium text-sm text-muted-foreground">
                        Email
                      </div>
                      <div className="font-semibold text-foreground">
                        hello@greencraft.com
                      </div>
                    </div>
                  </a>

                  <div className="flex items-start gap-4 p-4 rounded-xl">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-sm text-muted-foreground">
                        Service Area
                      </div>
                      <div className="font-semibold text-foreground">
                        Your Local Area
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-xl">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-sm text-muted-foreground">
                        Hours
                      </div>
                      <div className="font-semibold text-foreground">
                        Mon-Sat: 8am-6pm
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary/20 rounded-2xl p-6">
                <h3 className="font-heading text-lg font-bold mb-3">
                  Quick Response
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We pride ourselves on fast, friendly communication. Most inquiries 
                  get a response within 2 hours during business hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-spacing bg-muted/30">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16 reveal">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Quick answers to common questions about our services.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={faq.question}
                className="reveal bg-card border-2 border-border rounded-2xl p-6 md:p-8 hover-lift"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <h3 className="text-lg font-heading font-bold mb-3">
                  {faq.question}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
