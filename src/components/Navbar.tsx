
import { useState, useEffect } from 'react';
import { ThemeToggle } from './ThemeToggle';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${scrolled ? 'bg-white/80 dark:bg-softsell-dark-gray/80 shadow-md backdrop-blur-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center">
              <div className="bg-gradient-to-r from-softsell-purple to-softsell-purple-dark h-8 w-8 rounded-md flex items-center justify-center mr-2">
                <span className="text-white font-bold">S²</span>
              </div>
              <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-softsell-purple to-softsell-purple-dark">SoftSell</span>
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <a href="#how-it-works" className="text-foreground hover:text-softsell-purple px-3 py-2 rounded-md text-sm font-medium transition-colors">How It Works</a>
              <a href="#why-choose-us" className="text-foreground hover:text-softsell-purple px-3 py-2 rounded-md text-sm font-medium transition-colors">Why Choose Us</a>
              <a href="#testimonials" className="text-foreground hover:text-softsell-purple px-3 py-2 rounded-md text-sm font-medium transition-colors">Testimonials</a>
              <a href="#contact" className="bg-softsell-purple text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-softsell-purple-dark transition-colors">Contact Us</a>
            </div>
          </div>
          <div className="md:hidden">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
