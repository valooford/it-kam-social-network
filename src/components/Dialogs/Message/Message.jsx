import React from 'react';
import styles from './Message.module.css';

function Message(props) {
  return (
    <div className={styles.message}>
      <div className={styles.info}>
        <img className={styles.avatar} src='https://img.favpng.com/8/0/5/computer-icons-user-profile-avatar-png-favpng-6jJk1WU2YkTBLjFs4ZwueE8Ub.jpg' alt=''></img>
        <span className={styles.authorName}>{props.state.author}</span>
      </div>
  <div className={styles.text}>{props.state.text}</div>
    </div>
  );

}

export default Message;