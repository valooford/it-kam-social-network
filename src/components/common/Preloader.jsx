import React from 'react';
import styles from './Preloader.module.css';
import preloaderImage from './../../assets/images/preloader.gif';

function Preloader(props) {
  return <div className={styles.container}>
    <img className={styles.preloaderImage} src={preloaderImage} alt='Loading...' />
  </div>;
}

export default Preloader;