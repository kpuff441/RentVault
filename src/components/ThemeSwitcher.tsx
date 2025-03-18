import React from 'react';
import { Sun, Moon, Laptop } from 'lucide-react';
import { getTheme, setTheme } from '../lib/theme';

export default function ThemeSwitcher() {
  const [theme, setThemeState] = React.useState(getTheme);

  const handleThemeChange = (newTheme: 'light' | 'dark' | 'system') => {
    setTheme(newTheme);
    setThemeState(newTheme);
  };

  return (
    <div className="p-4 border-t">
      <div className="flex items-center justify-between space-x-2">
        <button
          onClick={() => handleThemeChange('light')}
          className={`flex items-center justify-center p-2 rounded-lg transition-colors ${
            theme === 'light'
              ? 'bg-blue-100 text-blue-700'
              : 'text-gray-600 hover:bg-gray-100'
          }`}
          title="Light Mode"
        >
          <Sun className="w-5 h-5" />
        </button>
        <button
          onClick={() => handleThemeChange('dark')}
          className={`flex items-center justify-center p-2 rounded-lg transition-colors ${
            theme === 'dark'
              ? 'bg-blue-100 text-blue-700'
              : 'text-gray-600 hover:bg-gray-100'
          }`}
          title="Dark Mode"
        >
          <Moon className="w-5 h-5" />
        </button>
        <button
          onClick={() => handleThemeChange('system')}
          className={`flex items-center justify-center p-2 rounded-lg transition-colors ${
            theme === 'system'
              ? 'bg-blue-100 text-blue-700'
              : 'text-gray-600 hover:bg-gray-100'
          }`}
          title="System Theme"
        >
          <Laptop className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}