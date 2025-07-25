export const Footer = () => {
  return (
    <footer className="border-t border-primary/20 bg-background/90 backdrop-blur py-8">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-4">
          <h3 className="text-xl font-bold font-mono text-primary mb-2">
            &gt; Vijaysimha Naidu
          </h3>
          <p className="text-muted-foreground font-mono">
            Building Secure Digital Futures
          </p>
        </div>
        
        <div className="flex justify-center space-x-6 mb-6">
          {[
            { name: "GitHub", url: "https://github.com/Vijay912-lab" },
            { name: "LinkedIn", url: "https://linkedin.com/in/vijaynaidu19" },
            { name: "Email", url: "mailto:works.vijaysimha@gmail.com" }
          ].map((link, index) => (
            <a
              key={index}
              href={link.url}
              target={link.name !== "Email" ? "_blank" : undefined}
              rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
              className="text-muted-foreground hover:text-primary transition-colors duration-300 font-mono text-sm"
            >
              &gt; {link.name}
            </a>
          ))}
        </div>
        
        <div className="border-t border-primary/20 pt-4">
          <p className="text-xs text-muted-foreground font-mono">
            © 2024 Vijaysimha Naidu. All rights reserved. | Cybersecurity Student & Developer
          </p>
        </div>
      </div>
    </footer>
  );
};