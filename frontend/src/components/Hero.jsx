import React from "react";
import { Button } from "./ui/button";
import { Github, Linkedin, FileText, Mail, Database, TrendingUp, BarChart3, Code2 } from "lucide-react";
import { personalInfo } from "../mock";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        <div className="hero-content fade-in">
          <div className="hero-greeting">Hello, I'm</div>
          <h1 className="hero-name">{personalInfo.name}</h1>
          <h2 className="hero-title">{personalInfo.title}</h2>
          <p className="hero-bio">{personalInfo.bio}</p>

          <div className="hero-actions">
            <Button onClick={scrollToContact} size="lg" className="cta-button">
              <Mail size={20} />
              Get In Touch
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="secondary-button"
              onClick={() => window.open(personalInfo.resume, "_blank")}
            >
              <FileText size={20} />
              View Resume
            </Button>
          </div>

          <div className="hero-social">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>

        <div className="hero-visual fade-in-delay">
          <div className="data-grid">
            <div className="grid-item">
              <Database className="grid-icon" size={32} />
              <span className="grid-label">Data</span>
            </div>
            <div className="grid-item">
              <TrendingUp className="grid-icon" size={32} />
              <span className="grid-label">Analytics</span>
            </div>
            <div className="grid-item">
              <BarChart3 className="grid-icon" size={32} />
              <span className="grid-label">Insights</span>
            </div>
            <div className="grid-item">
              <Code2 className="grid-icon" size={32} />
              <span className="grid-label">ML/AI</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;