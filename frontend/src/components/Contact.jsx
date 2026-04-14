import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Mail, MapPin, Github, Linkedin, Send } from "lucide-react";
import { personalInfo } from "../mock";
import { useToast } from "../hooks/use-toast";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const Contact = () => {
  const { toast } = useToast();
  const sectionRef = useScrollAnimation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // This is MOCK functionality - will be replaced with backend integration
    console.log("Form submitted:", formData);
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

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
          <div className="contact-info scroll-animate">
            <Card className="contact-info-card">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>Feel free to reach out through any channel</CardDescription>
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
                      <div className="contact-value">{personalInfo.location}</div>
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

          <div className="contact-form-wrapper scroll-animate">
            <Card className="contact-form-card">
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
                <CardDescription>I'll respond as soon as possible</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-group">
                    <Input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <Input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <Input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="form-textarea"
                    />
                  </div>
                  <Button type="submit" size="lg" className="submit-button">
                    <Send size={20} />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;