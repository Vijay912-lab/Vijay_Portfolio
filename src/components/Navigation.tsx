import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

export const Navigation = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/90 backdrop-blur-md border-b border-primary/20 shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            className="text-xl font-bold font-mono text-primary cursor-pointer hover:text-secondary transition-colors duration-300"
            onClick={() => scrollToSection('hero')}
          >
            &gt; VN_Portfolio
          </div>
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                size="sm"
                className={`font-mono transition-all duration-300 ${
                  activeSection === item.id
                    ? 'text-primary bg-primary/10 shadow-neon border border-primary/30'
                    : 'text-foreground hover:text-primary hover:bg-primary/5'
                }`}
                onClick={() => scrollToSection(item.id)}
              >
                {activeSection === item.id ? '&gt; ' : ''}{item.label}
              </Button>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-primary font-mono"
            onClick={() => {
              // Simple mobile menu - cycle through sections
              const currentIndex = navItems.findIndex(item => item.id === activeSection);
              const nextIndex = (currentIndex + 1) % navItems.length;
              scrollToSection(navItems[nextIndex].id);
            }}
          >
            &gt; Menu
          </Button>
        </div>
      </div>
    </nav>
  );
};