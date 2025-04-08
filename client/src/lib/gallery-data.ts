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
    image: 'https://cdn.shopify.com/s/files/1/0518/0601/1582/files/Tiling_a_floor.jpg?v=1667837188',
    title: 'Modern Bathroom',
    description: 'Complete renovation with marble tiles'
  },
  {
    id: 2,
    category: 'kitchens',
    image: 'https://img.freepik.com/premium-photo/tile-setter-laying-ceramic-tiles-kitchen-floor_861346-87690.jpg',
    title: 'Luxury Kitchen',
    description: 'Porcelain backsplash and countertops'
  },
  {
    id: 3,
    category: 'outdoor',
    image: 'https://dam.thdstatic.com/content/production/5hxs1C0Nvo2JBHN3rC06EQ/IOucM7yAhv4jOpAM_KsRkw/Original%20file/how-to-lay-tile-step-14.jpg',
    title: 'Garden Patio',
    description: 'Frost-resistant outdoor tiles'
  },
  {
    id: 4,
    category: 'bathrooms',
    image: 'https://t4.ftcdn.net/jpg/05/16/16/21/360_F_516162156_1O7yHOaU008F7qt5VqfVtsQX4FQqc08C.jpg',
    title: 'Spa-Like Bathroom',
    description: 'Natural stone with heated floors'
  },
  {
    id: 5,
    category: 'kitchens',
    image: 'https://5.imimg.com/data5/SELLER/Default/2025/2/486892772/EZ/FD/GQ/25400228/interior-tile-flooring-services.jpg',
    title: 'Contemporary Kitchen',
    description: 'Geometric pattern floor tiles'
  },
  {
    id: 6,
    category: 'outdoor',
    image: 'https://serapool.com/storage/media/4571/conversions/havuz-fayansi-nasil-dosenir-crop.jpg',
    title: 'Pool Deck',
    description: 'Anti-slip ceramic outdoor flooring'
  }
];
