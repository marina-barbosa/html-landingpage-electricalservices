
function themeSwitch() {
  const switchButton = document.getElementById('theme-switch');
  let currentTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', currentTheme);

  let newTheme;
  if (currentTheme === 'dark') {
    newTheme = 'light';
  } else {
    newTheme = 'dark';
  }

  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
}

