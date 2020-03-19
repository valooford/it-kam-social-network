import React, { useState } from 'react';
import styles from './UserInfo.module.css';
import UserStatus from './UserStatus';
import ProfileUpdateForm from './ProfileUpdateForm/ProfileUpdateForm';

function UserInfo(props) {
  const {
    profileInfo: {
      photos: {small: photo}, 
      fullName, 
      aboutMe,
      contacts,
      lookingForAJob,
      lookingForAJobDescription
    },
    profileInfo,
    statusText,
    myProfile,
    updateUserStatus,
    updateProfileInfo
  } = props;

  const [editMode, setEditMode] = useState(false);
  function enterEditMode() {
    setEditMode(true);
  }
  function exitEditMode() {
    setEditMode(false);
  }
  function onEditSubmit(info) {
    updateProfileInfo(info).then(() => {
      exitEditMode();
    }, (error) => {console.log(error)});
  }

  return (
    <div className={styles.container}>
      <img  className={styles.avatar} 
            src={photo || "https://media.wired.com/photos/598e35fb99d76447c4eb1f28/1:1/w_722,h_722,c_limit/phonepicutres-TA.jpg"} 
            alt='User' />
      <div className={styles.userInfo}>
        <p className={styles.name}>
          {fullName}
          <UserStatus statusText={statusText} updateUserStatus={updateUserStatus} myProfile={myProfile} />
        </p>
        { editMode
          ?
          <ProfileUpdateForm onSubmit={onEditSubmit} initialValues={profileInfo} onCloseWithoutSubmit={exitEditMode} />
          :
          <div className={styles.description} onDoubleClick={myProfile ? enterEditMode : ""}>
            {aboutMe || "no information"}
            <br />
            {lookingForAJob
              ?
              <span className={styles.lookingForAJob}>
                <img className={styles.lookingForAJob__image}
                  src="https://www.radan.com/images/icons/hexagon/darkblue/GENERAL_USE_DARK_BLUE_ICON_PRESENTER.png"
                  title="Looking for a job"
                  alt="Looking for a job: "
                /> {lookingForAJobDescription}
              </span>
              :
              null}
            <ul className={styles.contacts}>
              {Object.keys(contacts)
                .filter(c => !!contacts[c])
                .map(c => <li key={c}><a href={"https://" + contacts[c]}>{c}</a></li>)}
            </ul>
          </div>}
        
      </div>
    </div>
  );
}

export default UserInfo;