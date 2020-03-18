import React from 'react';
import styles from './Friends.module.css';

function Friends(props) {
  return <div className={styles.friends}>
    <div className={styles.header}>Friends:</div>
    <div className={styles.list}>
      {props.friendsList.map(function (f){
        return <div className={styles.friend} key={f.id}>
          <img className={styles.avatar} src={f.avatarSrc} alt='' />
          <div>{f.name}</div>
        </div>
      })}
    </div>
  </div>
}

export default Friends;