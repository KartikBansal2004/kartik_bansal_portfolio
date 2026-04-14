import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { BarChart, TrendingUp, Layers, PieChart } from "lucide-react";
import { dataVisualizations } from "../mock";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const DataVisualizations = () => {
  const sectionRef = useScrollAnimation();

  const getIcon = (type) => {
    switch (type) {
      case "Bar Chart":
        return <BarChart size={40} />;
      case "Line Chart":
        return <TrendingUp size={40} />;
      case "Heatmap":
        return <Layers size={40} />;
      case "Scatter Plot":
        return <PieChart size={40} />;
      default:
        return <BarChart size={40} />;
    }
  };

  return (
    <section id="visualizations" className="visualizations-section" ref={sectionRef}>
      <div className="section-container">
        <div className="section-header scroll-animate">
          <h2 className="section-title">Data Visualizations</h2>
          <div className="title-underline"></div>
          <p className="section-description">
            Sample visualizations showcasing data analysis capabilities
          </p>
        </div>

        <div className="visualizations-grid">
          {dataVisualizations.map((viz) => (
            <Card key={viz.id} className="visualization-card scroll-animate">
              <CardHeader>
                <div className="viz-icon">{getIcon(viz.type)}</div>
                <CardTitle className="viz-title">{viz.title}</CardTitle>
                <CardDescription className="viz-type">{viz.type}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="viz-description">{viz.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DataVisualizations;