// Mobile navigation toggle
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
menuToggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
});

// Condense the header once the page is scrolled
const header = document.querySelector('.header');
const onScroll = () => header?.classList.toggle('scrolled', window.scrollY > 24);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

// Reveal elements as they enter the viewport
const revealTargets = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && revealTargets.length) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        observer.unobserve(entry.target);
      }
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
  revealTargets.forEach((el, i) => {
    el.style.transitionDelay = `${Math.min(i % 4, 3) * 70}ms`;
    observer.observe(el);
  });
} else {
  revealTargets.forEach((el) => el.classList.add('in'));
}

// Product category filter
const filterButtons = document.querySelectorAll('.filter-row button');
const productCards = document.querySelectorAll('.product-grid .product-card');

function applyFilter(filter) {
  filterButtons.forEach((b) => b.classList.toggle('active', b.dataset.filter === filter));
  productCards.forEach((card) => {
    const show = filter === 'all' || card.dataset.category === filter;
    card.hidden = !show;
  });
}

filterButtons.forEach((btn) => {
  btn.addEventListener('click', () => applyFilter(btn.dataset.filter));
});

// Deep links from the homepage, e.g. products.html#fabric
if (productCards.length) {
  const hash = location.hash.slice(1);
  if (hash && [...filterButtons].some((b) => b.dataset.filter === hash)) {
    applyFilter(hash);
  }
}

// Contact form -> draft email
document.querySelector('#contact-form')?.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData(e.currentTarget);
  const subject = encodeURIComponent('Textile enquiry — ' + data.get('product'));
  const body = encodeURIComponent(
    'Name: ' + data.get('name') +
    '\nEmail: ' + data.get('email') +
    '\nProduct: ' + data.get('product') +
    '\n\nProject details:\n' + data.get('message')
  );
  document.querySelector('#form-message').textContent =
    'Your email app should open with the enquiry draft addressed to info@bismillah.com.pk.';
  window.location.href = 'mailto:info@bismillah.com.pk?subject=' + subject + '&body=' + body;
});
