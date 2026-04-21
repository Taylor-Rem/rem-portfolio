// ========== TYPEWRITER ==========
const phrases = [
  'Full Stack Developer',
  'Rust Enthusiast',
  'Automation Engineer',
  'Systems Builder',
  'Software Engineer',
];

const typewriterEl = document.getElementById('typewriter');
let phraseIndex = 0;
let charIndex = 0;
let deleting = false;
let pauseEnd = 0;

function typewriterTick() {
  const now = Date.now();
  if (now < pauseEnd) {
    requestAnimationFrame(typewriterTick);
    return;
  }

  const current = phrases[phraseIndex];

  if (!deleting) {
    typewriterEl.textContent = current.slice(0, charIndex + 1);
    charIndex++;
    if (charIndex === current.length) {
      deleting = true;
      pauseEnd = now + 2000;
    }
  } else {
    charIndex--;
    typewriterEl.textContent = current.slice(0, charIndex);
    if (charIndex === 0) {
      deleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      pauseEnd = now + 400;
    }
  }

  const speed = deleting ? 35 : 65;
  setTimeout(() => requestAnimationFrame(typewriterTick), speed);
}

requestAnimationFrame(typewriterTick);

// ========== MOBILE NAV ==========
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('active');
  navLinks.classList.toggle('open');
});

// Close mobile nav on link click
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navToggle.classList.remove('active');
    navLinks.classList.remove('open');
  });
});

// ========== SCROLL REVEAL ==========
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
);

revealElements.forEach(el => revealObserver.observe(el));

// ========== ACTIVE NAV LINK ==========
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a');

const navObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navAnchors.forEach(a => {
          a.style.color = a.getAttribute('href') === `#${id}` ? 'var(--accent)' : '';
        });
      }
    });
  },
  { threshold: 0.3, rootMargin: '-64px 0px -40% 0px' }
);

sections.forEach(s => navObserver.observe(s));
