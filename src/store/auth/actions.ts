import { createAsyncThunk, createAction } from "@reduxjs/toolkit";
import { LOG_IN_LOADING } from "../constants";
import { singnIn } from "../../api/user/user";
import { UserDto } from "../../types/userDto";

export const singnInLoading: any = createAction(LOG_IN_LOADING);

export const logIn: any = createAsyncThunk(
  singnInLoading,
  async (userInfo: UserDto, { dispatch }) => {
    try {
      dispatch(singnInLoading(true));
      const response = await singnIn(userInfo);
      localStorage.setItem("token", response.access_token);
      dispatch(singnInLoading(false));
    } catch (error: any) {
      return Error(error.message);
    } finally {
      dispatch(singnInLoading(false));
    }
  }
);
