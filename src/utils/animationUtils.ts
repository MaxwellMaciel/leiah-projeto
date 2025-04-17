/**
 * Get animation delay class based on index or custom delay value
 * @param index - Index in a list or custom delay value
 * @returns Tailwind delay class
 */
export const getAnimationDelay = (index: number): string => {
  const delay = (index * 2) * 100;
  if (delay <= 0) return '';
  if (delay <= 100) return 'delay-100';
  if (delay <= 200) return 'delay-200';
  if (delay <= 300) return 'delay-300';
  if (delay <= 400) return 'delay-400';
  if (delay <= 500) return 'delay-500';
  if (delay <= 600) return 'delay-600';
  if (delay <= 700) return 'delay-700';
  return 'delay-800';
};

/**
 * Get animation class based on type
 * @param type - Animation type
 * @returns Tailwind animation class
 */
export const getAnimationClass = (type: 'slide-up' | 'slide-right' | 'slide-left' | 'scale' | 'fade' | 'bounce' | 'spin' | 'pulse'): string => {
  switch (type) {
    case 'slide-up': return 'animate-slide-up';
    case 'slide-right': return 'animate-slide-right';
    case 'slide-left': return 'animate-slide-left';
    case 'scale': return 'animate-scale';
    case 'fade': return 'animate-fade-in';
    case 'bounce': return 'animate-bounce';
    case 'spin': return 'animate-spin';
    case 'pulse': return 'animate-pulse';
    default: return '';
  }
};

/**
 * Generate combined animation and delay classes
 * @param type - Animation type
 * @param index - Index or delay factor
 * @returns Combined Tailwind classes
 */
export const getAnimation = (type: 'slide-up' | 'slide-right' | 'slide-left' | 'scale' | 'fade' | 'bounce' | 'spin' | 'pulse', index: number): string => {
  return `${getAnimationClass(type)} ${getAnimationDelay(index)}`;
};

/**
 * Get hover effect class
 * @param effect - Hover effect type
 * @returns Tailwind hover class
 */
export const getHoverEffect = (effect: 'lift' | 'scale' | 'none'): string => {
  switch (effect) {
    case 'lift': return 'hover-lift';
    case 'scale': return 'hover-scale';
    default: return '';
  }
};
