export const VIDEO_CONFIG = {
  PORTFOLIO: {
    id: '2Z7oe9Mp3HE',
    overlay: 'bg-black/50'
  },
  ABOUT: {
    id: 'M8omQR5gAag',
    overlay: 'bg-black/70'
  },
  QUOTE: {
    id: 'XJhHS6sMeHI',
    overlay: 'bg-black/80'
  }
} as const;

export const getYouTubeEmbedUrl = (videoId: string): string => {
  const params = new URLSearchParams({
    autoplay: '1',
    mute: '1',
    loop: '1',
    playlist: videoId,
    controls: '0',
    showinfo: '0',
    rel: '0',
    iv_load_policy: '3',
    modestbranding: '1',
    playsinline: '1',
    enablejsapi: '1',
    origin: window.location.origin,
    start: '0',
    end: '999999',
    disablekb: '1',
    fs: '0',
    cc_load_policy: '0'
  });

  return `https://www.youtube.com/embed/${videoId}?${params.toString()}`;
};