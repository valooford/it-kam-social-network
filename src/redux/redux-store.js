import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunkMiddleware from 'redux-thunk'; // to be able to dispatch functions

import authReducer from "./auth-reducer";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import usersReducer from "./users-reducer";
import sidebarReducer from "./sidebar-reducer";
import {reducer as formReducer} from 'redux-form';
import appReducer from "./app-reducer";

let reducers = combineReducers({
  auth: authReducer,
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  usersPage: usersReducer,
  sidebar: sidebarReducer,
  form: formReducer,
  app: appReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

// let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;