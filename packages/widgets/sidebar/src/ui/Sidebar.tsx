import { Button } from '@org/ui';
import { useMemo } from 'react';
import { IMenuItem, ISidebarProps } from '../model/types';

export function Sidebar({ nameApp, logoUrl, activeLocation }: ISidebarProps) {
  const menuItems = useMemo<IMenuItem[]>(() => {
    const allItems: IMenuItem[] = [
      { id: '1', label: 'Patient Information', icon: '🏠', path: '/' },
      { id: '2', label: 'Photos & X-rays', icon: '📊', path: '/photo' },
      { id: '3', label: 'Impressions', icon: '📁', path: '/impressions' },
      { id: '4', label: 'Prescription', icon: '📁', path: '/prescription' },
      { id: '5', label: 'Summary', icon: '⚙️', path: '/summary' },
    ];

    return nameApp === 'Aligner'
      ? allItems
      : allItems.filter((item) => item.id !== '2');
  }, [nameApp]);

  return (
    <aside className="border-r bg-background p-6">
      {logoUrl && (
        <div className="mb-4">
          <img src={logoUrl} alt={`${nameApp} Logo`} className="h-10 w-auto" />
        </div>
      )}
      <h1 className="text-2xl font-bold mb-8">{nameApp}</h1>
      <nav className="space-y-2">
        {menuItems.map((item) => (
          <Button
            key={item.id}
            variant={activeLocation === item.path ? 'default' : 'ghost'}
            className="w-full justify-start cursor-auto"
          >
            <span>{item.icon}</span>
            <span>{item.label}</span>
          </Button>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;
