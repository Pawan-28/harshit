import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [language, setLanguage] = React.useState('english');

  const navItems = {
    hindi: [
      { name: "होम", path: "/" },
  
      { name: "बिहार", path: "/bihar" },
      { name: "झारखंड", path: "/jharkhand" },
   
      { name: "राजनीति", path: "/politics" },
      { name: "जुर्म", path: "/crime" },
      { name: "खेल", path: "/sports" },
     
      
    ],
    english: [
      { name: "Home", path: "/" },
  
      { name: "Bihar", path: "/bihar" },
      { name: "Jharkhand", path: "/jharkhand" },
    
      { name: "Politics", path: "/politics" },
      { name: "Crime", path: "/crime" },
      { name: "Sports", path: "/sports" },
     ,
    
     
    ]
  };

  const hindiMarqueeItems = [
    "बिहार: मुख्यमंत्री ने लॉन्च की नई योजना, 10 लाख लोगों को मिलेगा लाभ",
    "चुनाव आयोग ने जारी की नई गाइडलाइन्स, सभी पार्टियों को भेजा नोटिस",
    "झारखंड: खनन घोटाले में 3 अधिकारी गिरफ्तार, 50 करोड़ का घोटाला",
    "क्रिकेट: टीम इंडिया ने जीता T20 सीरीज, विराट कोहली को मिला मैन ऑफ द सीरीज अवार्ड",
    "बॉलीवुड: सलमान खान की नई फिल्म 'टाइगर 3' ने बनाया बॉक्स ऑफिस पर नया रिकॉर्ड"
  ];
