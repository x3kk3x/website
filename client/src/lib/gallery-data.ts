export type GalleryCategory = 'all' | 'bathrooms' | 'kitchens' | 'outdoor';

export interface GalleryItem {
  id: number;
  category: Exclude<GalleryCategory, 'all'>;
  image: string;
  title: string;
  description: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: 1,
    category: 'bathrooms',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    title: 'Modern Bathroom',
    description: 'Complete renovation with marble tiles'
  },
  {
    id: 2,
    category: 'kitchens',
    image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1768&q=80',
    title: 'Luxury Kitchen',
    description: 'Porcelain backsplash and countertops'
  },
  {
    id: 3,
    category: 'outdoor',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    title: 'Garden Patio',
    description: 'Frost-resistant outdoor tiles'
  },
  {
    id: 4,
    category: 'bathrooms',
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
    title: 'Spa-Like Bathroom',
    description: 'Natural stone with heated floors'
  },
  {
    id: 5,
    category: 'kitchens',
    image: 'https://images.unsplash.com/photo-1604709177225-055f99402ea3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    title: 'Contemporary Kitchen',
    description: 'Geometric pattern floor tiles'
  },
  {
    id: 6,
    category: 'outdoor',
    image: 'https://images.unsplash.com/photo-1543157145-f78c636d023d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80',
    title: 'Pool Deck',
    description: 'Anti-slip ceramic outdoor flooring'
  }
];
