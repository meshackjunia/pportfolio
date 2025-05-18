// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      document.querySelector(targetId).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Form submission
  const contactForm = document.getElementById('contact-form');
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Message sent! (This is a demo)');
    contactForm.reset();
  });
  
  // Dark mode toggle (Bonus)
  const darkModeToggle = document.createElement('button');
  darkModeToggle.textContent = '🌙';
  darkModeToggle.style.position = 'fixed';
  darkModeToggle.style.bottom = '20px';
  darkModeToggle.style.right = '20px';
  darkModeToggle.style.background = 'var(--primary)';
  darkModeToggle.style.color = 'white';
  darkModeToggle.style.border = 'none';
  darkModeToggle.style.borderRadius = '50%';
  darkModeToggle.style.width = '50px';
  darkModeToggle.style.height = '50px';
  darkModeToggle.style.cursor = 'pointer';
  darkModeToggle.style.zIndex = '1000';
  
  document.body.appendChild(darkModeToggle);
  
  darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    darkModeToggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
  });
  
  // Add this to your CSS for dark mode
  /*
  .dark-mode {
    --light: #2c3e50;
    --dark: #ecf0f1;
    background: var(--light);
    color: var(--dark);
  }
  
  .dark-mode nav,
  .dark-mode .skill,
  .dark-mode .project-card {
    background: #34495e;
    color: white;
  }
  */