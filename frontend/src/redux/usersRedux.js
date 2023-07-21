// usersRedux.js
const ADD_USER = 'users/ADD_USER';

export const addUser = (user) => ({
  type: ADD_USER,
  payload: user,
});

const initialState = [];

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default usersReducer;
