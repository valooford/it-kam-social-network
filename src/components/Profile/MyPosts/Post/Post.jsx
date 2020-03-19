import React from 'react';
import styles from './Post.module.css';

function Post(props) {
  return (
    <div className={styles.post}>
      <img className={styles.avatar} src={props.photo || "https://media.wired.com/photos/598e35fb99d76447c4eb1f28/1:1/w_722,h_722,c_limit/phonepicutres-TA.jpg"} alt='User' />
      <p className={styles.message}>{"\t" + props.message}&nbsp;</p>
    </div>
  );
}

export default Post;