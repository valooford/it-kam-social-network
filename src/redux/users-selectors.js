import { createSelector } from "reselect";

function getUsers(state) {
  return state.usersPage.users;
}

export const getUsersSuper = createSelector(getUsers, (users) => users);

export function getIsFetching(state) {
  return state.usersPage.isFetching;
}

export function getPageSize(state) {
  return state.usersPage.pageSize;
}

export function getPageNumber(state) {
  return state.usersPage.pageNumber;
}

export function getUsersCount(state) {
  return state.usersPage.usersCount;
}

export function getFollowPending(state) {
  return state.usersPage.followPending;
}