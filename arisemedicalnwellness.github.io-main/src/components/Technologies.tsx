import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, ArrowRight } from "lucide-react";

const Technologies = () => {
  const technologies = [
    {
      icon: Brain,
      name: "ExoMind",
      subtitle: "Neurostimulation Technology",
      description: "Advanced brain optimization through targeted neurostimulation. Enhance cognitive function, improve focus, elevate mood, and optimize mental performance with our cutting-edge ExoMind technology.",
      benefits: [
        "Enhanced cognitive function",
        "Improved focus and concentration", 
        "Mood enhancement and stress reduction",
        "Optimized brain performance",
        "Non-invasive treatment",
        "No Downtime",
        "Fast Treatment"
      ],
      gradient: "from-purple-500 to-blue-600",
      bgGradient: "from-purple-50 to-blue-50",
      hasImage: true,
      imageUrl: "/lovable-uploads/fc069f6c-d1b8-4276-8d5a-570f45a297cd.png"
    }
  ];

  const handleLearnMore = (technologyName: string) => {
    // Scroll to the Call to Action section where users can book a consultation
    const callToActionSection = document.querySelector('section[class*="from-blue-600"]');
    if (callToActionSection) {
      callToActionSection.scrollIntoView({ behavior: 'smooth' });
      
      // Optional: You could also pre-select the treatment in the form
      const treatmentSelect = document.querySelector('select') as HTMLSelectElement;
      if (treatmentSelect) {
        const optionValue = technologyName.toLowerCase().replace(' ', '');
        const option = Array.from(treatmentSelect.options).find(opt => 
          opt.value.includes(optionValue.substring(0, 7))
        );
        if (option) {
          treatmentSelect.value = option.value;
        }
      }
    }
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-slate-50 to-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 sm:mb-6 px-2">
              Revolutionary Technology
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-6 sm:mb-8"></div>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-4">
              Experience the future of wellness with our advanced, FDA-cleared technology 
              designed to optimize your mind for peak performance.
            </p>
          </div>
          
          <div className="space-y-6 sm:space-y-8">
            {technologies.map((tech, index) => (
              <Card key={tech.name} className={`overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-gradient-to-r ${tech.bgGradient} mx-2 sm:mx-0`}>
                <CardContent className="p-0">
                  <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                    {/* Content Side */}
                    <div className={`p-6 sm:p-8 lg:p-12 flex flex-col justify-center ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                      <div className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-r ${tech.gradient} rounded-full flex items-center justify-center mb-4 sm:mb-6`}>
                        <tech.icon className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-white" />
                      </div>
                      
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-2">
                        {tech.name}
                      </h3>
                      <p className={`text-base sm:text-lg font-medium bg-gradient-to-r ${tech.gradient} bg-clip-text text-transparent mb-3 sm:mb-4`}>
                        {tech.subtitle}
                      </p>
                      
                      <p className="text-base sm:text-lg text-slate-600 mb-4 sm:mb-6 leading-relaxed">
                        {tech.description}
                      </p>
                      
                      <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                        {tech.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center text-sm sm:text-base text-slate-700">
                            <div className={`w-2 h-2 bg-gradient-to-r ${tech.gradient} rounded-full mr-3 flex-shrink-0`}></div>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                      
                      <Button 
                        onClick={() => handleLearnMore(tech.name)}
                        className={`bg-gradient-to-r ${tech.gradient} hover:opacity-90 text-white self-start px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold transition-all duration-300 cursor-pointer text-sm sm:text-base`}
                      >
                        Learn More
                        <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                      </Button>
                    </div>
                    
                    {/* Image/Visual Side */}
                    <div className={`bg-gradient-to-br ${tech.gradient} flex items-center justify-center p-6 sm:p-8 lg:p-12 min-h-[250px] sm:min-h-[300px] lg:min-h-[400px] ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                      {tech.hasImage ? (
                        <div className="w-full h-full flex items-center justify-center">
                          <img 
                            src={tech.imageUrl} 
                            alt={tech.name}
                            className="max-w-full max-h-full object-contain rounded-lg shadow-lg"
                          />
                        </div>
                      ) : (
                        <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 xl:w-64 xl:h-64 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                          <tech.icon className="h-16 w-16 sm:h-20 sm:w-20 lg:h-24 lg:w-24 xl:h-32 xl:w-32 text-white" />
                        </div>
                      )}
                    </div>
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

export default Technologies;
