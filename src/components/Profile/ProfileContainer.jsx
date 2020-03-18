import React from 'react';
import Profile from './Profile';
import { withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { getProfileData, getUserStatus, updateUserStatus } from '../../redux/profile-reducer';
import Preloader from '../common/Preloader';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

function mapStateToProps(state) {
  return {
    profileInfo: state.profilePage.profileInfo,
    statusText: state.profilePage.statusText,
    myId: state.auth.authData.id
  };
}

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId || this.props.myId;
    this.props.getProfileData(userId);
    this.props.getUserStatus(userId);
  }
  render() {
    if (!this.props.match.params.userId && this.props.myId) return <Redirect to={"profile/" + this.props.myId} />;
    if (!this.props.profileInfo) return <Preloader />;
    
    let {getProfileData, getUserStatus, myId, isAuthorized, ...props} = this.props;
    return <Profile {...props} myProfile={+this.props.match.params.userId === myId} />;
  }
}

export default compose(
  withRouter,
  withAuthRedirect,
  connect(mapStateToProps, { getProfileData, getUserStatus, updateUserStatus })
)(ProfileContainer)