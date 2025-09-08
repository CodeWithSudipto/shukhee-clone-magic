import { Card } from "@/components/ui/card";

const FAQSection = () => {
  const faqs = [
    "Which services do we offer?",
    "Who do I contact if I have a question?",
    "Does Shukhee have a mobile App?", 
    "Will I be charged when I register?",
    "Who are the doctors on Shukhee?",
    "Can doctors on Shukhee treat an emergency?",
    "What are the costs?"
  ];

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Frequently asked questions</h2>
        <p className="text-gray-600">Questions you might ask about our services</p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <Card key={index} className="p-4 hover:shadow-lg transition-shadow cursor-pointer">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <img 
                  src="https://www.shukhee.com/img/reverse-coma.svg"
                  alt="Quote"
                  className="w-6 h-6"
                />
                <span className="text-gray-800 font-medium">{faq}</span>
              </div>
              <img 
                src="https://www.shukhee.com/img/bellow_arrow.svg"
                alt="Expand"
                className="w-4 h-4"
              />
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;