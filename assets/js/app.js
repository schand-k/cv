/**
 * Sayana Chand K - Vision UI Application Controller
 * Manages UI rendering, responsive mobile drawer, search & filters, and modal dialogues
 */

document.addEventListener("DOMContentLoaded", () => {
  renderProfileInfo();
  renderKpis();
  renderProjectsTable();
  renderExperience();
  renderSkillsMatrix();
  renderEducationAndCerts();
  initEventListeners();
  initCharts();
  initScrollSpy();
  
  if (window.lucide) {
    lucide.createIcons();
  }
});

/**
 * Populate Profile, Brand and Hero Information
 */
function renderProfileInfo() {
  const p = PORTFOLIO_DATA.profile;
  
  setTextContent('heroName', p.name);
  setTextContent('brandName', p.name);
  setTextContent('heroTagline', p.tagline);
  setTextContent('heroSummary', p.summary);
  setTextContent('statusBadgeText', p.statusText);
  setTextContent('userLocationText', p.location);

  const emailLinks = document.querySelectorAll('.userEmailLink');
  emailLinks.forEach(el => {
    el.href = `mailto:${p.email}`;
    if (el.tagName === 'SPAN' || el.classList.contains('email-text')) {
      el.innerText = p.email;
    }
  });

  const resumeLinks = document.querySelectorAll('.userResumeLink');
  resumeLinks.forEach(link => {
    link.href = p.resumeUrl || './assets/Sayana_Chand_K_Resume.pdf';
  });

  const linkedinLinks = document.querySelectorAll('.userLinkedinLink');
  linkedinLinks.forEach(link => {
    link.href = p.linkedin;
  });

  const githubLinks = document.querySelectorAll('.userGithubLink');
  githubLinks.forEach(link => {
    link.href = p.github;
  });
}

/**
 * Render Top 4 Vision UI KPI Cards
 */
function renderKpis() {
  const container = document.getElementById('kpiCardsContainer');
  if (!container) return;

  container.innerHTML = PORTFOLIO_DATA.kpis.map(kpi => {
    const isGain = kpi.badgeType === 'positive';
    return `
      <div class="vision-card p-5 relative overflow-hidden group hover:border-white/20">
        <div class="flex items-center justify-between">
          <div class="space-y-1">
            <span class="text-xs font-semibold text-[#a0aec0] uppercase tracking-wider">${kpi.title}</span>
            <div class="text-2xl font-bold font-mono-nums text-white tracking-tight flex items-baseline gap-2">
              <span>${kpi.value}</span>
              <span class="${isGain ? 'text-[#01b574]' : 'text-[#38bdf8]'} text-xs font-bold font-sans">
                ${kpi.badge}
              </span>
            </div>
            <div class="text-[11px] text-[#718096]">${kpi.subtext}</div>
          </div>
          <div class="vision-icon-box shadow-[0_4px_14px_rgba(0,117,255,0.45)]">
            <i data-lucide="${kpi.icon || 'trending-up'}" class="w-5 h-5"></i>
          </div>
        </div>
        <div class="w-full h-8 mt-2 opacity-60 group-hover:opacity-100 transition-opacity">
          <canvas id="sparkline-${kpi.id}"></canvas>
        </div>
      </div>
    `;
  }).join('');
}

/**
 * Render Flagship Projects Table (Vision UI Table format)
 */
let currentCategoryFilter = "all";
let currentSearchQuery = "";

