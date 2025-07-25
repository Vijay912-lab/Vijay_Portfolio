import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

export const ProjectsSection = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      title: "Secure Web Portal with OWASP Testing",
      description: "Conducted OWASP Top 10 vulnerability assessments using ZAP and Burp Suite; performed manual pen testing. Identified and remediated security flaws including XSS, SQLi, and CSRF. Documented incident findings with step-by-step remediation steps—improving professional vulnerability response reports.",
      tech: ["Flask", "OWASP", "ZAP", "Burp Suite", "Web Security"],
      period: "May 2025 – Jun 2025",
      status: "Completed"
    },
    {
      title: "Employee Data Exposure Checker",
      description: "Built an automated tool using Python to identify exposed employee data and simulate malware exposure response. Integrated API to check breached SSNs and generate remediation reports. Emulated real-world remediation workflows with scripting and alerting logic.",
      tech: ["Python", "API Integration", "Data Privacy"],
      period: "Mar 2025 – Apr 2025",
      status: "Completed"
    },
    {
      title: "Firewall Log Analyzer – Python",
      description: "Designed a Python-based firewall log analyzer to extract and analyze system logs for incident detection and suspicious traffic. Flagged malicious behavior based on traffic patterns; simulated SIEM workflows for log tracking. Validated logic through unit test cases to ensure accurate log parsing and alerting mechanisms.",
      tech: ["Python", "Network Security", "Unit Testing"],
      period: "Mar 2025 – Apr 2025",
      status: "Completed"
    },
    {
      title: "ResuMate",
      description: "Built a job-matching app that extracts skills from resumes using OpenAI and maps them to job listings. Queried job APIs and ranked openings based on user skills. Built interactive GUI using Tkinter, PIL for previews, and threading for async task handling.",
      tech: ["Python", "Tkinter", "OpenAI API", "REST APIs", "PyPDF2"],
      period: "Feb 2025 – Feb 2025",
      status: "Completed"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-gradient-cyber">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-mono text-primary mb-4 animate-glow">
            &gt; Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto font-mono">
            A showcase of cybersecurity projects and security-focused applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className={`bg-card/70 backdrop-blur border-primary/30 transition-all duration-500 cursor-pointer group ${
                hoveredProject === index 
                  ? 'shadow-secondary-glow scale-105 border-secondary/50' 
                  : 'shadow-neon hover:shadow-accent-glow'
              }`}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge 
                    className={`font-mono transition-colors duration-300 ${
                      project.status === 'Completed' 
                        ? 'bg-accent/20 text-accent border border-accent/50' 
                        : 'bg-secondary/20 text-secondary border border-secondary/50'
                    }`}
                  >
                    {project.status}
                  </Badge>
                  <span className="text-sm text-muted-foreground font-mono">{project.period}</span>
                </div>
                <CardTitle className="text-xl font-mono text-foreground group-hover:text-primary transition-colors duration-300">
                  &gt; {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-accent mb-2 font-mono">&gt; Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex}
                          variant="outline"
                          className="border-primary/50 text-primary hover:bg-primary/10 transition-colors duration-300 font-mono text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-3 pt-4">
                    <Button 
                      size="sm"
                      className="bg-primary/20 hover:bg-primary/30 text-primary border border-primary/50 transition-all duration-300 font-mono flex-1"
                    >
                      &gt; View Details
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="bg-gradient-primary p-1 rounded-lg shadow-secondary-glow inline-block">
            <div className="bg-background rounded-lg px-8 py-6">
              <h3 className="text-xl font-bold font-mono text-primary mb-2">
                &gt; More Projects Coming Soon
              </h3>
              <p className="text-muted-foreground mb-4">
                Currently working on advanced threat detection systems and malware analysis tools
              </p>
              <Button 
                variant="outline"
                className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground font-mono"
                onClick={() => window.open('https://github.com/Vijay912-lab', '_blank')}
              >
                &gt; View GitHub
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};