import { useState, useEffect, useCallback, useMemo } from 'react';
import { 
  breakpoints, 
  getDeviceType, 
  isMobile, 
  isTablet, 
  isDesktop,
  type DeviceType 
} from '../utils/responsive';

// Viewport size hook
export const useViewport = () => {
  const [viewport, setViewport] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setViewport({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return viewport;
};

// Device type hook
export const useDeviceType = (): DeviceType => {
  const { width } = useViewport();
  return useMemo(() => getDeviceType(width), [width]);
};

// Breakpoint detection hook
export const useBreakpoint = () => {
  const { width } = useViewport();
  
  return useMemo(() => ({
    isXs: width >= breakpoints.xs,
    isSm: width >= breakpoints.sm,
    isMd: width >= breakpoints.md,
    isLg: width >= breakpoints.lg,
    isXl: width >= breakpoints.xl,
    isXxl: width >= breakpoints.xxl,
    isXxxl: width >= breakpoints.xxxl,
    
    // Device checks
    isMobile: isMobile(width),
    isTablet: isTablet(width),
    isDesktop: isDesktop(width),
    
    // Current breakpoint
    currentBreakpoint: (() => {
      if (width >= breakpoints.xxxl) return 'xxxl';
      if (width >= breakpoints.xxl) return 'xxl';
      if (width >= breakpoints.xl) return 'xl';
      if (width >= breakpoints.lg) return 'lg';
      if (width >= breakpoints.md) return 'md';
      if (width >= breakpoints.sm) return 'sm';
      return 'xs';
    })(),
  }), [width]);
};

// Media query hook
export const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mediaQuery = window.matchMedia(query);
    setMatches(mediaQuery.matches);

    const handler = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, [query]);

  return matches;
};

// Orientation hook
export const useOrientation = () => {
  const { width, height } = useViewport();
  
  return useMemo(() => ({
    isLandscape: width > height,
    isPortrait: height > width,
    isSquare: width === height,
  }), [width, height]);
};

// Responsive value hook
export const useResponsiveValue = <T>(values: {
  mobile?: T;
  tablet?: T;
  desktop?: T;
  'large-desktop'?: T;
}): T | undefined => {
  const deviceType = useDeviceType();
  
  return useMemo(() => {
    return values[deviceType] || 
           values.desktop || 
           values.tablet || 
           values.mobile;
  }, [values, deviceType]);
};

// Debounced resize hook
export const useDebouncedResize = (callback: () => void, delay: number = 150) => {
  const debouncedCallback = useCallback(
    (() => {
      let timeoutId: NodeJS.Timeout;
      return () => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(callback, delay);
      };
    })(),
    [callback, delay]
  );

  useEffect(() => {
    window.addEventListener('resize', debouncedCallback);
    return () => window.removeEventListener('resize', debouncedCallback);
  }, [debouncedCallback]);
};