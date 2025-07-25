import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export const AboutSection = () => {
  const education = {
    school: "Purdue University",
    degree: "Bachelor of in Cybersecurity, Minor in Computer Science",
    location: "West Lafayette, IN",
    period: "Aug. 2023 – May 2027"
  };

  const experience = [
    {
      title: "Information Technology Support Specialist",
      company: "Purdue University",
      location: "West Lafayette, IN",
      period: "Sep. 2024 – Jan 2025",
      responsibilities: [
        "Coordinated with supervisors to configure campus computers",
        "Evaluated and resolved computer issues raised by staff, instructors, and students",
        "Maintained upkeep of computers, classroom equipment, and 200 printers across campus"
      ]
    },
    {
      title: "Technical Head, Model United Nations",
      company: "Sharanya Narayani International School",
      location: "Bangalore, India",
      period: "Aug 2021 – May 2022",
      responsibilities: [
        "Managed the technical aspects of Model United Nations Conference including website management, oversaw the online registration process",
        "Collaborated with the team to integrate the registration and payment processing systems",
        "Provided Technical Support and training to delegates and staff during the conference"
      ]
    }
  ];

  const certifications = [
    "Google Cybersecurity Certificate",
    "TryHackMe/HTB",
    "CompTIA Security+ (in progress)"
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-mono text-primary mb-4 animate-glow">
            &gt; About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Education & Overview */}
          <div className="space-y-8">
            <Card className="bg-card/50 backdrop-blur border-primary/30 shadow-neon">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold font-mono text-secondary mb-6 flex items-center">
                  <span className="text-accent mr-2">&gt;</span> Education
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-xl font-semibold text-foreground">{education.school}</h4>
                    <p className="text-muted-foreground font-mono">{education.degree}</p>
                    <div className="flex justify-between text-sm text-accent mt-2">
                      <span>{education.location}</span>
                      <span>{education.period}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-primary/30 shadow-neon">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold font-mono text-secondary mb-6 flex items-center">
                  <span className="text-accent mr-2">&gt;</span> Certifications
                </h3>
                <div className="flex flex-wrap gap-3">
                  {certifications.map((cert, index) => (
                    <Badge 
                      key={index}
                      className="bg-accent/20 text-accent border border-accent/50 hover:bg-accent/30 transition-colors duration-300 font-mono"
                    >
                      {cert}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Experience */}
          <div className="space-y-8">
            <Card className="bg-card/50 backdrop-blur border-primary/30 shadow-neon">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold font-mono text-secondary mb-8 flex items-center">
                  <span className="text-accent mr-2">&gt;</span> Experience
                </h3>
                
                <div className="space-y-8">
                  {experience.map((exp, index) => (
                    <div key={index} className="relative">
                      {/* Timeline line */}
                      {index < experience.length - 1 && (
                        <div className="absolute left-4 top-8 w-0.5 h-16 bg-gradient-to-b from-primary to-secondary"></div>
                      )}
                      
                      {/* Timeline dot */}
                      <div className="absolute left-2 top-2 w-4 h-4 bg-primary rounded-full shadow-neon animate-pulse"></div>
                      
                      <div className="ml-8">
                        <h4 className="text-lg font-semibold text-foreground">{exp.title}</h4>
                        <p className="text-secondary font-mono">{exp.company}</p>
                        <div className="flex justify-between text-sm text-accent mb-3">
                          <span>{exp.location}</span>
                          <span>{exp.period}</span>
                        </div>
                        <ul className="text-muted-foreground space-y-1">
                          {exp.responsibilities.map((resp, idx) => (
                            <li key={idx} className="text-sm flex items-start">
                              <span className="text-accent mr-2 mt-1">&gt;</span>
                              {resp}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Mission Statement */}
        <Card className="mt-12 bg-gradient-primary p-1 rounded-lg shadow-secondary-glow">
          <div className="bg-background rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold font-mono text-primary mb-4">
              &gt; Mission Statement
            </h3>
            <p className="text-lg text-foreground max-w-3xl mx-auto">
              Passionate about securing digital infrastructure and building innovative solutions. 
              I combine theoretical knowledge from my cybersecurity studies with hands-on experience 
              in threat hunting, vulnerability assessment, and system administration to create 
              robust security frameworks for tomorrow's digital challenges.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};