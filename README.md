# Sayana Chand K - Data Science Portfolio Website

> An **Investment Portfolio Dashboard** styled personal website showcasing machine learning models, clinical NLP pipelines, and data science impact.
> Designed with ❤️ by Sayana Chand.

![Dashboard Preview](https://img.shields.io/badge/Design_Theme-Investment_Portfolio_Dashboard-10b981?style=for-the-badge)
![GitHub Pages](https://img.shields.io/badge/Deployment-GitHub_Pages-06b6d4?style=for-the-badge&logo=github)
![Tech](https://img.shields.io/badge/Tech-HTML5_|_Tailwind_CSS_|_Chart.js-8b5cf6?style=for-the-badge)

---

## 🌟 Key Highlights & Design Features

- **Fintech / Investment Dashboard Aesthetic**:
  - Deep obsidian dark theme (`#07090e`), subtle glassmorphism (`backdrop-filter: blur(16px)`), neon emerald gains (`#10b981`), electric cyan (`#06b6d4`), and violet (`#8b5cf6`) accents.
  - Dynamic KPI cards with live sparkline charts and percentage performance indicators (`+15% Model Gain`, `334,800+ Records Analyzed`, `98.0% Accuracy`).
- **Interactive Multi-Series Performance Chart**:
  - Interactive Chart.js graph displaying model training milestones, accuracy curves, recall rates, and validation loss reduction.
  - Interactive timeframe switcher (`1M`, `6M`, `1Y`, `ALL`) and metric filters (`Accuracy`, `Loss`, `All`).
- **Domain Asset Allocation Donut Chart**:
  - Visual weighting of core competencies: Machine Learning & Deep Learning (35%), NLP (25%), Data Analytics & SQL (20%), BI & Cloud (20%).
- **Portfolio Holdings (Flagship Projects Table & Modal)**:
  - Financial asset-styled table with ticker symbols (`CC-FRAUD`, `MED-NLP`, `NEURO-AI`, `REST-API`, `MIG-AWS`).
  - Interactive **"Inspect"** button that opens a high-detail modal displaying methodology, metrics breakdown (recall, precision, false positives), and architecture.
- **Enterprise Experience & Credentials**:
  - Cognizant Technological Solutions role summary, key deliverables, and technologies.
  - Education (BNM Institute of Technology) & verified certifications (Cognizant AI, Learnbay, Udemy).
- **Zero Build Step**:
  - Built with clean vanilla HTML5, CSS, and JavaScript using Tailwind CSS CDN and Chart.js. No `npm install` or compilation required!

---

## 🚀 How to Deploy to GitHub Pages

### Method 1: Push via Git Command Line (Recommended)

1. Open your terminal or PowerShell and navigate to this folder:
   ```bash
   cd C:\Users\sayan\.gemini\antigravity\scratch\sayana-portfolio
   ```

2. Initialize git and commit the files:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Investment Dashboard Portfolio for Sayana Chand K"
   ```

3. Create a new repository on [GitHub](https://github.com/new):
   - Name it `sayana-portfolio` (or `sayanachandk.github.io` for a primary portfolio link).
   - Keep it **Public**.

4. Link the remote and push:
   ```bash
   git branch -M main
   git remote add origin https://github.com/schand-k/cv.git
   git push -u origin main
   ```

5. **Enable GitHub Pages**:
   - Go to your repository on GitHub: `https://github.com/schand-k/cv`
   - Click **Settings** > **Pages** (in the left sidebar).
   - Under **Build and deployment** > **Source**, select **GitHub Actions** (the included `.github/workflows/deploy.yml` workflow will automatically deploy it) OR choose **Deploy from a branch** > `main` > `/ (root)` and click **Save**.
   - Your live website URL will be:
     ```
     https://schand-k.github.io/cv/
     ```

---

### Method 2: Drag-and-Drop via GitHub Web Interface

1. Create a new repository on [GitHub](https://github.com/new) named `sayana-portfolio`.
2. Click **"uploading an existing file"**.
3. Drag all files and folders from `C:\Users\sayan\.gemini\antigravity\scratch\sayana-portfolio` into GitHub.
4. Commit changes.
5. In **Settings > Pages**, choose `Deploy from branch`, select `main`, and click **Save**.

---

## 🛠️ How to Update Your Information

All your resume information, metrics, and projects are centralized in one single file:
👉 `assets/data/portfolio-data.js`

To add a new project, change a skill level, or update your phone/email:
1. Open `assets/data/portfolio-data.js`.
2. Edit the respective field (e.g. `PORTFOLIO_DATA.projects` or `PORTFOLIO_DATA.kpis`).
3. Save the file. The entire dashboard will update automatically!

---

## 📁 Project Structure

```
sayana-portfolio/
├── index.html                   # Main dashboard layout
├── assets/
│   ├── Sayana_Chand_K_Resume.pdf    # Downloadable Resume PDF
│   ├── css/
│   │   └── style.css            # Custom theme styles & glassmorphic styling
│   ├── js/
│   │   ├── app.js               # Dashboard controller, search, project modal
│   │   └── charts.js            # Chart.js initialization & interactive updates
│   └── data/
│       └── portfolio-data.js    # Central data store for all portfolio items
├── .github/
│   └── workflows/
│       └── deploy.yml           # Automated GitHub Pages CI/CD workflow
└── README.md                    # Documentation & GitHub deployment guide
```

---

## 👤 Contact

- **Name**: Sayana Chand K
- **Role**: Data Scientist
- **Location**: Bengaluru, Karnataka, India
- **Email**: sayanachandk@gmail.com
- **LinkedIn**: [linkedin.com/in/sayana-chand-k-sck](https://linkedin.com/in/sayana-chand-k-sck/)
