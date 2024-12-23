import React, { createContext, useContext, useState } from 'react';

interface AnimationContextProps {
  animationsEnabled: boolean;
  setAnimationsEnabled: (enabled: boolean) => void;
}

const AnimationContext = createContext<AnimationContextProps | undefined>(undefined);

export const AnimationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [animationsEnabled, setAnimationsEnabled] = useState(true);

  return (
    <AnimationContext.Provider value={{ animationsEnabled, setAnimationsEnabled }}>
  {children}
  </AnimationContext.Provider>
);
};

export const useAnimation = (): AnimationContextProps => {
  const context = useContext(AnimationContext);
  if (!context) {
    throw new Error('useAnimation must be used within an AnimationProvider');
  }
  return context;
};
