import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Award, ExternalLink } from "lucide-react";
import { certifications } from "../mock";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const Certifications = () => {
  const sectionRef = useScrollAnimation();

  return (
    <section id="certifications" className="certifications-section" ref={sectionRef}>
      <div className="section-container">
        <div className="section-header scroll-animate">
          <h2 className="section-title">Certifications</h2>
          <div className="title-underline"></div>
          <p className="section-description">
            Professional certifications and credentials
          </p>
        </div>

        <div className="certifications-grid">
          {certifications.map((cert) => (
            <Card key={cert.id} className="certification-card scroll-animate">
              <CardHeader>
                <div className="cert-icon">
                  <Award size={32} />
                </div>
                <CardTitle className="cert-title">{cert.title}</CardTitle>
                <CardDescription className="cert-issuer">{cert.issuer}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="cert-footer">
                  <span className="cert-date">{cert.date}</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="cert-link"
                    onClick={() => window.open(cert.link, "_blank")}
                  >
                    <ExternalLink size={16} />
                    View
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

export default Certifications;