// Sales‐rep data
const reps = {
  FL: {
    title: 'Florida Dealer Sales',
    name: 'Chris Beeman',
    photo: 'assets/chris.jpg',
    bio: 'A Florida native and avid fisherman, Chris is the go-to for all Florida-based dealers. If your customer demands an Ameratrail Trailer, Chris is the one to call.',
    phone: '407-593-9222',
    email: 'cbeeman@ameratrail.com'
  },
  EC: {
    title: 'East Coast Dealer Sales',
    name: 'Billy McNair',
    photo: 'assets/billy.jpg',
    bio: 'Billy supports dealers up and down the East Coast (NC, GA, SC, etc.) with top-tier service.',
    phone: '407-593-9222',
    email: 'wtmcnair@ameratrail.com'
  },
  AM: {
    title: 'Dealer Account Manager',
    name: 'Margaret Boswell',
    photo: 'assets/margaret.jpg',
    bio: 'Questions about your dealer accounts, billing, payments, etc? Give Margaret a call today for all your dealer account management needs!',
    phone: '407-593-9222',
    email: 'mboswell@ameratrail.com'
  },
  RS: {
    title: 'Retail Sales',
    name: 'Kim Williams',
    photo: 'assets/kim.jpg',
    bio: 'She\'s \'fishin\' girl\' to many, but to us, she\'s the best retail rep in the business. Kim is a pro with all our retail customers, and she\'s always ready to help.',
    phone: '407-593-9222',
    email: 'fishingirl@ameratrail.com'
  },
  HQ: {
    // name isn’t used in the template, so you can keep it or omit it
    title: 'Ameratrail HQ',
    photo: 'assets/hq.jpg',
    bio: 'Questions about parts, service, or warranty? Our HQ team is here to help. We\'re available Monday through Friday from 8:00 AM to 5:00 PM EST.',
    phone: '407-593-9222',
    email: 'info@ameratrail.com',
    website: 'https://ameratrail.com'
  },
  PT: {
    // name isn’t used in the template, so you can keep it or omit it
    title: 'Parts and Shipping',
    photo: 'assets/parts.jpg',
    bio: 'Did you know we sell parts for trailers? Check out our online parts store to buy replacement parts for your trailer!',
    phone: '407-593-9222',
    email: 'parts@ameratrail.com',
    website: 'https://ameratrailparts.com'
  }
};

// Elements
const buttonsEl      = document.querySelector('.buttons');
const overlayEl      = document.getElementById('overlay');
const panelEl        = document.getElementById('contact-panel');
const panelContentEl = document.getElementById('panel-content');
const closeBtn       = document.getElementById('close-panel');

// Show contact panel
// 2) Update your openPanel function
function openPanel(key) {
  const rep = reps[key];
  let html = `
    <img src="${rep.photo}" alt="Contact" class="headshot"/>
    <p>${rep.bio}</p>
  `;

  // 1) Phone & Email row
  html += `
    <div class="contact-links">
      <a class="contact-link" href="tel:${rep.phone}">📞 ${rep.phone}</a>
      <a class="contact-link" href="mailto:${rep.email}">✉️ ${rep.email}</a>
    </div>
  `;

  // 2) Website row only for HQ
  if (key === 'HQ' || key === 'PT') {
    html += `
      <div class="website-link">
        <a class="contact-link" href="${rep.website}" target="_blank" rel="noopener">
          🌐 Visit Our Website
        </a>
      </div>
    `;
  } else {
    // Prepend the name header for non-HQ reps
    html = `<h3>${rep.title}</h3>
    <h2>${rep.name}</h2>` + html;
  }

  panelContentEl.innerHTML = html;
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
