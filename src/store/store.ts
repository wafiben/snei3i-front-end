import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./users/reducer";


export const store = configureStore({
  reducer: {
    userReducer: userSlice.reducer,
    // Other reducers...
  },
});
export type AppDispatch = typeof store.dispatch;
