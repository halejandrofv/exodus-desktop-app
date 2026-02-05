// Responsive breakpoints configuration
export const BREAKPOINTS = {
  xs: "36em", // 576px
  sm: "48em", // 768px
  md: "62em", // 992px
  lg: "75em", // 1200px
  xl: "88em", // 1408px
} as const;

// Layout configuration
export const LAYOUT_CONFIG = {
  header: {
    height: 60,
    zIndex: 1000,
  },
  sidebar: {
    width: 280,
    collapsedWidth: 80,
    breakpoint: "sm",
    zIndex: 999,
  },
  spacing: {
    xs: "0.5rem",
    sm: "0.75rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
  },
} as const;

export type BreakpointKey = keyof typeof BREAKPOINTS;
