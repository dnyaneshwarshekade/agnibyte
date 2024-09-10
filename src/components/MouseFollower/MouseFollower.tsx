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

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      className={styles.robotFollower}
      style={{ left: position.x, top: position.y }}
    >
      <TbRobot size={50} className={styles.robotIcon} /> {/* Use BiBot icon */}
    </div>
  );
};

export default MouseFollower;
