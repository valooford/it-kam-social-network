import React from 'react';
import styles from './SendForm.module.css';
import { reduxForm, Field } from 'redux-form';
import { ValidatedTextarea } from '../../../common/ValidatedComponents';
import { required, maxLength } from '../../../../utils/validators';

let maxLength300 = maxLength(300);

function SendForm(props) {
  return (
    <form onSubmit={props.handleSubmit} className={[styles.sendForm, "clearfix"].join(" ")}>
      <Field component={ValidatedTextarea} validate={[required, maxLength300]} name="postText" className={styles.inputArea} placeholder='your news..' />
      <button className={styles.submit}>Send</button>
    </form>
  );
}

export default reduxForm({ form: "sendForm" })(SendForm);