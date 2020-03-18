const friendsList = [
  {name: "Cake", id: 1, avatarSrc: "https://img.favpng.com/8/0/5/computer-icons-user-profile-avatar-png-favpng-6jJk1WU2YkTBLjFs4ZwueE8Ub.jpg"},
  {name: "Margo", id: 2, avatarSrc: "https://img.favpng.com/8/0/5/computer-icons-user-profile-avatar-png-favpng-6jJk1WU2YkTBLjFs4ZwueE8Ub.jpg"},
  {name: "Sanchez", id: 3, avatarSrc: "https://img.favpng.com/8/0/5/computer-icons-user-profile-avatar-png-favpng-6jJk1WU2YkTBLjFs4ZwueE8Ub.jpg"},
  {name: "Pepe", id: 4, avatarSrc: "https://img.favpng.com/8/0/5/computer-icons-user-profile-avatar-png-favpng-6jJk1WU2YkTBLjFs4ZwueE8Ub.jpg"},
  {name: "Butterflyflyfly", id: 5, avatarSrc: "https://img.favpng.com/8/0/5/computer-icons-user-profile-avatar-png-favpng-6jJk1WU2YkTBLjFs4ZwueE8Ub.jpg"}
];
const initialState = { friendsList };

function sidebarReducer (state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default sidebarReducer;