import React, { ReactNode } from 'react';
import { useBreakpoint, useDeviceType, useResponsiveValue } from '../hooks/useResponsive';

interface ResponsiveContainerProps {
  children: ReactNode;
  className?: string;
  maxWidth?: {
    mobile?: string;
    tablet?: string;
    desktop?: string;
    'large-desktop'?: string;
  };
  padding?: {
    mobile?: string;
    tablet?: string;
    desktop?: string;
    'large-desktop'?: string;
  };
  columns?: {
    mobile?: number;
    tablet?: number;
    desktop?: number;
    'large-desktop'?: number;
  };
}

const ResponsiveContainer: React.FC<ResponsiveContainerProps> = ({
  children,
  className = '',
  maxWidth = {
    mobile: '100%',
    tablet: '720px',
    desktop: '1140px',
    'large-desktop': '1320px',
  },
  padding = {
    mobile: '1rem',
    tablet: '1.5rem',
    desktop: '2rem',
    'large-desktop': '2.5rem',
  },
  columns = {
    mobile: 1,
    tablet: 2,
    desktop: 3,
    'large-desktop': 4,
  },
}) => {
  const deviceType = useDeviceType();
  const breakpoint = useBreakpoint();

  const currentMaxWidth = useResponsiveValue(maxWidth);
  const currentPadding = useResponsiveValue(padding);
  const currentColumns = useResponsiveValue(columns) || 1;

  const containerStyle: React.CSSProperties = {
    maxWidth: currentMaxWidth,
    padding: currentPadding,
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: `repeat(${currentColumns}, 1fr)`,
    gap: 'clamp(1rem, 3vw, 2rem)',
    width: '100%',
  };

  return (
    <div 
      className={`responsive-container ${className}`}
      style={containerStyle}
      data-device={deviceType}
      data-breakpoint={breakpoint.currentBreakpoint}
    >
      {children}
    </div>
  );
};

export default ResponsiveContainer;