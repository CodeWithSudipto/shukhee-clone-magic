import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SliderSection = () => {
  const slides = [
    {
      image: "https://shukhee-public-bucket.s3.ap-southeast-1.amazonaws.com/slider/url-1756889477321-41755710.jpg",
      link: "https://www.grameenphone.com/personal/plans-offers/offers/shukhee-packs-offer"
    },
    {
      image: "https://shukhee-public-bucket.s3.ap-southeast-1.amazonaws.com/slider/url-1756889289222-220052795.png",
      link: "https://www.shukhee.com/emergency-appointment-booking"
    },
    {
      image: "https://shukhee-public-bucket.s3.ap-southeast-1.amazonaws.com/slider/url-1756716665301-377273451.jpg",
      link: "https://www.shukhee.com/emergency-appointment-booking"
    }
  ];

  return (
    <section className="container mx-auto px-4 py-8">
      <div className="relative">
        <div className="overflow-hidden rounded-lg">
          <div className="flex transition-transform duration-300">
            {slides.map((slide, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <a href={slide.link} target="_blank" rel="noopener noreferrer">
                  <img 
                    src={slide.image}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-64 md:h-80 object-cover rounded-lg"
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
        
        {/* Navigation buttons */}
        <Button 
          variant="outline" 
          size="icon"
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
        >
          <ChevronLeft className="w-4 h-4" />
        </Button>
        
        <Button 
          variant="outline" 
          size="icon"
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
        >
          <ChevronRight className="w-4 h-4" />
        </Button>

        {/* Dots indicator */}
        <div className="flex justify-center space-x-2 mt-4">
          {slides.map((_, index) => (
            <div 
              key={index}
              className="w-2 h-2 rounded-full bg-gray-300 hover:bg-shukhee-purple cursor-pointer"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SliderSection;