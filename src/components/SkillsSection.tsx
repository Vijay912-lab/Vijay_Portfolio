import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Security Tools & Concepts",
      icon: "🛡️",
      skills: [
        "SIEM (basic usage)",
        "OWASP ZAP",
        "Burp Suite",
        "Log Analysis",
        "Malware Remediation",
        "Antivirus & Firewall Concepts"
      ]
    },
    {
      title: "Programming Languages",
      icon: "💻",
      skills: [
        "Python",
        "Java",
        "JavaScript",
        "HTML/CSS",
        "C/C++",
        "SQL",
        "Bash (basic)",
        "PowerShell (basic)"
      ]
    },
    {
      title: "Developer Tools",
      icon: "🔧",
      skills: [
        "Git",
        "VS Code",
        "Google Cloud Platform",
        "PyCharm",
        "IntelliJ",
        "Eclipse"
      ]
    },
    {
      title: "Libraries & APIs",
      icon: "📚",
      skills: [
        "pandas",
        "NumPy",
        "Matplotlib",
        "PyPDF2",
        "OpenAI API",
        "REST APIs"
      ]
    },
    {
      title: "Operating Systems",
      icon: "💾",
      skills: [
        "Windows",
        "macOS",
        "Kali Linux"
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-mono text-primary mb-4 animate-glow">
            &gt; Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto font-mono">
            Cybersecurity expertise combined with strong development skills
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className="bg-card/50 backdrop-blur border-primary/30 shadow-neon hover:shadow-secondary-glow transition-all duration-500 group hover:scale-105"
            >
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-3 animate-float" style={{ animationDelay: `${index * 0.2}s` }}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold font-mono text-secondary group-hover:text-primary transition-colors duration-300">
                    &gt; {category.title}
                  </h3>
                </div>
                
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex}
                      className="flex items-center group/skill"
                    >
                      <span className="text-accent mr-2 group-hover/skill:text-primary transition-colors duration-300">▸</span>
                      <Badge 
                        variant="outline"
                        className="border-primary/50 text-foreground hover:bg-primary/10 hover:text-primary transition-all duration-300 font-mono flex-1 justify-start"
                      >
                        {skill}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Progress Indicators for Key Skills */}
        <div className="mt-16">
          <Card className="bg-card/30 backdrop-blur border-primary/30 shadow-neon">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold font-mono text-secondary mb-8 text-center">
                &gt; Proficiency Levels
              </h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  { skill: "Python Development", level: 85 },
                  { skill: "Cybersecurity Concepts", level: 80 },
                  { skill: "OWASP & Web Security", level: 75 },
                  { skill: "System Administration", level: 70 },
                  { skill: "Malware Analysis", level: 65 },
                  { skill: "Network Security", level: 70 }
                ].map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-foreground font-mono">{item.skill}</span>
                      <span className="text-accent font-mono">{item.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                      <div 
                        className="h-full bg-gradient-primary rounded-full transition-all duration-1000 ease-out shadow-neon"
                        style={{ 
                          width: `${item.level}%`,
                          animation: `slideInUp 1s ease-out ${index * 0.1}s both`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};