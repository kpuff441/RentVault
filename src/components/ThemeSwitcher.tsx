import React, { useState } from 'react';
import { Sun, Moon, Laptop, Settings } from 'lucide-react';
import { getTheme, setTheme } from '../lib/theme';

export default function ThemeSwitcher() {
  const [theme, setThemeState] = React.useState(getTheme);
  const [isOpen, setIsOpen] = useState(false);

  const handleThemeChange = (newTheme: 'light' | 'dark' | 'system') => {
    setTheme(newTheme);
    setThemeState(newTheme);
    setIsOpen(false);
  };

  const getActiveIcon = () => {
    switch (theme) {
      case 'light':
        return <Sun className="w-4 h-4" />;
      case 'dark':
        return <Moon className="w-4 h-4" />;
      case 'system':
        return <Laptop className="w-4 h-4" />;
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center p-2 w-full text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
      >
        <div className="flex items-center">
          {getActiveIcon()}
          <span className="ml-2">{theme.charAt(0).toUpperCase() + theme.slice(1)}</span>
        </div>
        <Settings className="w-4 h-4 ml-auto" />
      </button>

      {isOpen && (
        <div className="absolute bottom-full left-0 w-full mb-1 bg-white dark:bg-gray-800 rounded-lg shadow-lg border dark:border-gray-700 py-1">
          <button
            onClick={() => handleThemeChange('light')}
            className={`flex items-center w-full px-3 py-2 text-sm transition-colors ${
              theme === 'light'
                ? 'text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
          >
            <Sun className="w-4 h-4 mr-2" />
            Light
          </button>
          <button
            onClick={() => handleThemeChange('dark')}
            className={`flex items-center w-full px-3 py-2 text-sm transition-colors ${
              theme === 'dark'
                ? 'text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
          >
            <Moon className="w-4 h-4 mr-2" />
            Dark
          </button>
          <button
            onClick={() => handleThemeChange('system')}
            className={`flex items-center w-full px-3 py-2 text-sm transition-colors ${
              theme === 'system'
                ? 'text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
          >
            <Laptop className="w-4 h-4 mr-2" />
            System
          </button>
        </div>
      )}
    </div>
  );
}