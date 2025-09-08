const BenefitsSection = () => {
  const benefits = [
    "Effortless medical care planning",
    "Convenience and Accessibility", 
    "Efficient Record Keeping",
    "Secure and Confidential"
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Benefits</h2>
          <p className="text-gray-600">Smarter benefits for today's healthcare</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <div>
            <img 
              src="https://www.shukhee.com/img/benefits/left-image.svg"
              alt="Benefits"
              className="w-full max-w-md mx-auto"
            />
          </div>

          {/* Right side - Benefits list */}
          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-4">
                <img 
                  src="https://www.shukhee.com/img/correct.svg"
                  alt="Check"
                  className="w-6 h-6 flex-shrink-0"
                />
                <span className="text-lg text-gray-800">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;