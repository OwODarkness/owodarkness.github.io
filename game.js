// Kept as a small, dependency-free module so this can be migrated to TypeScript later.
const grid = document.querySelector('#binary-grid');
const status = document.querySelector('#signal-status');
const stability = document.querySelector('#stability-value');
const resetButton = document.querySelector('#reset-signal');

const targetPattern = [1, 0, 1, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1, 1];
let signalPattern = targetPattern.map(() => Math.random() > 0.5 ? 1 : 0);

function renderSignal() {
  grid.innerHTML = '';
  signalPattern.forEach((value, index) => {
    const node = document.createElement('button');
    node.type = 'button';
    node.className = `signal-node ${value ? 'is-on' : ''}`;
    node.textContent = value;
    node.setAttribute('aria-label', `Signal node ${index + 1}: ${value}`);
    node.addEventListener('click', () => {
      signalPattern[index] = signalPattern[index] ? 0 : 1;
      renderSignal();
    });
    grid.appendChild(node);
  });
  const matched = signalPattern.filter((value, index) => value === targetPattern[index]).length;
  const percentage = Math.round((matched / targetPattern.length) * 100);
  stability.textContent = `${String(percentage).padStart(2, '0')}%`;
  status.textContent = percentage === 100 ? 'SECTOR: STABLE' : 'SECTOR: ACTIVE';
  status.classList.toggle('is-stable', percentage === 100);
}

resetButton.addEventListener('click', () => {
  signalPattern = targetPattern.map(() => Math.random() > 0.5 ? 1 : 0);
  renderSignal();
});

renderSignal();
