import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

var posts = [
  {message: 'Hi! You are welcome!'},
  {message: 'This is my profile page.'},
  {message: 'Posts every day! Cya guys'}
];

var interlocutors = [
  {name: "Bob", dialogId: 1, avatarSrc: "https://img.favpng.com/8/0/5/computer-icons-user-profile-avatar-png-favpng-6jJk1WU2YkTBLjFs4ZwueE8Ub.jpg"},
  {name: "Alice", dialogId: 2, avatarSrc: "https://img.favpng.com/8/0/5/computer-icons-user-profile-avatar-png-favpng-6jJk1WU2YkTBLjFs4ZwueE8Ub.jpg"},
  {name: "Clark", dialogId: 3, avatarSrc: "https://img.favpng.com/8/0/5/computer-icons-user-profile-avatar-png-favpng-6jJk1WU2YkTBLjFs4ZwueE8Ub.jpg"},
];

var messages = [
  {author: "Author", text: "Hi! Have a nice day bruh. See you next week! You are amazing!", side: "left"},
  {author: "Author", text: "Hi! Have a nice day bruh. See you next week! You are amazing!", side: "right"},
  {author: "Author", text: "Hi! Have a nice day bruh. See you next week! You are amazing!", side: "left"},
  {author: "Author", text: "Hi! Have a nice day bruh. See you next week! You are amazing!", side: "right"}
];

var friendsList = [
  {name: "Cake", avatarSrc: "https://img.favpng.com/8/0/5/computer-icons-user-profile-avatar-png-favpng-6jJk1WU2YkTBLjFs4ZwueE8Ub.jpg"},
  {name: "Margo", avatarSrc: "https://img.favpng.com/8/0/5/computer-icons-user-profile-avatar-png-favpng-6jJk1WU2YkTBLjFs4ZwueE8Ub.jpg"},
  {name: "Sanchez", avatarSrc: "https://img.favpng.com/8/0/5/computer-icons-user-profile-avatar-png-favpng-6jJk1WU2YkTBLjFs4ZwueE8Ub.jpg"},
  {name: "Pepe", avatarSrc: "https://img.favpng.com/8/0/5/computer-icons-user-profile-avatar-png-favpng-6jJk1WU2YkTBLjFs4ZwueE8Ub.jpg"},
  {name: "Butterflyflyfly", avatarSrc: "https://img.favpng.com/8/0/5/computer-icons-user-profile-avatar-png-favpng-6jJk1WU2YkTBLjFs4ZwueE8Ub.jpg"}
]

var store = {
  _state: {
    profilePage: { posts, postText: '' },
    dialogsPage: {
      interlocutors,
      messages,
      messageText: ''
    },
    navbar: { friendsList }
  },
  get state() {
    return this._state;
  },
  _renderApp() {
    console.log("renderApp(..) function hasn't been set");
  },
  setStateCallback(callback) {
    this._renderApp = callback;
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._renderApp(this._state);
  }
}

store.setStateCallback = store.setStateCallback.bind(store);
store.dispatch = store.dispatch.bind(store);

export default store;