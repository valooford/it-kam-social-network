import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Preloader from '../components/common/Preloader';

function mapAuthorizedStateToProps(state) {
  return {
    isAuthorized: state.auth.isAuthorized
  }
}

export function withAuthRedirect(Component) {
  function AuthRedirectComponent(props) {
    if (props.isAuthorized === true) return <Component {...props} />; // authorized
    if (props.isAuthorized === undefined) return <Preloader />; // pending
    return <Redirect to='/login' />; // not authorized
  }
  return connect(mapAuthorizedStateToProps)(AuthRedirectComponent);
}