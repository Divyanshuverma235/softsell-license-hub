
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
            <Link to="/" className="flex items-center">
              <div className="bg-gradient-to-r from-softsell-purple to-softsell-purple-dark h-8 w-8 rounded-md flex items-center justify-center mr-2">
                <span className="text-white font-bold">S²</span>
              </div>
              <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-softsell-purple to-softsell-purple-dark">SoftSell</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link to="/" className="text-foreground hover:text-softsell-purple px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</Link>
              <Link to="/blog-editor" className="text-foreground hover:text-softsell-purple px-3 py-2 rounded-md text-sm font-medium transition-colors">Blog Editor</Link>
              <Link to="#how-it-works" className="text-foreground hover:text-softsell-purple px-3 py-2 rounded-md text-sm font-medium transition-colors">How It Works</Link>
              <Link to="#why-choose-us" className="text-foreground hover:text-softsell-purple px-3 py-2 rounded-md text-sm font-medium transition-colors">Why Choose Us</Link>
              <Link to="#testimonials" className="text-foreground hover:text-softsell-purple px-3 py-2 rounded-md text-sm font-medium transition-colors">Testimonials</Link>
              <Link to="#contact" className="bg-softsell-purple text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-softsell-purple-dark transition-colors">Contact Us</Link>
            </div>
          </div>
          <div className="flex items-center">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
