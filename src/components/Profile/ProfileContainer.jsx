import React from 'react';
import Profile from './Profile';
import { withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { getProfileData, getUserStatus, updateUserStatus, updateProfileInfo, updateProfileAvatar } from '../../redux/profile-reducer';
import Preloader from '../common/Preloader';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import { stopSubmit } from 'redux-form';

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

    const {getProfileData, updateProfileInfo: updateProfile, getUserStatus, myId, isAuthorized, ...props} = this.props;
    const updateProfileInfo = (profileInfo) => updateProfile(profileInfo, myId);
    return <Profile {...props} updateProfileInfo={updateProfileInfo} myProfile={+this.props.match.params.userId === myId} />;
  }
}

function mapDispatchToProps(dispatch) {
  return {
    updateProfileInfo(profileInfo, myId) {
      return dispatch(updateProfileInfo(profileInfo, myId)).catch((message) => { dispatch(stopSubmit("profileupdate", {_error: message})); throw message;});
    }
  };
}

export default compose(
  withRouter,
  withAuthRedirect,
  connect(mapStateToProps, { getProfileData, updateProfileAvatar, getUserStatus, updateUserStatus }),
  connect(null, mapDispatchToProps)
)(ProfileContainer)