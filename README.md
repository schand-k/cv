# Sayana Chand K - Data Science & Machine Learning Portfolio Website

> A futuristic, glassmorphic **Vision UI Dashboard** personal portfolio showcasing end-to-end Machine Learning architectures, clinical NLP systems, and enterprise data pipelines.
> Tailored for Sayana Chand K, Data Scientist at Cognizant.

![Theme](https://img.shields.io/badge/Theme-Vision_UI_Dashboard-0075FF?style=for-the-badge)
![Deployment](https://img.shields.io/badge/Deployment-GitHub_Pages-01B574?style=for-the-badge&logo=github)
![Tech](https://img.shields.io/badge/Tech-HTML5_|_TailwindCSS_|_Chart.js_|_Lucide-7551FF?style=for-the-badge)

---

## 🌟 Key Visual & Architecture Features (Vision UI)

- **Vision UI Glassmorphism Aesthetic**:
  - Deep space blue background (`#060b26`) with ambient radial illumination (electric blue `#0075ff`, violet `#7551ff`, and neon teal `#01b574`).
  - Frosted translucent cards (`backdrop-filter: blur(20px)`), delicate borders, and glowing elevation shadows.
  - Signature glowing squircle icon boxes with active drop-shadows.

- **D-Web & M-Web Responsive Design**:
  - **Desktop (D-Web)**: Permanent left navigation bar, 4-column KPI cards, multi-pane performance gauges, full data tables, and interactive inspection modals.
  - **Mobile (M-Web)**: Smooth off-canvas navigation drawer with frosted backdrop blur, responsive cards, touch-optimized targets (min 44px), and adaptive charts that automatically scale without horizontal overflow.

- **KPI Metric Highlights**:
  - **Peak Model Accuracy**: 98.0% (Fraud Detection Model with SMOTE)
  - **Processed & Modeled Data**: 334,800+ records (284.8k transactions + 50k clinical notes)
  - **Production ML Deployments**: 10+ (Cognizant Neuro AI & REST Microservices)
  - **Technical Capabilities**: 35+ core tools (ML, Deep Learning, NLP, Cloud & BI)

- **Interactive Analytics & Gauges**:
  - **Model Performance Area Chart**: Multi-series smooth curves comparing Accuracy vs. Recall with gradient fill and timeframe toggles (`1M`, `6M`, `1Y`, `ALL`).
  - **Inference & Throughput Bar Chart**: Rounded vertical pill bars tracking monthly inference volume, latency SLA (<45ms), and uptime (99.9%).
  - **Radial Performance Gauges**: High-fidelity animated circular gauges showing Satisfaction Rate (95%) and Model Trust & Reliability (Safety 9.8 score).

- **Projects & Model Architecture Modal**:
  - Interactive table with real-time category filtering (`Supervised ML`, `Clinical NLP`, `MLOps / API`, `Cloud Infra`) and live text search.
  - Clickable **"Inspect"** button opening an in-depth modal displaying methodology, SMOTE imbalance rectification, clinical NER details, and diagnostic breakdown metrics (Recall, Precision, False Positive Rate).

- **Zero Build Step**:
  - Pure vanilla HTML5, CSS3, and JavaScript utilizing Tailwind CSS CDN, Chart.js, and Lucide Icons.
  - No build commands, node modules, or compile steps required for GitHub Pages.

---

## 📁 Repository Structure

```
sayana-cv/
├── index.html                   # Main Vision UI dashboard
├── .nojekyll                    # Ensures GitHub Pages serves all assets
├── assets/
│   ├── css/
│   │   └── style.css            # Vision UI design tokens, glassmorphism & responsive drawer
│   ├── data/
│   │   └── portfolio-data.js    # Central data store for profile, KPIs, projects, skills & charts
│   └── js/
│       ├── app.js               # Application logic, mobile navigation, search/filters & modal
│       └── charts.js            # Chart.js area chart, bar chart, sparklines & SVG gauges
└── README.md
```

---

## 🛠️ Updating Resume Information

All information, projects, skills, and links are managed in a single structured data store:
👉 `assets/data/portfolio-data.js`

To update experience, add a project, or edit credentials:
1. Open `assets/data/portfolio-data.js`.
2. Edit the corresponding field.
3. Save and commit. The entire dashboard updates automatically!
