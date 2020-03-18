import React from 'react';
import styles from './ValidatedComponents.module.css';

export function ValidatedComponent({input, meta, children, ...props}) {
  return (
    <span className={styles.componentContainer}>
      {React.createElement(children, {...input, ...props})}
      {meta.touched && meta.error && <span className={styles.errorMessage}>{meta.error}</span>}
    </span>
  );
}

export function ValidatedInput(props) {
  return <ValidatedComponent {...props}>input</ValidatedComponent>;
}

export function ValidatedTextarea(props) {
  return <ValidatedComponent {...props}>textarea</ValidatedComponent>;
}