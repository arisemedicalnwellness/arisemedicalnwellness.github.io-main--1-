
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const handleBookConsultation = () => {
    const callToActionSection = document.querySelector('section[class*="from-blue-600"]');
    if (callToActionSection) {
      callToActionSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreServices = () => {
    const technologiesSection = document.querySelector('section[class*="bg-gradient-to-br from-slate-50"]');
    if (technologiesSection) {
      technologiesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-slate-50 overflow-hidden" role="banner">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23e2e8f0%22%20fill-opacity%3D%220.3%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30" aria-hidden="true"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <header className="mb-6 sm:mb-8 animate-fade-in">
            <a 
              href="https://arisewellnessmed.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block hover:opacity-80 transition-opacity duration-300"
            >
              <img 
                src="/lovable-uploads/e7e87c24-7f36-4498-9ef7-38d7a226dd27.png" 
                alt="Arise Medical & Wellness - Advanced Wellness Technology"
                className="mx-auto h-16 sm:h-20 md:h-24 lg:h-32 w-auto"
                width="200"
                height="128"
              />
            </a>
          </header>
          
          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 mb-4 sm:mb-6 leading-tight animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Elevate Your
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent block">
              Wellness
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-slate-600 mb-8 sm:mb-10 md:mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in px-2" style={{ animationDelay: '0.4s' }}>
            Advanced wellness technology meets personalized care. Transform your body and mind with our cutting-edge treatments designed for optimal health and vitality.
          </p>
          
          {/* CTA Buttons */}
          <nav className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center animate-fade-in px-4" style={{ animationDelay: '0.6s' }} aria-label="Primary navigation">
            <Button 
              onClick={handleBookConsultation}
              size="lg" 
              className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 touch-target"
              aria-label="Book a free consultation appointment"
            >
              Book Free Consultation
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
            </Button>
            <Button 
              onClick={handleExploreServices}
              variant="outline" 
              size="lg"
              className="w-full sm:w-auto border-2 border-slate-300 text-slate-700 hover:bg-slate-50 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full transition-all duration-300 touch-target"
              aria-label="Explore our wellness services"
            >
              Explore Services
            </Button>
          </nav>
          
          {/* Trust Indicators */}
          <div className="mt-12 sm:mt-16 flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 text-slate-500 animate-fade-in px-4" style={{ animationDelay: '0.8s' }} role="list" aria-label="Trust indicators">
            <div className="flex items-center gap-2" role="listitem">
              <div className="w-2 h-2 bg-green-500 rounded-full" aria-hidden="true"></div>
              <span className="text-xs sm:text-sm font-medium">FDA Cleared Technology</span>
            </div>
            <div className="flex items-center gap-2" role="listitem">
              <div className="w-2 h-2 bg-blue-500 rounded-full" aria-hidden="true"></div>
              <span className="text-xs sm:text-sm font-medium">Board Certified Team</span>
            </div>
            <div className="flex items-center gap-2" role="listitem">
              <div className="w-2 h-2 bg-teal-500 rounded-full" aria-hidden="true"></div>
              <span className="text-xs sm:text-sm font-medium">Personalized Care</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce" aria-label="Scroll down indicator">
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-slate-300 rounded-full flex justify-center">
          <div className="w-1 h-2 sm:h-3 bg-slate-400 rounded-full mt-1 sm:mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
