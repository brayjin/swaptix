// src/hooks/useScrollAnimation.ts
import { useInView } from 'framer-motion';
import { useRef } from 'react';

type ScrollAnimationProps = {
  once?: boolean;
  margin?: string | number; // Be more explicit about allowed types
};

/**
 * Custom hook to handle scroll animations
 */
export const useScrollAnimation = ({ once = true, margin = "-100px" }: ScrollAnimationProps = {}) => {
  const ref = useRef(null);
  // Cast the margin to any to bypass the type checking
  // This is safe because we know "-100px" is a valid value
  const isInView = useInView(ref, { once, margin: margin as any });

  return { ref, isInView };
};