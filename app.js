// Sales‐rep data
const reps = {
  FL: {
    name: 'Alice Brooks',
    photo: 'assets/alice.jpg',
    bio: '10 years in FL marine sales with deep local expertise.',
    phone: '555-123-4567',
    email: 'alice@example.com'
  },
  EC: {
    name: 'Bob Chen',
    photo: 'assets/bob.jpg',
    bio: 'Territory manager for NC, GA, SC, and all East Coast.',
    phone: '555-987-6543',
    email: 'bob@example.com'
  },
  RS: {
    name: 'Retail Team',
    photo: 'assets/retail.jpg',
    bio: 'Our retail team handles all store and walk-in inquiries.',
    phone: '555-111-2222',
    email: 'retail@example.com'
  }
};

// Elements
const buttonsEl = document.querySelector('.buttons');
const overlayEl = document.getElementById('overlay');
const panelEl = document.getElementById('contact-panel');
const panelContentEl = document.getElementById('panel-content');
const closeBtn = document.getElementById('close-panel');

// Show contact panel
function openPanel(key) {
  const rep = reps[key];
  panelContentEl.innerHTML = `
    <img src="${rep.photo}" alt="${rep.name}" class="headshot"/>
    <h2>${rep.name}</h2>
    <p>${rep.bio}</p>
    <p>
      <a href="tel:${rep.phone}">📞 ${rep.phone}</a><br/>
      <a href="mailto:${rep.email}">✉️ ${rep.email}</a>
    </p>
  `;
  overlayEl.style.display = 'block';
  panelEl.classList.add('open');
  buttonsEl.style.display = 'none';
}

// Close contact panel
function closePanel() {
  panelEl.classList.remove('open');
  overlayEl.style.display = 'none';
  buttonsEl.style.display = 'flex';
}

// Wire up main buttons
document.querySelectorAll('.buttons button').forEach(btn => {
  btn.addEventListener('click', () => {
    openPanel(btn.dataset.group);
  });
});

// Clicking overlay or “×” closes everything
overlayEl.addEventListener('click', closePanel);
closeBtn.addEventListener('click', closePanel);
