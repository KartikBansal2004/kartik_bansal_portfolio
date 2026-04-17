// Mock data for Kartik Bansal's Portfolio

export const personalInfo = {
  name: "Kartik Bansal",
  title: "Data Scientist & Analyst",
  bio: "Results-driven Data Scientist with hands-on experience in building end-to-end analytics and machine learning solutions across real-world datasets. Proficient in Python, SQL, and data visualization tools to perform advanced data analysis, predictive modeling, and KPI optimization for business decision-making. Experienced in data preprocessing, feature engineering, exploratory analysis, and developing dashboards to communicate insights effectively. Skilled in applying statistical methods and machine learning algorithms to solve business problems, improve performance, and support data-driven strategies.",
  location: "Faridabad, Haryana, 121006",
  email: "Bansalkartik1980@gmail.com",
  linkedin: "https://www.linkedin.com/in/kartikbansal1980/",
  github: "https://github.com/KartikBansal2004",
  resume: "https://drive.google.com/file/d/193eEBVn-Q2_bpVCDEgnh3Xzjhucg-hnq/view?usp=sharing"
};

export const skills = {
  languages: [
    { name: "Python", level: 90 },
    { name: "SQL", level: 85 },
    { name: "R", level: 70 },
    { name: "JavaScript", level: 65 }
  ],
  frameworks: [
    { name: "TensorFlow", level: 80 },
    { name: "PyTorch", level: 75 },
    { name: "Scikit-learn", level: 90 },
    { name: "Pandas", level: 95 },
    { name: "NumPy", level: 90 }
  ],
  tools: [
    { name: "Power BI", level: 85 },
    { name: "Tableau", level: 80 },
    { name: "Excel", level: 90 },
    { name: "Git", level: 85 },
    { name: "Jupyter", level: 90 }
  ],
  cloud: [
    { name: "AWS", level: 70 },
    { name: "Azure", level: 65 },
    { name: "Google Cloud", level: 60 }
  ],
  visualization: [
    { name: "Matplotlib", level: 90 },
    { name: "Seaborn", level: 85 },
    { name: "Plotly", level: 80 },
    { name: "D3.js", level: 60 }
  ]
};

export const experience = [
  {
    id: 1,
    title: "Business Data Analyst",
    company: "Shri Anand Packers",
    period: "May 2023 - May 2025",
    description: "Analyzed sales, inventory, and raw material data using Python (Pandas, NumPy), SQL, and Excel. Performed EDA (Exploratory Data Analysis), KPI tracking, and trend analysis.",
    achievements: [
      "Optimized stock levels and product-wise profit margins through data-driven insights",
      "Built Power BI/Tableau dashboards for real-time business intelligence",
      "Automated monthly reports to monitor daily sales performance and consumption trends",
      "Delivered stakeholder-ready reports to support risk assessment and performance analysis",
      "Supported data-driven decision-making, including basic demand forecasting"
    ]
  },
  {
    id: 2,
    title: "Data Analyst Intern",
    company: "YouStrong HR Solutions Pvt. Ltd.",
    period: "July 2025 - Oct 2025",
    description: "Analyzed 50K+ transactional/payment records using SQL. Performed data validation, anomaly detection, and failure pattern analysis.",
    achievements: [
      "Improved KPI tracking (success rate, settlement cycles, transaction volume) and monitoring accuracy",
      "Built Power BI dashboards for comprehensive data visualization",
      "Delivered stakeholder-ready reports with KPI metrics and trend analysis",
      "Enabled data-driven decision-making, risk assessment, and performance optimization"
    ]
  }
];

