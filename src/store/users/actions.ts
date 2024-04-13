import { createAction } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getUsers,
  getSingleUser,
  deleteSingleUser,
  addUser,
  modifyUser,
} from "../../api/user/user";
import {
  GET_ALL_USERS,
  GET_ALL_USERS_LOADING,
  SEARCH_USERS_WITH_LETTER,
  SEARCH_USERS_WITH_AGE,
  GET_SINGLE_USER_LOADING,
  Delete_SINGLE_USER_LOADING,
  CREATE_SINGLE_USER_LOADING,
  MODIFY_SINGLE_USER_LOADING,
} from "../constants";
import { UserDto } from "../../types/userDto";

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
      await deleteSingleUser(id);
    } catch (error) {
      throw new Error("Failed to Get Single User.");
    } finally {
      dispatch(deleteUserLoading(false));
    }
  }
);

export const createUserLoading: any = createAction(CREATE_SINGLE_USER_LOADING);
export const createUser: any = createAsyncThunk(
  createUserLoading,
  async (user: UserDto, { dispatch }) => {
    try {
      dispatch(createUserLoading(true));
      await addUser(user);
    } catch (error) {
      throw new Error("Failed to add .");
    } finally {
      dispatch(deleteUserLoading(false));
    }
  }
);

export const modifyUserLoading: any = createAction(MODIFY_SINGLE_USER_LOADING);

export const modifySingleUser: any = createAsyncThunk(
  modifyUserLoading,
  async (userData, { dispatch }) => {
    try {
      const userDto = {
        firstName: userData?.firstName,
        lastName: userData?.lastName,
        age: userData?.age,
        city: userData?.city,
        gender:userData?.gender
      };
      dispatch(modifyUserLoading(true));
      await modifyUser(userData.id, userDto);
    } catch (error) {
      throw new Error("Failed to put .");
    } finally {
      dispatch(modifyUserLoading(false));
    }
  }
);


