const INITIALIZE_APP = "app/INITIALIZE-APP";

let initialState = {
  initialized: false
}

function appReducer(state = initialState, action) {
  switch(action.type) {
    case INITIALIZE_APP:
      return {
        ...state,
        initialized: true
      }
    default:
      return state;
  }
}

export default appReducer;

export function initializeApp() {
  return { type: INITIALIZE_APP };
}