import React from 'react';
import { addPost } from '../../../redux/profile-reducer';
import { connect } from 'react-redux';
import MyPosts from './MyPosts';
import { compose } from 'redux';

function mapStateToProps(state) {
  return {
    photo: state.profilePage.profileInfo.photos.small,
    posts: state.profilePage.posts
  };
}

let MyPostsContainer = compose(React.memo, connect(mapStateToProps, { addPost })) (MyPosts);

export default MyPostsContainer;