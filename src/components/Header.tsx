import { Button } from "@/components/ui/button";
import logoImage from "@/assets/logo-ck.jpg";
import { useState, useEffect } from "react";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToForm = () => {
    document.getElementById('application-form')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  const scrollToHero = () => {
    window.scrollTo({ 
      top: 0, 
      behavior: 'smooth' 
    });
  };

  const menuItems = [
    { label: "Quem Somos", id: "authority-section" },
    { label: "Diferenciais", id: "journey-section" },
    { label: "Suporte", id: "suporte" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-2 sm:pt-4 bg-transparent px-2">
      <div className={`transition-all duration-300 rounded-full bg-black/20 backdrop-blur-md ${
        isScrolled 
          ? 'shadow-lg px-3 sm:px-6 py-1.5 sm:py-2' 
          : 'px-4 sm:px-8 py-2 sm:py-4'
      }`}>
        <div className="flex items-center gap-3 sm:gap-6 lg:gap-8">
          {/* Logo/Name */}
          <button 
            onClick={scrollToHero}
            className="flex items-center gap-1.5 sm:gap-2 cursor-pointer group"
          >
            <div className={`relative transition-all duration-300 group-hover:scale-110 ${
              isScrolled ? 'w-6 h-6 sm:w-7 sm:h-7' : 'w-7 h-7 sm:w-9 sm:h-9'
            }`}>
              <img 
                src={logoImage} 
                alt="Gabriel Kikonaga Logo" 
                className="w-full h-full object-contain rounded-lg group-hover:brightness-110 transition-all duration-300" 
              />
            </div>
            <span className={`font-semibold text-white tracking-tight transition-all duration-300 whitespace-nowrap group-hover:text-primary ${
              isScrolled ? 'text-xs sm:text-sm' : 'text-sm sm:text-base'
            }`}>
              Gabriel Kikonaga
            </span>
          </button>

          {/* Menu */}
          <nav className="hidden lg:flex items-center gap-6">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-white/80 font-normal hover:text-white hover:scale-110 hover:text-primary transition-all duration-300 whitespace-nowrap relative group ${
                  isScrolled ? 'text-xs' : 'text-sm'
                }`}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <Button 
            onClick={scrollToForm}
            variant="outline"
            className={`border-white/30 text-white hover:bg-white/10 hover:border-white/50 rounded-lg font-medium transition-all duration-300 whitespace-nowrap ${
              isScrolled 
                ? 'px-2.5 sm:px-4 py-1 sm:py-1.5 text-[10px] sm:text-xs' 
                : 'px-3 sm:px-5 py-1.5 sm:py-2 text-xs sm:text-sm'
            }`}
          >
            Aplicar reunião
          </Button>
        </div>
      </div>
    </header>
  );
};