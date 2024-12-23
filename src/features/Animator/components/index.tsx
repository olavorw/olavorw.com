import React from 'react';
import { motion, MotionProps } from 'framer-motion';
import { useAnimation } from '../context/AnimationContext';

type MotionElement = keyof typeof motion;

interface AnimatedProps extends MotionProps {
  as?: MotionElement;
  children: React.ReactNode;
  className?: string;
}

const Animated: React.FC<AnimatedProps> = ({
  as = 'div',
  children,
  className,
  ...props
}) => {
  const { animationsEnabled } = useAnimation();

  const MotionComponent: React.ElementType = motion[as];

  const animationProps = animationsEnabled
    ? { ...props, className }
    : {
        animate: undefined,
        initial: undefined,
        exit: undefined,
        transition: { duration: 0 },
        className,
      };

  return <MotionComponent {...animationProps}>{children}</MotionComponent>;
};

export default Animated;
