import React from 'react';
import styles from './Users.module.css';
import defaultImage from './../../../assets/images/dmitry.webp';
import Pagination from '../../common/Pagination/Pagination';
import Preloader from '../../common/Preloader';
import { NavLink } from 'react-router-dom';


function Users(props) {
  return (
    <main className={styles.content}>
      {props.isFetching && <Preloader />}
      <Pagination
        pageNumber={props.pageNumber}
        pageCount={Math.ceil(props.usersCount / props.pageSize)}
        handleClick={(newPageNumber) => {
          props.setPageNumber(newPageNumber);
          props.loadUsers(newPageNumber);
        }} />
      {props.users.map((u) => {
        return (
          <div className={styles.user} key={u.id}>
            <div>
              <NavLink to={"/profile/" + u.id}><img className={styles.avatar} src={u.photos.small || defaultImage} alt='' /></NavLink>
              <button 
              className={`${styles.button} ${styles.followButton}`} 
              disabled={props.followPending.some(id => u.id === id)} 
              onClick={() => {props.toggleFollow(u.followed, u.id)}}>{u.followed ? "Unfollow" : "Follow"}</button>
            </div>
            <div className={styles.info}>
              <p className={styles.location}>{u.location || "Unknown City"}</p>
              <h1 className={styles.name}>{u.name}</h1>
              <p className={styles.status}>{u.status || "no message"}</p>
            </div>
          </div>
        );
      })}
    </main>
  );
}

export default Users;

/*props.setUsers([
      {
        id: 1,
        name: "Dmitry K.",
        status: "I'm looking for a job right now",
        location: "Belarus, Minsk",
        avatarSrc: "https://avatars.mds.yandex.net/get-zen_doc/22526/pub_5bbe024d839d0f00aa91c347_5bbf559605a37c00ae5ce3a9/scale_1200",
        isFollowed: false
      },
      {
        id: 2,
        name: "Svetlana D.",
        status: "I'm so pretty",
        location: "Belarus, Minsk",
        avatarSrc: "https://avatars.mds.yandex.net/get-zen_doc/22526/pub_5bbe024d839d0f00aa91c347_5bbf559605a37c00ae5ce3a9/scale_1200",
        isFollowed: true
      },
      {
        id: 3,
        name: "Sergey B.",
        status: "Yasos Biba is my favorite mentor",
        location: "Belarus, Minsk",
        avatarSrc: "https://avatars.mds.yandex.net/get-zen_doc/22526/pub_5bbe024d839d0f00aa91c347_5bbf559605a37c00ae5ce3a9/scale_1200",
        isFollowed: false
      }
    ]);*/



// function Users(props) {
//   function loadUsers() {
//     if (props.users.length === 0) {
//       axios.get("https://social-network.samuraijs.com/api/1.0/users").then(function (response) {
//         props.setUsers(response.data.items);
//       });
//       //return <div>Loading...</div>;
//     }
//   }

//   return (
//     <main className={styles.content}>
//       {!props.users.length ? <button className={styles.button} onClick={loadUsers}>Load users</button> : ""}
//       {props.users.map(function (u) {

//         function handleFollow() {
//           props.switchFollow(u.id);
//         }

//         return (
//           <div className={styles.user} key={u.id}>
//             <div>
//               <img className={styles.avatar} src={u.photos.small || defaultImage} alt='' />
//               <button className={`${styles.button} ${styles.followButton}`} onClick={handleFollow}>{u.followed ? "Unfollow" : "Follow"}</button>
//             </div>
//             <div className={styles.info}>
//               <p className={styles.location}>{u.location || "Unknown City"}</p>
//               <h1 className={styles.name}>{u.name}</h1>
//               <p className={styles.status}>{u.status || "no message"}</p>
//             </div>
//           </div>
//         );
//       })}
//     </main>
//   );
// }