import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const HeroSection = () => {
  const services = [
    {
      title: "Video Consult",
      image: "https://www.shukhee.com/img/home/video.png",
      buttonText: "Consult Now",
      bgColor: "bg-blue-50"
    },
    {
      title: "Mental Wellness",
      image: "https://www.shukhee.com/img/home/mental.png",
      buttonText: "Consult Now",
      bgColor: "bg-green-50"
    },
    {
      title: "Home Lab",
      image: "https://www.shukhee.com/img/home/lab.png",
      buttonText: "Book Now",
      bgColor: "bg-pink-50"
    },
    {
      title: "Online Pharmacy",
      image: "https://www.shukhee.com/img/home/pharma.png",
      buttonText: "Order Now",
      bgColor: "bg-purple-50"
    },
    {
      title: "Health Mall",
      image: "https://www.shukhee.com/img/home/healthmall.png",
      buttonText: "Order Now",
      bgColor: "bg-teal-50"
    }
  ];

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4">
          Your Complete
          <br />
          <span className="text-shukhee-purple">Healthcare</span>
          <br />
          Solutions
        </h1>
        <p className="text-xl text-gray-600">Your Complete Healthcare Solutions</p>
      </div>

      {/* Service Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
        {services.map((service, index) => (
          <Card key={index} className={`${service.bgColor} border-0 p-6 text-center hover:shadow-lg transition-shadow`}>
            <div className="mb-4">
              <img 
                src={service.image} 
                alt={service.title}
                className="w-20 h-20 mx-auto object-cover rounded-lg"
              />
            </div>
            <h3 className="font-semibold text-gray-800 mb-4">{service.title}</h3>
            <Button 
              variant="outline" 
              size="sm"
              className="border-gray-300 text-gray-700 hover:bg-white"
            >
              {service.buttonText}
            </Button>
          </Card>
        ))}
      </div>

      {/* Group Image */}
      <div className="text-center">
        <img 
          src="https://www.shukhee.com/img/home/group.png" 
          alt="Healthcare Group"
          className="mx-auto max-w-full h-auto"
        />
      </div>
    </section>
  );
};

export default HeroSection;