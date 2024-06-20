const switchToggle = document.getElementById('theme-switch');
const currentTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', currentTheme);

if (currentTheme === 'dark') {
  switchToggle.checked = true;
}

switchToggle.addEventListener('change', () => {
  let theme = 'light';
  if (switchToggle.checked) {
    theme = 'dark';
  }
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
});