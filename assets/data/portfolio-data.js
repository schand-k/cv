/**
 * Sayana Chand K - Portfolio Data Store
 * Clean data model representing all resume credentials, projects, skills, and metrics.
 * Updated with latest CV: Generative AI, Computer Vision, BioBERT, Real-Time Stadium Analytics.
 */

const PORTFOLIO_DATA = {
  profile: {
    name: "Sayana Chand K",
    title: "Data Scientist",
    role: "Machine Learning & Deep Learning | NLP & Generative AI | Computer Vision",
    tagline: "Converting complex, high-volume datasets into measurable, business-relevant predictive insights across IT services, banking, and healthcare.",
    location: "Bengaluru, Karnataka, India",
    email: "sayanachandk@gmail.com",
    resumeUrl: "./assets/Sayana_Chand_K_Resume.pdf",
    linkedin: "https://linkedin.com/in/sayana-chand-k-sck/",
    github: "https://github.com/schand-k",
    available: true,
    statusText: "Active • Open to Senior Data Scientist & ML / CV / GenAI Roles",
    summary: `Data Scientist with 2+ years of professional experience in predictive modeling, statistical analysis and machine learning, spanning IT services, banking and healthcare use cases. Proficient in Python, SQL and Power BI, with hands-on work in deep learning, NLP, transformer-based models, Generative AI and computer vision. Skilled in exploratory data analysis, feature engineering, model evaluation and pipeline automation, with exposure to AWS and Kubernetes-based real-time data architectures. Focused on converting complex, high-volume datasets into measurable, business-relevant insights.`
  },

  kpis: [
    {
      id: "accuracy",
      title: "Peak Model Accuracy",
      ticker: "ACC_MAX",
      value: "98.0%",
      subtext: "Fraud Detection (87% Recall)",
      badge: "+15% YoY Gain",
      badgeType: "positive",
      chartSparkline: [82, 85, 88, 91, 94, 96, 98],
      icon: "trending-up"
    },
    {
      id: "vision",
      title: "Computer Vision Streams",
      ticker: "REALTIME_CV",
      value: "Live Feeds",
      subtext: "Stadium Crowd & Dwell Analytics",
      badge: "Real-Time AI",
      badgeType: "purple",
      chartSparkline: [20, 45, 65, 80, 95, 100],
      icon: "video"
    },
    {
      id: "records",
      title: "Processed & Modeled Data",
      ticker: "DATA_VOL",
      value: "334,800+",
      subtext: "284.8k Txns + 50k Clinical + Video",
      badge: "High Fidelity",
      badgeType: "cyan",
      chartSparkline: [50, 110, 180, 240, 290, 334],
      icon: "database"
    },
    {
      id: "skills_count",
      title: "Technical Capabilities",
      ticker: "CORE_SKILLS",
      value: "40+",
      subtext: "ML, DL, GenAI, CV, Cloud & BI",
      badge: "Full-Stack AI",
      badgeType: "positive",
      chartSparkline: [15, 22, 28, 33, 38, 42],
      icon: "layers"
    }
  ],

  projects: [
    {
      id: "ai-crowd-management",
      title: "Real-Time AI Crowd Management & Computer Vision Analytics",
      ticker: "CROWD-CV",
      category: "Computer Vision & Real-Time Analytics",
      badge: "Stadium Analytics",
      status: "Real-Time Pipeline",
      metrics: {
        accuracy: "Real-Time",
        volume: "Multi-Feed Streams",
        features: "Pedestrian/Bike Class",
        technique: "CV + AWS Kinesis"
      },
      summary: "Real-time crowd management processing live AI camera streams across stadium access points with dwell-time analytics and privacy face blurring.",
      details: [
        "Designed a real-time crowd management system processing live AI-powered camera streams across stadium entry points, exits, and concession kiosks to support proactive security and operational decision-making.",
        "Applied computer-vision and deep-learning techniques to detect individuals in video streams and classify pedestrian versus bicyclist traffic in real time.",
        "Implemented privacy-preserving face processing using Gaussian/kernel blur on detected faces to protect individual identity while preserving crowd analytics.",
        "Calculated time-window-based dwell analytics, measuring average dwell times at entrances, exits, and concession kiosks across pre- and post-match operational windows (30, 15, and 5 minutes).",
        "Built Power BI dashboards to visualize high-density bottlenecks and underutilized access points, enabling security personnel to dynamically reroute stadium traffic.",
        "Leveraged AWS S3, AWS Kinesis, and Kubernetes to support real-time ingestion and processing of streaming camera data."
      ],
      tags: ["Computer Vision", "Python", "Deep Learning", "AWS Kinesis", "Kubernetes", "AWS S3", "Power BI", "Gaussian Blur", "Dwell Analytics"],
      metricsBreakdown: [
        { label: "Stream Ingestion", value: "AWS Kinesis" },
        { label: "Dwell Windows", value: "30 / 15 / 5 Min" },
        { label: "Traffic Types", value: "Pedestrian / Bicyclist" },
        { label: "Privacy Protection", value: "Gaussian Kernel Blur" }
      ],
      color: "cyan"
    },
    {
      id: "medical-nlp-disease",
      title: "Medical Text Analysis for Disease Prediction",
      ticker: "MED-NLP",
      category: "NLP, BioBERT & Generative AI",
      badge: "Healthcare AI",
      status: "92% Accuracy",
      metrics: {
        accuracy: "92.0%",
        volume: "50,000+ Notes",
        entities: "Clinical NER",
        pipeline: "BioBERT + GenAI"
      },
      summary: "Clinical NLP intelligence system processing 50,000+ patient records using fine-tuned BioBERT/ClinicalBERT and Generative AI history summarization.",
      details: [
        "Collected and analyzed 50,000+ clinical notes and patient records using Python (Pandas, NumPy) and SQL, producing clean, structured datasets for downstream modeling.",
        "Performed NLP preprocessing on unstructured clinical text, including tokenization, lemmatization, and named entity recognition (NER), to extract clinically relevant features.",
        "Fine-tuned a transformer-based language model (BioBERT/ClinicalBERT) to classify patient records into disease categories, achieving approximately 92% accuracy.",
        "Engineered text-based features from symptoms, diagnoses, and treatment notes to support supervised classification models.",
        "Applied generative AI techniques to summarize patient histories, producing concise summaries to support clinical decision-making context."
      ],
      tags: ["BioBERT", "ClinicalBERT", "Generative AI", "NLP", "Python", "SQL", "NER", "Transformers", "Pandas", "Scikit-learn"],
      metricsBreakdown: [
        { label: "Classification Accuracy", value: "92.0%" },
        { label: "Clinical Records", value: "50,000+" },
        { label: "Transformer Model", value: "BioBERT/ClinicalBERT" },
        { label: "Clinical Summarization", value: "Generative AI" }
      ],
      color: "purple"
    },
    {
      id: "cc-fraud-detection",
      title: "Credit Card Fraud Detection",
      ticker: "CC-FRAUD",
      category: "Supervised ML / Anomaly",
      badge: "Financial Security",
      status: "Production Verified",
      metrics: {
        accuracy: "98.0%",
        volume: "284,807 txns",
        features: "10+ Derived Vars",
        technique: "SMOTE + Ensemble"
      },
      summary: "End-to-end fraud detection architecture resolving extreme class imbalance with SMOTE, achieving 98% accuracy and 87% recall.",
      details: [
        "Conducted exploratory data analysis on 284,807 credit card transactions to identify features and patterns associated with fraudulent activity.",
        "Engineered 10+ derived features to strengthen model inputs and improve anomaly detection effectively.",
        "Applied SMOTE to address severe class imbalance, improving model robustness for minority-class (fraud) detection.",
        "Built and tuned a supervised fraud-detection model achieving approximately 98% accuracy and 87% recall in identifying fraudulent transactions.",
        "Visualized transaction trends and anomalies across transaction types, amounts, and time periods using Matplotlib and Seaborn."
      ],
      tags: ["Python", "Scikit-learn", "Pandas", "SMOTE", "Feature Engineering", "Matplotlib", "Seaborn"],
      metricsBreakdown: [
        { label: "Overall Accuracy", value: "98.0%" },
        { label: "Fraud Recall", value: "87.0%" },
        { label: "Engineered Features", value: "10+ Derived" },
        { label: "Dataset Scale", value: "284,807 Txns" }
      ],
      color: "emerald"
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
        "Collaborated with cross-functional teams to build and evaluate machine learning and deep learning models, improving prediction accuracy by 15%.",
        "Performed data analysis on large-scale datasets to identify trends, build predictive models, and generate actionable insights supporting client decision-making.",
        "Developed automated machine learning pipelines using the Neuro AI platform, reducing manual effort and improving efficiency in model deployment workflows."
      ],
      tags: ["Cognizant Neuro AI", "MLOps", "Python", "Model Deployment", "Automated Pipelines"],
      metricsBreakdown: [
        { label: "Efficiency Gain", value: "+40%" },
        { label: "Accuracy Enhancement", value: "+15%" },
        { label: "Cycle Time Reduction", value: "55%" },
        { label: "Deployment Reliability", value: "99.9%" }
      ],
      color: "blue"
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
        "Assisted in building RESTful API microservices using ASP.NET to support integration between internal tools and existing data pipelines.",
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
      color: "purple"
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
        storage: "AWS S3 / EC2",
        compliance: "Risk Assessed"
      },
      summary: "High-security migration architecture moving enterprise on-premises workloads and databases to modern cloud servers.",
      details: [
        "Supported cloud and on-premise server migration for a client environment, contributing to data-flow design documentation and migration risk assessment without data loss.",
        "Successfully migrated critical on-prem servers and analytics databases to secure cloud environments with zero data loss.",
        "Validated schema integrity, encryption in transit/rest, and database consistency prior to production sign-off."
      ],
      tags: ["AWS S3", "AWS EC2", "Cloud Migration", "Data Security", "Network Firewalls", "Risk Mitigation"],
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
      company: "Cognizant Technology Solutions",
      role: "Data Scientist",
      location: "Bengaluru, Karnataka, India",
      period: "Jul 2021 – Present",
      type: "Full-Time",
      description: "Leading data science initiatives, predictive model engineering, and machine learning pipeline automation for enterprise technology and consulting clients.",
      achievements: [
        "Collaborated with cross-functional teams to build and evaluate machine learning and deep learning models, improving prediction accuracy by 15%.",
        "Performed data analysis on large-scale datasets to identify trends, build predictive models, and generate actionable insights supporting client decision-making.",
        "Developed automated machine learning pipelines using the Neuro AI platform, reducing manual effort and improving efficiency in model deployment workflows.",
        "Assisted in building RESTful API microservices using ASP.NET to support integration between internal tools and existing data pipelines.",
        "Supported cloud and on-premise server migration for a client environment, contributing to data-flow design documentation and migration risk assessment without data loss."
      ],
      skills: ["Machine Learning", "Deep Learning", "Cognizant Neuro AI", "ASP.NET", "Python", "AWS S3", "SQL", "Data Pipelines"]
    }
  ],

  skillCategories: [
    {
      name: "Machine Learning & Deep Learning",
      share: 30,
      color: "#0075ff",
      skills: [
        { name: "Scikit-learn", level: 95 },
        { name: "XGBoost / LightGBM / CatBoost", level: 92 },
        { name: "Neural Networks (CNN, RNN, LSTM, GRU)", level: 90 },
        { name: "PyTorch & TensorFlow / Keras", level: 88 },
        { name: "Transformers & Attention Mechanisms", level: 86 },
        { name: "Supervised & Unsupervised Learning", level: 95 },
        { name: "Feature Engineering & Selection", level: 95 },
        { name: "Model Interpretability (SHAP, LIME)", level: 88 },
        { name: "Time Series Analysis", level: 85 }
      ]
    },
    {
      name: "NLP & Generative AI",
      share: 25,
      color: "#01b574",
      skills: [
        { name: "Large Language Models (LLMs) & Fine-Tuning", level: 88 },
        { name: "Retrieval-Augmented Generation (RAG)", level: 86 },
        { name: "BioBERT & ClinicalBERT", level: 90 },
        { name: "Prompt Engineering & Summarization", level: 92 },
        { name: "Named Entity Recognition (NER)", level: 94 },
        { name: "Tokenization, Stemming & Lemmatization", level: 96 },
        { name: "Sentiment Analysis & Text Classification", level: 94 },
        { name: "Topic Modeling & Word Embeddings", level: 88 }
      ]
    },
    {
      name: "Computer Vision & Real-Time Streams",
      share: 20,
      color: "#7551ff",
      skills: [
        { name: "Real-Time Video Stream Processing", level: 90 },
        { name: "Deep Learning Object / Pedestrian Detection", level: 88 },
        { name: "Privacy Face Blurring (Gaussian / Kernel)", level: 92 },
        { name: "Crowd-Flow & Dwell-Time Analytics", level: 90 },
        { name: "AWS Kinesis Real-Time Ingestion", level: 86 },
        { name: "Kubernetes Container Orchestration", level: 84 }
      ]
    },
    {
      name: "Cloud, BI & Data Analytics",
      share: 25,
      color: "#ffb547",
      skills: [
        { name: "Microsoft Power BI (DAX, Power Query)", level: 94 },
        { name: "Python (Pandas, NumPy)", level: 98 },
        { name: "SQL & Query Optimization", level: 94 },
        { name: "AWS S3 & AWS EC2", level: 86 },
        { name: "Tableau & Interactive Dashboards", level: 88 },
        { name: "Matplotlib & Seaborn Visualization", level: 95 },
        { name: "MongoDB & NoSQL", level: 82 },
        { name: "Statistics (Hypothesis Testing, ANOVA, A/B Testing)", level: 90 }
      ]
    }
  ],

  education: [
    {
      institution: "BNM Institute of Technology",
      degree: "Bachelor of Engineering (B.E.)",
      field: "Information Science and Engineering",
      location: "Bengaluru, India",
      period: "Aug 2017 – Jul 2021",
      badge: "Undergraduate Degree",
      highlights: "Core engineering foundation in computer algorithms, database architecture, data structures, and software systems."
    },
    {
      institution: "MES Vidyasagar PU College",
      degree: "Pre-University College (PUC)",
      field: "Science Stream",
      location: "Bengaluru, India",
      period: "Apr 2015 – Jul 2017",
      badge: "Pre-University",
      highlights: "Strong academic focus in advanced mathematics, statistics, physics, and chemistry."
    }
  ],

  certifications: [
    {
      title: "Advanced Data Science and Machine Learning",
      issuer: "Learnbay",
      date: "Industry Certified",
      credentialUrl: "#",
      badge: "Advanced DS & ML",
      color: "emerald",
      skills: ["Supervised/Unsupervised ML", "Statistics", "Model Deployment"]
    },
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
      title: "Complete Python Bootcamp",
      issuer: "Udemy",
      date: "Comprehensive Specialization",
      credentialUrl: "#",
      badge: "Core Engineering",
      color: "blue",
      skills: ["Python", "OOP", "Data Structures", "Algorithms"]
    },
    {
      title: "Microsoft Power BI: Beginner to Pro",
      issuer: "Udemy",
      date: "Professional Certification",
      credentialUrl: "#",
      badge: "BI & Dashboards",
      color: "amber",
      skills: ["Power BI", "DAX", "Power Query", "Executive Dashboards"]
    }
  ],

  chartData: {
    timeframes: {
      "1M": {
        labels: ["W1", "W2", "W3", "W4"],
        accuracy: [92.1, 94.0, 96.5, 98.0],
        recall: [82.5, 84.2, 85.8, 87.0],
        loss: [0.38, 0.24, 0.12, 0.04]
      },
      "6M": {
        labels: ["Month 1", "Month 2", "Month 3", "Month 4", "Month 5", "Month 6"],
        accuracy: [84.0, 87.5, 91.0, 93.8, 96.5, 98.0],
        recall: [76.2, 79.5, 82.1, 84.0, 85.5, 87.0],
        loss: [0.65, 0.48, 0.35, 0.21, 0.11, 0.04]
      },
      "1Y": {
        labels: ["Q1 Baseline", "Q2 EDA+SMOTE", "Q3 Deep Learning & CV", "Q4 Production Tuning"],
        accuracy: [81.5, 88.0, 94.2, 98.0],
        recall: [74.0, 80.1, 84.8, 87.0],
        loss: [0.72, 0.44, 0.18, 0.04]
      },
      "ALL": {
        labels: ["2021 (Start)", "2022 (Cognizant ML)", "2023 (Neuro AI)", "2024 (NLP / BioBERT)", "2025-2026 (CV / GenAI)"],
        accuracy: [75.0, 83.5, 89.2, 95.0, 98.0],
        recall: [70.0, 76.0, 81.4, 85.0, 87.0],
        loss: [0.85, 0.55, 0.32, 0.15, 0.04]
      }
    }
  }
};
