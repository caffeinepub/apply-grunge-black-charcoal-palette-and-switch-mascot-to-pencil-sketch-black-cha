export function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Professional Time Waster',
      avatar: '🙄',
      quote: 'This website changed my life. I used to be productive. Now I just scroll endlessly. Thanks, I guess?',
      rating: 5
    },
    {
      name: 'Mike Chen',
      role: 'Chief Procrastination Officer',
      avatar: '😑',
      quote: 'I was looking for a reason to avoid my responsibilities. This site delivered beyond my wildest dreams.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Certified Cynic',
      avatar: '🤨',
      quote: 'Finally, a website that understands me. By which I mean it also has no idea what it\'s doing.',
      rating: 5
    },
    {
      name: 'David Thompson',
      role: 'Disappointment Enthusiast',
      avatar: '😐',
      quote: 'I came here expecting nothing and I\'m still let down. It\'s almost impressive.',
      rating: 5
    },
    {
      name: 'Jessica Park',
      role: 'Sarcasm Connoisseur',
      avatar: '🙃',
      quote: 'This is exactly what the internet needed. Another website. Truly groundbreaking work here.',
      rating: 5
    },
    {
      name: 'Tom Anderson',
      role: 'Former Optimist',
      avatar: '😶',
      quote: 'I used to believe in the potential of humanity. Then I found this site. Now I\'m realistic.',
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-accent/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              What People Are Saying
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real testimonials from real people who definitely exist and aren't made up at all.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-6 space-y-4 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-3">
                  <div className="text-4xl">{testimonial.avatar}</div>
                  <div>
                    <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <span key={i} className="text-muted-foreground">★</span>
                  ))}
                </div>
                
                <p className="text-muted-foreground leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-sm text-muted-foreground italic">
              * All testimonials are 100% authentic and not at all fabricated for comedic effect.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
