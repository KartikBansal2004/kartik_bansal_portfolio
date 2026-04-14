import React from "react";
import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { personalInfo } from "../mock";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3 className="footer-name">{personalInfo.name}</h3>
            <p className="footer-tagline">{personalInfo.title}</p>
          </div>

          <div className="footer-links">
            <div className="footer-section">
              <h4 className="footer-section-title">Quick Links</h4>
              <div className="footer-nav">
                <a href="#about" className="footer-link">About</a>
                <a href="#skills" className="footer-link">Skills</a>
                <a href="#projects" className="footer-link">Projects</a>
                <a href="#contact" className="footer-link">Contact</a>
              </div>
            </div>

            <div className="footer-section">
              <h4 className="footer-section-title">Connect</h4>
              <div className="footer-social">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="footer-social-link"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>
          <p className="footer-made-with">
            Made with <Heart size={14} className="heart-icon" /> and data
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;