
export enum AppTab {
  HOME = 'home',
  ACCESS = 'access',
  MODULE = 'module', // Representa o "Menu" ou "Serviços"
  PROFILE = 'profile'
}

export interface MenuItem {
  id: string;
  name: string;
  price: string;
  description: string;
  image: string;
  images?: string[];
  recommended?: boolean;
  category?: string;
}

export interface Partner {
  id: string;
  name: string;
  category: string;
  image: string;
}
