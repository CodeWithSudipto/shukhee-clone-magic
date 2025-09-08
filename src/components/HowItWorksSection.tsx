import { Card, CardContent } from "@/components/ui/card";

const HowItWorksSection = () => {
  const steps = [
    {
      number: "1",
      title: "Find Your Doctor",
      description: "Find your desired doctor and clinic based on location and specialty",
      icon: "https://www.shukhee.com/img/works-way/3.svg"
    },
    {
      number: "2", 
      title: "Make an Appointment",
      description: "Easily book your appointment on the desired date",
      icon: "https://www.shukhee.com/img/works-way/2.svg"
    },
    {
      number: "3",
      title: "Get Services", 
      description: "We will help to find and provide solutions for your health",
      icon: "https://www.shukhee.com/img/works-way/1.svg"
    }
  ];

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">How it works</h2>
        <p className="text-gray-600">Guidelines for using the platforms</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="p-0">
              <div className="mb-6">
                <img 
                  src={step.icon}
                  alt={step.title}
                  className="w-20 h-20 mx-auto"
                />
              </div>
              <div className="text-4xl font-bold text-shukhee-purple mb-4">{step.number}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default HowItWorksSection;