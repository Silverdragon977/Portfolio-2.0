import { useState, useEffect } from 'react';

export default function ThemeToggleButton() {
  const [isDark, setIsDark] = useState(false); // false = light mode

  useEffect(() => {
    document.body.setAttribute('data-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleTheme = () => setIsDark(prev => !prev);

  return (
    <button className="btn btn-outline-secondary ms-3" onClick={toggleTheme}>
      Theme
    </button>
  );
}
