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

document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('preload');
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);

    window.requestAnimationFrame(() => {
        document.body.classList.add('theme-applied');
        document.body.classList.remove('preload');
        document.body.classList.add('loaded');
    });
});