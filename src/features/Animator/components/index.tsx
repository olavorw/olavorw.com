import { motion, MotionProps } from 'framer-motion';
import { useAnimation } from '../context/AnimationContext';
import React from 'react';

interface AnimatedDivProps extends MotionProps {
  children: React.ReactNode;
}

const AnimatedDiv: React.FC<AnimatedDivProps> = ({ children, ...props }) => {
  const { animationsEnabled } = useAnimation();

  const noAnimationProps: MotionProps = {
    animate: undefined,
    initial: undefined,
    exit: undefined,
    transition: { duration: 0 },
  };

  return (
    <motion.div {...(animationsEnabled ? props : noAnimationProps)}>
      {children}
    </motion.div>
  );
};

export default AnimatedDiv;
