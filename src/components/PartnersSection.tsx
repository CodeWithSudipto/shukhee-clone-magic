import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const PartnersSection = () => {
  const partners = [
    {
      name: "New Life Hospital (Pvt) Ltd. (Dhaka)",
      location: "Dhaka, Green road",
      image: "https://shukhee-public-bucket.s3.ap-southeast-1.amazonaws.com/hospital-icon/icon-1748704192950-199158408.jpeg"
    },
    {
      name: "Khulna City Medical College Hospital",
      location: "Khulna, Khulna Sadar", 
      image: "https://shukhee-public-bucket.s3.ap-southeast-1.amazonaws.com/hospital-icon/icon-1743649383376-85566575.png"
    },
    {
      name: "Uttara General Hospital Ltd.",
      location: "Dhaka, Uttara",
      image: "https://shukhee-public-bucket.s3.ap-southeast-1.amazonaws.com/hospital-icon/icon-1745470596756-149625970.jpg"
    },
    {
      name: "TG Hospital",
      location: "Dhaka, Mirpur",
      image: "https://shukhee-public-bucket.s3.ap-southeast-1.amazonaws.com/hospital-icon/icon-1745820692582-115889764.jpg"
    },
    {
      name: "Seven Star Hospital",
      location: "Naogaon, Atrai",
      image: "https://shukhee-public-bucket.s3.ap-southeast-1.amazonaws.com/hospital-icon/icon-1748502990631-53526132.jpeg"
    },
    {
      name: "Satata Specialized Hospital",
      location: "Natore, Natore Sadar",
      image: "https://shukhee-public-bucket.s3.ap-southeast-1.amazonaws.com/hospital-icon/icon-1748518109243-293784806.jpeg"
    },
    {
      name: "Khidmah Specialized Hospital",
      location: "Tangail, Tangail Sadar",
      image: "https://shukhee-public-bucket.s3.ap-southeast-1.amazonaws.com/hospital-icon/icon-1748519648557-258483923.jpg"
    },
    {
      name: "Farabi General Hospital",
      location: "Dhaka, Dhanmondi",
      image: "https://shukhee-public-bucket.s3.ap-southeast-1.amazonaws.com/hospital-icon/icon-1748542276636-817709427.jpg"
    },
    {
      name: "Genesis Hospital",
      location: "Jessore, Jessore Sadar",
      image: "https://shukhee-public-bucket.s3.ap-southeast-1.amazonaws.com/hospital-icon/icon-1748542781498-181538304.jpeg"
    },
    {
      name: "Doctors Community Hospital (Pvt). Ltd.",
      location: "Rangpur, Gangachara",
      image: "https://shukhee-public-bucket.s3.ap-southeast-1.amazonaws.com/hospital-icon/icon-1748544774497-117349315.jpeg"
    }
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Discount Partners</h2>
          <p className="text-gray-600 mb-4">We are committed to spread happiness among us with the best healthcare services</p>
          <Button variant="outline">View All</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {partners.map((partner, index) => (
            <Card key={index} className="text-center p-4 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="mb-4">
                  <img 
                    src={partner.image}
                    alt={partner.name}
                    className="w-16 h-16 mx-auto rounded-lg object-cover"
                  />
                </div>
                <h3 className="font-semibold text-sm text-gray-800 mb-2">{partner.name}</h3>
                <p className="text-xs text-gray-600">{partner.location}</p>
              </CardContent>
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

export default PartnersSection;