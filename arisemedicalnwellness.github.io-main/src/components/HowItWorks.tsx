
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Zap, Target, TrendingUp } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Clock,
      title: "No Downtime",
      description: "Our treatments require no recovery time, allowing you to return to your daily activities immediately after each session.",
      image: "/lovable-uploads/no-downtime-clock.jpg"
    },
    {
      icon: Target,
      title: "Targeted Stimulation",
      description: "Precise neurostimulation is delivered to specific brain regions using FDA-cleared protocols for maximum effectiveness.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop"
    },
    {
      icon: Zap,
      title: "Fast Treatment",
      description: "Each treatment session is quick and efficient, typically lasting just 20-30 minutes for optimal convenience.",
      image: "/lovable-uploads/fast-treatment-timer.jpg"
    },
    {
      icon: TrendingUp,
      title: "Measurable Results",
      description: "Track your progress with objective measurements and experience lasting improvements in cognitive function and mood.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop"
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 sm:mb-6 px-2">
              How ExoMind Works
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-6 sm:mb-8"></div>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-4">
              Our cutting-edge neurostimulation technology follows a precise, scientifically-backed process 
              to optimize your brain's performance and enhance mental wellness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <Card key={step.title} className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-0">
                  <div className="relative">
                    <img 
                      src={step.image} 
                      alt={step.title}
                      className="w-full h-48 sm:h-56 object-cover"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4 w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                      <step.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="absolute top-4 right-4 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold text-purple-600">{index + 1}</span>
                    </div>
                  </div>
                  <div className="p-6 sm:p-8">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
