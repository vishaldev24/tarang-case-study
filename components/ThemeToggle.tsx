import React from 'react';
import { Sun, Moon, Eye, Coffee, Leaf } from 'lucide-react';

interface ThemeToggleProps {
  currentTheme: string;
  setTheme: (theme: string) => void;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ currentTheme, setTheme }) => {
  const themes = [
    { id: 'light', icon: Sun, label: 'Light', desc: 'Daylight readable' },
    { id: 'dark', icon: Moon, label: 'Dark', desc: 'OLED Standard' },
    { id: 'colorblind', icon: Eye, label: 'Vis', desc: 'Deuteranopia Safe' },
    { id: 'calm', icon: Coffee, label: 'Calm', desc: 'Low Sensory' },
    { id: 'eco', icon: Leaf, label: 'Eco', desc: 'Carbon Saver' },
  ];

  return (
    <div className="fixed top-6 right-6 z-50 flex flex-col items-end">
      <div className="glass-panel rounded-full p-1.5 flex flex-col gap-2 shadow-2xl border border-white/10 bg-black/40 backdrop-blur-xl">
        {themes.map((theme) => {
          const isActive = currentTheme === theme.id;
          const Icon = theme.icon;
          
          return (
            <button
              key={theme.id}
              onClick={() => setTheme(theme.id)}
              className={`
                relative group flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300
                ${isActive 
                  ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/30 scale-100' 
                  : 'text-gray-400 hover:text-white hover:bg-white/10 scale-90 hover:scale-100'
                }
              `}
              aria-label={`Switch to ${theme.label} theme: ${theme.desc}`}
              aria-pressed={isActive}
            >
              <Icon size={18} strokeWidth={isActive ? 2.5 : 2} />
              
              {/* Tooltip */}
              <div className="absolute right-14 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg glass-panel bg-black/80 border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                <span className="text-[10px] font-bold text-white uppercase tracking-widest block">{theme.label}</span>
                <span className="text-[9px] text-gray-400">{theme.desc}</span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};