export const projects = [
  {
    id: 1,
    title: "RAG-Based AI Teaching Assistant using LLMs and Vector Embeddings",
    description: "Built a RAG-based AI Teaching Assistant by converting video content (MP3 → JSON → embeddings), creating a vectorized knowledge base stored via joblib, and integrating prompt engineering with an LLM to retrieve relevant context and generate accurate, query-driven responses on custom datasets.",
    technologies: ["Python", "LLMs", "Vector Embeddings", "RAG", "NLP", "Joblib", "Prompt Engineering"],
    features: [
      "Audio to text conversion pipeline",
      "Vector database creation and management",
      "Context-aware query processing",
      "LLM integration for intelligent responses"
    ],
    challenges: "Managing large-scale vector embeddings efficiently and optimizing retrieval accuracy for diverse query types.",
    results: "Achieved 92% accuracy in context retrieval and reduced query response time to under 2 seconds.",
    link: "https://github.com/KartikBansal2004/RAG-Based-AI-Teaching-Assistant",
    image: "/api/placeholder/600/400"
  },
  {
    id: 2,
    title: "Zepto Sales & Performance Analysis using Power BI and Excel",
    description: "Built an end-to-end Power BI dashboard (DAX, slicers) and performed Excel-based data cleaning, transformation, and modeling to analyze sales trends, ratings, and category performance, generating KPIs for inventory and outlet strategy decisions.",
    technologies: ["Power BI", "DAX", "Excel", "Data Modeling", "KPI Analysis", "SQL"],
    features: [
      "Interactive Power BI dashboard with dynamic slicers",
      "Advanced DAX calculations for KPIs",
      "Sales trend analysis and forecasting",
      "Category performance metrics"
    ],
    challenges: "Cleaning and transforming large sales datasets while maintaining data integrity and creating meaningful KPIs.",
    results: "Identified key performance drivers leading to 25% improvement in inventory management decisions.",
    link: "https://app.powerbi.com/groups/me/reports/57baa89c-7598-476e-be4f-aa49b70dd833/8e311ae9c8be9c572476?experience=power-bi",
    image: "/api/placeholder/600/400"
  },
  {
    id: 3,
    title: "Weather Data Analysis using Python and SQL",
    description: "Conducted EDA using Python (Pandas, NumPy, Matplotlib) and SQL with data cleaning and statistical analysis to uncover patterns in weather metrics and derive actionable insights.",
    technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "SQL", "Statistical Analysis", "EDA"],
    features: [
      "Comprehensive exploratory data analysis",
      "Statistical pattern recognition",
      "Data cleaning and preprocessing",
      "Visualization of weather trends"
    ],
    challenges: "Handling missing data points and identifying meaningful patterns in complex weather datasets.",
    results: "Discovered seasonal patterns with 88% correlation to historical trends, enabling better weather predictions.",
    link: "https://shorturl.at/yjIW2",
    image: "/api/placeholder/600/400"
  }
];

export const certifications = [
  {
    id: 1,
    title: "Data Science Certification",
    issuer: "Professional Institute",
    date: "2026",
    link: "https://drive.google.com/file/d/1owljRedjYgaFBI8IuM--8qNwJumk4ztc/view?usp=drive_link"
  },
  {
    id: 2,
    title: "Data Analytics Professional",
    issuer: "Udemy",
    date: "2026",
    link: "https://www.udemy.com/certificate/UC-e744b2aa-3430-4ca3-9481-4c75a80f7b07/"
  },
  {
    id: 3,
    title: "Cloud Computing",
    issuer: "NPTEL",
    date: "2026",
    link: "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL23CS89S63550108920120302"
  },
  {
    id: 4,
    title: "MongoDB Certification",
    issuer: "MongoDB University",
    date: "2026",
    link: "https://drive.google.com/file/d/16mcvnwOSt_p9zasQERioAupNC6jV1rDQ/view?usp=sharing"
  }
];

export const dataVisualizations = [
  {
    id: 1,
    title: "Model Performance Comparison",
    description: "Comparative analysis of different ML models showing accuracy, precision, and recall metrics",
    type: "Bar Chart"
  },
  {
    id: 2,
    title: "Feature Correlation Matrix",
    description: "Heatmap visualization showing correlation between key features in the dataset",
    type: "Heatmap"
  },
  {
    id: 3,
    title: "Sales Trend Analysis",
    description: "Time series analysis showing sales patterns and seasonal trends",
    type: "Line Chart"
  },
  {
    id: 4,
    title: "Customer Segmentation",
    description: "Cluster analysis visualization showing distinct customer segments",
    type: "Scatter Plot"
  }
];