import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="https://www.shukhee.com/img/main_logo.svg" 
              alt="Shukhee Logo" 
              className="h-8"
            />
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-shukhee-purple">Home</a>
            <a href="#" className="text-gray-700 hover:text-shukhee-purple">Find Doctor</a>
            <div className="relative group">
              <button className="text-gray-700 hover:text-shukhee-purple flex items-center">
                Services
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            <div className="relative group">
              <button className="text-gray-700 hover:text-shukhee-purple flex items-center">
                Emergency Service
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            <a href="#" className="text-gray-700 hover:text-shukhee-purple">Become a provider</a>
            <a href="#" className="text-gray-700 hover:text-shukhee-purple">Subscription</a>
          </nav>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            {/* Emergency consultation */}
            <div className="hidden lg:flex items-center space-x-2 bg-red-50 px-3 py-2 rounded-lg">
              <img 
                src="https://www.shukhee.com/img/navbar/emergency.png" 
                alt="Emergency" 
                className="w-6 h-6"
              />
              <span className="text-sm text-red-600 font-medium">Instant Doctor Consultation</span>
            </div>

            {/* Language and Auth buttons */}
            <div className="flex items-center space-x-2">
              <Button variant="ghost" className="text-gray-700">Log in</Button>
              <Button className="bg-shukhee-purple hover:bg-shukhee-purple-light text-white">Sign up</Button>
              <Button className="bg-shukhee-purple hover:bg-shukhee-purple-light text-white">Download App</Button>
              <Button variant="outline" className="border-gray-300">English</Button>
              <Button variant="outline" className="border-gray-300">বাংলা</Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;