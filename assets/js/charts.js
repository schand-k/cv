/**
 * Sayana Chand K - Investment Portfolio Dashboard Charts
 * Configures interactive Chart.js visualizations with fintech dark aesthetic.
 */

let performanceChart = null;
let allocationChart = null;
let currentMetric = "accuracy"; // 'accuracy' | 'recall' | 'loss'
let currentTimeframe = "1Y";    // '1M' | '6M' | '1Y' | 'ALL'

function initCharts() {
  initSparklines();
  initPerformanceChart();
  initAllocationChart();
}

/**
 * KPI Card Sparklines
 */
function initSparklines() {
  PORTFOLIO_DATA.kpis.forEach((kpi, idx) => {
    const canvas = document.getElementById(`sparkline-${kpi.id}`);
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const color = kpi.badgeType === 'positive' ? '#10b981' : 
                  kpi.badgeType === 'cyan' ? '#06b6d4' : 
                  kpi.badgeType === 'purple' ? '#8b5cf6' : '#f59e0b';

    new Chart(ctx, {
      type: 'line',
      data: {
        labels: kpi.chartSparkline.map((_, i) => i),
        datasets: [{
          data: kpi.chartSparkline,
          borderColor: color,
          borderWidth: 2,
          pointRadius: 0,
          tension: 0.4,
          fill: false
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false }, tooltip: { enabled: false } },
        scales: {
          x: { display: false },
          y: { display: false }
        }
      }
    });
  });
}

/**
 * Main Performance / Accuracy Yield Area Chart
 */
function initPerformanceChart() {
  const canvas = document.getElementById('performanceChartCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  // Create gradient
  const gradientGreen = ctx.createLinearGradient(0, 0, 0, 320);
  gradientGreen.addColorStop(0, 'rgba(16, 185, 129, 0.35)');
  gradientGreen.addColorStop(1, 'rgba(16, 185, 129, 0.0)');

  const gradientCyan = ctx.createLinearGradient(0, 0, 0, 320);
  gradientCyan.addColorStop(0, 'rgba(6, 182, 212, 0.25)');
  gradientCyan.addColorStop(1, 'rgba(6, 182, 212, 0.0)');

  const tfData = PORTFOLIO_DATA.chartData.timeframes[currentTimeframe];

  performanceChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: tfData.labels,
      datasets: [
        {
          label: 'Model Accuracy (%)',
          data: tfData.accuracy,
          borderColor: '#10b981',
          backgroundColor: gradientGreen,
          borderWidth: 2.5,
          fill: true,
          tension: 0.4,
          pointBackgroundColor: '#10b981',
          pointBorderColor: '#080b11',
          pointBorderWidth: 2,
          pointRadius: 4,
          pointHoverRadius: 6,
          hidden: currentMetric === 'loss'
        },
        {
          label: 'Recall Rate (%)',
          data: tfData.recall,
          borderColor: '#06b6d4',
          backgroundColor: gradientCyan,
          borderWidth: 2,
          borderDash: [4, 4],
          fill: false,
          tension: 0.4,
          pointBackgroundColor: '#06b6d4',
          pointBorderColor: '#080b11',
          pointBorderWidth: 2,
          pointRadius: 3,
          pointHoverRadius: 5,
          hidden: currentMetric !== 'accuracy' && currentMetric !== 'recall'
        },
        {
          label: 'Validation Loss',
          data: tfData.loss,
          borderColor: '#f59e0b',
          borderWidth: 2,
          fill: false,
          tension: 0.4,
          yAxisID: 'y1',
          pointBackgroundColor: '#f59e0b',
          pointBorderColor: '#080b11',
          pointRadius: 4,
          hidden: currentMetric !== 'loss'
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: {
        mode: 'index',
        intersect: false
      },
      plugins: {
        legend: {
          display: true,
          position: 'top',
          align: 'end',
          labels: {
            color: '#94a3b8',
            font: { family: "'Plus Jakarta Sans', sans-serif", size: 12 },
            boxWidth: 12,
            boxHeight: 12,
            usePointStyle: true,
            pointStyle: 'circle'
          }
        },
        tooltip: {
          backgroundColor: 'rgba(15, 23, 42, 0.95)',
          titleColor: '#f8fafc',
          bodyColor: '#cbd5e1',
          borderColor: 'rgba(255, 255, 255, 0.1)',
          borderWidth: 1,
          padding: 12,
          cornerRadius: 8,
          boxPadding: 6,
          usePointStyle: true,
          callbacks: {
            label: function(context) {
              let label = context.dataset.label || '';
              if (label) label += ': ';
              if (context.parsed.y !== null) {
                if (context.datasetIndex === 2) {
                  label += context.parsed.y.toFixed(3);
                } else {
                  label += context.parsed.y + '%';
                }
              }
              return label;
            }
          }
        }
      },
      scales: {
        x: {
          grid: { color: 'rgba(255, 255, 255, 0.04)', drawBorder: false },
          ticks: { color: '#64748b', font: { family: "'JetBrains Mono', monospace", size: 11 } }
        },
        y: {
          position: 'left',
          min: 60,
          max: 100,
          grid: { color: 'rgba(255, 255, 255, 0.05)', drawBorder: false },
          ticks: {
            color: '#64748b',
            font: { family: "'JetBrains Mono', monospace", size: 11 },
            callback: (v) => `${v}%`
          }
        },
        y1: {
          position: 'right',
          display: currentMetric === 'loss',
          min: 0,
          max: 1.0,
          grid: { drawOnChartArea: false },
          ticks: {
            color: '#f59e0b',
            font: { family: "'JetBrains Mono', monospace", size: 11 }
          }
        }
      }
    }
  });
}

