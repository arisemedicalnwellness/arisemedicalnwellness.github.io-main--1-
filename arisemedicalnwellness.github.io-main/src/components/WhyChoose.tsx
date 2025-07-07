
import { Shield, MapPin, Users, Settings } from "lucide-react";

const WhyChoose = () => {
  const reasons = [
    {
      icon: Users,
      title: "Board-Certified Team",
      description: "Our experienced medical professionals are board-certified and specialize in advanced wellness treatments."
    },
    {
      icon: Shield,
      title: "FDA-Cleared Devices",
      description: "All our technologies are FDA-cleared, ensuring the highest standards of safety and efficacy."
    },
    {
      icon: MapPin,
      title: "Convenient Location",
      description: "Easily accessible location with comfortable facilities designed for your wellness journey."
    },
    {
      icon: Settings,
      title: "Tailored Treatment Plans",
      description: "Personalized approaches based on your unique health goals and individual needs."
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white" id="why-choose-us" aria-labelledby="why-choose-heading">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <header className="text-center mb-12 sm:mb-16">
            <h2 id="why-choose-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 sm:mb-6 px-2">
              Why Choose Arise Medical & Wellness?
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-6 sm:mb-8" aria-hidden="true"></div>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-4">
              We combine cutting-edge technology with compassionate care to deliver exceptional results 
              in a comfortable, professional environment.
            </p>
          </header>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 px-2" role="list" aria-label="Our key advantages">
            {reasons.map((reason, index) => (
              <article key={reason.title} className="text-center group hover:transform hover:scale-105 transition-all duration-300 p-4" role="listitem">
                <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-gradient-to-br from-blue-100 to-teal-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:shadow-lg transition-shadow duration-300" aria-hidden="true">
                  <reason.icon className="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 text-blue-600" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 sm:mb-4">
                  {reason.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {reason.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
