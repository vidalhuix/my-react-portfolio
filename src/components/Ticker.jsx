import { useState, useEffect, useRef } from 'react';
import styles from './Ticker.module.css';

export const Ticker = () => {
  const [tickerText, setTickerText] = useState('Arnau Vidal ・Frontend Developer ・');
  const tickerContainerRef = useRef(null);

  // Function to update ticker text position
  const updateTickerPosition = () => {
    const containerWidth = tickerContainerRef.current.offsetWidth;
    const textWidth = tickerContainerRef.current.scrollWidth;

    // If text exceeds container width, reset position
    if (textWidth > containerWidth) {
      setTickerText(tickerText.substring(1) + tickerText[0]);
    }
  };

  // Set up ticker animation effect
  useEffect(() => {
    const tickerInterval = setInterval(updateTickerPosition, 50);
    return () => clearInterval(tickerInterval);
  }, [tickerText]);

  return (
    <div className={styles.tickerContainer} ref={tickerContainerRef}>
      <div className={styles.tickerText}>{tickerText}</div>
    </div>
  );
};

