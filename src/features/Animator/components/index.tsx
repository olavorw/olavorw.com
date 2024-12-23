import React from 'react';
import { motion, MotionProps } from 'framer-motion';
import { useAnimation } from '../context/AnimationContext';

// Type for valid motion elements (e.g., 'div', 'li', 'a', etc.)
type MotionElement = keyof typeof motion;

interface AnimatedProps extends MotionProps {
  as?: MotionElement; // Optional, defaults to 'div'
  children: React.ReactNode;
}

const Animated: React.FC<AnimatedProps> = ({
  as = 'div', // Default to 'div'
  children,
  ...props
}) => {
  const { animationsEnabled } = useAnimation();

  // Dynamically select the motion element
  const MotionComponent: React.ElementType = motion[as];

  // Disable animations by overriding animation props
  const animationProps = animationsEnabled
    ? props
    : {
        animate: undefined,
        initial: undefined,
        exit: undefined,
        transition: { duration: 0 },
      };

  return <MotionComponent {...animationProps}>{children}</MotionComponent>;
};

export default Animated;
