import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "../mock";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const Projects = () => {
  const sectionRef = useScrollAnimation();

  return (
    <section id="projects" className="projects-section" ref={sectionRef}>
      <div className="section-container">
        <div className="section-header scroll-animate">
          <h2 className="section-title">Projects & Case Studies</h2>
          <div className="title-underline"></div>
          <p className="section-description">
            Detailed technical implementations and business impact analysis
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <Card key={project.id} className="project-card scroll-animate">
              <CardHeader>
                <CardTitle className="project-title">{project.title}</CardTitle>
                <CardDescription className="project-description">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="project-content">
                <div className="project-section">
                  <h4 className="project-section-title">Technologies Used</h4>
                  <div className="project-tech">
                    {project.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="outline" className="tech-badge">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="project-section">
                  <h4 className="project-section-title">Key Features</h4>
                  <ul className="project-features">
                    {project.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="project-section">
                  <h4 className="project-section-title">Challenges & Solutions</h4>
                  <p className="project-text">{project.challenges}</p>
                </div>

                <div className="project-section">
                  <h4 className="project-section-title">Results & Impact</h4>
                  <p className="project-text project-results">{project.results}</p>
                </div>

                <div className="project-links">
                  <Button
                    variant="default"
                    size="sm"
                    className="project-link-button"
                    onClick={() => window.open(project.link, "_blank")}
                  >
                    {project.link.includes("github") ? <Github size={16} /> : <ExternalLink size={16} />}
                    View Project
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;