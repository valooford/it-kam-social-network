import React from 'react';
import { connect } from 'react-redux';
import Users from './Users/Users';
import { setPageSize, setPageNumber, getUsers, toggleFollow } from '../../redux/users-reducer';
import { withRouter } from 'react-router-dom';
import { getUsersSuper, getIsFetching, getPageSize, getPageNumber, getUsersCount, getFollowPending } from '../../redux/users-selectors';

function mapStateToProps(state) {
  return {
    users: getUsersSuper(state),
    isFetching: getIsFetching(state),
    pageSize: getPageSize(state),
    pageNumber: getPageNumber(state),
    usersCount: getUsersCount(state),
    followPending: getFollowPending(state)
  };
}

class UsersContainer extends React.Component {
  loadUsers = (pageNumber = Number(this.props.match.params.pageNumber)) => {
    if (Number.isNaN(pageNumber) || pageNumber < 1) {
      pageNumber =  this.props.pageNumber;
    }
    this.props.getUsers(pageNumber, this.props.pageSize);
  }
  componentDidMount() {
    this.loadUsers();
  }
  render = () => {
    let {...props} = this.props;
    return <Users {...props} loadUsers={this.loadUsers} />
  }
}

export default withRouter(connect(mapStateToProps, {
  setPageSize, setPageNumber, getUsers, toggleFollow
})(UsersContainer));