import { getUsersList, follow, unfollow } from "../api/api";

const SWITCH_FOLLOW = "users/SWITCH-FOLLOW";
const SET_USERS = "users/SET-USERS";
const SET_IS_FETCHING = "users/SET-IS-FETCHING";
const SET_PAGE_SIZE = "users/SET-PAGE-SIZE";
const SET_PAGE_NUMBER = "users/SET-PAGE-NUMBER";
const SET_USERS_COUNT = "users/SET-USERS-COUNT";
const UPDATE_FOLLOW_PENDING = "users/UPDATE-FOLLOW-PENDING";

const initialState = {
  users: [],
  isFetching: false,
  pageSize: 5,
  pageNumber: 1,
  usersCount: 0,
  followPending: []
};

let usersReducer = function (state = initialState, action) {
  switch (action.type) {
    case SWITCH_FOLLOW:
      return {
        ...state,
        users: state.users.map(function (u) {
          if (u.id === action.userID) {
            return { ...u, followed: !u.followed };
          }
          return u;
        })
      };
    case SET_USERS:
      return { ...state, users: [...action.users] };
    case SET_IS_FETCHING:
      return { ...state, isFetching: action.isFetching }
    case SET_PAGE_SIZE:
      return { ...state, pageSize: action.pageSize };
    case SET_PAGE_NUMBER:
      return { ...state, pageNumber: action.pageNumber };
    case SET_USERS_COUNT:
      return { ...state, usersCount: action.usersCount };
    case UPDATE_FOLLOW_PENDING:
      let followPending;
      if (state.followPending.some(id => action.id === id)) {
        followPending = state.followPending.filter(id => action.id !== id);
      } else {
        followPending = [...state.followPending, action.id];
      }
      return { ...state, followPending }
    default:
      return state;
  }
}

export default usersReducer;

export function switchFollow(userID) {
  return { type: SWITCH_FOLLOW, userID };
}

function setUsers(users) {
  return { type: SET_USERS, users };
}

function setIsFetching(isFetching) {
  return { type: SET_IS_FETCHING, isFetching: !!isFetching };
}

export function setPageSize(pageSize) {
  return { type: SET_PAGE_SIZE, pageSize: +pageSize };
}
export function setPageNumber(pageNumber) {
  return { type: SET_PAGE_NUMBER, pageNumber: +pageNumber };
}
function setUsersCount(usersCount) {
  return { type: SET_USERS_COUNT, usersCount: +usersCount };
}

function updateFollowPending(id) {
  return { type: UPDATE_FOLLOW_PENDING, id };
}

export function getUsers(pageNumber, pageSize) {
  return (dispatch) => {
    dispatch(setIsFetching(true));
    getUsersList(pageNumber, pageSize)
      .then((data) => {
        dispatch(setUsers(data.items));
        dispatch(setUsersCount(data.totalCount));
        dispatch(setPageNumber(pageNumber));
        dispatch(setIsFetching(false));
      }, (err) => {
        alert(err);
        dispatch(setIsFetching(false));
      });
  };
}

export function toggleFollow(isFollowed, id) {
  return async (dispatch) => {
    dispatch(updateFollowPending(id));
    let data = await (isFollowed ? unfollow(id) : follow(id));
    if (data.resultCode === 0) {
      dispatch(switchFollow(id));
    }
    dispatch(updateFollowPending(id));
  }
}