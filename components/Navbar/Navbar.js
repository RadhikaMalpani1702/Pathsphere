document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const menu = document.querySelector('.menu');
  const icon = document.getElementById('icon');

  if (hamburger && menu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      menu.classList.toggle('active');
    });
  }

  if (icon) {
    let theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      document.body.classList.add('darkmode');
      icon.src = '/images/light.png';
    } else {
      document.body.classList.remove('darkmode');
      icon.src = '/images/dark.png';
    }

    icon.addEventListener('click', () => {
      document.body.classList.toggle('darkmode');
      if (document.body.classList.contains('darkmode')) {
        icon.src = '/images/light.png';
        localStorage.setItem('theme', 'dark');
      } else {
        icon.src = '/images/dark.png';
        localStorage.setItem('theme', 'light');
      }
    });
  }
});
