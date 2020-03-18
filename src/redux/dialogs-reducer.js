const SEND_MESSAGE = "dialogs/SEND-MESSAGE";

const interlocutors = [
  {name: "Bob", dialogId: 1, avatarSrc: "https://img.favpng.com/8/0/5/computer-icons-user-profile-avatar-png-favpng-6jJk1WU2YkTBLjFs4ZwueE8Ub.jpg"},
  {name: "Alice", dialogId: 2, avatarSrc: "https://img.favpng.com/8/0/5/computer-icons-user-profile-avatar-png-favpng-6jJk1WU2YkTBLjFs4ZwueE8Ub.jpg"},
  {name: "Clark", dialogId: 3, avatarSrc: "https://img.favpng.com/8/0/5/computer-icons-user-profile-avatar-png-favpng-6jJk1WU2YkTBLjFs4ZwueE8Ub.jpg"},
];
const messages = [
  {author: "Author", text: "Hi! Have a nice day bruh. See you next week! You are amazing!", side: "left"},
  {author: "Author", text: "Hi! Have a nice day bruh. See you next week! You are amazing!", side: "right"},
  {author: "Author", text: "Hi! Have a nice day bruh. See you next week! You are amazing!", side: "left"},
  {author: "Author", text: "Hi! Have a nice day bruh. See you next week! You are amazing!", side: "right"}
];
const initialState = {
  interlocutors,
  messages
};

function dialogsReducer (state = initialState, action) {
  switch (action.type) {
    case SEND_MESSAGE:
      if (action.message === "") return state;
      return {
        ...state,
        messages: [...state.messages, {author: "Author", text: action.message, side: "right"}]
      };
    default:
      return state;
  }
}

export default dialogsReducer;

export function sendMessage(message) {
  let messageText;
  if (typeof message !== "number" && typeof message !== "string" && typeof message !== "object") {
    messageText = "";
  } else {
    messageText = message;
  }
  return (
    {type: SEND_MESSAGE, message: String(messageText)}
  );
}