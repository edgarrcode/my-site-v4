'use client';

import { useState, useEffect } from 'react';

export default function TypewriterEffect({
  texts,
  typeSpeed = 100,
  deleteSpeed = 50,
  pauseTime = 2000,
  className = ''
}) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    const currentText = texts[currentTextIndex];
    let timeout;

    if (isDeleting) {
      // Delete characters
      if (currentCharIndex > 0) {
        timeout = setTimeout(() => {
          setDisplayText(currentText.substring(0, currentCharIndex - 1));
          setCurrentCharIndex(currentCharIndex - 1);
        }, deleteSpeed);
      } else {
        // Finished deleting, move to next text
        setIsDeleting(false);
        setCurrentTextIndex((currentTextIndex + 1) % texts.length);
        timeout = setTimeout(() => {}, 500); // Brief pause before typing next
      }
    } else {
      // Type characters
      if (currentCharIndex < currentText.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentText.substring(0, currentCharIndex + 1));
          setCurrentCharIndex(currentCharIndex + 1);
        }, typeSpeed);
      } else {
        // Finished typing, start deleting after pause
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, pauseTime);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentTextIndex, currentCharIndex, isDeleting, texts, typeSpeed, deleteSpeed, pauseTime]);

  return (
    <h1 className={className}>
      <span>{displayText}</span>
      <span className="animate-pulse">|</span>
    </h1>
  );
}