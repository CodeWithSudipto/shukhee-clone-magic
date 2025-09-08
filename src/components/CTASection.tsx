import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="bg-gradient-to-r from-shukhee-purple to-shukhee-blue py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Still delaying your health concerns?
        </h2>
        <p className="text-xl text-white mb-8">
          Connect with Bangladeshi's top doctors online
        </p>
        <Button 
          size="lg"
          className="bg-white text-shukhee-purple hover:bg-gray-100 font-bold px-8 py-3"
        >
          Consult Now
        </Button>
      </div>
    </section>
  );
};

export default CTASection;