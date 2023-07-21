import React from 'react';
import { Link } from 'react-router-dom';
import AdBox from '../AdBox/AdBox';
import styles from './CollectionAds.module.scss';

const CollectionAds = ({ ads }) => {
  return (
    <div className={styles.collectionAds}>
      {ads.map((ad) => (
        <Link to={`/ads/${ad.id}`} key={ad.id}>
          <AdBox title={ad.title} description={ad.description} imageUrl={ad.imageUrl} />
        </Link>
      ))}
    </div>
  );
};

export default CollectionAds;
