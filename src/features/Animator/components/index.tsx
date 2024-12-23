import React, { forwardRef } from 'react';
import { motion, MotionProps } from 'framer-motion';
import { useAnimation } from '../context/AnimationContext';

type MotionElement = keyof typeof motion;

interface AnimatedProps extends MotionProps {
  as?: MotionElement;
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement | HTMLDivElement>;
  whileHover?: MotionProps['whileHover'];
}

const Animated = forwardRef<unknown, AnimatedProps>(
  (
    { as = 'div', children, className, href, onClick, whileHover, ...props },
    ref
  ) => {
    const { animationsEnabled } = useAnimation();

    const MotionComponent: React.ElementType = motion[as];

    const animationProps = animationsEnabled
      ? { ...props, whileHover }
      : {
          ...props,
          animate: undefined,
          initial: undefined,
          exit: undefined,
          whileHover: undefined,
          transition: { duration: 0 },
        };

    return (
      <MotionComponent
        {...animationProps}
        className={className}
        href={href}
        onClick={onClick}
        ref={ref}
      >
        {children}
      </MotionComponent>
    );
  }
);

Animated.displayName = 'Animated';

export default Animated;
