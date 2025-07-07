import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Logo and Description */}
            <div className="col-span-1 md:col-span-2">
              <a 
                href="https://arisewellnessmed.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block mb-4 hover:opacity-80 transition-opacity duration-300"
              >
                <img 
                  src="/lovable-uploads/e7e87c24-7f36-4498-9ef7-38d7a226dd27.png" 
                  alt="Arise Medical & Wellness"
                  className="h-16 w-auto filter brightness-0 invert"
                />
              </a>
              <p className="text-slate-300 leading-relaxed mb-6">
                Arise Medical & Wellness is dedicated to elevating your health and wellness through 
                innovative, non-invasive treatments that deliver real results.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-300">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-300">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-300">
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#about" className="text-slate-300 hover:text-white transition-colors duration-300">About Us</a></li>
                <li><a href="#technologies" className="text-slate-300 hover:text-white transition-colors duration-300">Technologies</a></li>
                <li><a href="#testimonials" className="text-slate-300 hover:text-white transition-colors duration-300">Testimonials</a></li>
                <li><a href="#contact" className="text-slate-300 hover:text-white transition-colors duration-300">Contact</a></li>
              </ul>
            </div>
            
            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 text-slate-400 mr-2 flex-shrink-0" />
                  <span className="text-slate-300 text-sm">7447 Egan Drive, Suite 207<br />Savage, MN 55378</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-4 w-4 text-slate-400 mr-2" />
                  <span className="text-slate-300 text-sm">952-522-6344</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-4 w-4 text-slate-400 mr-2" />
                  <span className="text-slate-300 text-sm">info@arisewellnessmed.com</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom Section */}
          <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm mb-4 md:mb-0">
              © 2024 Arise Medical & Wellness. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-slate-400 hover:text-white transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors duration-300">Terms of Service</a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors duration-300">Medical Disclaimer</a>
            </div>
          </div>
          
          {/* Medical Disclaimer */}
          <div className="mt-8 p-4 bg-slate-800 rounded-lg">
            <p className="text-slate-400 text-xs leading-relaxed">
              <strong>Medical Disclaimer:</strong> The information provided on this website is for educational purposes only and should not be considered medical advice. 
              Individual results may vary. Please consult with a qualified healthcare provider to determine if our treatments are right for you. 
              All treatments are performed under medical supervision by licensed professionals.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
