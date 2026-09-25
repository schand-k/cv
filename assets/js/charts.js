/**
 * Sayana Chand K - Vision UI Charts Controller
 * Configures interactive Chart.js visualizations mirroring the Vision UI Figma design
 */

let performanceChart = null;
let throughputChart = null;
let currentTimeframe = "1Y";

function initCharts() {
  initSparklines();
  initPerformanceChart();
  initThroughputBarChart();
  initGauges();
}

/**
 * Top KPI Sparkline Mini Charts
 */
function initSparklines() {
  PORTFOLIO_DATA.kpis.forEach(kpi => {
    const canvas = document.getElementById(`sparkline-${kpi.id}`);
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const color = kpi.badgeType === 'positive' ? '#01b574' : 
                  kpi.badgeType === 'cyan' ? '#0075ff' : 
                  kpi.badgeType === 'purple' ? '#7551ff' : '#ffb547';

    new Chart(ctx, {
      type: 'line',
      data: {
        labels: kpi.chartSparkline.map((_, i) => i),
        datasets: [{
          data: kpi.chartSparkline,
          borderColor: color,
          borderWidth: 2.2,
          pointRadius: 0,
          tension: 0.45,
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
 * Model Performance Overview Area Chart (Vision UI signature smooth curves)
 */
function initPerformanceChart() {
  const canvas = document.getElementById('performanceChartCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  // Vision UI Gradients
  const gradientBlue = ctx.createLinearGradient(0, 0, 0, 300);
  gradientBlue.addColorStop(0, 'rgba(0, 117, 255, 0.45)');
  gradientBlue.addColorStop(1, 'rgba(0, 117, 255, 0.0)');

  const gradientTeal = ctx.createLinearGradient(0, 0, 0, 300);
  gradientTeal.addColorStop(0, 'rgba(1, 181, 116, 0.35)');
  gradientTeal.addColorStop(1, 'rgba(1, 181, 116, 0.0)');

  const tfData = PORTFOLIO_DATA.chartData.timeframes[currentTimeframe] || PORTFOLIO_DATA.chartData.timeframes["1Y"];

  if (performanceChart) {
    performanceChart.destroy();
  }

  performanceChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: tfData.labels,
      datasets: [
        {
          label: 'Model Accuracy (%)',
          data: tfData.accuracy,
          borderColor: '#0075ff',
          backgroundColor: gradientBlue,
          borderWidth: 3,
          fill: true,
          tension: 0.42,
          pointBackgroundColor: '#0075ff',
          pointBorderColor: '#060b26',
          pointBorderWidth: 2,
          pointRadius: 4,
          pointHoverRadius: 7,
          pointHoverBackgroundColor: '#ffffff',
          pointHoverBorderColor: '#0075ff'
        },
        {
          label: 'Recall Rate (%)',
          data: tfData.recall,
          borderColor: '#01b574',
          backgroundColor: gradientTeal,
          borderWidth: 2.5,
          fill: true,
          tension: 0.42,
          pointBackgroundColor: '#01b574',
          pointBorderColor: '#060b26',
          pointBorderWidth: 2,
          pointRadius: 4,
          pointHoverRadius: 6,
          pointHoverBackgroundColor: '#ffffff',
          pointHoverBorderColor: '#01b574'
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: {
        intersect: false,
        mode: 'index'
      },
      plugins: {
        legend: {
          display: true,
          position: 'top',
          align: 'end',
          labels: {
            boxWidth: 10,
            boxHeight: 10,
            usePointStyle: true,
            pointStyle: 'circle',
            color: '#a0aec0',
            font: { family: "'Plus Jakarta Sans', sans-serif", size: 12, weight: 600 }
          }
        },
        tooltip: {
          backgroundColor: 'rgba(6, 11, 38, 0.95)',
          titleColor: '#ffffff',
          bodyColor: '#a0aec0',
          borderColor: 'rgba(255, 255, 255, 0.12)',
          borderWidth: 1,
          padding: 12,
          cornerRadius: 12,
          displayColors: true,
          boxPadding: 4,
          callbacks: {
            label: function(context) {
              return ` ${context.dataset.label}: ${context.parsed.y}%`;
            }
          }
        }
      },
      scales: {
        x: {
          grid: {
            color: 'rgba(255, 255, 255, 0.04)',
            drawBorder: false
          },
          ticks: {
            color: '#718096',
            font: { family: "'Plus Jakarta Sans', sans-serif", size: 11, weight: 500 }
          }
        },
        y: {
          min: 65,
          max: 100,
          grid: {
            color: 'rgba(255, 255, 255, 0.05)',
            drawBorder: false
          },
          ticks: {
            color: '#718096',
            stepSize: 10,
            callback: value => `${value}%`,
            font: { family: "'JetBrains Mono', monospace", size: 11 }
          }
        }
      }
    }
  });
}

/**
 * Active Throughput Bar Chart (Vision UI white pill bars)
 */
function initThroughputBarChart() {
  const canvas = document.getElementById('throughputChartCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  if (throughputChart) {
    throughputChart.destroy();
  }

  // Monthly inference volume in thousands of records
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const volumeData = [180, 240, 195, 320, 280, 410, 360, 480, 430, 510, 490, 540];

  throughputChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: months,
      datasets: [{
        label: 'Inference Velocity (k records/mo)',
        data: volumeData,
        backgroundColor: '#ffffff',
        hoverBackgroundColor: '#0075ff',
        borderRadius: 8,
        borderSkipped: false,
        barPercentage: 0.45,
        categoryPercentage: 0.8
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: 'rgba(6, 11, 38, 0.95)',
          titleColor: '#ffffff',
          bodyColor: '#a0aec0',
          borderColor: 'rgba(255, 255, 255, 0.12)',
          borderWidth: 1,
          padding: 10,
          cornerRadius: 10,
          callbacks: {
            label: function(context) {
              return ` Throughput: ${context.parsed.y}k records`;
            }
          }
        }
      },
      scales: {
        x: {
          grid: { display: false },
          ticks: {
            color: '#718096',
            font: { family: "'Plus Jakarta Sans', sans-serif", size: 10 }
          }
        },
        y: {
          grid: {
            color: 'rgba(255, 255, 255, 0.04)',
            drawBorder: false
          },
          ticks: {
            color: '#718096',
            stepSize: 150,
            font: { family: "'JetBrains Mono', monospace", size: 10 }
          }
        }
      }
    }
  });
}

/**
 * Animated Radial Gauges for Satisfaction and Reliability
 */
function initGauges() {
  // Animate SVG Gauges when in viewport or after brief timeout
  setTimeout(() => {
    // Satisfaction circle: circumference 2 * PI * r (r=68 => ~427)
    // 95% => offset = 427 * (1 - 0.95) = ~21.35
    const satisfactionCircle = document.getElementById('satisfactionGaugeCircle');
    if (satisfactionCircle) {
      const radius = satisfactionCircle.r.baseVal.value || 68;
      const circumference = 2 * Math.PI * radius;
      satisfactionCircle.style.strokeDasharray = `${circumference}`;
      satisfactionCircle.style.strokeDashoffset = `${circumference * (1 - 0.95)}`;
    }

    // Reliability semi-circle / arc
    const reliabilityCircle = document.getElementById('reliabilityGaugeCircle');
    if (reliabilityCircle) {
      const radius = reliabilityCircle.r.baseVal.value || 68;
      const circumference = 2 * Math.PI * radius;
      // 93% or 98%
      reliabilityCircle.style.strokeDasharray = `${circumference}`;
      reliabilityCircle.style.strokeDashoffset = `${circumference * (1 - 0.93)}`;
    }
  }, 200);
}

/**
 * Switch Chart Timeframe
 */
function setTimeframe(tf) {
  currentTimeframe = tf;
  document.querySelectorAll('.timeframe-btn').forEach(btn => {
    if (btn.dataset.tf === tf) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
  initPerformanceChart();
}
