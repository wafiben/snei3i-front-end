
import { createAsyncThunk, createAction } from "@reduxjs/toolkit";
import { LOG_IN ,LOG_OUT } from "../constants";

export const logInLoading = createAction(LOG_IN);

export const logOutLoading = createAction(LOG_OUT);

export const logIn = createAsyncThunk(
  LOG_IN,
  async (_, { dispatch }) => {
    dispatch(logInLoading());
  }
);