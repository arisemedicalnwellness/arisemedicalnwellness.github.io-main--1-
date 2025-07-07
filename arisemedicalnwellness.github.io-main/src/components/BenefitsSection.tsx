
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Shield, Award, CheckCircle } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    "Clinically proven reduction in depression symptoms",
    "Significant improvement in anxiety levels",
    "Enhanced mood stability and emotional regulation",
    "Improved cognitive function and mental clarity",
    "Non-invasive treatment with minimal side effects",
    "FDA-cleared for safety and efficacy"
  ];

  const clinicalData = [
    {
      icon: Award,
      stat: "FDA Cleared",
      description: "Approved for depression treatment"
    },
    {
      icon: Heart,
      stat: "70%+",
      description: "Patient improvement rate"
    },
    {
      icon: Shield,
      stat: "Safe",
      description: "Non-invasive with minimal side effects"
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <Badge className="mb-4 bg-green-100 text-green-800 px-4 py-2 text-sm font-semibold">
              FDA CLEARED TREATMENT
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 sm:mb-6 px-2">
              Benefits for Depression & Anxiety
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6 sm:mb-8"></div>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-4">
              ExoMind neurostimulation therapy is FDA-cleared for treating depression and has shown 
              remarkable results in reducing anxiety symptoms through targeted brain stimulation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 sm:mb-16">
            {/* Image Side */}
            <div className="order-2 lg:order-1">
              <img 
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=600&h=400&fit=crop"
                alt="Woman experiencing improved mental wellness through ExoMind treatment"
                className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-lg shadow-lg"
                loading="lazy"
              />
            </div>

            {/* Content Side */}
            <div className="order-1 lg:order-2">
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">
                Clinically Proven Results
              </h3>
              <div className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <p className="text-base sm:text-lg text-slate-700">{benefit}</p>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {clinicalData.map((data, index) => (
                  <Card key={index} className="text-center p-4 bg-white/80">
                    <CardContent className="p-0">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-2">
                        <data.icon className="h-5 w-5 text-white" />
                      </div>
                      <div className="text-lg sm:text-xl font-bold text-slate-900 mb-1">
                        {data.stat}
                      </div>
                      <div className="text-sm text-slate-600">
                        {data.description}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <CardContent className="p-6 sm:p-8 lg:p-12 text-center">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                Take the First Step Towards Better Mental Health
              </h3>
              <p className="text-lg sm:text-xl text-blue-100 mb-6 max-w-3xl mx-auto">
                Our FDA-cleared ExoMind technology offers a safe, effective alternative for those 
                seeking relief from depression and anxiety symptoms.
              </p>
              <div className="text-sm text-blue-200">
                * Individual results may vary. Consult with our medical professionals to determine if ExoMind is right for you.
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
