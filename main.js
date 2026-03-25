/* ═══════════════════════════════════════════════════════
   SEMA DATA — main.js
   Kenyan Political Fact-Checking Platform
   https://tobz555.github.io/bug-free-doodle/
═══════════════════════════════════════════════════════ */

/* ── 1. SCROLL PROGRESS BAR ── */
window.addEventListener('scroll', () => {
  const d   = document.documentElement;
  const pct = (d.scrollTop / (d.scrollHeight - d.clientHeight)) * 100;
  document.getElementById('prog').style.width = pct + '%';
});

/* ── 2. DARK MODE TOGGLE ── */
document.getElementById('darkbtn').addEventListener('click', () => {
  const html  = document.documentElement;
  const isDark = html.getAttribute('data-theme') === 'dark';
  html.setAttribute('data-theme', isDark ? 'light' : 'dark');
  document.getElementById('darkbtn').textContent = isDark ? '☽' : '☀';
});

/* ── 3. HAMBURGER / MOBILE MENU ── */
const burger = document.getElementById('burger');
const mmenu  = document.getElementById('mmenu');
burger.addEventListener('click', () => {
  burger.classList.toggle('open');
  mmenu.classList.toggle('open');
});
// Close on nav link tap
mmenu.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    burger.classList.remove('open');
    mmenu.classList.remove('open');
  });
});

/* ── 4. SCROLL REVEAL ── */
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('in'), i * 70);
      revealObs.unobserve(e.target);
    }
  });
}, { threshold: 0.07 });

document.querySelectorAll('.rv').forEach(el => revealObs.observe(el));

/* ── 5. HERO COUNTERS ── */
function animateCounter(el, target, suffix = '', duration = 1800) {
  let current  = 0;
  const step   = target / (duration / 16);
  const timer  = setInterval(() => {
    current = Math.min(current + step, target);
    el.textContent = Math.round(current) + suffix;
    if (current >= target) clearInterval(timer);
  }, 16);
}

const heroObs = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    animateCounter(document.getElementById('c1'), 284);
    animateCounter(document.getElementById('c2'), 67, '%');
    animateCounter(document.getElementById('c3'), 48);
    heroObs.disconnect();
  }
}, { threshold: 0.2 });
heroObs.observe(document.getElementById('hero'));

/* ── 6. POLITICIAN METER ANIMATION ── */
const polObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll('.pol-fill').forEach(f => {
        f.style.width = f.dataset.w + '%';
      });
      polObs.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.pol-grid').forEach(g => {
  g.querySelectorAll('.pol-fill').forEach(f => (f.style.width = '0'));
  polObs.observe(g);
});

/* ── 7. FILTER CHIPS ── */
document.querySelectorAll('.chip').forEach(chip => {
  chip.addEventListener('click', () => {
    document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
    const filter = chip.dataset.f;
    document.querySelectorAll('#fgrid .fc').forEach(card => {
      const cats = card.dataset.c || '';
      card.style.display = (filter === 'all' || cats.includes(filter)) ? '' : 'none';
    });
  });
});

/* ── 8. LIVE SEARCH ── */
const SEARCH_DATA = [
  { t: 'Housing units: 50,000 or 6,200?',            v: 'misleading' },
  { t: 'GDP growth: Kenya 11th, not 1st',             v: 'false'      },
  { t: 'NHIF coverage — 4.7M confirmed',              v: 'true'       },
  { t: 'Crime drop — no supporting data',             v: 'missing'    },
  { t: 'CBC internet access: 41%, not 100%',          v: 'misleading' },
  { t: 'Voter registration: 22.1M not 25M',           v: 'false'      },
  { t: 'National debt by county breakdown',           v: null         },
  { t: 'Youth unemployment explainer',                v: null         },
  { t: 'What is the EACC?',                           v: null         },
  { t: 'MP attendance tracker Q1 2026',               v: null         },
];

const srchInput = document.getElementById('srch');
const sdrop     = document.getElementById('sdrop');

srchInput.addEventListener('input', () => {
  const q = srchInput.value.toLowerCase().trim();
  if (!q) { sdrop.classList.remove('show'); return; }
  const hits = SEARCH_DATA.filter(d => d.t.toLowerCase().includes(q)).slice(0, 5);
  if (!hits.length) { sdrop.classList.remove('show'); return; }
  sdrop.innerHTML = hits.map(h => `
    <a href="#" class="sd-item">
      ${h.v ? `<span class="sd-badge sd-${h.v}">${h.v}</span>` : ''}
      ${h.t}
    </a>
  `).join('');
  sdrop.classList.add('show');
});

document.addEventListener('click', e => {
  if (!e.target.closest('.nav-search-wrap')) sdrop.classList.remove('show');
});

/* ── 9. SUBMIT FORM ── */
const submitForm = document.getElementById('submit-form');
if (submitForm) {
  submitForm.addEventListener('submit', e => {
    e.preventDefault();
    document.getElementById('sub-ok').style.display = 'block';
    submitForm.querySelectorAll('input, textarea').forEach(i => (i.value = ''));
  });
}

/* ── 10. NEWSLETTER POPUP ── */
setTimeout(() => {
  document.getElementById('nlpop').classList.add('show');
}, 9000);
document.getElementById('nlclose').addEventListener('click', () => {
  document.getElementById('nlpop').classList.remove('show');
});

/* ── 11. CHART.JS ── */
// Only run if Chart is available (loaded via CDN in index.html)
document.addEventListener('DOMContentLoaded', () => {
  if (typeof Chart === 'undefined') return;

  // Bar chart — unemployment by age group
  const barCtx = document.getElementById('bchart');
  if (barCtx) {
    new Chart(barCtx.getContext('2d'), {
      type: 'bar',
      data: {
        labels: ['15–24', '25–34', '35–44', '45–54', '55+'],
        datasets: [{
          label: 'Unemployment %',
          data: [35.2, 22.8, 14.1, 9.6, 6.2],
          backgroundColor: ['#c8102e', '#d4a72c', '#006b3f', '#006b3f', '#006b3f'],
          borderRadius: 2,
          borderSkipped: false,
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: { callbacks: { label: ctx => ` ${ctx.parsed.y}%` } }
        },
        scales: {
          x: {
            grid: { color: 'rgba(128,128,128,0.08)' },
            ticks: { color: '#888', font: { family: "'Fira Code'" } }
          },
          y: {
            grid: { color: 'rgba(128,128,128,0.08)' },
            ticks: { color: '#888', font: { family: "'Fira Code'" }, callback: v => v + '%' },
            max: 45
          }
        }
      }
    });
  }

  // Donut chart — verdict breakdown
  const donutCtx = document.getElementById('dchart');
  if (donutCtx) {
    new Chart(donutCtx.getContext('2d'), {
      type: 'doughnut',
      data: {
        labels: ['False', 'Misleading', 'Missing Evidence', 'True'],
        datasets: [{
          data: [42, 28, 15, 15],
          backgroundColor: ['#c8102e', '#d4a72c', '#555555', '#006b3f'],
          borderWidth: 0,
          hoverOffset: 5
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: { callbacks: { label: ctx => ` ${ctx.label}: ${ctx.parsed}%` } }
        },
        cutout: '68%'
      }
    });
  }
});
