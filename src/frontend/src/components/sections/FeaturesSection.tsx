import { Zap, TrendingDown, Clock, DollarSign, Users, AlertCircle } from 'lucide-react';

export function FeaturesSection() {
  const features = [
    {
      icon: Zap,
      title: 'Lightning-Fast Loading',
      description: 'Because the 0.3 seconds you save will definitely change your life forever.'
    },
    {
      icon: TrendingDown,
      title: 'Decreasing Productivity',
      description: 'Our platform is scientifically designed to help you accomplish less in more time.'
    },
    {
      icon: Clock,
      title: '24/7 Availability',
      description: 'We never sleep, so you can waste time at any hour. Your insomnia thanks us.'
    },
    {
      icon: DollarSign,
      title: 'Completely Free*',
      description: '*Free as in "free from any actual value or purpose." But hey, you get what you pay for.'
    },
    {
      icon: Users,
      title: 'Community of Dozens',
      description: 'Join our thriving community of literally dozens of people who also have nothing better to do.'
    },
    {
      icon: AlertCircle,
      title: 'Cutting-Edge Technology',
      description: 'Built with the latest buzzwords and frameworks that will be obsolete by next Tuesday.'
    }
  ];

  return (
    <section id="features" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Revolutionary Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Prepare to be underwhelmed by our groundbreaking innovations that nobody asked for.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold">{feature.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
