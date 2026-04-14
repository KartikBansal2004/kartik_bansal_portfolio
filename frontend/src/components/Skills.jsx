import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { skills } from "../mock";
import { Code2, Database, Cloud, BarChart3, Wrench } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const Skills = () => {
  const sectionRef = useScrollAnimation();

  const skillCategories = [
    {
      title: "Languages",
      icon: <Code2 size={24} />,
      skills: skills.languages
    },
    {
      title: "Frameworks & Libraries",
      icon: <Database size={24} />,
      skills: skills.frameworks
    },
    {
      title: "Tools",
      icon: <Wrench size={24} />,
      skills: skills.tools
    },
    {
      title: "Cloud Platforms",
      icon: <Cloud size={24} />,
      skills: skills.cloud
    },
    {
      title: "Data Visualization",
      icon: <BarChart3 size={24} />,
      skills: skills.visualization
    }
  ];

  return (
    <section id="skills" className="skills-section" ref={sectionRef}>
      <div className="section-container">
        <div className="section-header scroll-animate">
          <h2 className="section-title">Tools & Technologies</h2>
          <div className="title-underline"></div>
          <p className="section-description">
            A comprehensive toolkit for end-to-end data science and analytics solutions
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <Card key={index} className="skill-card scroll-animate">
              <CardHeader>
                <CardTitle className="skill-card-title">
                  <div className="skill-icon">{category.icon}</div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="skill-badges">
                  {category.skills.map((skill, idx) => (
                    <Badge key={idx} variant="secondary" className="skill-badge">
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;