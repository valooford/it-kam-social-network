import React from 'react';
import styles from './Profile.module.css';
import UserInfo from './UserInfo/UserInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

function Profile(props) {
  return (
    <main className={styles.content}>
      <div>
        <img className={styles.picture} src='https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/the-grand-tetons-panoramic-in-winter-jackson-hole-wyoming-susan-rigdon-ervin.jpg' alt='' />
      </div>
      <UserInfo {...props}  />
      <div className={styles.posts}>
        <MyPostsContainer />
      </div>
    </main>
  );
}

export default Profile;