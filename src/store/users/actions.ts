import { createAction } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getUsers, getSingleUser, deleteSingleUser } from "../../api/user/user";
import {
  GET_ALL_USERS,
  GET_ALL_USERS_LOADING,
  SEARCH_USERS_WITH_LETTER,
  SEARCH_USERS_WITH_AGE,
  GET_SINGLE_USER_LOADING,
  Delete_SINGLE_USER_LOADING
} from "../constants";

export const getAllUsersLoading: any = createAction(GET_ALL_USERS_LOADING);

export const getAllUsers = createAsyncThunk(
  GET_ALL_USERS,
  async (_, { dispatch }) => {
    try {
      dispatch(getAllUsersLoading(true));
      const res = await getUsers();
      return res.users;
    } catch (error) {
      throw new Error("Failed to fetch users");
    } finally {
      dispatch(getAllUsersLoading(false));
    }
  }
);

export const searchUsersWithFirstNameOrLastName = createAction(
  SEARCH_USERS_WITH_LETTER,
  (data: string) => {
    return {
      payload: data,
    };
  }
);

export const searchUsersAge = createAction(
  SEARCH_USERS_WITH_AGE,
  (data: number) => {
    return {
      payload: data,
    };
  }
);

export const getSingleUserLoading: any = createAction(GET_SINGLE_USER_LOADING);
export const getOneUser = createAsyncThunk(
  getSingleUserLoading,
  async (id: string, { dispatch }) => {
    try {
      dispatch(getSingleUserLoading(true));
      const res = await getSingleUser(id);
      return res.user;
    } catch (error) {
      throw new Error("Failed to Get Single User.");
    } finally {
      dispatch(getSingleUserLoading(false));
    }
  }
);

export const deleteUserLoading: any = createAction(Delete_SINGLE_USER_LOADING);
export const deleteUser = createAsyncThunk(
  deleteUserLoading,
  async (id: string, { dispatch }) => {
    try {
      dispatch(deleteUserLoading(true));
      console.log(id)
      await deleteSingleUser(id);
    } catch (error) {
      throw new Error("Failed to Get Single User.");
    } finally {
      dispatch(deleteUserLoading(false));
    }
  }
);
