import React, { createContext, useContext, useState, useCallback, useRef } from 'react';
import { OrbitControls as BaseOrbitControls } from '@react-three/drei';

// Create a new context for OrbitControls, allows me to pass data through the component tree
// and allowing sharing of the state of Orbit Controls with other components
export const OrbitControlsContext = createContext(undefined);
OrbitControlsContext.displayName = 'OrbitControlsContext';

export const OrbitControls = ({ children }) => {
  // State to track whether Orbit Controls is enabled or disabled
  const [isEnabled, setIsEnabled] = useState(true);
  // ref to access OrbitControls component
  const ref = useRef();

  // Callback used to ensure that the refrences are not recreated on every render
  const handleEnableCamera = useCallback(() => {
    ref.current.saveState();
    ref.current.reset();
    setIsEnabled(true);
  }, []);
  const handleDisableCamera = useCallback(() => {
    setIsEnabled(false);
  }, []);

  const context = {
    isEnabled,
    enableCamera: handleEnableCamera,
    disableCamera: handleDisableCamera
  };

  return (
    <>
      <OrbitControlsContext.Provider value={context}>
        {children}
      </OrbitControlsContext.Provider>
      {/* TODO: Adjust polar angles */}
      <BaseOrbitControls 
      ref={ref} 
      enabled={isEnabled} 
      enableRotate={true} 
      
      />
    </>
  );
};

// Custom hook to access Orbit Controls context
export const useOrbitControls = () => {
  // Get the OrbitControls context
  const context = useContext(OrbitControlsContext);
  // If context is undefined throw an error
  if (!context) {
    throw 'OrbitControls context is undefined. Please make sure to call useOrbitControls as a child of <OrbitControls>.';
  }

  return context;
};