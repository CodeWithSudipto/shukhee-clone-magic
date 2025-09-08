import { Card, CardContent } from "@/components/ui/card";

const AppointmentSection = () => {
  const services = [
    {
      title: "Gynaecologist / Obstetrician",
      description: "Explore for women's health, pregnancy and infertility treatment.",
      image: "https://www.shukhee.com/assets/Gynaecologist_Obstetrician-ClHod_bn.jpeg",
      link: "https://www.shukhee.com/doctor-list?specialty=11"
    },
    {
      title: "Caregiver",
      description: "Get full care for your baby and elderly ones, including nurses.",
      image: "https://www.shukhee.com/assets/Caregiver-BpDFB7hA.jpeg",
      link: "https://www.shukhee.com/caregiver"
    },
    {
      title: "Dietitian/ Nutritionist",
      description: "Get complete guidance on eat right, weight management and sports nutrition.",
      image: "https://www.shukhee.com/assets/Dietitian_Nutritionist-D_B6hAVx.jpeg",
      link: "https://www.shukhee.com/doctor-list?specialty=18"
    },
    {
      title: "Physiotherapist",
      description: "Pulled a muscle? Get it treated by a trained Physiotherapist.",
      image: "https://www.shukhee.com/assets/Physiotherapist-_CVb66B4.jpeg",
      link: "https://www.shukhee.com/doctor-list?specialty=28"
    }
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Book an appointment for an in-clinic or in-house help
          </h2>
          <p className="text-gray-600">Find professionals across all specialities</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
              <a href={service.link} className="block">
                <div className="aspect-square overflow-hidden rounded-t-lg">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold text-gray-800 mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-600">{service.description}</p>
                </CardContent>
              </a>
            </Card>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex justify-center mt-8 space-x-4">
          <button className="text-gray-400 hover:text-gray-600">‹</button>
          <button className="text-gray-400 hover:text-gray-600">›</button>
        </div>
      </div>
    </section>
  );
};

export default AppointmentSection;