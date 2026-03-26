document.getElementById('theme-toggle').addEventListener('click', function() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    if (currentTheme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    }
  });

const LAST_UPDATED = '26 Mar 2026';

document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('preload');
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);

    document.querySelectorAll('.update').forEach(el => {
        el.textContent = `last updated: ${LAST_UPDATED}`;
    });

    window.requestAnimationFrame(() => {
        document.body.classList.add('theme-applied');
        document.body.classList.remove('preload');
        document.body.classList.add('loaded');
    });
});

document.getElementById('hamburger-toggle').addEventListener('click', () => {
  document.querySelector('.navbar').classList.toggle('show');
});
