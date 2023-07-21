// userData.js
const SET_USER_DATA = 'userData/SET_USER_DATA';

export const setUserData = (userData) => ({
  type: SET_USER_DATA,
  payload: userData,
});

const initialState = {};

const userDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default userDataReducer;
