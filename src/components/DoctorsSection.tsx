import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const DoctorsSection = () => {
  const doctors = [
    {
      name: "Dr. Md. Monzurul H...",
      qualifications: "MBBS, DDV, MRCP PACE...",
      specialty: "Dermatology and Venereology",
      description: "Dr. Md. Monzurul Haque",
      fullQualifications: "MBBS (Dhaka), ...",
      price: "৳ 299",
      experience: "6 years of professional experience",
      image: "https://shukhee-public-bucket.s3.ap-southeast-1.amazonaws.com/doctor/file-1735320720041-81074990.jpg"
    },
    {
      name: "Dr. Dardia Jaman",
      qualifications: "MBBS, FCPS(Final Par...",
      specialty: "Gynaecology and Obstetrics", 
      description: "Assalamu Alaikum, I am Dr. Dardia Jaman,...",
      price: "৳ 300",
      experience: "9 years of professional experience",
      image: "https://shukhee-public-bucket.s3.ap-southeast-1.amazonaws.com/doctor/file-1735320704972-472447222.jpg"
    },
    {
      name: "Dr. Zahidul Islam",
      qualifications: "M.B.B.S, FCPS (Part-...",
      specialty: "Dermatology and Venereology",
      description: "🩺 Dr. Zahidul Islam 🩺",
      fullQualifications: "MBBS, FCPS Pa...",
      price: "৳ 300", 
      experience: "6 years of professional experience",
      image: "https://shukhee-public-bucket.s3.ap-southeast-1.amazonaws.com/doctor/file-1739250534410-594408228.png"
    },
    {
      name: "Dr. Nandita Nandi",
      qualifications: "MBBS(RU),DCH(BSMMU),...",
      specialty: "Pediatrics",
      description: "Dr. Nandita nandi [MBBS(RU),DCH(BSMMU),F...",
      price: "৳ 200",
      experience: "7 years of professional experience",
      image: "https://shukhee-public-bucket.s3.ap-southeast-1.amazonaws.com/doctor/file-1736955680391-343659734.jpeg"
    }
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Connect with the Perfect Doctor for Personalized Care
          </h2>
          <p className="text-gray-600 mb-4">Select from a wide range of expert doctors</p>
          <Button variant="outline" className="mb-8">View All</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {doctors.map((doctor, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <div className="aspect-square overflow-hidden rounded-t-lg">
                <img 
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-gray-800 mb-1">{doctor.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{doctor.qualifications}</p>
                <Badge variant="secondary" className="mb-3 text-xs">{doctor.specialty}</Badge>
                <p className="text-sm text-gray-600 mb-3">{doctor.description}</p>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-shukhee-purple text-lg">{doctor.price}</span>
                </div>
                <p className="text-xs text-gray-500 mb-4">{doctor.experience}</p>
                <Button className="w-full bg-shukhee-purple hover:bg-shukhee-purple-light text-white">
                  Book Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DoctorsSection;