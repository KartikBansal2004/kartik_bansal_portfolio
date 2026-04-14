import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Briefcase } from "lucide-react";
import { experience } from "../mock";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const Experience = () => {
  const sectionRef = useScrollAnimation();

  return (
    <section id="experience" className="experience-section" ref={sectionRef}>
      <div className="section-container">
        <div className="section-header scroll-animate">
          <h2 className="section-title">Experience</h2>
          <div className="title-underline"></div>
          <p className="section-description">
            Professional journey in data science and analytics
          </p>
        </div>

        <div className="timeline">
          {experience.map((exp) => (
            <div key={exp.id} className="timeline-item scroll-animate">
              <div className="timeline-marker">
                <div className="timeline-icon">
                  <Briefcase size={20} />
                </div>
              </div>
              <Card className="experience-card">
                <CardHeader>
                  <div className="experience-header">
                    <div>
                      <CardTitle className="experience-title">{exp.title}</CardTitle>
                      <CardDescription className="experience-company">{exp.company}</CardDescription>
                    </div>
                    <div className="experience-period">{exp.period}</div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="experience-description">{exp.description}</p>
                  <ul className="experience-achievements">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;