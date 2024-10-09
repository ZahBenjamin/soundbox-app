import React, { useState } from 'react';

interface SoundButtonProps {
  soundFile: string;
}


const SoundButton: React.FC<SoundButtonProps> = ({ soundFile }) => {
  const [isPressed, setIsPressed] = useState(false)

  const playSound = () => {
    const audio = new Audio(soundFile);
    audio.play();
  };

  const handleMouseDown = () => {
    setIsPressed(true);
    playSound();
  };

  const handleMouseUp = () => {
    setIsPressed(false);
  };

  return (
    <>
    <button
    onMouseDown={handleMouseDown}
    onMouseUp={handleMouseUp}
    onMouseLeave={handleMouseUp}
    className={`beatbox-button ${isPressed ? 'pressed' : ''}`}
    >
    
    </button>
    </>
  )
}


export default  SoundButton