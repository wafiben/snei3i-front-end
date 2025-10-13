import { createSlice } from "@reduxjs/toolkit";
import { authState } from "../../types/authState";
import { logIn } from "./actions";

const initialState: authState = {
  isLoggedIn: false,
  loading: false,
};

export const authSlice = createSlice({
  name: "authReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(logIn.fulfilled, (state) => {
      return {
        ...state,
        loading: true,
        isLoggedIn: true,
      };
    });
  },
});
