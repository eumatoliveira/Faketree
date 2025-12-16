/**
 * Interface para definir a estrutura de um link
 * Usado para tipagem TypeScript e validação
 */
export interface Link {
  id: number;
  title: string;
  url: string;
  icon: string;
  category: 'social' | 'professional' | 'portfolio' | 'other';
}
