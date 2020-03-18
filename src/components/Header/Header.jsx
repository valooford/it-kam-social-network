import React from 'react';
import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';

function Header(props) {
  return (
    <header className={styles.header}>
      <div className={styles.login}>
        {(props.isAuthorized
          &&
          <span>
            <NavLink to='/profile'>{props.login}</NavLink>
            <span className={styles.quit} onClick={props.logout}>quit</span>
          </span>)
          || <NavLink to='/login'>Login</NavLink>}
      </div>
      <img className={styles.logo} src='https://avatanplus.com/files/resources/original/585fd85c3613c1593665283e.png' alt='logo' />
      <p className={styles.name}>Social Network</p>
    </header>
  );
}

export default Header;