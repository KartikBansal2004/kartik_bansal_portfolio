import React from "react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Mail, MapPin, Github, Linkedin } from "lucide-react";
import { personalInfo } from "../mock";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const Contact = () => {
  const sectionRef = useScrollAnimation();

  return (
    <section id="contact" className="contact-section" ref={sectionRef}>
      <div className="section-container">
        
        <div className="section-header scroll-animate">
          <h2 className="section-title">Get In Touch</h2>
          <div className="title-underline"></div>
          <p className="section-description">
            Let's discuss how we can work together on your data-driven projects
          </p>
        </div>

        <div className="contact-content">

          {/* LEFT: CONTACT INFO */}
          <div className="contact-info scroll-animate">
            <Card className="contact-info-card h-full">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>
                  Feel free to reach out through any channel
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="contact-details">

                  <div className="contact-item">
                    <Mail size={20} />
                    <div>
                      <div className="contact-label">Email</div>
                      <a href={`mailto:${personalInfo.email}`} className="contact-value">
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>

                  <div className="contact-item">
                    <MapPin size={20} />
                    <div>
                      <div className="contact-label">Location</div>
                      <div className="contact-value">
                        {personalInfo.location}
                      </div>
                    </div>
                  </div>

                  <div className="contact-item">
                    <Github size={20} />
                    <div>
                      <div className="contact-label">GitHub</div>
                      <a
                        href={personalInfo.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-value"
                      >
                        {personalInfo.github.replace("https://", "")}
                      </a>
                    </div>
                  </div>

                  <div className="contact-item">
                    <Linkedin size={20} />
                    <div>
                      <div className="contact-label">LinkedIn</div>
                      <a
                        href={personalInfo.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-value"
                      >
                        {personalInfo.linkedin.replace("https://www.", "")}
                      </a>
                    </div>
                  </div>

                </div>
              </CardContent>
            </Card>
          </div>

          {/* RIGHT: EDUCATION */}
          <div className="contact-form-wrapper scroll-animate">
            <Card className="contact-form-card h-full">
              
              <CardHeader>
                <CardTitle className="text-white font-bold text-2xl">
                  Education
                </CardTitle>
              </CardHeader>

              <CardContent className="flex flex-col justify-between h-full">
                <div className="space-y-8">

                  {/* Education 1 */}
                  <div>
                    <h3 className="text-[#0EA5E9] text-xl font-semibold">
                      J.C. Bose University (2022–2025)
                    </h3>
                    <p className="text-white text-lg">
                      Bachelor of Computer Applications
                    </p>
                    <p className="text-white text-lg">
                      Specialization: Data Science
                    </p>
                    <p className="text-gray-400 text-sm mt-1">
                      Focused on data analysis, visualization, and machine learning fundamentals.
                    </p>
                  </div>

                  {/* Education 2 */}
                  <div>
                    <h3 className="text-[#0EA5E9] text-xl font-semibold">
                      Amity University Online (2026–2028)
                    </h3>
                    <p className="text-white text-lg">
                      Master of Computer Application
                    </p>
                    <p className="text-white text-lg">
                      Specialization: Artificial Intelligence & Machine Learning
                    </p>
                    <p className="text-gray-400 text-sm mt-1">
                      Advanced studies in AI, deep learning, and real-world ML applications.
                    </p>
                  </div>

                </div>
              </CardContent>

            </Card>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;