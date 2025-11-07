import { ReactNode } from 'react';
import { useTheme } from '../contexts/ThemeContext';

interface ThemeWrapperProps {
  children: ReactNode;
  className?: string;
}

export function ThemeWrapper({ children, className = '' }: ThemeWrapperProps) {
  const { theme } = useTheme();

  const themeClasses = theme === 'light'
    ? 'bg-gradient-to-br from-slate-50 via-white to-slate-100 text-slate-900'
    : 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white';

  return (
    <div className={`min-h-screen ${themeClasses} ${className}`}>
      {children}
    </div>
  );
}

export function getSectionClasses(theme: 'light' | 'dark', variant: 'primary' | 'secondary' | 'tertiary' = 'primary') {
  const variants = {
    light: {
      primary: 'bg-white/50',
      secondary: 'bg-slate-50/80',
      tertiary: 'bg-slate-100/50'
    },
    dark: {
      primary: 'bg-slate-900/50',
      secondary: 'bg-slate-800/50',
      tertiary: 'bg-slate-700/30'
    }
  };

  return variants[theme][variant];
}

export function getCardClasses(theme: 'light' | 'dark') {
  return theme === 'light'
    ? 'bg-white border-slate-200 shadow-lg shadow-slate-200/50'
    : 'bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700';
}

export function getTextClasses(theme: 'light' | 'dark', variant: 'primary' | 'secondary' | 'tertiary' = 'primary') {
  const variants = {
    light: {
      primary: 'text-slate-900',
      secondary: 'text-slate-700',
      tertiary: 'text-slate-500'
    },
    dark: {
      primary: 'text-white',
      secondary: 'text-slate-300',
      tertiary: 'text-slate-400'
    }
  };

  return variants[theme][variant];
}

export function getBorderClasses(theme: 'light' | 'dark') {
  return theme === 'light' ? 'border-slate-200' : 'border-slate-700';
}
