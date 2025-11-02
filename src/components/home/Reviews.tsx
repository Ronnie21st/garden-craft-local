import { Star } from "lucide-react";

const Reviews = () => {
  const reviews = [
    {
      name: "Sarah Mitchell",
      location: "Riverside",
      text: "The team transformed our overgrown backyard into a beautiful, manageable space. Professional, friendly, and reliable. Highly recommend!",
      rating: 5
    },
    {
      name: "James Chen",
      location: "Oak Hill",
      text: "We've been using their monthly maintenance service for two years now. Our garden has never looked better. Worth every penny.",
      rating: 5
    },
    {
      name: "Emma Wilson",
      location: "Maple Grove",
      text: "Fast response, fair pricing, and excellent work. They really care about the quality of their service and it shows in the results.",
      rating: 5
    }
  ];

  return (
    <section className="section-spacing bg-background">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-16 reveal">
          <span className="px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full">
            Reviews
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mt-6 mb-4">
            What Neighbours Say
          </h2>
          <p className="text-lg text-muted-foreground">
            Real feedback from local homeowners we're proud to serve.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {reviews.map((review, index) => (
            <div
              key={review.name}
              className="reveal bg-card border-2 border-border rounded-2xl p-8 hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-muted-foreground leading-relaxed mb-6">
                "{review.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-lg font-heading font-semibold text-primary">
                    {review.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="font-medium text-foreground">{review.name}</div>
                  <div className="text-sm text-muted-foreground">{review.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
