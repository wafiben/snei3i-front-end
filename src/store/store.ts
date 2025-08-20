import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./users/reducer";
import { authSlice } from "./auth/reducer";

export const store = configureStore({
  reducer: {
    userReducer: userSlice.reducer,
    authReducer :authSlice.reducer
  },
});
export type AppDispatch = typeof store.dispatch;
