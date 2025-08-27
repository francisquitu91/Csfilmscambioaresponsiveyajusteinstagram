export interface VideoItem {
  id: string;
  title: string;
  description: string;
  youtubeId: string;
}

export interface VideoGridProps {
  videos: VideoItem[];
}