
const tasks = [...document.querySelectorAll('[data-task]')];
const key = 'roboticsParallelSpiralProgressV1';

function load() {
  let saved = {};
  try { saved = JSON.parse(localStorage.getItem(key) || '{}'); } catch {}
  tasks.forEach((el, i) => el.checked = !!saved[i]);
  update();
}
function save() {
  const state = {};
  tasks.forEach((el, i) => state[i] = el.checked);
  localStorage.setItem(key, JSON.stringify(state));
  update();
}
function update() {
  const done = tasks.filter(t => t.checked).length;
  const pct = tasks.length ? Math.round(done / tasks.length * 100) : 0;
  document.getElementById('progressBar').style.width = pct + '%';
  document.getElementById('progressText').textContent = pct + '% complete';
  document.getElementById('progressCount').textContent = `${done} / ${tasks.length} milestones`;
}
tasks.forEach(t => t.addEventListener('change', save));
document.getElementById('resetProgress').addEventListener('click', () => {
  if (confirm('Reset all pathway progress?')) {
    localStorage.removeItem(key);
    tasks.forEach(t => t.checked = false);
    update();
  }
});
load();


// Appearance preferences
const themeKey = 'roboticsTheme';
const accentKey = 'roboticsAccent';
const themeColors = {bright:'#f5f9ff', soft:'#fffaf1', dark:'#071017', contrast:'#ffffff'};

function applyAppearance(theme, accent) {
  document.documentElement.dataset.theme = theme;
  document.documentElement.dataset.accent = accent;
  localStorage.setItem(themeKey, theme);
  localStorage.setItem(accentKey, accent);
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute('content', themeColors[theme] || themeColors.bright);
  const select = document.getElementById('themeSelect');
  if (select) select.value = theme;
  document.querySelectorAll('[data-accent-choice]').forEach(btn => {
    btn.classList.toggle('is-active', btn.dataset.accentChoice === accent);
  });
}
const savedTheme = localStorage.getItem(themeKey) || 'bright';
const savedAccent = localStorage.getItem(accentKey) || 'blue';
applyAppearance(savedTheme, savedAccent);

document.getElementById('themeSelect')?.addEventListener('change', e => {
  applyAppearance(e.target.value, document.documentElement.dataset.accent || 'blue');
});
document.querySelectorAll('[data-accent-choice]').forEach(btn => {
  btn.addEventListener('click', () => {
    applyAppearance(document.documentElement.dataset.theme || 'bright', btn.dataset.accentChoice);
  });
});
