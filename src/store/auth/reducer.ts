import { createSlice } from "@reduxjs/toolkit";
import { logIn } from "./actions";
import { authState } from "../../types/authState";

const initialState: authState = {
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(logIn.fulfilled, (state) => {
      return {
        ...state,       // copy previous state
        isLoggedIn: true, // update immutably
      };
    });
  },
});