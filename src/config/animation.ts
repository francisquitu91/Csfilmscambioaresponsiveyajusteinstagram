export const ANIMATION_TIMING = {
  // Initial delay before any animation starts
  CURTAIN_INITIAL_DELAY: 6000,
  // Duration of content fade out animation
  CONTENT_FADE_DURATION: 1000,
  // Duration of curtain opening animation
  CURTAIN_ANIMATION_DURATION: 4500,
  // Delay before showing background videos
  VIDEO_FADE_DELAY: 7000,
  // Total duration of initial animation sequence
  TOTAL_INITIAL_SEQUENCE: 11500,
  // Typewriter timing
  TYPEWRITER: {
    TITLE_SPEED: 80,
    TITLE_DELAY: 1000,
    SLOGAN_SPEED: 50,
    SLOGAN_DELAY: 3500
  }
} as const;