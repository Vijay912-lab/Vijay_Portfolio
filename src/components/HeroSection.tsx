import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import cyberGridBg from '@/assets/cyber-grid-bg.jpg';

export const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Cybersecurity Student | Threat Hunter | Builder';
  
  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 100);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${cyberGridBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>
      
      {/* Floating particles effect */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full animate-float opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Terminal Window */}
        <div className="bg-card/90 backdrop-blur border border-primary/30 rounded-lg p-8 shadow-neon mb-8">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-destructive"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-accent"></div>
            <span className="text-muted-foreground text-sm ml-2 font-mono">~/vijaysimha-portfolio</span>
          </div>
          
          <div className="text-left font-mono">
            <div className="text-accent mb-2">
              <span className="text-muted-foreground">$</span> whoami
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-glow">
              Vijaysimha Naidu
            </h1>
            
            <div className="text-accent mb-4">
              <span className="text-muted-foreground">$</span> echo $ROLE
            </div>
            <div className="text-xl md:text-2xl text-foreground min-h-[2rem] font-mono">
              {displayText}
              <span className="animate-blink border-r-2 border-primary ml-1"></span>
            </div>
            
            <div className="text-accent mt-6 mb-2">
              <span className="text-muted-foreground">$</span> cat mission.txt
            </div>
            <p className="text-lg text-muted-foreground mb-8">
              Building secure digital futures through innovative cybersecurity solutions
            </p>
          </div>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            variant="default" 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-neon transition-all duration-300 hover:shadow-secondary-glow font-mono"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            &gt; View Projects
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground shadow-secondary-glow transition-all duration-300 font-mono"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            &gt; Get In Touch
          </Button>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};