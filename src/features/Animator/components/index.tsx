import React from 'react';
import { motion, MotionProps, ForwardRefComponent } from 'framer-motion';
import { animationController } from '../animationController';

type MotionComponentType = keyof typeof motion;

interface AnimatedProps<T extends MotionComponentType = 'div'>
  extends MotionProps {
  as?: T;
  children?: React.ReactNode;
  className?: string;
  href?: string;
  ref?: React.Ref<HTMLElement>;
  onClick?: React.MouseEventHandler<HTMLElement>;
  type?: 'button' | 'submit' | 'reset';
}

const Animated = <T extends MotionComponentType = 'div'>({
  as = 'div' as T,
  children,
  className,
  href,
  ref,
  onClick,
  type,
  ...props
}: AnimatedProps<T>) => {
  const MotionComponent = motion[as] as ForwardRefComponent<
    HTMLElement,
    AnimatedProps<T>
  >;

  // Disable animation-related props if animations are disabled
  const animationProps = animationController.animationsEnabled
    ? props
    : {
        animate: undefined,
        initial: undefined,
        exit: undefined,
        transition: undefined,
        whileHover: undefined,
      };

  return (
    <MotionComponent
      {...animationProps}
      className={className}
      href={href}
      onClick={onClick}
      ref={ref}
      type={type}
    >
      {children}
    </MotionComponent>
  );
};

export default Animated;