function updatePerformanceTimeframe(timeframe) {
  currentTimeframe = timeframe;
  const tfData = PORTFOLIO_DATA.chartData.timeframes[timeframe];
  if (!performanceChart || !tfData) return;

  performanceChart.data.labels = tfData.labels;
  performanceChart.data.datasets[0].data = tfData.accuracy;
  performanceChart.data.datasets[1].data = tfData.recall;
  performanceChart.data.datasets[2].data = tfData.loss;
  performanceChart.update();
}

function updateChartMetricFilter(metric) {
  currentMetric = metric;
  if (!performanceChart) return;

  if (metric === 'accuracy') {
    performanceChart.data.datasets[0].hidden = false;
    performanceChart.data.datasets[1].hidden = false;
    performanceChart.data.datasets[2].hidden = true;
    performanceChart.options.scales.y.display = true;
    performanceChart.options.scales.y1.display = false;
  } else if (metric === 'loss') {
    performanceChart.data.datasets[0].hidden = true;
    performanceChart.data.datasets[1].hidden = true;
    performanceChart.data.datasets[2].hidden = false;
    performanceChart.options.scales.y.display = false;
    performanceChart.options.scales.y1.display = true;
  } else if (metric === 'all') {
    performanceChart.data.datasets[0].hidden = false;
    performanceChart.data.datasets[1].hidden = false;
    performanceChart.data.datasets[2].hidden = false;
    performanceChart.options.scales.y.display = true;
    performanceChart.options.scales.y1.display = true;
  }
  performanceChart.update();
}

/**
 * Domain / Skill Asset Allocation Donut Chart
 */
function initAllocationChart() {
  const canvas = document.getElementById('allocationChartCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  const categories = PORTFOLIO_DATA.skillCategories;
  const labels = categories.map(c => c.name);
  const data = categories.map(c => c.share);
  const colors = categories.map(c => c.color);

  allocationChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: labels,
      datasets: [{
        data: data,
        backgroundColor: colors,
        borderColor: '#0b0f19',
        borderWidth: 3,
        hoverOffset: 6
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: '72%',
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          backgroundColor: 'rgba(15, 23, 42, 0.95)',
          titleColor: '#f8fafc',
          bodyColor: '#cbd5e1',
          borderColor: 'rgba(255, 255, 255, 0.1)',
          borderWidth: 1,
          padding: 10,
          cornerRadius: 8,
          callbacks: {
            label: function(context) {
              return ` ${context.label}: ${context.parsed}% Weight`;
            }
          }
        }
      }
    }
  });

  // Render Custom Legend in HTML
  renderAllocationLegend();
}

function renderAllocationLegend() {
  const legendContainer = document.getElementById('allocationLegend');
  if (!legendContainer) return;

  const categories = PORTFOLIO_DATA.skillCategories;
  legendContainer.innerHTML = categories.map(cat => `
    <div class="flex items-center justify-between text-xs py-1.5 border-b border-white/5 last:border-0">
      <div class="flex items-center gap-2">
        <span class="w-2.5 h-2.5 rounded-full" style="background-color: ${cat.color}"></span>
        <span class="text-slate-300 font-medium">${cat.name}</span>
      </div>
      <span class="font-mono-nums font-semibold text-slate-100">${cat.share}%</span>
    </div>
  `).join('');
}
