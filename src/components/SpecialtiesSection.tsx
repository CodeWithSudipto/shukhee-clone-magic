import { Card } from "@/components/ui/card";

const SpecialtiesSection = () => {
  const specialties = [
    { name: "Anesthesiology", icon: "https://shukhee-public-bucket.s3.ap-southeast-1.amazonaws.com/doctor-category/Anesthesiology.svg" },
    { name: "Cardiology", icon: "https://shukhee-public-bucket.s3.ap-southeast-1.amazonaws.com/doctor-category/Cardiology.svg" },
    { name: "Psychiatry", icon: "https://shukhee-public-bucket.s3.ap-southeast-1.amazonaws.com/doctor-category/Psychiatry.svg" },
    { name: "Colorectal Surgery", icon: "https://shukhee-public-bucket.s3.ap-southeast-1.amazonaws.com/doctor-category/Colorectal+Surgery.svg" },
    { name: "Dentistry", icon: "https://shukhee-public-bucket.s3.ap-southeast-1.amazonaws.com/doctor-category/Dentistry.svg" },
    { name: "Dermatology and Ve...", icon: "https://shukhee-public-bucket.s3.ap-southeast-1.amazonaws.com/doctor-category/Dermatology+and+venereology.svg" },
    { name: "Endocrinology", icon: "https://shukhee-public-bucket.s3.ap-southeast-1.amazonaws.com/doctor-category/Endocrinology.svg" },
    { name: "Gastroenterology", icon: "https://shukhee-public-bucket.s3.ap-southeast-1.amazonaws.com/doctor-category/Gastroenterology.svg" },
    { name: "General Physician", icon: "https://shukhee-public-bucket.s3.ap-southeast-1.amazonaws.com/doctor-category/General+Physician.svg" },
    { name: "General Surgery", icon: "https://shukhee-public-bucket.s3.ap-southeast-1.amazonaws.com/doctor-category/General+Surgery.svg" },
    { name: "Gynaecology and Ob...", icon: "https://shukhee-public-bucket.s3.ap-southeast-1.amazonaws.com/doctor-category/Gynaecology+and+Obstetrics.svg" },
    { name: "Haematology", icon: "https://shukhee-public-bucket.s3.ap-southeast-1.amazonaws.com/doctor-category/Haematology.svg" },
    { name: "Hepatology", icon: "https://shukhee-public-bucket.s3.ap-southeast-1.amazonaws.com/doctor-category/Hepatology.svg" },
    { name: "Internal medicine", icon: "https://shukhee-public-bucket.s3.ap-southeast-1.amazonaws.com/doctor-category/Internal+medicine.svg" },
    { name: "Nephrology", icon: "https://shukhee-public-bucket.s3.ap-southeast-1.amazonaws.com/doctor-category/Nephrology.svg" },
    { name: "Neuromedicine", icon: "https://shukhee-public-bucket.s3.ap-southeast-1.amazonaws.com/doctor-category/Neuromedicine.svg" },
    { name: "Neurosurgery", icon: "https://shukhee-public-bucket.s3.ap-southeast-1.amazonaws.com/doctor-category/Neurosurgery.svg" },
    { name: "Nutritionist", icon: "https://shukhee-public-bucket.s3.ap-southeast-1.amazonaws.com/doctor-category/Nutritionist.svg" },
    { name: "Oncology", icon: "https://shukhee-public-bucket.s3.ap-southeast-1.amazonaws.com/doctor-category/Oncology.svg" },
    { name: "Orthopedics", icon: "https://shukhee-public-bucket.s3.ap-southeast-1.amazonaws.com/doctor-category/Orthopedics.svg" },
    { name: "Otolaryngology(ENT)", icon: "https://shukhee-public-bucket.s3.ap-southeast-1.amazonaws.com/doctor-category/Otolaryngology.svg" },
    { name: "Pediatric Surgery", icon: "https://shukhee-public-bucket.s3.ap-southeast-1.amazonaws.com/doctor-category/Pediatric+Surgery.svg" },
    { name: "Pediatrics", icon: "https://shukhee-public-bucket.s3.ap-southeast-1.amazonaws.com/doctor-category/Pediatrics.svg" },
    { name: "Plastic Surgery", icon: "https://shukhee-public-bucket.s3.ap-southeast-1.amazonaws.com/doctor-category/Plastic+Surgery.svg" },
    { name: "Psychology", icon: "https://shukhee-public-bucket.s3.ap-southeast-1.amazonaws.com/doctor-category/Psychology.svg" },
    { name: "Reproductive Endoc...", icon: "https://shukhee-public-bucket.s3.ap-southeast-1.amazonaws.com/doctor-category/Reproductive+Endocrinology+and+infertility.svg" },
    { name: "Respiratory medici...", icon: "https://shukhee-public-bucket.s3.ap-southeast-1.amazonaws.com/doctor-category/Respiratory+medicine.svg" },
    { name: "Rheumatology", icon: "https://shukhee-public-bucket.s3.ap-southeast-1.amazonaws.com/doctor-category/Rheumatology.svg" },
    { name: "Urology", icon: "https://shukhee-public-bucket.s3.ap-southeast-1.amazonaws.com/doctor-category/Urology.svg" },
    { name: "Ophthalmology", icon: "https://shukhee-public-bucket.s3.ap-southeast-1.amazonaws.com/doctor-category/Ophthalmology.svg" },
    { name: "Family Medicine", icon: "https://shukhee-public-bucket.s3.ap-southeast-1.amazonaws.com/doctor-category/Group+294.png" },
    { name: "Physical Medicine ...", icon: "https://shukhee-public-bucket.s3.ap-southeast-1.amazonaws.com/doctor-category/Group+281.png" }
  ];

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          30+ Consult with top doctors across specialities
        </h2>
        <p className="text-gray-600">Get expert advice from our doctors</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mb-8">
        {specialties.map((specialty, index) => (
          <Card key={index} className="p-4 text-center hover:shadow-lg transition-shadow cursor-pointer">
            <div className="mb-3">
              <img 
                src={specialty.icon}
                alt={specialty.name}
                className="w-12 h-12 mx-auto"
              />
            </div>
            <h3 className="text-xs font-medium text-gray-800">{specialty.name}</h3>
          </Card>
        ))}
      </div>

      {/* Navigation */}
      <div className="flex justify-center space-x-4">
        <button className="text-gray-400 hover:text-gray-600">‹</button>
        <button className="text-gray-400 hover:text-gray-600">›</button>
      </div>
    </section>
  );
};

export default SpecialtiesSection;