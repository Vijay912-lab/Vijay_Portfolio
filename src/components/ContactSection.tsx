import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { toast } from 'sonner';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast("Message sent! I'll get back to you soon.", {
      description: "Thanks for reaching out!"
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: "📧",
      label: "Email",
      value: "works.vijaysimha@gmail.com",
      action: () => window.open('mailto:works.vijaysimha@gmail.com')
    },
    {
      icon: "📱",
      label: "Phone",
      value: "919-337-6260",
      action: () => window.open('tel:919-337-6260')
    },
    {
      icon: "💼",
      label: "LinkedIn",
      value: "linkedin.com/in/vijaynaidu19",
      action: () => window.open('https://linkedin.com/in/vijaynaidu19', '_blank')
    },
    {
      icon: "🐙",
      label: "GitHub",
      value: "github.com/Vijay912-lab",
      action: () => window.open('https://github.com/Vijay912-lab', '_blank')
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-cyber">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-mono text-primary mb-4 animate-glow">
            &gt; Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto font-mono">
            Ready to collaborate on cybersecurity projects or discuss opportunities
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-card/50 backdrop-blur border-primary/30 shadow-neon">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold font-mono text-secondary mb-6 flex items-center">
                <span className="text-accent mr-2">&gt;</span> Send Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-mono text-accent mb-2 block">Name:</label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your Name"
                      className="bg-input/50 border-primary/30 focus:border-primary text-foreground placeholder:text-muted-foreground font-mono"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-mono text-accent mb-2 block">Email:</label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@domain.com"
                      className="bg-input/50 border-primary/30 focus:border-primary text-foreground placeholder:text-muted-foreground font-mono"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-mono text-accent mb-2 block">Subject:</label>
                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What's this about?"
                    className="bg-input/50 border-primary/30 focus:border-primary text-foreground placeholder:text-muted-foreground font-mono"
                    required
                  />
                </div>
                
                <div>
                  <label className="text-sm font-mono text-accent mb-2 block">Message:</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your message here..."
                    rows={6}
                    className="bg-input/50 border-primary/30 focus:border-primary text-foreground placeholder:text-muted-foreground font-mono resize-none"
                    required
                  />
                </div>
                
                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-neon transition-all duration-300 hover:shadow-secondary-glow font-mono"
                >
                  &gt; Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="bg-card/50 backdrop-blur border-primary/30 shadow-neon">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold font-mono text-secondary mb-6 flex items-center">
                  <span className="text-accent mr-2">&gt;</span> Contact Info
                </h3>
                
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div 
                      key={index}
                      className="flex items-center p-4 bg-muted/20 rounded-lg border border-primary/20 hover:border-primary/50 cursor-pointer transition-all duration-300 hover:bg-primary/5 group"
                      onClick={info.action}
                    >
                      <div className="text-2xl mr-4 group-hover:animate-bounce">
                        {info.icon}
                      </div>
                      <div>
                        <p className="text-sm font-mono text-accent">{info.label}:</p>
                        <p className="text-foreground font-mono group-hover:text-primary transition-colors duration-300">
                          {info.value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Status Card */}
            <Card className="bg-gradient-primary p-1 rounded-lg shadow-secondary-glow">
              <div className="bg-background rounded-lg p-6 text-center">
                <h3 className="text-xl font-bold font-mono text-primary mb-3">
                  &gt; Current Status
                </h3>
                <div className="flex items-center justify-center mb-3">
                  <div className="w-3 h-3 bg-accent rounded-full animate-pulse mr-2"></div>
                  <span className="text-accent font-mono">Available for opportunities</span>
                </div>
                <p className="text-muted-foreground text-sm">
                  Open to cybersecurity internships, research projects, and collaboration opportunities
                </p>
              </div>
            </Card>

            {/* Resume Download */}
            <Card className="bg-card/50 backdrop-blur border-primary/30 shadow-neon">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-bold font-mono text-secondary mb-4">
                  &gt; Resume
                </h3>
                <Button
                  variant="outline"
                  className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground shadow-secondary-glow transition-all duration-300 font-mono"
                  onClick={() => {
                    // In a real app, this would download the actual resume
                    toast("Resume download started!", {
                      description: "vijaysimha-naidu-resume.pdf"
                    });
                  }}
                >
                  &gt; Download Resume
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};