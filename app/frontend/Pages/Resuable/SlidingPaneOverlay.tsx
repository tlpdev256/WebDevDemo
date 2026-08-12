// components/SlidingPanePortal.js
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import SlidingPane from 'react-sliding-pane';
import 'react-sliding-pane/dist/react-sliding-pane.css';

const SlidingPanePortal = ({ children, isOpen, onRequestClose, ...rest }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Return null during SSR or before mount to avoid hydration mismatch
  if (!mounted) return null;

  return createPortal(
    <SlidingPane
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      {...rest}
      // Ensure high z-index via className or style
      className="custom-sliding-pane" 
    >
      {children}
    </SlidingPane>,
    document.body
  );
};

export default SlidingPanePortal;   