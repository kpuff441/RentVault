import React from 'react';
import { NavLink } from 'react-router-dom';
import { Building } from 'lucide-react';
import ThemeSwitcher from './ThemeSwitcher';

interface NavigationItem {
  name: string;
  icon: React.ComponentType;
  path: string;
}

interface SidebarProps {
  navigation: NavigationItem[];
}

export default function Sidebar({ navigation }: SidebarProps) {
  return (
    <div className="flex flex-col w-64 bg-white border-r dark:bg-gray-800 dark:border-gray-700">
      <div className="flex items-center justify-center h-16 px-4 border-b dark:border-gray-700">
        <Building className="w-8 h-8 text-blue-600 dark:text-blue-400" />
        <span className="ml-2 text-xl font-semibold text-gray-900 dark:text-white">RentVault</span>
      </div>
      <nav className="flex-1 px-2 py-4 space-y-1">
        {navigation.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center px-4 py-2 text-sm font-medium rounded-md ${
                isActive
                  ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200'
                  : 'text-gray-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700'
              }`
            }
          >
            <item.icon className="w-5 h-5 mr-3" />
            {item.name}
          </NavLink>
        ))}
      </nav>
      <ThemeSwitcher />
    </div>
  );
}