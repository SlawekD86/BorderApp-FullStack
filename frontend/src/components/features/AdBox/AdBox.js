import React from 'react';
import styles from './AdBox.module.scss';

const AdBox = ({ title, description, imageUrl }) => {
  return (
    <div className={styles.adBox}>
      {imageUrl && <img src={imageUrl} alt="Ad" className={styles.adImage} />}
      <h3 className={styles.adTitle}>{title}</h3>
      <p className={styles.adDescription}>{description}</p>
    </div>
  );
};

export default AdBox;
