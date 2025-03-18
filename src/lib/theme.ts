type Theme = 'light' | 'dark' | 'system';

export function getSystemTheme(): 'light' | 'dark' {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function setTheme(theme: Theme) {
  if (theme === 'system') {
    const systemTheme = getSystemTheme();
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(systemTheme);
    localStorage.setItem('theme', theme);
  } else {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
    localStorage.setItem('theme', theme);
  }
}

export function getTheme(): Theme {
  return (localStorage.getItem('theme') as Theme) || 'system';
}

// Initialize theme
export function initTheme() {
  const theme = getTheme();
  setTheme(theme);
  
  // Listen for system theme changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    if (getTheme() === 'system') {
      setTheme('system');
    }
  });
}