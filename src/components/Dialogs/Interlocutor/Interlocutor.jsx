import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Interlocutor.module.css';

function Interlocutor(props) {
  return (
    <span className={styles.interlocutor}>
      <img className={styles.avatar} src={props.state.avatarSrc} alt=''></img>
      <NavLink className={styles.name} to={`/dialogs/${props.state.dialogId}`} activeClassName={styles.name_active}>{props.state.name}</NavLink>
    </span>
  );
}

export default Interlocutor;