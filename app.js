// Sales‐rep data
const reps = {
  FL: {
    name: 'Chris Beeman',
    photo: 'assets/chris.jpg',
    bio: 'A Florida native and avid fisherman, Chris is the go-to for all Florida-based dealers. If your customer demands an Ameratrail Trailer, Chris is the one to call.',
    phone: '407-593-9222',
    email: 'cbeeman@ameratrail.com'
  },
  EC: {
    name: 'Billy McNair',
    photo: 'assets/billy.jpg',
    bio: 'Billy supports dealers up and down the East Coast (NC, GA, SC, etc.) with top-tier service.',
    phone: '555-987-6543',
    email: 'bob@example.com'
  },
  RS: {
    name: 'Retail Team',
    photo: 'assets/retail.jpg',
    bio: 'Our Retail Team handles all walk-in and in-store inquiries—happy to help any customer.',
    phone: '555-111-2222',
    email: 'retail@example.com'
  }
};

// Elements
const buttonsEl      = document.querySelector('.buttons');
const overlayEl      = document.getElementById('overlay');
const panelEl        = document.getElementById('contact-panel');
const panelContentEl = document.getElementById('panel-content');
const closeBtn       = document.getElementById('close-panel');

// Show contact panel
function openPanel(key) {
  const rep = reps[key];
  panelContentEl.innerHTML = `
    <img src="${rep.photo}" alt="${rep.name}" class="headshot"/>
    <h2>${rep.name}</h2>
    <p>${rep.bio}</p>
    <div class="contact-links">
      <a class="contact-link" href="tel:${rep.phone}">📞 ${rep.phone}</a>
      <a class="contact-link" href="mailto:${rep.email}">✉️ ${rep.email}</a>
    </div>
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

// Hook up main buttons
document.querySelectorAll('.buttons button').forEach(btn => {
  btn.addEventListener('click', () => openPanel(btn.dataset.group));
});

// Close on overlay click or “×”
overlayEl.addEventListener('click', closePanel);
closeBtn.addEventListener('click', closePanel);
