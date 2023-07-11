import React, { createContext, useContext, useState, useCallback, useRef } from 'react';
import { OrbitControls as BaseOrbitControls } from '@react-three/drei';


export const OrbitControlsContext = createContext(undefined);
OrbitControlsContext.displayName = 'OrbitControlsContext';

export const OrbitControls = ({ children }) => {
  const [isEnabled, setIsEnabled] = useState(true);
  const ref = useRef();

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
      <BaseOrbitControls ref={ref} enabled={isEnabled} enableRotate={false} />
    </>
  );
};

export const useOrbitControls = () => {
  const context = useContext(OrbitControlsContext);

  if (!context) {
    throw 'MapControls context is undefined. Please make sure to call useMapControls as a child of <MapControls>.';
  }

  return context;
};