function renderProjectsTable() {
  const tbody = document.getElementById('projectsTableBody');
  const cardsContainer = document.getElementById('projectsCardsMobile');
  if (!tbody) return;

  let projects = PORTFOLIO_DATA.projects;

  // Category filter
  if (currentCategoryFilter !== "all") {
    projects = projects.filter(p => {
      if (currentCategoryFilter === 'ml') return p.category.toLowerCase().includes('supervised') || p.category.toLowerCase().includes('anomaly');
      if (currentCategoryFilter === 'nlp') return p.category.toLowerCase().includes('nlp') || p.category.toLowerCase().includes('clinical');
      if (currentCategoryFilter === 'mlops') return p.category.toLowerCase().includes('mlops') || p.category.toLowerCase().includes('backend');
      if (currentCategoryFilter === 'cloud') return p.category.toLowerCase().includes('cloud') || p.category.toLowerCase().includes('migration');
      return true;
    });
  }

  // Search filter
  if (currentSearchQuery.trim() !== "") {
    const q = currentSearchQuery.toLowerCase();
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
        <td colspan="5" class="text-center py-10 text-slate-400">
          <i data-lucide="search-x" class="w-8 h-8 mx-auto mb-2 text-slate-500"></i>
          No projects matching your filter criteria.
        </td>
      </tr>
    `;
    if (cardsContainer) {
      cardsContainer.innerHTML = `
        <div class="text-center py-8 text-slate-400">
          No projects matching your filter criteria.
        </div>
      `;
    }
    if (window.lucide) lucide.createIcons();
    return;
  }

  // Desktop Table Rows
  tbody.innerHTML = projects.map(p => {
    const statusClass = p.status.includes('Verified') ? 'badge-pill-verified' :
                        p.status.includes('Precision') ? 'badge-pill-verified' :
                        p.status.includes('Deployed') ? 'badge-pill-deployed' : 'badge-pill-enterprise';

    return `
      <tr class="hover:bg-white/[0.02] transition-colors">
        <td>
          <div class="flex items-center gap-3">
            <div class="w-9 h-9 rounded-xl bg-[#1a1f37] border border-white/10 flex items-center justify-center text-[#0075ff] flex-shrink-0">
              <i data-lucide="${getProjectIcon(p.id)}" class="w-4 h-4"></i>
            </div>
            <div>
              <div class="font-bold text-white text-sm flex items-center gap-2">
                <span>${p.title}</span>
                <span class="text-[10px] font-mono px-1.5 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">${p.ticker}</span>
              </div>
              <div class="text-xs text-[#a0aec0]">${p.category}</div>
            </div>
          </div>
        </td>
        <td>
          <div class="text-xs space-y-0.5">
            <span class="font-mono font-bold text-white">${Object.values(p.metrics)[0]}</span>
            <span class="text-[11px] text-[#718096] block">${Object.keys(p.metrics)[0]}: ${Object.values(p.metrics)[0]}</span>
          </div>
        </td>
        <td>
          <span class="badge-pill-status ${statusClass}">
            <span class="w-1.5 h-1.5 rounded-full bg-current"></span>
            ${p.status}
          </span>
        </td>
        <td>
          <div class="flex flex-wrap gap-1.5 max-w-xs">
            ${p.tags.slice(0, 3).map(tag => `<span class="badge-tag">${tag}</span>`).join('')}
            ${p.tags.length > 3 ? `<span class="text-[10px] text-[#718096] self-center">+${p.tags.length - 3}</span>` : ''}
          </div>
        </td>
        <td class="text-right">
          <button onclick="openProjectModal('${p.id}')" class="btn-vision-secondary text-xs py-1.5 px-3">
            <span>Inspect</span>
            <i data-lucide="chevron-right" class="w-3.5 h-3.5"></i>
          </button>
        </td>
      </tr>
    `;
  }).join('');

  // Mobile Cards (M-web friendly view)
  if (cardsContainer) {
    cardsContainer.innerHTML = projects.map(p => {
      const statusClass = p.status.includes('Verified') ? 'badge-pill-verified' :
                          p.status.includes('Precision') ? 'badge-pill-verified' :
                          p.status.includes('Deployed') ? 'badge-pill-deployed' : 'badge-pill-enterprise';

      return `
        <div class="vision-card p-4 space-y-3">
          <div class="flex items-start justify-between">
            <div class="flex items-center gap-2.5">
              <div class="w-9 h-9 rounded-xl bg-[#1a1f37] border border-white/10 flex items-center justify-center text-[#0075ff]">
                <i data-lucide="${getProjectIcon(p.id)}" class="w-4 h-4"></i>
              </div>
              <div>
                <h4 class="font-bold text-white text-sm">${p.title}</h4>
                <span class="text-[11px] text-[#a0aec0]">${p.category}</span>
              </div>
            </div>
            <span class="badge-pill-status ${statusClass} text-[10px]">
              ${p.status}
            </span>
          </div>
          
          <p class="text-xs text-slate-300 leading-relaxed">${p.summary}</p>
          
          <div class="flex flex-wrap gap-1">
            ${p.tags.slice(0, 4).map(tag => `<span class="badge-tag">${tag}</span>`).join('')}
          </div>
          
          <div class="flex items-center justify-between pt-2 border-t border-white/5">
            <div class="text-xs font-mono font-bold text-white">
              ${Object.values(p.metrics)[0]} <span class="text-[10px] font-normal text-slate-400">(${Object.keys(p.metrics)[0]})</span>
            </div>
            <button onclick="openProjectModal('${p.id}')" class="btn-vision-primary text-xs py-1.5 px-3">
              Inspect Model
            </button>
          </div>
        </div>
      `;
    }).join('');
  }

  if (window.lucide) lucide.createIcons();
}

function getProjectIcon(id) {
  if (id.includes('fraud')) return 'shield-alert';
  if (id.includes('nlp')) return 'file-text';
  if (id.includes('neuro') || id.includes('automation')) return 'workflow';
  if (id.includes('microservices') || id.includes('api')) return 'server';
  if (id.includes('cloud') || id.includes('migration')) return 'cloud-upload';
  return 'cpu';
}

/**
 * Open Project Details Modal
 */
function openProjectModal(id) {
  const p = PORTFOLIO_DATA.projects.find(item => item.id === id);
  if (!p) return;

  const modal = document.getElementById('projectModal');
  const backdrop = document.getElementById('projectModalBackdrop');
  const modalContent = document.getElementById('projectModalContent');
  if (!modal || !modalContent) return;

  modalContent.innerHTML = `
    <div class="p-6 md:p-8 space-y-6">
      <!-- Modal Header -->
      <div class="flex items-start justify-between border-b border-white/10 pb-5">
        <div class="flex items-center gap-3">
          <div class="w-12 h-12 rounded-2xl bg-[#0075ff]/20 border border-[#0075ff]/40 flex items-center justify-center text-[#0075ff]">
            <i data-lucide="${getProjectIcon(p.id)}" class="w-6 h-6"></i>
          </div>
          <div>
            <div class="flex items-center gap-2">
              <span class="text-xs font-mono px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 font-bold">${p.ticker}</span>
              <span class="text-xs text-[#01b574] font-semibold">${p.status}</span>
            </div>
            <h3 class="text-xl font-bold text-white mt-1">${p.title}</h3>
            <p class="text-xs text-[#a0aec0]">${p.category}</p>
          </div>
        </div>
        <button onclick="closeProjectModal()" class="text-slate-400 hover:text-white p-2 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
          <i data-lucide="x" class="w-5 h-5"></i>
        </button>
      </div>

      <!-- Summary -->
      <div class="bg-[#0f1535] rounded-xl p-4 border border-white/5">
        <h4 class="text-xs font-bold text-blue-400 uppercase tracking-wider mb-1">Architecture Summary</h4>
        <p class="text-xs text-slate-200 leading-relaxed">${p.summary}</p>
      </div>

      <!-- Metrics Breakdown -->
      ${p.metricsBreakdown ? `
        <div>
          <h4 class="text-xs font-bold text-[#a0aec0] uppercase tracking-wider mb-3">Diagnostic & Validation Metrics</h4>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
            ${p.metricsBreakdown.map(m => `
              <div class="bg-[#121838] border border-white/5 rounded-xl p-3 text-center">
                <div class="text-[11px] text-slate-400">${m.label}</div>
                <div class="text-lg font-bold font-mono text-white mt-1">${m.value}</div>
              </div>
            `).join('')}
          </div>
        </div>
      ` : ''}

      <!-- Detailed Deliverables -->
      <div>
        <h4 class="text-xs font-bold text-[#a0aec0] uppercase tracking-wider mb-3">Methodology & Implementation Highlights</h4>
        <ul class="space-y-2.5">
          ${p.details.map(bullet => `
            <li class="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
              <span class="w-1.5 h-1.5 rounded-full bg-[#0075ff] mt-1.5 flex-shrink-0"></span>
              <span>${bullet}</span>
            </li>
          `).join('')}
        </ul>
      </div>

      <!-- Tags -->
      <div>
        <h4 class="text-xs font-bold text-[#a0aec0] uppercase tracking-wider mb-2">Technologies & Tooling</h4>
        <div class="flex flex-wrap gap-2">
          ${p.tags.map(tag => `<span class="badge-tag text-xs py-1 px-3">${tag}</span>`).join('')}
        </div>
      </div>
    </div>
  `;

  modal.classList.remove('hidden');
  if (backdrop) backdrop.classList.remove('hidden');
  if (window.lucide) lucide.createIcons();
  document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
  const modal = document.getElementById('projectModal');
  const backdrop = document.getElementById('projectModalBackdrop');
  if (modal) modal.classList.add('hidden');
  if (backdrop) backdrop.classList.add('hidden');
  document.body.style.overflow = '';
}

/**
 * Render Experience Section
 */
function renderExperience() {
  const container = document.getElementById('experienceContainer');
  if (!container) return;

  container.innerHTML = PORTFOLIO_DATA.experience.map(exp => `
    <div class="vision-card p-6 md:p-8 space-y-6">
      <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-5">
        <div class="flex items-center gap-4">
          <div class="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#0075ff] to-[#7551ff] p-[1px]">
            <div class="w-full h-full bg-[#0a0e2a] rounded-[15px] flex items-center justify-center font-bold text-white text-base">
              CTS
            </div>
          </div>
          <div>
            <h3 class="text-lg font-bold text-white">${exp.company}</h3>
            <div class="flex flex-wrap items-center gap-2 text-xs text-[#a0aec0] mt-0.5">
              <span class="text-[#0075ff] font-semibold">${exp.role}</span>
              <span>•</span>
              <span>${exp.type}</span>
              <span>•</span>
              <span class="flex items-center gap-1"><i data-lucide="map-pin" class="w-3 h-3"></i> ${exp.location}</span>
            </div>
          </div>
        </div>
        <div class="self-start md:self-auto">
          <span class="font-mono text-xs px-3 py-1.5 rounded-full bg-[#1a1f37] border border-white/10 text-white font-medium">
            ${exp.period}
          </span>
        </div>
      </div>

      <p class="text-sm text-slate-300 leading-relaxed">
        ${exp.description}
      </p>

      <div>
        <h4 class="text-xs font-bold text-[#a0aec0] uppercase tracking-wider mb-3">Key Quantified Impact & Deliverables</h4>
        <div class="space-y-3">
          ${exp.achievements.map(item => `
            <div class="flex items-start gap-3 text-xs md:text-sm text-slate-200">
              <div class="w-5 h-5 rounded-lg bg-[#0075ff]/15 flex items-center justify-center text-[#0075ff] flex-shrink-0 mt-0.5">
                <i data-lucide="check-circle-2" class="w-3.5 h-3.5"></i>
              </div>
              <span class="leading-relaxed">${item}</span>
            </div>
          `).join('')}
        </div>
      </div>

      <div class="pt-2 border-t border-white/5 flex flex-wrap gap-2 items-center">
        <span class="text-xs text-[#718096] font-medium mr-2">Core Tech:</span>
        ${exp.skills.map(skill => `<span class="badge-tag">${skill}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

/**
 * Render Technical Skills Matrix
 */
function renderSkillsMatrix() {
  const container = document.getElementById('skillsMatrixContainer');
  if (!container) return;

  const colorThemes = ['blue', 'teal', 'purple', 'amber'];

  container.innerHTML = PORTFOLIO_DATA.skillCategories.map((cat, idx) => {
    const theme = colorThemes[idx % colorThemes.length];
    const progressClass = `vision-progress-${theme}`;

    return `
      <div class="vision-card p-6 space-y-4">
        <div class="flex items-center justify-between border-b border-white/10 pb-3">
          <h4 class="font-bold text-white text-sm flex items-center gap-2">
            <span class="w-2.5 h-2.5 rounded-full bg-[${cat.color}]"></span>
            ${cat.name}
          </h4>
          <span class="text-xs font-mono font-bold text-[#a0aec0]">${cat.share}% Focus</span>
        </div>
        <div class="space-y-3.5">
          ${cat.skills.map(s => `
            <div class="space-y-1.5">
              <div class="flex items-center justify-between text-xs">
                <span class="text-slate-300 font-medium">${s.name}</span>
                <span class="font-mono text-slate-400 font-bold">${s.level}%</span>
              </div>
              <div class="vision-progress-track">
                <div class="vision-progress-bar ${progressClass}" style="width: ${s.level}%"></div>
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
  const eduContainer = document.getElementById('educationContainer');
  const certContainer = document.getElementById('certificationsContainer');

  if (eduContainer) {
    eduContainer.innerHTML = PORTFOLIO_DATA.education.map(edu => `
      <div class="vision-card p-5 space-y-2.5">
        <div class="flex items-start justify-between">
          <div>
            <span class="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">${edu.badge}</span>
            <h4 class="font-bold text-white text-sm mt-1.5">${edu.degree}</h4>
            <div class="text-xs text-[#0075ff] font-medium">${edu.institution}</div>
            <div class="text-xs text-slate-400">${edu.field} • ${edu.location}</div>
          </div>
          <span class="text-xs font-mono text-slate-400 whitespace-nowrap">${edu.period}</span>
        </div>
        <p class="text-xs text-slate-300 leading-relaxed pt-1">${edu.highlights}</p>
      </div>
    `).join('');
  }

  if (certContainer) {
    certContainer.innerHTML = PORTFOLIO_DATA.certifications.map(c => `
      <div class="vision-card p-5 space-y-2.5">
        <div class="flex items-start justify-between">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-[#1a1f37] border border-white/10 flex items-center justify-center text-[#0075ff]">
              <i data-lucide="award" class="w-5 h-5"></i>
            </div>
            <div>
              <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold">${c.badge}</span>
              <h4 class="font-bold text-white text-sm mt-1">${c.title}</h4>
              <div class="text-xs text-slate-400">${c.issuer} • ${c.date}</div>
            </div>
          </div>
        </div>
        <div class="flex flex-wrap gap-1.5 pt-1">
          ${c.skills.map(s => `<span class="badge-tag">${s}</span>`).join('')}
        </div>
      </div>
    `).join('');
  }
}

/**
 * Event Listeners & Interaction
 */
function initEventListeners() {
  // Mobile Sidebar Drawer Toggle
  const sidebar = document.getElementById('appSidebar');
  const openBtn = document.getElementById('mobileMenuBtn');
  const closeBtn = document.getElementById('closeSidebarBtn');
  const backdrop = document.getElementById('mobileBackdrop');

  function openSidebar() {
    if (sidebar) sidebar.classList.add('open');
    if (backdrop) backdrop.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeSidebar() {
    if (sidebar) sidebar.classList.remove('open');
    if (backdrop) backdrop.classList.add('hidden');
    document.body.style.overflow = '';
  }

  if (openBtn) openBtn.addEventListener('click', openSidebar);
  if (closeBtn) closeBtn.addEventListener('click', closeSidebar);
  if (backdrop) backdrop.addEventListener('click', closeSidebar);

  // Close sidebar on link click (mobile)
  document.querySelectorAll('.app-sidebar .nav-item').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth < 1024) {
        closeSidebar();
      }
    });
  });

  // Project Category Filters
  document.querySelectorAll('.project-filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.project-filter-btn').forEach(b => b.classList.remove('active'));
      e.currentTarget.classList.add('active');
      currentCategoryFilter = e.currentTarget.dataset.category;
      renderProjectsTable();
    });
  });

  // Project Search Input
  const searchInput = document.getElementById('projectSearchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearchQuery = e.target.value;
      renderProjectsTable();
    });
  }

  // Header Global Search (filters and scrolls to projects)
  const headerSearch = document.getElementById('globalSearchInput');
  if (headerSearch) {
    headerSearch.addEventListener('input', (e) => {
      currentSearchQuery = e.target.value;
      const targetSec = document.getElementById('projects');
      if (targetSec && currentSearchQuery.length > 1) {
        targetSec.scrollIntoView({ behavior: 'smooth' });
      }
      renderProjectsTable();
    });
  }

  // Timeframe buttons for chart
  document.querySelectorAll('.timeframe-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const tf = e.currentTarget.dataset.tf;
      if (typeof setTimeframe === 'function') {
        setTimeframe(tf);
      }
    });
  });

  // Keyboard escape for modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeProjectModal();
      closeSidebar();
    }
  });

  // Contact form submission handler
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('contactName')?.value || '';
      const email = document.getElementById('contactEmail')?.value || '';
      const subject = document.getElementById('contactSubject')?.value || 'Data Scientist Inquiry';
      const message = document.getElementById('contactMessage')?.value || '';

      const body = `Hi Sayana,\n\n${message}\n\nFrom: ${name} (${email})`;
      window.location.href = `mailto:${PORTFOLIO_DATA.profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

      showToast("Opening your email client to send message!");
    });
  }
}

/**
 * Scrollspy to highlight active nav item
 */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id], div[id="overview"]');
  const navItems = document.querySelectorAll('.app-sidebar .nav-item');

  window.addEventListener('scroll', () => {
    let currentId = '';
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 120;
      const sectionId = section.getAttribute('id');

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        currentId = sectionId;
      }
    });

    if (currentId) {
      navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === `#${currentId}`) {
          item.classList.add('active');
        }
      });
    }
  });
}

/**
 * Copy to Clipboard Helper
 */
function copyToClipboard(text, message = "Copied to clipboard!") {
  navigator.clipboard.writeText(text).then(() => {
    showToast(message);
  }).catch(() => {
    showToast(`Value: ${text}`);
  });
}

/**
 * Toast Notification
 */
function showToast(msg) {
  const existing = document.getElementById('visionToast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.id = 'visionToast';
  toast.className = 'fixed bottom-6 right-6 z-50 bg-[#0075ff] text-white text-xs font-semibold px-4 py-2.5 rounded-xl shadow-lg shadow-blue-500/30 flex items-center gap-2 transform transition-all duration-300';
  toast.innerHTML = `<i data-lucide="check" class="w-4 h-4"></i> <span>${msg}</span>`;
  document.body.appendChild(toast);
  if (window.lucide) lucide.createIcons();

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    setTimeout(() => toast.remove(), 300);
  }, 2500);
}

function setTextContent(elementId, text) {
  const el = document.getElementById(elementId);
  if (el) el.innerText = text;
}
