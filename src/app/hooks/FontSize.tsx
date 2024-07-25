// useFontSizes.ts
import { useState, useEffect } from 'react';

export const useFontSizes = () => {
  const [baseFont, setBaseFont] = useState(0);
  const [scaleFactor, setScaleFactor] = useState(0);
  const [fontSizes, setFontSizes] = useState({
    xSmallFont: 0,
    smallFont: 0,
    mediumFont: 0,
    largeFont: 0,
    xLargeFont: 0,
  });

  const updateBaseFont = () => {
    const fontSizeBase = parseFloat(getComputedStyle(document.body).getPropertyValue('--font-size-base'));
    setBaseFont(fontSizeBase);
  };

  const updateScaleFactor = () => {
    const currentScaleFactor = parseFloat(getComputedStyle(document.body).getPropertyValue('--scale-factor'));
    setScaleFactor(currentScaleFactor);
  };

  const updateFontSizes = () => {
    const currentXSmallFont = baseFont / scaleFactor;
    const currentSmallFont = baseFont;
    const currentMediumFont = baseFont * scaleFactor;
    const currentLargeFont = currentMediumFont * scaleFactor;
    const currentXLargeFont = currentLargeFont * scaleFactor;

    setFontSizes({
      xSmallFont: currentXSmallFont,
      smallFont: currentSmallFont,
      mediumFont: currentMediumFont,
      largeFont: currentLargeFont,
      xLargeFont: currentXLargeFont,
    });
  };

  const updateAllValues = () => {
    updateBaseFont();
    updateScaleFactor();
    updateFontSizes();
  };

  useEffect(() => {
    updateAllValues();
    window.addEventListener('resize', updateAllValues);
    return () => window.removeEventListener('resize', updateAllValues);
  }, [baseFont, scaleFactor]);

  return fontSizes;
};
