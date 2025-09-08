import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const HealthConcernsSection = () => {
  const healthConcerns = [
    {
      title: "Depression Issue",
      icon: "https://shukhee-public-bucket.s3.ap-southeast-1.amazonaws.com/health-concern/icon-1725281289476-201066899.png"
    },
    {
      title: "Allergies", 
      icon: "https://shukhee-public-bucket.s3.ap-southeast-1.amazonaws.com/health-concern/icon-1725281130285-787038540.png"
    },
    {
      title: "Cough & Cold",
      icon: "https://shukhee-public-bucket.s3.ap-southeast-1.amazonaws.com/health-concern/icon-1725281040893-619903986.png"
    },
    {
      title: "Skin Problems",
      icon: "https://shukhee-public-bucket.s3.ap-southeast-1.amazonaws.com/health-concern/icon-1725281363179-674480827.png"
    },
    {
      title: "Stomach Issue",
      icon: "https://shukhee-public-bucket.s3.ap-southeast-1.amazonaws.com/health-concern/icon-1725281557508-672033700.png"
    }
  ];

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Consult with top doctors according to your specific need
        </h2>
        <p className="text-gray-600">Consult with all of our doctors</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-8">
        {healthConcerns.map((concern, index) => (
          <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow cursor-pointer">
            <div className="mb-4">
              <img 
                src={concern.icon}
                alt={concern.title}
                className="w-16 h-16 mx-auto"
              />
            </div>
            <h3 className="text-sm font-medium text-gray-800">{concern.title}</h3>
          </Card>
        ))}
      </div>

      {/* Navigation arrows */}
      <div className="flex justify-center space-x-4">
        <Button variant="outline" size="icon">‹</Button>
        <Button variant="outline" size="icon">›</Button>
      </div>
    </section>
  );
};

export default HealthConcernsSection;