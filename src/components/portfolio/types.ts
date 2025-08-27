export interface PortfolioVideo {
  id: string;
  title: string;
  description: string;
  youtubeId: string;
  position: 'left' | 'right';
  highlights?: string[];
  ctaLink?: string;
  ctaText?: string;
}

export interface VideoEntryProps {
  video: PortfolioVideo;
  isVisible: boolean;
}