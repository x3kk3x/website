// Types for hero carousel items
export interface HeroSlide {
  imageUrl: string;
  titleKey: string;
  subtitleKey: string;
}

// Types for testimonial items
export interface Testimonial {
  nameKey: string;
  textKey: string;
  rating: number;
  detailedText: string;
}

// Types for timeline items
export interface TimelineItem {
  yearKey: string;
  titleKey: string;
  descriptionKey: string;
}

// Types for company stats
export interface CompanyStat {
  value: string;
  label: string;
}
