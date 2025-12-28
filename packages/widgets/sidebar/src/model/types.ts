export interface IMenuItem {
  id: string;
  label: string;
  icon: string;
  path: string;
}

export interface ISidebarProps {
  activeLocation: string;
  backgroundColor?: string;
  logoUrl?: string;
  nameApp: 'Retainer' | 'Aligner';
  onNavigate: (path: string) => void;
}
