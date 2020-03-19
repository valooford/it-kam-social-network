import React from 'react';
import styles from './Login.module.css';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { login } from '../../redux/auth-reducer';
import { Redirect } from 'react-router-dom';
import { ValidatedInput } from '../common/ValidatedComponents';
import { maxLength, required } from '../../utils/validators';

let maxLength15 = maxLength(15);
let maxLength30 = maxLength(30);

function LoginForm(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <label>login: <Field component={ValidatedInput} validate={[required, maxLength30]} name="login" /></label><br />
      <label>password: <Field component={ValidatedInput} validate={[required, maxLength15]} type="password" name="password" /></label><br />
      <label><Field component="input" type="checkbox" name="rememberMe" /> remember me</label><br />
      {props.captchaURL && <div>
        <img src={props.captchaURL} alt='Unable to load Captcha' /><br/>
        <Field component="input" name="captcha" placeholder='Type the symbols above...' />
      </div>}
      <button>Enter</button>
      {props.error && <span className={styles.error}>{props.error}</span>}
    </form>
  );
}

const LoginReduxForm = reduxForm({
  form: "login"
})(LoginForm);

function Login(props) {
  if (props.isAuthorized) {
    return <Redirect to={"profile/" + props.myId} />
  }
  let handleSubmit = ( {login:email, ...fields} ) => {
    fields.email = email;
    fields.rememberMe = fields.rememberMe === undefined ? false : fields.rememberMe;
    fields.captcha = fields.captcha || "";
    props.login(fields);
  }
  return (
    <div>
      <h1 className={styles.h1}>Login</h1>
      <LoginReduxForm onSubmit={handleSubmit} captchaURL={props.captchaURL} />
    </div>
  );
}

function mapStateToProps(state) {
  return {
    isAuthorized: state.auth.isAuthorized,
    myId: state.auth.authData.id,
    captchaURL: state.auth.captchaURL
  };
}

export default connect(mapStateToProps, { login })(Login);