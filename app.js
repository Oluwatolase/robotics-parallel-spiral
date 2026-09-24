
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
