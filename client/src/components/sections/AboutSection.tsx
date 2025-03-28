import { useTranslation } from '@/hooks/use-translation';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { TimelineItem, CompanyStat } from '@/types';
import ThreeDTile from '../ui/3d-tile';

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

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-[#1C2526]/50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 
              ref={titleRef as React.RefObject<HTMLHeadingElement>}
              className={`font-montserrat font-bold text-3xl md:text-4xl text-gray-900 dark:text-white mb-4 transition-all duration-700 ${
                isTitleVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
              }`}
            >
              {t('about.title')}
            </h2>
            <p 
              className={`font-montserrat text-xl text-[#1A2B6D] dark:text-[#D3D3D3] transition-all duration-700 delay-300 ${
                isTitleVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
              }`}
            >
              {t('about.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div
              ref={descRef as React.RefObject<HTMLDivElement>}
              className={`transition-all duration-700 ${
                isDescVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
              }`}
            >
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                {t('about.description')}
              </p>
              
              {/* Company Stats */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                {companyStats.map((stat, index) => (
                  <div key={index} className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                    <div className="text-[#1A2B6D] dark:text-[#D3D3D3] text-3xl font-montserrat font-bold mb-2">
                      {stat.value}
                    </div>
                    <div className="text-gray-700 dark:text-gray-300 font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
              
              {/* 3D Tile Component */}
              <div className="mt-8 flex justify-center">
                <ThreeDTile />
              </div>
            </div>

            <div
              ref={timelineRef as React.RefObject<HTMLDivElement>}
              className={`transition-all duration-700 delay-300 ${
                isTimelineVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
              }`}
            >
              <h3 className="font-montserrat font-bold text-xl text-gray-900 dark:text-white mb-6">
                {t('about.timeline.title')}
              </h3>
              
              {/* Timeline */}
              <div className="space-y-8">
                {timelineItems.map((item, index) => (
                  <div key={index} className="timeline-item relative pl-8">
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
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
