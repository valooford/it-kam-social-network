import { getProfileInfo, getProfileStatus, setProfileStatus } from "../api/api";

const SET_PROFILE_INFO = "profile/SET-PROFILE-INFO";
const SET_STATUS_TEXT = "profile/SET-STATUS-TEXT"
const ADD_POST = "profile/ADD-POST";

const posts = [
  {postText: 'Hi! You are welcome!', id: 1},
  {postText: 'This is my profile page.', id: 2},
  {postText: 'Posts every day! Cya guys', id: 3}
];
const initialState = { 
  profileInfo: null,
  statusText: '',
  posts
};

function profileReducer (state = initialState, action) {
  switch (action.type) {
    case SET_PROFILE_INFO:
      return {
        ...state,
        profileInfo: action.profileInfo
      };
    case SET_STATUS_TEXT:
      return {
        ...state,
        statusText: action.statusText
      };
    case ADD_POST:
      if (action.postText === "") return state;
      return {
        ...state,
        posts: [...state.posts, { postText: action.postText, id: state.posts[state.posts.length-1].id+1 }]
      };
    default:
      return state;
  }
}

export default profileReducer;

export function addPost(post) {
  let postText;
  if (typeof post !== "number" && typeof post !== "string" && typeof post !== "object") {
    postText = "";
  } else {
    postText = post;
  }
  return (
    { type: ADD_POST, postText }
  );
}

function setProfileInfo(profileInfo) {
  return { type: SET_PROFILE_INFO, profileInfo };
}

function setStatusText(statusText) {
  return { type: SET_STATUS_TEXT, statusText };
}

export function getProfileData(userId) {
  return async (dispatch) => {
    const data = await getProfileInfo(userId);
    return dispatch(setProfileInfo(data));
  }
}

export function getUserStatus(id) {
  return async (dispatch) => {
    const status = await getProfileStatus(id)
    return dispatch(setStatusText(status));
  };
}

export function updateUserStatus(statusText) {
  return async (dispatch) => {
    const data = await setProfileStatus(statusText);
    if (data.resultCode === 0) {
      return dispatch(setStatusText(statusText));
    }
    return Promise.reject("unable to update status");
  };
}