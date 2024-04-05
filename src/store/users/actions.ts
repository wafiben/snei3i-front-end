import { createAction } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getUsers } from "../../api/user/user";
import { GET_ALL_USERS, GET_ALL_USERS_LOADING } from "../constants";

export const getAllUsersLoading: any = createAction(
  GET_ALL_USERS_LOADING
);
export const getAllUsers = createAsyncThunk(
  GET_ALL_USERS,
  async (_, { dispatch }) => {
    try {
      dispatch(getAllUsersLoading(true));
      const res = await getUsers();
      return res;
    } catch (error) {
      throw new Error("Failed to fetch employeers.");
    } finally {
      dispatch(getAllUsersLoading(false));
    }
  }
);
