import React from "react";
import { personalInfo } from "../mock";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const About = () => {
  const sectionRef = useScrollAnimation();

  return (
    <section id="about" className="about-section" ref={sectionRef}>
      <div className="section-container">
        <div className="section-header scroll-animate">
          <h2 className="section-title">About Me</h2>
          <div className="title-underline"></div>
        </div>

        <div className="about-content">
          <div className="about-text scroll-animate">
            <p className="about-description">
              {personalInfo.bio}
            </p>
            <div className="about-highlights scroll-animate">
              <div className="highlight-item">
                <div className="highlight-number">4+</div>
                <div className="highlight-label">Certifications</div>
              </div>
              <div className="highlight-item">
                <div className="highlight-number">5+</div>
                <div className="highlight-label">Major Projects</div>
              </div>
              <div className="highlight-item">
                <div className="highlight-number">10+</div>
                <div className="highlight-label">Technologies</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;