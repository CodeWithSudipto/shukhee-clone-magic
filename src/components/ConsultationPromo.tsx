import { Button } from "@/components/ui/button";

const ConsultationPromo = () => {
  return (
    <section className="bg-gradient-to-r from-shukhee-purple to-shukhee-blue py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/3 mb-8 lg:mb-0">
            <img 
              src="https://www.shukhee.com/img/home/em.png"
              alt="Doctors"
              className="w-full max-w-md mx-auto"
            />
          </div>
          
          <div className="lg:w-2/3 text-center lg:text-left text-white">
            <h4 className="text-lg mb-2">Get Instant Video Consultation</h4>
            <h2 className="text-4xl font-bold mb-6">
              Consult with Doctors For Only{" "}
              <span className="line-through text-red-300">TK 200</span>{" "}
              <span className="text-yellow-300">TK 20!!</span>
            </h2>
            <Button 
              size="lg"
              className="bg-white text-shukhee-purple hover:bg-gray-100 font-bold px-8 py-3"
            >
              Live Consultation Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationPromo;