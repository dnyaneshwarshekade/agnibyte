import React from 'react';
import { FaLaptopCode } from 'react-icons/fa'; // Import laptop icon
import styles from './LoadingScreen.module.css'; // Import your styles

const LoadingScreen: React.FC = () => {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.laptopContainer}>
        <FaLaptopCode className={styles.laptopIcon} />
        <div className={styles.codeLines}>
          <span className={styles.codeLine}></span>
          <span className={styles.codeLine}></span>
          <span className={styles.codeLine}></span>
        </div>
      </div>
      <h1 className={styles.logoText}>AgniByte</h1>
    </div>
  );
};

export default LoadingScreen;
