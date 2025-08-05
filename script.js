// Mobile nav toggle
document.getElementById('menuToggle').onclick = () => {
  document.getElementById('navLinks').classList.toggle('active');
};

// Join Discord
const joinBtn = document.getElementById('joinBtn');
if(joinBtn) joinBtn.onclick = () => window.location.href = 'https://discord.gg/RgAnVV7aKN';

// Fetch and populate dashboard tables (pseudo-API calls)
if(document.getElementById('teamStatusTable')) {
  fetch('/api/teams').then(r=>r.json()).then(data=>{
    const tbody = document.querySelector('#teamStatusTable tbody');
    data.forEach(t=>{
      const row = `<tr><td>${t.name}</td><td>${t.synced}</td><td>${t.flagged}</td></tr>`;
      tbody.insertAdjacentHTML('beforeend', row);
    });
  });
}

if(document.getElementById('roleAuditTable')) {
  fetch('/api/roles').then(r=>r.json()).then(data=>{
    const tbody = document.querySelector('#roleAuditTable tbody');
    data.forEach(r=>{
      const status = r.match ? 'OK' : 'Mismatch';
      const row = `<tr><td>${r.name}</td><td>${r.expected}</td><td>${r.actual}</td><td>${status}</td></tr>`;
      tbody.insertAdjacentHTML('beforeend', row);
    });
  });
}

// Accordion for rules
  // Toggle accordion visibility on header click
  document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
      header.nextElementSibling.classList.toggle('display');
    });
  });

  // Open the first accordion body by default
  const firstBody = document.querySelector('.accordion-body');
  if (firstBody) {
    firstBody.classList.add('display');
  }
