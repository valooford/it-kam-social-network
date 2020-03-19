import React from 'react';
import styles from './ProfileUpdateForm.module.css';
import { reduxForm, Field } from 'redux-form';

function ProfileUpdateForm(props) {
  return <form className={styles.form} onSubmit={props.handleSubmit}>
    <button type='button' onClick={props.onCloseWithoutSubmit}>Exit</button>
    <button type='submit'>Save</button>
    {props.error && <span className={styles.error}>{props.error}</span>}
    <div className={styles.fields}>
      <label htmlFor='fullName'>Full name: </label><Field component='input' name='fullName' id='fullName' />
      <label htmlFor='aboutMe'>About me: </label><Field component='input' name='aboutMe' id='aboutMe' />
      <label htmlFor='github'>Github: </label><Field component='input' name='contacts.github' id='github' />
      <label htmlFor='website'>Website: </label><Field component='input' name='contacts.website' id='website' />
      <label htmlFor='lookingForAJob'>Looking for a job: </label><Field component='input' type='checkbox' name='lookingForAJob' id='lookingForAJob' />
      <label htmlFor='lookingForAJobDescription'>Description: </label><Field component='textarea' name='lookingForAJobDescription' id='lookingForAJobDescription' />
    </div>
  </form>
}

export default reduxForm({
  form: "profileupdate"
})(ProfileUpdateForm);