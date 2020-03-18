import React from 'react';
import styles from './UserInfo.module.css';
import UserStatus from './UserStatus';

function UserInfo(props) {
  return (
    <div className={styles.userInfo}>
      <img  className={styles.avatar} 
            src={props.profileInfo.photos.small || "https://media.wired.com/photos/598e35fb99d76447c4eb1f28/1:1/w_722,h_722,c_limit/phonepicutres-TA.jpg"} 
            alt='User' />
      <p className={styles.name}>
        {props.profileInfo.fullName}
        <UserStatus statusText={props.statusText} updateUserStatus={props.updateUserStatus} myProfile={props.myProfile} />
        </p>
      <p className={styles.description}>{props.profileInfo.aboutMe || "no information"}</p>
    </div>
  );
}

export default UserInfo;

// return (
//   <div className={styles.userInfo}>
//     <img className={styles.avatar} src='https://media.wired.com/photos/598e35fb99d76447c4eb1f28/1:1/w_722,h_722,c_limit/phonepicutres-TA.jpg' alt='User' />
//     <p className={styles.name}>My Name</p>
//     <p className={styles.description}>Some information about me.</p>
//   </div>
// );