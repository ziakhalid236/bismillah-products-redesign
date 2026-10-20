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
document.querySelectorAll('.filter-row button').forEach((btn) => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-row button').forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    document.querySelectorAll('.product-grid .product-card').forEach((card) => {
      const show = filter === 'all' || card.dataset.category === filter;
      card.style.display = show ? '' : 'none';
    });
  });
});

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
