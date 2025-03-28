import { useTranslation } from '@/hooks/use-translation';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { TimelineItem, CompanyStat } from '@/types';
import ThreeDTile from '../ui/3d-tile';
import ThreeDTilingGrid from '../ui/3d-tiling-grid';
import ParallaxContainer from '../ui/parallax-container';

const timelineItems: TimelineItem[] = [
  {
    yearKey: 'about.timeline.item1.year',
    titleKey: 'about.timeline.item1.title',
    descriptionKey: 'about.timeline.item1.description'
  },
  {
    yearKey: 'about.timeline.item2.year',
    titleKey: 'about.timeline.item2.title',
    descriptionKey: 'about.timeline.item2.description'
  },
  {
    yearKey: 'about.timeline.item3.year',
    titleKey: 'about.timeline.item3.title',
    descriptionKey: 'about.timeline.item3.description'
  },
  {
    yearKey: 'about.timeline.item4.year',
    titleKey: 'about.timeline.item4.title',
    descriptionKey: 'about.timeline.item4.description'
  }
];

const companyStats: CompanyStat[] = [
  { value: '40+', label: 'Years Experience' },
  { value: '2', label: 'Expert Teams' },
  { value: '1000+', label: 'Projects Completed' },
  { value: '98%', label: 'Client Satisfaction' }
];

const AboutSection = () => {
  const { t } = useTranslation();
  const { elementRef: titleRef, isIntersecting: isTitleVisible } = useIntersectionObserver();
  const { elementRef: descRef, isIntersecting: isDescVisible } = useIntersectionObserver();
  const { elementRef: timelineRef, isIntersecting: isTimelineVisible } = useIntersectionObserver();
  const { elementRef: gridRef, isIntersecting: isGridVisible } = useIntersectionObserver();

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-[#1C2526]/50 parallax-section">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <ParallaxContainer speed={0.3} direction="up">
              <h2 
                ref={titleRef as React.RefObject<HTMLHeadingElement>}
                className={`font-montserrat font-bold text-3xl md:text-4xl text-gray-900 dark:text-white mb-4 transition-all duration-700 ${
                  isTitleVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
                }`}
              >
                {t('about.title')}
              </h2>
            </ParallaxContainer>
            
            <ParallaxContainer speed={0.4} direction="up">
              <p 
                className={`font-montserrat text-xl text-[#1A2B6D] dark:text-[#D3D3D3] transition-all duration-700 delay-300 ${
                  isTitleVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
                }`}
              >
                {t('about.subtitle')}
              </p>
            </ParallaxContainer>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div
              ref={descRef as React.RefObject<HTMLDivElement>}
              className={`transition-all duration-700 ${
                isDescVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
              }`}
            >
              <ParallaxContainer speed={0.2} direction="left">
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  {t('about.description')}
                </p>
              </ParallaxContainer>
              
              {/* Company Stats */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                {companyStats.map((stat, index) => (
                  <ParallaxContainer key={index} speed={0.3} direction={index % 2 === 0 ? "left" : "right"}>
                    <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all transform hover:scale-105">
                      <div className="text-[#1A2B6D] dark:text-[#D3D3D3] text-3xl font-montserrat font-bold mb-2">
                        {stat.value}
                      </div>
                      <div className="text-gray-700 dark:text-gray-300 font-medium">
                        {stat.label}
                      </div>
                    </div>
                  </ParallaxContainer>
                ))}
              </div>
              
              {/* 3D Tile Component */}
              <div className="mt-12 flex justify-center">
                <ThreeDTile />
              </div>
            </div>

            <div
              ref={timelineRef as React.RefObject<HTMLDivElement>}
              className={`transition-all duration-700 delay-300 ${
                isTimelineVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
              }`}
            >
              <ParallaxContainer speed={0.2} direction="right">
                <h3 className="font-montserrat font-bold text-xl text-gray-900 dark:text-white mb-6">
                  {t('about.timeline.title')}
                </h3>
              </ParallaxContainer>
              
              {/* Timeline */}
              <div className="space-y-8">
                {timelineItems.map((item, index) => (
                  <ParallaxContainer key={index} speed={0.25} direction="right">
                    <div className="timeline-item relative pl-8">
                      <div className="w-4 h-4 bg-[#1A2B6D] rounded-full absolute left-0 top-1.5"></div>
                      <h4 className="font-montserrat font-semibold text-gray-900 dark:text-white">
                        {t(item.yearKey)}
                      </h4>
                      <h5 className="font-montserrat text-[#1A2B6D] dark:text-[#D3D3D3] mb-1">
                        {t(item.titleKey)}
                      </h5>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">
                        {t(item.descriptionKey)}
                      </p>
                    </div>
                  </ParallaxContainer>
                ))}
              </div>
            </div>
          </div>
          
          {/* 3D Tiling Grid */}
          <div 
            ref={gridRef as React.RefObject<HTMLDivElement>}
            className={`mt-20 transition-all duration-1000 ${
              isGridVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-20'
            }`}
          >
            <h3 className="text-center font-montserrat font-bold text-2xl text-gray-900 dark:text-white mb-8">
              Our Tile Showcase
            </h3>
            <ThreeDTilingGrid rows={3} columns={5} spacing={0.6} tileSize={0.8} rotationSpeed={0.006} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
