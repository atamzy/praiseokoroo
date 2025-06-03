

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you shortly.');
    this.reset();
  });

  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  const toggle = document.getElementById('toggleTheme');
  toggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    toggle.classList.toggle('active');
  });