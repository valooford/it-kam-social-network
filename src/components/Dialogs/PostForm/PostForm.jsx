import React from 'react';
import styles from './PostForm.module.css';
import { reduxForm, Field } from 'redux-form';
import { ValidatedInput } from '../../common/ValidatedComponents';
import { required, maxLength } from '../../../utils/validators';

let maxLength300 = maxLength(300);

function PostForm(props) {
  return (
    <form onSubmit={props.handleSubmit} className={styles.postForm}>
      <Field component={ValidatedInput} validate={[required, maxLength300]} name="message" className={styles.inputText} type='text' />
      <button className={styles.submit}>Send</button>
    </form>
  );
}


export default reduxForm({ form: "postForm" })(PostForm);