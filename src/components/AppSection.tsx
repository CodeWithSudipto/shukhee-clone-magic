import { Button } from "@/components/ui/button";

const AppSection = () => {
  const features = [
    "Instant & Specialist Doctor Video Consultations",
    "Starts from 20 tk. Now you can have diverse categories of doctors at anytime, at any place.",
    "Home Lab, Online Pharmacy & Health mall",
    "Our Home lab, Online pharmacy and Health mall service covers all over Bangladesh.",
    "Care giver & Pregnancy Calendar", 
    "Get our experienced caregiver in Dhaka & track down your full pregnancy journey.",
    "Blood Bank & Ambulance Services",
    "Get our Emergency services anytime, anywhere."
  ];

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left side - App mockup */}
        <div className="text-center lg:text-left">
          <div className="relative">
            <img 
              src="https://www.shukhee.com/img/get-app/sample.png"
              alt="App Sample"
              className="w-full max-w-md mx-auto lg:mx-0"
            />
            <div className="absolute top-4 right-4 bg-white p-2 rounded-lg shadow-lg">
              <p className="text-sm font-medium">Scan QR</p>
              <p className="text-xs text-gray-600">download App</p>
            </div>
          </div>
          <div className="mt-8">
            <img 
              src="https://www.shukhee.com/img/get-app/app&play.png"
              alt="QR Code"
              className="w-32 mx-auto lg:mx-0"
            />
          </div>
        </div>

        {/* Right side - Content */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Get the Shukhee App!</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Instant & Specialist Doctor Video Consultations
              </h3>
              <p className="text-gray-600">
                Starts from 20 tk. Now you can have diverse categories of doctors at anytime, at any place.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Home Lab, Online Pharmacy & Health mall
              </h3>
              <p className="text-gray-600">
                Our Home lab, Online pharmacy and Health mall service covers all over Bangladesh.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Care giver & Pregnancy Calendar
              </h3>
              <p className="text-gray-600">
                Get our experienced caregiver in Dhaka & track down your full pregnancy journey.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Blood Bank & Ambulance Services
              </h3>
              <p className="text-gray-600">
                Get our Emergency services anytime, anywhere.
              </p>
            </div>
          </div>

          {/* Download buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <a href="https://play.google.com/store/apps/details?id=com.shukhee.patientapp&pli=1" target="_blank" rel="noopener noreferrer">
              <img 
                src="https://www.shukhee.com/img/get-app/google.svg"
                alt="Google Play"
                className="h-12"
              />
            </a>
            <a href="https://apps.apple.com/us/app/shukhee/id6504796251" target="_blank" rel="noopener noreferrer">
              <img 
                src="https://www.shukhee.com/img/get-app/apple.svg"
                alt="App Store"
                className="h-12"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppSection;