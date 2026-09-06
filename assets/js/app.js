/**
 * Sayana Chand K - Investment Portfolio Dashboard Application Logic
 */

document.addEventListener("DOMContentLoaded", () => {
  renderProfileInfo();
  renderKpis();
  renderHoldingsTable();
  renderExperience();
  renderSkillsMatrix();
  renderEducationAndCerts();
  initEventListeners();
  initCharts();
  lucide.createIcons();
});

/**
 * Populate Profile and Hero Information
 */
function renderProfileInfo() {
  const p = PORTFOLIO_DATA.profile;
  
  // Set text in sidebar and headers
  setTextContent('userName', p.name);
  setTextContent('userRole', p.title);
  setTextContent('userLocation', p.location);
  setTextContent('heroSummary', p.summary);
  setTextContent('statusBadgeText', p.statusText);

  // Contact links
  const emailLink = document.getElementById('userEmailLink');
  if (emailLink) {
    emailLink.href = `mailto:${p.email}`;
    emailLink.innerText = p.email;
  }

  const resumeLinks = document.querySelectorAll('.userResumeLink');
  resumeLinks.forEach(link => {
    link.href = p.resumeUrl || './assets/Sayana_Chand_K_Resume.pdf';
  });

  const linkedinLink = document.getElementById('userLinkedinLink');
  if (linkedinLink) {
    linkedinLink.href = p.linkedin;
  }
}

/**
 * Render Top KPI Cards
 */
function renderKpis() {
  const container = document.getElementById('kpiCardsContainer');
  if (!container) return;

  container.innerHTML = PORTFOLIO_DATA.kpis.map(kpi => {
    const badgeClass = kpi.badgeType === 'positive' ? 'badge-gain' :
                       kpi.badgeType === 'cyan' ? 'badge-cyan' :
                       kpi.badgeType === 'purple' ? 'badge-purple' : 'badge-amber';
    
    return `
      <div class="dash-card p-5 relative overflow-hidden group">
        <div class="flex items-center justify-between mb-3">
          <div class="flex items-center gap-2">
            <span class="ticker-tag">${kpi.ticker}</span>
            <span class="text-xs text-slate-400 font-medium">${kpi.title}</span>
          </div>
          <span class="${badgeClass}">
            ${kpi.badgeType === 'positive' ? '<i data-lucide="trending-up" class="w-3 h-3"></i>' : ''}
            ${kpi.badge}
          </span>
        </div>
        
        <div class="flex items-baseline justify-between">
          <div>
            <div class="text-3xl font-bold font-mono-nums text-white tracking-tight">${kpi.value}</div>
            <div class="text-xs text-slate-400 mt-1">${kpi.subtext}</div>
          </div>
          <div class="w-24 h-10">
            <canvas id="sparkline-${kpi.id}"></canvas>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

/**
 * Render Holdings / Flagship Projects Table
 */
function renderHoldingsTable(filterQuery = "") {
  const tbody = document.getElementById('holdingsTableBody');
  if (!tbody) return;

  let projects = PORTFOLIO_DATA.projects;
  if (filterQuery.trim() !== "") {
    const q = filterQuery.toLowerCase();
    projects = projects.filter(p => 
      p.title.toLowerCase().includes(q) ||
      p.ticker.toLowerCase().includes(q) ||
      p.tags.some(t => t.toLowerCase().includes(q)) ||
      p.summary.toLowerCase().includes(q)
    );
  }

  if (projects.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="6" class="text-center py-8 text-slate-400">
          No projects matching "<span class="text-white">${filterQuery}</span>"
        </td>
      </tr>
    `;
    return;
  }

  tbody.innerHTML = projects.map(proj => {
    const isFraud = proj.id === 'cc-fraud-detection';
    const primaryMetric = proj.metrics.accuracy || proj.metrics.latency || proj.metrics.dataLoss || "Active";
    const volumeMetric = proj.metrics.volume || proj.metrics.throughput || proj.metrics.storage || "High";

    return `
      <tr onclick="openProjectModal('${proj.id}')" class="group">
        <td>
          <div class="flex items-center gap-3">
            <div class="w-9 h-9 rounded-xl bg-slate-800/80 border border-white/10 flex items-center justify-center font-mono font-bold text-xs ${proj.color === 'emerald' ? 'text-emerald-400' : proj.color === 'cyan' ? 'text-cyan-400' : 'text-purple-400'}">
              ${proj.ticker.substring(0, 3)}
            </div>
            <div>
              <div class="font-semibold text-white group-hover:text-emerald-400 transition-colors flex items-center gap-2">
                ${proj.title}
                <span class="ticker-tag text-[10px] py-0.5 px-1.5">${proj.ticker}</span>
              </div>
              <div class="text-xs text-slate-400 mt-0.5">${proj.category}</div>
            </div>
          </div>
        </td>
        <td>
          <span class="font-mono-nums font-semibold text-white text-base">${primaryMetric}</span>
          <div class="text-[11px] text-slate-400">${proj.badge}</div>
        </td>
        <td class="font-mono-nums text-slate-300">
          ${volumeMetric}
        </td>
        <td>
          <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            ${proj.status}
          </span>
        </td>
        <td>
          <div class="flex flex-wrap gap-1 max-w-[200px]">
            ${proj.tags.slice(0, 3).map(tag => `
              <span class="text-[10px] bg-slate-800/70 border border-white/5 text-slate-300 px-2 py-0.5 rounded">
                ${tag}
              </span>
            `).join('')}
            ${proj.tags.length > 3 ? `<span class="text-[10px] text-slate-400 self-center">+${proj.tags.length - 3}</span>` : ''}
          </div>
        </td>
        <td class="text-right">
          <button class="btn-secondary text-xs py-1.5 px-3 group-hover:border-emerald-500/50 group-hover:text-emerald-300">
            <span>Inspect</span>
            <i data-lucide="arrow-up-right" class="w-3.5 h-3.5"></i>
          </button>
        </td>
      </tr>
    `;
  }).join('');

  lucide.createIcons();
}

/**
 * Render Experience Timeline
 */
function renderExperience() {
  const container = document.getElementById('experienceContainer');
  if (!container) return;

  container.innerHTML = PORTFOLIO_DATA.experience.map(exp => `
    <div class="dash-card p-6 md:p-8">
      <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div class="flex items-start gap-4">
          <div class="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-800 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-500/20">
            CTS
          </div>
          <div>
            <h3 class="text-xl font-bold text-white">${exp.role}</h3>
            <div class="text-slate-300 text-sm font-medium flex items-center gap-2 mt-0.5">
              <span>${exp.company}</span>
              <span class="text-slate-500">•</span>
              <span class="text-slate-400">${exp.location}</span>
            </div>
          </div>
        </div>
        
        <div class="flex flex-wrap items-center gap-2.5">
          <span class="badge-cyan py-1 px-3">
            <i data-lucide="calendar" class="w-3.5 h-3.5 inline mr-1"></i>
            ${exp.period}
          </span>
          <span class="badge-gain py-1 px-3">
            <i data-lucide="check-circle" class="w-3.5 h-3.5 inline mr-1"></i>
            ${exp.type}
          </span>
        </div>
      </div>

      <p class="text-slate-300 text-sm mt-5 leading-relaxed">
        ${exp.description}
      </p>

      <div class="mt-6">
        <h4 class="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
          <i data-lucide="award" class="w-4 h-4 text-emerald-400"></i>
          Key Deliverables & Business Impact
        </h4>
        <ul class="space-y-3">
          ${exp.achievements.map(ach => `
            <li class="flex items-start gap-3 text-sm text-slate-300">
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0 shadow-sm shadow-emerald-400"></span>
              <span>${ach}</span>
            </li>
          `).join('')}
        </ul>
      </div>

      <div class="mt-6 pt-5 border-t border-white/5 flex flex-wrap items-center gap-2">
        <span class="text-xs text-slate-400 mr-2 font-medium">Core Tech:</span>
        ${exp.skills.map(skill => `
          <span class="text-xs font-mono bg-slate-800/80 border border-white/10 text-slate-200 px-2.5 py-1 rounded-md">
            ${skill}
          </span>
        `).join('')}
      </div>
    </div>
  `).join('');
}

/**
 * Render Skills Matrix
 */
function renderSkillsMatrix(filterQuery = "") {
  const container = document.getElementById('skillsMatrixContainer');
  if (!container) return;

  const categories = PORTFOLIO_DATA.skillCategories;

  container.innerHTML = categories.map(cat => {
    let filteredSkills = cat.skills;
    if (filterQuery.trim() !== "") {
      filteredSkills = filteredSkills.filter(s => s.name.toLowerCase().includes(filterQuery.toLowerCase()));
    }

    if (filteredSkills.length === 0 && filterQuery.trim() !== "") return "";

    return `
      <div class="dash-card p-6">
        <div class="flex items-center justify-between pb-4 border-b border-white/5 mb-5">
          <div class="flex items-center gap-3">
            <span class="w-3 h-3 rounded-full" style="background-color: ${cat.color}"></span>
            <h3 class="font-bold text-base text-white">${cat.name}</h3>
          </div>
          <span class="text-xs font-mono-nums font-semibold px-2 py-0.5 rounded bg-white/5 text-slate-300">
            ${cat.share}% Portfolio
          </span>
        </div>

        <div class="space-y-4">
          ${filteredSkills.map(skill => `
            <div>
              <div class="flex justify-between text-xs mb-1.5">
                <span class="text-slate-200 font-medium">${skill.name}</span>
                <span class="font-mono-nums text-slate-400">${skill.level}%</span>
              </div>
              <div class="skill-bar-track">
                <div class="skill-bar-fill" style="width: ${skill.level}%; background-color: ${cat.color}"></div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }).join('');
}

/**
 * Render Education & Certifications
 */
function renderEducationAndCerts() {
  // Education
  const eduContainer = document.getElementById('educationContainer');
  if (eduContainer) {
    eduContainer.innerHTML = PORTFOLIO_DATA.education.map(edu => `
      <div class="dash-card p-5 hover:border-white/20 transition-all">
        <div class="flex items-start justify-between gap-3 mb-2">
          <div>
            <h4 class="font-bold text-white text-base">${edu.institution}</h4>
            <div class="text-emerald-400 text-xs font-semibold mt-0.5">${edu.degree}</div>
          </div>
          <span class="badge-gain text-[10px]">${edu.period}</span>
        </div>
        <div class="text-xs text-slate-400 mb-2">${edu.field} • ${edu.location}</div>
        <p class="text-xs text-slate-300 leading-relaxed">${edu.highlights}</p>
      </div>
    `).join('');
  }

  // Certifications
  const certContainer = document.getElementById('certificationsContainer');
  if (certContainer) {
    certContainer.innerHTML = PORTFOLIO_DATA.certifications.map(cert => `
      <div class="dash-card p-5 hover:border-emerald-500/30 transition-all">
        <div class="flex items-start justify-between gap-3 mb-2">
          <div class="flex items-center gap-2.5">
            <div class="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <i data-lucide="shield-check" class="w-4 h-4"></i>
            </div>
            <div>
              <h4 class="font-bold text-white text-sm leading-tight">${cert.title}</h4>
              <span class="text-xs text-slate-400">${cert.issuer}</span>
            </div>
          </div>
          <span class="ticker-tag text-[10px]">${cert.badge}</span>
        </div>
        <div class="flex flex-wrap gap-1 mt-3">
          ${cert.skills.map(s => `
            <span class="text-[10px] bg-slate-800/80 border border-white/5 text-slate-300 px-2 py-0.5 rounded">
              ${s}
            </span>
          `).join('')}
        </div>
      </div>
    `).join('');
  }
}

/**
 * Open Project Details Modal
 */
function openProjectModal(projectId) {
  const proj = PORTFOLIO_DATA.projects.find(p => p.id === projectId);
  if (!proj) return;

  const modalOverlay = document.getElementById('projectModalOverlay');
  const modalContent = document.getElementById('modalDetailsContent');
  if (!modalOverlay || !modalContent) return;

  modalContent.innerHTML = `
    <div class="p-6 md:p-8">
      <!-- Header -->
      <div class="flex items-start justify-between gap-4 pb-6 border-b border-white/10">
        <div>
          <div class="flex items-center gap-2 mb-2">
            <span class="ticker-tag">${proj.ticker}</span>
            <span class="badge-gain">${proj.status}</span>
            <span class="text-xs text-slate-400">${proj.category}</span>
          </div>
          <h2 class="text-2xl font-bold text-white tracking-tight">${proj.title}</h2>
          <p class="text-sm text-slate-300 mt-2">${proj.summary}</p>
        </div>
        <button onclick="closeProjectModal()" class="text-slate-400 hover:text-white p-2 rounded-lg hover:bg-white/5">
          <i data-lucide="x" class="w-6 h-6"></i>
        </button>
      </div>

      <!-- KPI Metrics Grid -->
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
        ${proj.metricsBreakdown.map(m => `
          <div class="bg-slate-900/80 border border-white/5 rounded-xl p-3.5 text-center">
            <div class="text-xs text-slate-400 font-medium">${m.label}</div>
            <div class="text-xl font-bold font-mono-nums text-white mt-1">${m.value}</div>
          </div>
        `).join('')}
      </div>

      <!-- Deep Dive Implementation Breakdown -->
      <div class="space-y-6">
        <div>
          <h3 class="text-sm font-semibold uppercase tracking-wider text-slate-300 mb-3 flex items-center gap-2">
            <i data-lucide="cpu" class="w-4 h-4 text-emerald-400"></i>
            Architectural Highlights & Methodology
          </h3>
          <ul class="space-y-2.5">
            ${proj.details.map(det => `
              <li class="flex items-start gap-3 text-sm text-slate-300">
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
                <span>${det}</span>
              </li>
            `).join('')}
          </ul>
        </div>

        <!-- Tech Stack Pills -->
        <div class="pt-4 border-t border-white/10">
          <h4 class="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Technologies Used</h4>
          <div class="flex flex-wrap gap-2">
            ${proj.tags.map(tag => `
              <span class="text-xs font-mono bg-slate-800 border border-white/10 text-emerald-300 px-3 py-1 rounded-md">
                ${tag}
              </span>
            `).join('')}
          </div>
        </div>
      </div>

      <!-- Footer CTA -->
      <div class="mt-8 pt-5 border-t border-white/10 flex items-center justify-between">
        <span class="text-xs text-slate-400">Verified Machine Learning Project Asset</span>
        <div class="flex gap-3">
          <button onclick="closeProjectModal()" class="btn-secondary text-xs">Close</button>
          <a href="mailto:${PORTFOLIO_DATA.profile.email}?subject=Inquiry regarding ${encodeURIComponent(proj.title)}" class="btn-primary text-xs">
            Discuss Implementation
          </a>
        </div>
      </div>
    </div>
  `;

  modalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
  lucide.createIcons();
}

function closeProjectModal() {
  const modalOverlay = document.getElementById('projectModalOverlay');
  if (modalOverlay) {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }
}

/**
 * Event Listeners & Interactive Filters
 */
function initEventListeners() {
  // Modal backdrop click
  const modalOverlay = document.getElementById('projectModalOverlay');
  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeProjectModal();
    });
  }

  // Escape key closes modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeProjectModal();
  });

  // Global Search input
  const searchInput = document.getElementById('globalSearchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const q = e.target.value;
      renderHoldingsTable(q);
      renderSkillsMatrix(q);
    });
  }

  // Timeframe selector buttons (1M, 6M, 1Y, ALL)
  document.querySelectorAll('.timeframe-pill').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.timeframe-pill').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const tf = btn.getAttribute('data-timeframe');
      updatePerformanceTimeframe(tf);
    });
  });

  // Metric selector buttons (Accuracy, Recall, Loss, All)
  document.querySelectorAll('.metric-filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.metric-filter-btn').forEach(b => {
        b.classList.remove('bg-white/10', 'text-white');
        b.classList.add('text-slate-400');
      });
      btn.classList.add('bg-white/10', 'text-white');
      btn.classList.remove('text-slate-400');
      const metric = btn.getAttribute('data-metric');
      updateChartMetricFilter(metric);
    });
  });

  // Mobile sidebar toggle
  const menuBtn = document.getElementById('mobileMenuToggle');
  const sidebar = document.getElementById('appSidebar');
  const closeSidebarBtn = document.getElementById('closeSidebarBtn');

  if (menuBtn && sidebar) {
    menuBtn.addEventListener('click', () => {
      sidebar.classList.toggle('open');
    });
  }

  if (closeSidebarBtn && sidebar) {
    closeSidebarBtn.addEventListener('click', () => {
      sidebar.classList.remove('open');
    });
  }

  // Close mobile sidebar on nav click
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      if (sidebar) sidebar.classList.remove('open');
    });
  });

  // Scrollspy for active nav link
  window.addEventListener('scroll', handleScrollSpy);
}

function handleScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const scrollY = window.pageYOffset;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 120;
    const sectionId = current.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
          link.classList.add('active');
        }
      });
    }
  });
}

function setTextContent(elementId, text) {
  const el = document.getElementById(elementId);
  if (el) el.innerText = text;
}
