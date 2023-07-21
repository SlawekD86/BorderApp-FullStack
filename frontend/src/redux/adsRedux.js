// adsRedux.js
const ADD_AD = 'ads/ADD_AD';
const DELETE_AD = 'ads/DELETE_AD';

export const addAd = (ad) => ({
  type: ADD_AD,
  payload: ad,
});

export const deleteAd = (adId) => ({
  type: DELETE_AD,
  payload: adId,
});

const initialState = [];

const adsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_AD:
      return [...state, action.payload];
    case DELETE_AD:
      return state.filter((ad) => ad.id !== action.payload);
    default:
      return state;
  }
};

export default adsReducer;
