// 1) Initialize MicroModal with animations
MicroModal.init({
  openTrigger: 'data-micromodal-trigger',
  closeTrigger: 'data-micromodal-close',
  disableScroll: true,
  awaitOpenAnimation: true,
  awaitCloseAnimation: true
});

// 2) Sales‐rep data
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
    bio: 'East Coast territory manager covering NC, GA, SC, and beyond.',
    phone: '555-987-6543',
    email: 'bob@example.com'
  },
  RS: {
    name: 'Retail Team',
    photo: 'assets/retail.jpg',
    bio: 'Our retail team handles walk-ins and store inquiries.',
    phone: '555-111-2222',
    email: 'retail@example.com'
  }
};

// 3) Wire up every trigger button
document.querySelectorAll('[data-group]').forEach(el => {
  el.addEventListener('click', () => {
    const key = el.dataset.group;
    const rep = reps[key];
    // Populate modal
    document.getElementById('modal-1-title').textContent = rep.name;
    document.getElementById('modal-1-content').innerHTML = `
      <img src="${rep.photo}" alt="${rep.name}" class="headshot" />
      <p>${rep.bio}</p>
      <p>
        <a href="tel:${rep.phone}">📞 ${rep.phone}</a><br/>
        <a href="mailto:${rep.email}">✉️ ${rep.email}</a>
      </p>
    `;
    // Show modal
    MicroModal.show('modal-1');
  });
});
