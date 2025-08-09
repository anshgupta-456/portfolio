// Responsive breakpoints
export const breakpoints = {
  xs: 320,
  sm: 576,
  md: 768,
  lg: 1024,
  xl: 1200,
  xxl: 1400,
  xxxl: 1920,
} as const;

// Device types
export type DeviceType = 'mobile' | 'tablet' | 'desktop' | 'large-desktop';

// Breakpoint names
export type BreakpointName = keyof typeof breakpoints;

// Media query helpers
export const mediaQueries = {
  xs: `(min-width: ${breakpoints.xs}px)`,
  sm: `(min-width: ${breakpoints.sm}px)`,
  md: `(min-width: ${breakpoints.md}px)`,
  lg: `(min-width: ${breakpoints.lg}px)`,
  xl: `(min-width: ${breakpoints.xl}px)`,
  xxl: `(min-width: ${breakpoints.xxl}px)`,
  xxxl: `(min-width: ${breakpoints.xxxl}px)`,
  
  // Max-width queries
  maxXs: `(max-width: ${breakpoints.xs - 1}px)`,
  maxSm: `(max-width: ${breakpoints.sm - 1}px)`,
  maxMd: `(max-width: ${breakpoints.md - 1}px)`,
  maxLg: `(max-width: ${breakpoints.lg - 1}px)`,
  maxXl: `(max-width: ${breakpoints.xl - 1}px)`,
  maxXxl: `(max-width: ${breakpoints.xxl - 1}px)`,
  
  // Range queries
  mobileOnly: `(max-width: ${breakpoints.md - 1}px)`,
  tabletOnly: `(min-width: ${breakpoints.md}px) and (max-width: ${breakpoints.lg - 1}px)`,
  desktopOnly: `(min-width: ${breakpoints.lg}px)`,
  
  // Orientation
  landscape: '(orientation: landscape)',
  portrait: '(orientation: portrait)',
  
  // High DPI
  retina: '(-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)',
} as const;

// Get current device type
export const getDeviceType = (width: number): DeviceType => {
  if (width < breakpoints.md) return 'mobile';
  if (width < breakpoints.lg) return 'tablet';
  if (width < breakpoints.xxl) return 'desktop';
  return 'large-desktop';
};

// Check if device is mobile
export const isMobile = (width: number): boolean => width < breakpoints.md;

// Check if device is tablet
export const isTablet = (width: number): boolean => 
  width >= breakpoints.md && width < breakpoints.lg;

// Check if device is desktop
export const isDesktop = (width: number): boolean => width >= breakpoints.lg;

// Get responsive value based on device type
export const getResponsiveValue = <T>(
  values: Partial<Record<DeviceType, T>>,
  deviceType: DeviceType
): T | undefined => {
  return values[deviceType] || 
         values.desktop || 
         values.tablet || 
         values.mobile;
};