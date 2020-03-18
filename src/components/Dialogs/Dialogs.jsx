import React from 'react';
import styles from './Dialogs.module.css';
import Interlocutor from './Interlocutor/Interlocutor';
import Message from './Message/Message';
import PostForm from './PostForm/PostForm';

function Dialogs(props) {
  function handlePostFormSubmit(fields) {
    props.sendMessage(fields.message);
  }
  return (
    <main className={styles.content}>
      <ul className={styles.dialogs}>
        {props.interlocutors.map((interlocutor, i) => <li key={i}><Interlocutor state={interlocutor}/></li>)}
      </ul>
      <div className={styles.postForm}>
        <PostForm onSubmit={handlePostFormSubmit} />
      </div>
      <div className={styles.messages}>
        {props.messages.map(function(m, i) {
          if (m.side === "right") {
            return <div className={styles.message_right} key={i}><Message state={m} /></div>
          }
          return <div className={styles.message_left} key={i}><Message state={m} /></div>
        })}
      </div>
    </main>
  );
}

export default Dialogs;