import { Link } from '../models/link.model';

/**
 * Array de links profissionais
 * Personalize com seus próprios links
 */
export const LINKS_DATA: Link[] = [
  {
    id: 1,
    title: 'LinkedIn',
    url: 'https://linkedin.com/in/seu-perfil',
    icon: '💼',
    category: 'professional'
  },
  {
    id: 2,
    title: 'GitHub',
    url: 'https://github.com/seu-usuario',
    icon: '💻',
    category: 'professional'
  },
  {
    id: 3,
    title: 'Portfólio',
    url: 'https://seu-portfolio.com',
    icon: '🎨',
    category: 'portfolio'
  },
  {
    id: 4,
    title: 'Instagram',
    url: 'https://instagram.com/seu-usuario',
    icon: '📸',
    category: 'social'
  },
  {
    id: 5,
    title: 'Twitter / X',
    url: 'https://twitter.com/seu-usuario',
    icon: '🐦',
    category: 'social'
  },
  {
    id: 6,
    title: 'Email',
    url: 'mailto:seu-email@example.com',
    icon: '✉️',
    category: 'other'
  }
];
