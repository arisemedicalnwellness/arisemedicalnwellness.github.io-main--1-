
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah M.",
      age: 45,
      treatment: "ExoMind + Emsculpt NEO",
      rating: 5,
      text: "The combination of ExoMind and Emsculpt NEO has completely transformed how I feel. My mental clarity is sharper than it's been in years, and my body confidence has soared. The team at Arise truly cares about your success."
    },
    {
      name: "Jennifer L.",
      age: 52,
      treatment: "Emsella Chair",
      rating: 5,
      text: "After struggling with incontinence for years, the Emsella Chair has given me my life back. The treatment was comfortable, and the results were noticeable within just a few sessions. I can't thank the team enough."
    },
    {
      name: "Michael T.",
      age: 38,
      treatment: "Emsculpt NEO",
      rating: 5,
      text: "As someone who works out regularly but struggled with stubborn fat areas, Emsculpt NEO was a game changer. The muscle definition and fat reduction exceeded my expectations. Highly recommend Arise Medical & Wellness."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Patient Success Stories
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Hear from our patients about their transformative experiences with our advanced wellness technologies.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border-0">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <Quote className="h-8 w-8 text-blue-600/30 mr-2" />
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-slate-700 leading-relaxed mb-6 italic">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="border-t pt-4">
                    <p className="font-semibold text-slate-900 mb-1">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-slate-500 mb-2">
                      Age {testimonial.age}
                    </p>
                    <div className="inline-block bg-gradient-to-r from-blue-100 to-teal-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                      {testimonial.treatment}
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

export default Testimonials;
