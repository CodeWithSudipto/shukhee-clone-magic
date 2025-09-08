const Footer = () => {
  const companyLinks = [
    { title: "About us", url: "https://www.shukhee.com/about" },
    { title: "Contact us", url: "https://www.shukhee.com/contact-us" },
    { title: "Vlogs", url: "https://www.shukhee.com/vlogs" },
    { title: "FAQ", url: "https://www.shukhee.com/faq" }
  ];

  const serviceLinks = [
    { title: "Video Consultancy", url: "https://www.shukhee.com/doctor-list" },
    { title: "Health Mall", url: "https://www.shukhee.com/health-mall" },
    { title: "Online Pharmacy", url: "https://www.shukhee.com/medicine" },
    { title: "Home Lab", url: "https://www.shukhee.com/lab-test" },
    { title: "Caregiver", url: "https://www.shukhee.com/caregiver" }
  ];

  const legalLinks = [
    { title: "Terms & Conditions", url: "https://www.shukhee.com/terms-and-condition" },
    { title: "Privacy Policy", url: "https://www.shukhee.com/privacy-policy" },
    { title: "Refund Policy", url: "https://www.shukhee.com/refund-policy" }
  ];

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-8">We can't wait to take care of you</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company */}
          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.url} className="text-gray-300 hover:text-white transition-colors">
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service */}
          <div>
            <h3 className="text-lg font-bold mb-4">Service</h3>
            <ul className="space-y-2">
              {serviceLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.url} className="text-gray-300 hover:text-white transition-colors">
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal and Policies */}
          <div>
            <h3 className="text-lg font-bold mb-4">Legal and Policies</h3>
            <ul className="space-y-2">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.url} className="text-gray-300 hover:text-white transition-colors">
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links & Download */}
          <div>
            <h3 className="text-lg font-bold mb-4">Social Links</h3>
            <div className="mb-6">
              <h4 className="text-base font-semibold mb-3">Download App</h4>
              <div className="flex flex-col space-y-2">
                <a href="https://play.google.com/store/apps/details?id=com.shukhee.patientapp&pli=1" target="_blank" rel="noopener noreferrer">
                  <img 
                    src="https://www.shukhee.com/img/get-app/google.svg"
                    alt="Google Play"
                    className="h-10"
                  />
                </a>
                <a href="https://apps.apple.com/us/app/shukhee/id6504796251" target="_blank" rel="noopener noreferrer">
                  <img 
                    src="https://www.shukhee.com/img/get-app/apple.svg"
                    alt="App Store"
                    className="h-10"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center mb-4 md:mb-0">
              <a href="https://www.shukhee.com/">
                <img 
                  src="https://www.shukhee.com/img/main_logo.svg"
                  alt="Shukhee Logo"
                  className="h-8 mr-4"
                />
              </a>
              <a href="https://ghl.healthcare/" className="text-gray-300 hover:text-white">
                An initiative of Grameen HealthTech Limited (GHL).
              </a>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-gray-300 mb-1">info@shukhee.com</p>
              <p className="text-gray-300 text-sm">
                Telecom Bhaban (Level- 12), 53/1 Box Nagar, Zoo Road, Dhaka-1216.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;