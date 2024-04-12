import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  deleteUser,
  deleteUserLoading,
  getAllUsers,
  getAllUsersLoading,
  getOneUser,
  getSingleUserLoading,
  searchUsersAge,
  searchUsersWithFirstNameOrLastName,
} from "./actions";
import { UserState } from "../../types/userState";

const initialState: UserState = {
  users: [],
  loading: false,
  letter: "",
  age: 100,
  user:null
};
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllUsers.fulfilled, (state: any, action) => {
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    });

    builder.addCase(
      searchUsersWithFirstNameOrLastName,
      (state: any, action: PayloadAction<string>) => {
        return {
          ...state,
          letter: action.payload,
        };
      }
    );
    builder.addCase(
      searchUsersAge,
      (state: any, action: PayloadAction<number>) => {
        return {
          ...state,
          age: action.payload,
        };
      }
    );
    builder.addCase(getOneUser.fulfilled, (state: any, action) => {
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    });
    builder.addCase(
      getSingleUserLoading,
      (state: any, action: PayloadAction<boolean>) => {
        return {
          ...state,
          loading: true,
        };
      }
    );

    builder.addCase(deleteUser.fulfilled, (state: any, action) => {
      return {
        ...state,
        loading: false,
      };
    });
    builder.addCase(
      deleteUserLoading,
      (state: any, action: PayloadAction<boolean>) => {
        return {
          ...state,
          loading: true,
        };
      }
    );

    builder.addCase(
      getAllUsersLoading,
      (state, action: PayloadAction<boolean>) => {
        return {
          ...state,
          loading: true,
        };
      }
    );
  },
});
