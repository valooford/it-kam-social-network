import React from 'react';
import styles from './Pagination.module.css';
import { NavLink } from 'react-router-dom';

function Pagination(props) {
  function handleClick(e) {
    if (!(e.target.classList.contains(styles.page))) return;
    let pageNumber = e.target.dataset.pagenumber;
    if( pageNumber ) {
      props.handleClick(pageNumber);
    }
  }

  var visiblePages = [];
  for(let i = 1; i <= props.pageCount; i++ ) {
    if (i < 2 || i > props.pageCount - 1 || Math.abs(props.pageNumber - i) < 2) {
      visiblePages.push(i);
    }
  }

  return (
    <div className={styles.paginator} onClick={handleClick}>
      {visiblePages.map((p, i) => {
        if (p === props.pageNumber) return <span className={styles.page + " " + styles.page_current} key={i}>{p}</span>;
        return <NavLink to={"/users/" + p} className={styles.page} data-pagenumber={p} key={i}>{p} </NavLink>;
      })}
    </div>
  );
}

export default Pagination;