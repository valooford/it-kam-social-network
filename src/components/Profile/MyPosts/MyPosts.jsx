import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';
import SendForm from './SendForm/SendForm';

function MyPosts(props) {
  function handleSendMessage(fields) {
    props.addPost(fields.postText);
  }
  return (
    <div className={styles.posts}>
      <p className={styles.title}>My posts</p>
      <div className={styles.sendForm}>
        <SendForm onSubmit={handleSendMessage} />
      </div>
      {props.posts.map(p => <Post photo={props.photo} message={p.postText} key={p.id} />)}
    </div>
  );
}

export default MyPosts;