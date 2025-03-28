import { useState } from 'react';
import { useTranslation } from '@/hooks/use-translation';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { galleryItems } from '@/lib/gallery-data';
import type { GalleryCategory } from '@/lib/gallery-data';

const GallerySection = () => {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState<GalleryCategory>('all');
  const { elementRef: titleRef, isIntersecting: isTitleVisible } = useIntersectionObserver();

  const filterItems = (category: GalleryCategory) => {
    setActiveFilter(category);
  };

  // Filter items based on the active category
  const filteredItems = activeFilter === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <section id="gallery" className="py-20 bg-white dark:bg-[#1C2526]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            ref={titleRef as React.RefObject<HTMLHeadingElement>}
            className={`font-montserrat font-bold text-3xl md:text-4xl text-gray-900 dark:text-white mb-4 transition-all duration-700 ${
              isTitleVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
            }`}
          >
            {t('gallery.title')}
          </h2>
          <p
            className={`font-montserrat text-xl text-[#1A2B6D] dark:text-[#D3D3D3] transition-all duration-700 delay-300 ${
              isTitleVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
            }`}
          >
            {t('gallery.subtitle')}
          </p>
        </div>

        {/* Gallery Filters */}
        <div className="flex flex-wrap justify-center mb-12">
          <button
            onClick={() => filterItems('all')}
            className={`px-6 py-2 m-1 rounded-md transition-all ${
              activeFilter === 'all'
                ? 'bg-[#1A2B6D] text-white'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            {t('gallery.filters.all')}
          </button>
          <button
            onClick={() => filterItems('bathrooms')}
            className={`px-6 py-2 m-1 rounded-md transition-all ${
              activeFilter === 'bathrooms'
                ? 'bg-[#1A2B6D] text-white'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            {t('gallery.filters.bathrooms')}
          </button>
          <button
            onClick={() => filterItems('kitchens')}
            className={`px-6 py-2 m-1 rounded-md transition-all ${
              activeFilter === 'kitchens'
                ? 'bg-[#1A2B6D] text-white'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            {t('gallery.filters.kitchens')}
          </button>
          <button
            onClick={() => filterItems('outdoor')}
            className={`px-6 py-2 m-1 rounded-md transition-all ${
              activeFilter === 'outdoor'
                ? 'bg-[#1A2B6D] text-white'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            {t('gallery.filters.outdoor')}
          </button>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((project) => {
            const { elementRef, isIntersecting } = useIntersectionObserver();
            
            return (
              <div
                key={project.id}
                ref={elementRef as React.RefObject<HTMLDivElement>}
                className={`group overflow-hidden rounded-lg shadow-md bg-white dark:bg-gray-800 transition-all duration-700 ${
                  isIntersecting ? 'opacity-100 transform scale-100' : 'opacity-0 transform scale-95'
                }`}
              >
                <div className="relative overflow-hidden h-64">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                      <a href="#" className="inline-block px-4 py-2 bg-[#1A2B6D] text-white rounded-md">
                        View Project
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-montserrat font-semibold text-xl text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    {project.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
