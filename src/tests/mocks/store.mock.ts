import { configureStore } from '@reduxjs/toolkit';

export const mockUserReducer = (
  state = { user: null, loading: false, error: null },
  action: any
) => {
  switch (action.type) {
    case 'user/getOneUser/pending':
      return { ...state, loading: true, error: null };
    case 'user/getOneUser/fulfilled':
      return { ...state, loading: false, user: action.payload };
    case 'user/getOneUser/rejected':
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};

export const createMockStore = (initialState = {}) => {
  return configureStore({
    reducer: {
      userReducer: mockUserReducer,
    },
    preloadedState: {
      userReducer: { user: null, loading: false, error: null, ...initialState },
    },
  });
};