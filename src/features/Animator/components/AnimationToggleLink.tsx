import React from 'react';
import { useAnimation } from '../context/AnimationContext';
import Animated from './index';

const AnimationToggleLink: React.FC = () => {
  const { animationsEnabled, toggleAnimations } = useAnimation();

  const baseClasses =
    'flex items-center gap-x-1 text-sm/6 font-semibold transition-all duration-200 ease-in-out group';
  const hoverClasses =
    'hover:text-transparent hover:bg-gradient-to-r hover:from-[#6717cd] hover:to-[#2871fa] hover:bg-clip-text hover:scale-105 hover:shadow-glow';

  return (
    <Animated
      as="a"
      href="#"
      onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        toggleAnimations();
      }}
      className={`${baseClasses} ${hoverClasses} text-sm text-slate-400 hover:text-transparent`}
      style={{
        textShadow:
          '0 0 10px rgba(72, 68, 228, 0.5), 0 0 20px rgba(72, 68, 228, 0.3), 0 0 30px rgba(72, 68, 228, 0.1)',
      }}
      whileHover={{ scale: 1.05 }}
    >
      {animationsEnabled ? 'Lower Animations' : 'Increase Animations'}
    </Animated>
  );
};

export default AnimationToggleLink;