const englishMarqueeItems = [
    "Bihar: Chief Minister launches new scheme, 1 million people to benefit",
    "Election Commission issues new guidelines, sends notice to all parties",
    "Jharkhand: 3 officials arrested in mining scam, ₹50 crore embezzlement",
    "Cricket: Team India wins T20 series, Virat Kohli awarded Player of the Series",
    "Bollywood: Salman Khan's new film 'Tiger 3' sets new box office record"
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md notranslate">
      {/* Compact Language Toggle */}
      {/* <div className="bg-gradient-to-r from-green-400 to-red-300 via-yellow-400  text-white text-xs py-1 border border-red-500">
        <div className="container max-w-[1350px] mx-auto px-6 flex justify-end">
          <div className="flex items-center space-x-1">
            <button 
              onClick={() => setLanguage('hindi')}
              className={`px-2 py-0.5 rounded-sm ${language === 'hindi' ? 'bg-zinc-400 text-indigo-800 font-bold' : 'text-zinc-900'}`}
            >
              हिंदी
            </button>
            <button 
              onClick={() => setLanguage('english')}
              className={`px-2 py-0.5 rounded-sm ${language === 'english' ? 'bg-white text-indigo-800 font-bold' : 'text-zinc-900'}`}
            >
              English
            </button>
          </div>
        </div>
      </div> */}
      <div className="bg-gradient-to-r from-gray-900 to-black text-gray-200 text-xs py-1.5">
        <div className="container max-w-screen-2xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <span className="hidden sm:inline-flex items-center mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-amber-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span>Patna, Bihar</span>
            </span>
            <span className="hidden md:inline-flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-amber-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              <span>{new Date().toLocaleDateString(language === 'hindi' ? 'hi-IN' : 'en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </span>
          </div>
          
          <div className="flex items-center space-x-1">
            <button 
              onClick={() => setLanguage('hindi')}
              className={`px-3 py-0.5 rounded-md transition-all duration-200 flex items-center ${language === 'hindi' ? 'bg-amber-500 text-gray-900 font-bold' : 'text-gray-300 hover:text-white'}`}
            >
              <span className="mr-1">🇮🇳</span> हिंदी
            </button>
            <button 
              onClick={() => setLanguage('english')}
              className={`px-3 py-0.5 rounded-md transition-all duration-200 flex items-center ${language === 'english' ? 'bg-amber-500 text-gray-900 font-bold' : 'text-gray-300 hover:text-white'}`}
            >
              <span className="mr-1">🌐</span> English
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation - Now with Full Visible Items */}
      <nav className="bg-gradient-to-r from-indigo-800 via-red-700 to-indigo-800 text-white">
        <div className="container max-w-[1350px] mx-auto px-6 py-2 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="group flex items-center space-x-2 transition-all duration-300 hover:scale-105"
          >
            <div className="relative">
              <div className="bg-gradient-to-br from-yellow-400 via-pink-500 to-indigo-600 text-white font-bold text-lg px-2.5 py-1.5 rounded-full shadow-lg group-hover:rotate-12 transition-transform duration-300">
                ✍️
              </div>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-lg sm:text-xl font-extrabold text-white tracking-tight group-hover:text-yellow-300 transition-colors duration-300">
                Harshit ke Kalam se
              </span>
              <span className="text-xs sm:text-sm font-medium text-gray-300 tracking-wider group-hover:text-pink-300 transition-colors duration-300">
                {language === 'hindi' ? 'विचारों की अभिव्यक्ति' : 'Unleashing Thoughts'}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation - Full Width with Scroll */}
          <div className="hidden md:flex flex-1 overflow-x-auto scrollbar-hide ml-6 ">
            <div className="flex space-x-6 mx-auto">
              {navItems[language].map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  className="whitespace-nowrap hover:text-yellow-300 transition-colors duration-200 px-1 text-sm border-b-2 border-transparent hover:border-yellow-300 flex-shrink-0"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white  hover:text-yellow-500 focus:outline-none p-1 bg-opacity-10"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-b from-indigo-800 to-blue-900 text-white">
          <div className="container mx-auto px-4 py-2 grid grid-cols-2 gap-2">
            {navItems[language].map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className="px-2 py-1.5 rounded hover:bg-indigo-700 transition-colors duration-200 text-xs"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Live Ticker with Hindi Content */}
      {/* <div className="relative bg-gradient-to-r from-yellow-50 to-amber-50 border-t border-b border-gray-200 py-1.5 overflow-hidden">
        <div className="container mx-auto px-6 flex items-center relative">
    
          <div className="flex-shrink-0 bg-gradient-to-r from-red-600 to-red-700 text-white px-3 py-0.5 rounded-full font-medium mr-4 flex items-center border border-white shadow">
            <div className="w-1.5 h-1.5 bg-white rounded-full mr-1.5 animate-pulse"></div>
            लाइव
          </div>

  
          <div className="absolute left-0 top-0 h-full w-8 bg-gradient-to-r from-amber-50 via-amber-50 to-transparent z-10" />
          <div className="absolute right-0 top-0 h-full w-8 bg-gradient-to-l from-amber-50 via-amber-50 to-transparent z-10" />


          <div className="flex-1 whitespace-nowrap overflow-hidden">
            <div className="animate-marquee inline-flex space-x-12 min-w-full">
              {hindiMarqueeItems.map((item, index) => (
                <span key={index} className="text-gray-800 text-sm font-medium">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div> */}
      <div className="relative bg-gray-200 border-t border-b border-gray-300 py-1.5 overflow-hidden">
        <div className="container mx-auto px-6 flex items-center relative">
          {/* LIVE Badge */}
          <div className="flex-shrink-0 bg-gradient-to-r from-blue-700 to-red-800 text-white px-3 py-0.5 font-bold mr-4 flex items-center rounded-l-full outline-none">
            <div className="w-2 h-2 bg-red-500 rounded-full mr-4 animate-pulse"></div>
            {language === 'hindi' ? 'लाइव' : 'LIVE'}
          </div>

          {/* Gradient Fades */}
          <div className="absolute left-0 top-0 h-full w-8 bg-gradient-to-r from-gray-200 to-transparent z-10" />
          <div className="absolute right-0 top-0 h-full w-8 bg-gradient-to-l from-gray-200 to-transparent z-10" />

          {/* Marquee */}
          <div className="flex-1 whitespace-nowrap overflow-hidden">
            <div className="animate-marquee inline-flex space-x-10 min-w-full">
              {(language === 'hindi' ? hindiMarqueeItems : englishMarqueeItems).map((item, index) => (
                <span 
                  key={index} 
                  className="text-gray-800 text-sm font-medium flex items-center"
                >
                  <span className="bg-red-600 w-1.5 h-1.5 rounded-full mx-2"></span>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </header>
  );
};

export default Header;