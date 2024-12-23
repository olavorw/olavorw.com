import React from 'react';
import { motion, MotionProps } from 'framer-motion';
import { useAnimation } from '../context/AnimationContext';

type MotionElement = keyof typeof motion;

interface AnimatedProps extends MotionProps {
  as?: MotionElement;
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: unknown;
  ref?: unknown;
  whileHover?: MotionProps['whileHover'];
}

const Animated: React.FC<AnimatedProps> = ({
  as = 'div',
  children,
  className,
  href,
  onClick,
  ref,
  whileHover,
  ...props
}) => {
  const { animationsEnabled } = useAnimation();

  const MotionComponent: React.ElementType = motion[as];

  const animationProps = animationsEnabled
    ? { ...props, className, href, onClick, ref, whileHover }
    : {
        animate: undefined,
        initial: undefined,
        exit: undefined,
        whileHover: undefined,
        transition: { duration: 0 },
        className,
        href,
        onClick,
        ref,
      };

  return <MotionComponent {...animationProps}>{children}</MotionComponent>;
};

export default Animated;
