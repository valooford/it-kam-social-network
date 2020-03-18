import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { getAuthenticationData, logout } from '../../redux/auth-reducer';

function mapStateToProps(state) {
  return {
    auth: state.auth
  }
}

class HeaderContainer extends React.Component {
  componentDidUpdate(prevProps) {
    if (prevProps.auth.isAuthorized !== this.props.auth.isAuthorized && this.props.auth.isAuthorized) {
      this.props.getAuthenticationData();
    }
  }
  render() {
    let {auth, getAuthenticationData, ...props} = this.props;
    return <Header {...props} isAuthorized={auth.isAuthorized} login={auth.authData.login} />;
  }
}

export default connect(mapStateToProps, { getAuthenticationData, logout })(HeaderContainer);