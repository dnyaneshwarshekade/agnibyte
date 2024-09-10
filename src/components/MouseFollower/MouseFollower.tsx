//Auther - Dnyaneshwar Shekade www.dnyaneshwarshekade.github.io

import { useState, useEffect } from 'react';
import { TbRobot } from "react-icons/tb";
import styles from './MouseFollower.module.css';

const MouseFollower: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const delay = 25; // Adjust delay if needed
      setPosition({ x: event.clientX - delay, y: event.clientY - delay });
    };

    const handleTouchMove = (event: TouchEvent) => {
      const delay = 25; // Adjust delay if needed
      if (event.touches.length > 0) {
        const touch = event.touches[0];
        setPosition({ x: touch.clientX - delay, y: touch.clientY - delay });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  return (
    <div
      className={styles.robotFollower}
      style={{ left: position.x, top: position.y }}
    >
      <TbRobot size={50} className={styles.robotIcon} />
    </div>
  );
};

export default MouseFollower;
