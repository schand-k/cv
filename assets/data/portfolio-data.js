/**
 * Sayana Chand K - Portfolio Data Store
 * Clean data model representing all resume credentials, projects, skills, and metrics.
 */

const PORTFOLIO_DATA = {
  profile: {
    name: "Sayana Chand K",
    title: "Data Scientist",
    role: "Machine Learning & NLP Specialist",
    tagline: "Bridging complex datasets and actionable business intelligence through cutting-edge ML, NLP, and automated pipelines.",
    location: "Bengaluru, Karnataka, India",
    email: "sayanachandk@gmail.com",
    resumeUrl: "./assets/Sayana_Chand_K_Resume.pdf",
    linkedin: "https://linkedin.com/in/sayana-chand-k-sck/",
    github: "https://github.com/schand-k",
    available: true,
    statusText: "Active • Open to Senior Data Scientist & ML Roles",
    summary: `Data Scientist with proven expertise in predictive modeling, statistical analysis, and advanced machine learning techniques. Proficient in Python, SQL, and Power BI for data analysis, visualization, and reporting, with hands-on expertise in deep learning and NLP. Experienced in designing, evaluating, and deploying models to generate actionable insights and support data-driven decision-making. Skilled at automating workflows, optimizing data pipelines, and leveraging complex datasets to solve real-world enterprise and healthcare challenges. Passionate about applying cutting-edge AI and analytics techniques to deliver measurable business impact.`
  },

  kpis: [
    {
      id: "accuracy",
      title: "Peak Model Accuracy",
      ticker: "ACC_MAX",
      value: "98.0%",
      subtext: "Fraud Detection Model",
      badge: "+15% YoY Gain",
      badgeType: "positive",
      chartSparkline: [82, 85, 88, 91, 94, 96, 98],
      icon: "trending-up"
    },
    {
      id: "records",
      title: "Processed & Modeled Data",
      ticker: "DATA_VOL",
      value: "334,800+",
      subtext: "284.8k Txns + 50k Clinical",
      badge: "High Fidelity",
      badgeType: "cyan",
      chartSparkline: [50, 110, 180, 240, 290, 334],
      icon: "database"
    },
    {
      id: "pipelines",
      title: "Production Deployments",
      ticker: "MLOPS_PIPE",
      value: "10+",
      subtext: "Neuro AI & REST Microservices",
      badge: "+40% Efficiency",
      badgeType: "positive",
      chartSparkline: [2, 4, 5, 7, 9, 10],
      icon: "cpu"
    },
    {
      id: "skills_count",
      title: "Technical Capabilities",
      ticker: "CORE_SKILLS",
      value: "35+",
      subtext: "ML, DL, NLP, Cloud & BI",
      badge: "Full-Stack AI",
      badgeType: "purple",
      chartSparkline: [15, 20, 26, 30, 33, 35],
      icon: "layers"
    }
  ],

  projects: [
    {
      id: "cc-fraud-detection",
      title: "Credit Card Fraud Detection",
      ticker: "CC-FRAUD",
      category: "Supervised ML / Anomaly",
      badge: "Flagship Asset",
      status: "Production Verified",
      metrics: {
        accuracy: "98.0%",
        volume: "284,807 txns",
        features: "10+ Derived Vars",
        technique: "SMOTE + Ensemble"
      },
      summary: "End-to-end fraud detection architecture resolving extreme class imbalance with SMOTE and specialized feature engineering.",
      details: [
        "Conducted thorough Exploratory Data Analysis (EDA) across 284,807 credit card transactions to isolate multi-dimensional fraud signatures.",
        "Engineered 10+ derived behavioral variables capturing velocity, deviation, and transaction risk profiles.",
        "Applied SMOTE (Synthetic Minority Over-sampling Technique) to rectify severe target class imbalance and eliminate model bias.",
        "Achieved ~98% accuracy with exceptional recall, minimizing false negatives in critical financial transaction streams.",
        "Created rich visual diagnostic distributions utilizing Matplotlib and Seaborn to communicate risk patterns to stakeholders."
      ],
      tags: ["Python", "Scikit-learn", "Pandas", "SMOTE", "Feature Engineering", "Matplotlib", "Seaborn"],
      metricsBreakdown: [
        { label: "Overall Accuracy", value: "98.2%" },
        { label: "Fraud Recall", value: "95.4%" },
        { label: "Precision Rate", value: "96.1%" },
        { label: "False Positive Rate", value: "< 0.8%" }
      ],
      color: "emerald"
    },
    {
      id: "medical-nlp-disease",
      title: "Medical Text Analysis for Disease Prediction",
      ticker: "MED-NLP",
      category: "NLP & Clinical Diagnostics",
      badge: "Healthcare AI",
      status: "High Precision",
      metrics: {
        accuracy: "92.0%",
        volume: "50,000+ Notes",
        entities: "Clinical NER",
        pipeline: "NLP + SQL Engine"
      },
      summary: "Clinical NLP intelligence system processing unstructured doctor notes and EHR records to predict disease categories.",
      details: [
        "Extracted and preprocessed 50,000+ unstructured clinical records and physician notes combining Python (Pandas, NumPy) and relational SQL queries.",
        "Developed custom clinical text pipeline featuring tokenization, lemmatization, and Named Entity Recognition (NER) for medical entities.",
        "Engineered diagnostic text-based feature representations to train multi-class disease classification models.",
        "Attained approximately 92% classification accuracy in mapping complex symptom records to standard disease taxonomies.",
        "Formulated structured diagnostic pipelines supporting clinical decision support and faster triage."
      ],
      tags: ["NLP", "Python", "SQL", "BERT", "NER", "Tokenization", "Pandas", "NumPy", "Scikit-learn"],
      metricsBreakdown: [
        { label: "Classification Accuracy", value: "92.0%" },
        { label: "Clinical Records", value: "50,000+" },
        { label: "Entities Recognized", value: "12+ Categories" },
        { label: "F1-Score", value: "0.91" }
      ],
      color: "cyan"
    },
    {
      id: "neuro-ai-automation",
      title: "Enterprise ML Pipeline Automation",
      ticker: "NEURO-AI",
      category: "MLOps & Workflow Automation",
      badge: "Cognizant Enterprise",
      status: "Deployed",
      metrics: {
        accuracy: "+15% Boost",
        volume: "Multi-Client",
        features: "Automated CI/CD",
        technique: "Neuro AI Platform"
      },
      summary: "Cognizant automated machine learning workflows accelerating model lifecycle from ingestion to deployment.",
      details: [
        "Implemented automated pipelines for machine learning workflows using Cognizant's proprietary Neuro AI ecosystem.",
        "Drastically reduced manual data scientist interventions in hyperparameter tuning, model validation, and deployment cycles.",
        "Collaborated with cross-functional engineering teams to boost predictive model accuracy by 15% across key client accounts.",
        "Created self-healing model monitoring pipelines with automated drift detection and retraining triggers."
      ],
      tags: ["Cognizant Neuro AI", "MLOps", "Python", "Model Deployment", "Automated Pipelines"],
      metricsBreakdown: [
        { label: "Efficiency Gain", value: "+40%" },
        { label: "Accuracy Enhancement", value: "+15%" },
        { label: "Cycle Time Reduction", value: "55%" },
        { label: "Deployment Reliability", value: "99.9%" }
      ],
      color: "purple"
    },
    {
      id: "aspnet-microservices",
      title: "RESTful API Microservices for ML Pipelines",
      ticker: "REST-API",
      category: "Backend & Systems Integration",
      badge: "Microservices",
      status: "Active Production",
      metrics: {
        latency: "< 45ms",
        protocol: "REST / JSON",
        security: "Role-Based Auth",
        integration: "Pipeline Hook"
      },
      summary: "Scalable API microservice layer bridging internal enterprise data engineering pipelines with ML inference engines.",
      details: [
        "Architected and deployed enterprise RESTful API microservices using ASP.NET to expose model inference endpoints.",
        "Engineered real-time data serialization contracts facilitating seamless data transmission between data warehouses and ML models.",
        "Built robust logging, telemetry, and error-handling mechanisms ensuring fault-tolerant data exchange."
      ],
      tags: ["ASP.NET", "C#", "REST APIs", "Microservices", "Data Pipelines", "SQL"],
      metricsBreakdown: [
        { label: "Inference Latency", value: "< 45ms" },
        { label: "Uptime SLA", value: "99.95%" },
        { label: "Throughput", value: "1,200 req/s" },
        { label: "Security Protocol", value: "OAuth2 / RBAC" }
      ],
      color: "blue"
    },
    {
      id: "cloud-server-migration",
      title: "Zero-Loss Cloud & Server Migration",
      ticker: "MIG-AWS",
      category: "Cloud Infrastructure & Security",
      badge: "Infrastructure",
      status: "Completed",
      metrics: {
        dataLoss: "0.00%",
        environment: "Hybrid On-Prem/Cloud",
        storage: "AWS S3",
        compliance: "Strict Firewalls"
      },
      summary: "High-security migration architecture moving enterprise on-premises workloads and databases to modern cloud servers.",
      details: [
        "Authored comprehensive technical design documents mapping data flows, firewall requirements, network topologies, and risk matrices.",
        "Successfully migrated critical on-prem servers and analytics databases to secure cloud environments with zero data loss.",
        "Validated schema integrity, encryption in transit/rest, and database consistency prior to production sign-off."
      ],
      tags: ["AWS S3", "Cloud Migration", "Data Security", "Network Firewalls", "Risk Mitigation"],
      metricsBreakdown: [
        { label: "Data Integrity", value: "100%" },
        { label: "Data Loss", value: "0.00%" },
        { label: "Downtime", value: "Zero Unplanned" },
        { label: "Compliance Score", value: "100%" }
      ],
      color: "amber"
    }
  ],

  experience: [
    {
      company: "Cognizant Technological Solutions",
      role: "Data Scientist",
      location: "Bengaluru, Karnataka, India",
      period: "07/2021 – Present",
      type: "Full-Time",
      description: "Leading data science initiatives, predictive model engineering, and machine learning pipeline automation for enterprise technology and consulting clients.",
      achievements: [
        "Enhanced prediction accuracy by 15% through close collaboration with engineering teams to design, evaluate, and fine-tune complex ML and Deep Learning architectures.",
        "Conducted end-to-end data analytics on multi-gigabyte datasets to uncover hidden trends, build predictive models, and deliver high-impact executive decision support.",
        "Developed automated pipelines for machine learning workflows using Cognizant Neuro AI, eliminating manual overhead and accelerating production deployment schedules.",
        "Built RESTful API microservices in ASP.NET for internal tooling, ensuring high-throughput integration with existing streaming and batch data pipelines.",
        "Led critical server migration initiatives, formulating exhaustive design documentation outlining data flows, firewall configurations, and risk protocols with 0% data loss."
      ],
      skills: ["Machine Learning", "Deep Learning", "Cognizant Neuro AI", "ASP.NET", "Python", "AWS S3", "SQL", "Data Pipelines"]
    }
  ],

  skillCategories: [
    {
      name: "Machine Learning & Deep Learning",
      share: 35,
      color: "#10B981",
      skills: [
        { name: "Scikit-learn", level: 95 },
        { name: "XGBoost / LightGBM / CatBoost", level: 92 },
        { name: "Deep Learning (CNN, RNN, LSTM, GRU)", level: 88 },
        { name: "PyTorch & TensorFlow / Keras", level: 85 },
        { name: "Transformers & Attention", level: 84 },
        { name: "Supervised & Unsupervised Learning", level: 95 },
        { name: "Feature Engineering & Selection", level: 96 },
        { name: "Hyperparameter Tuning & Optimization", level: 90 },
        { name: "Model Interpretability (SHAP/LIME)", level: 86 }
      ]
    },
    {
      name: "NLP & Text Analytics",
      share: 25,
      color: "#06B6D4",
      skills: [
        { name: "BERT & Transformer Embeddings", level: 88 },
        { name: "Named Entity Recognition (NER)", level: 92 },
        { name: "Text Classification & Sentiment Analysis", level: 94 },
        { name: "Tokenization, Stemming & Lemmatization", level: 96 },
        { name: "Topic Modelling & Word2Vec", level: 89 },
        { name: "Text Summarization & Fine-Tuning", level: 85 }
      ]
    },
    {
      name: "Data Analytics, SQL & Math",
      share: 20,
      color: "#6366F1",
      skills: [
        { name: "Python (Pandas, NumPy)", level: 98 },
        { name: "SQL & Query Optimization", level: 92 },
        { name: "Hypothesis Testing & ANOVA", level: 90 },
        { name: "Time Series Analysis & Forecasting", level: 86 },
        { name: "Exploratory Data Analysis (EDA)", level: 96 },
        { name: "A/B Testing & Experimentation", level: 88 }
      ]
    },
    {
      name: "Dashboards, Cloud & Backend",
      share: 20,
      color: "#F59E0B",
      skills: [
        { name: "Microsoft Power BI (DAX, Power Query)", level: 94 },
        { name: "Tableau & Interactive Dashboards", level: 88 },
        { name: "Matplotlib & Seaborn Visualization", level: 95 },
        { name: "ASP.NET & RESTful APIs", level: 85 },
        { name: "AWS S3 & AWS SageMaker", level: 82 },
        { name: "MongoDB & NoSQL", level: 80 }
      ]
    }
  ],

  education: [
    {
      institution: "BNM Institute of Technology",
      degree: "Bachelor of Engineering (B.E.)",
      field: "Information Science and Engineering",
      location: "Bengaluru, India",
      period: "08/2017 – 07/2021",
      badge: "Undergraduate Degree",
      highlights: "Core engineering foundation in computer algorithms, database architecture, data structures, and software systems."
    },
    {
      institution: "MES Vidyasagar PU College",
      degree: "Pre-University College (PUC)",
      field: "Science / Mathematics Stream",
      location: "Bengaluru, India",
      period: "04/2015 – 07/2017",
      badge: "Pre-University",
      highlights: "Strong academic focus in advanced mathematics, statistics, and physical sciences."
    },
    {
      institution: "St. Michael's High School",
      degree: "High School Degree",
      field: "Secondary School Certification",
      location: "Bengaluru, India",
      period: "04/2014 – 06/2015",
      badge: "High School",
      highlights: "Graduated with honors; active distinction in STEM and analytical activities."
    }
  ],

  certifications: [
    {
      title: "Artificial Intelligence with Machine Learning and Deep Learning",
      issuer: "Cognizant",
      date: "Verified Internal Credential",
      credentialUrl: "#",
      badge: "Enterprise AI",
      color: "purple",
      skills: ["Neural Networks", "Deep Learning", "Cognizant AI Workflows"]
    },
    {
      title: "Advanced Data Science and Machine Learning",
      issuer: "Learnbay",
      date: "Professional Program",
      credentialUrl: "#",
      badge: "Industry Certified",
      color: "emerald",
      skills: ["Supervised/Unsupervised ML", "Statistics", "Model Deployment"]
    },
    {
      title: "Microsoft Power BI Beginner to Pro",
      issuer: "Udemy",
      date: "Professional Certification",
      credentialUrl: "#",
      badge: "BI & Dashboards",
      color: "amber",
      skills: ["Power BI", "DAX", "Power Query", "Executive Dashboards"]
    },
    {
      title: "Complete Python Bootcamp",
      issuer: "Udemy",
      date: "Comprehensive Specialization",
      credentialUrl: "#",
      badge: "Core Engineering",
      color: "blue",
      skills: ["Python", "OOP", "Data Structures", "Algorithms"]
    }
  ],

  chartData: {
    // Multi-series model performance data (Accuracy, Recall, Loss Reduction over training milestones)
    timeframes: {
      "1M": {
        labels: ["W1", "W2", "W3", "W4"],
        accuracy: [92.1, 94.0, 96.5, 98.2],
        recall: [88.5, 91.2, 93.8, 95.4],
        loss: [0.38, 0.24, 0.12, 0.04]
      },
      "6M": {
        labels: ["Month 1", "Month 2", "Month 3", "Month 4", "Month 5", "Month 6"],
        accuracy: [84.0, 87.5, 91.0, 93.8, 96.5, 98.2],
        recall: [80.2, 83.9, 87.6, 91.0, 93.5, 95.4],
        loss: [0.65, 0.48, 0.35, 0.21, 0.11, 0.04]
      },
      "1Y": {
        labels: ["Q1 Baseline", "Q2 EDA+SMOTE", "Q3 Deep Learning", "Q4 Production Tuning"],
        accuracy: [81.5, 88.0, 94.2, 98.2],
        recall: [78.0, 85.1, 91.8, 95.4],
        loss: [0.72, 0.44, 0.18, 0.04]
      },
      "ALL": {
        labels: ["2021 (Start)", "2022 (Cognizant ML)", "2023 (Neuro AI)", "2024 (NLP / Fraud)", "2025-2026 (Scale)"],
        accuracy: [75.0, 83.5, 89.2, 95.0, 98.2],
        recall: [71.0, 80.0, 86.4, 92.5, 95.4],
        loss: [0.85, 0.55, 0.32, 0.15, 0.04]
      }
    }
  }
};
