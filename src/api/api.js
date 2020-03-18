import * as axios from 'axios';

const defaultRequest = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "c0751fb8-7898-4d06-8b8c-9684bdb424ea"
  }
});

// Login&Logout
export function login(fields) {
  return defaultRequest.post("auth/login", fields).then(response => response.data);
}
export function logout() {
  return defaultRequest.delete("auth/login").then(response => response.data);
}

// Get authentication info
export function getAuthInfo() {
  return defaultRequest.get("auth/me").then(response => response.data);
};

// Get profile info
export function getProfileInfo(id) {
  return defaultRequest.get("profile/" + id).then(response => response.data);
};

// Get&Set profile status
export function getProfileStatus(id) {
  return defaultRequest.get("profile/status/" + id).then(response => response.data);
};
export function setProfileStatus(status) {
  return defaultRequest.put("profile/status", {status: status}).then(response => response.data);
};

// Get users list
export function getUsersList(pageNumber, pageSize) {
  return defaultRequest.get(`users?page=${pageNumber}&count=${pageSize}`).then(response => response.data);
};

// Follow&Unfollow
export function follow(id) {
  return defaultRequest.post("follow/" + id).then(response => response.data);
};
export function unfollow(id) {
  return defaultRequest.delete("follow/" + id).then(response => response.data);
};