import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getAllUsers, getAllUsersLoading } from "./actions";
import { UserState } from "../../types/userState";

const initialState: UserState = {
  users: [],
  loading: false,
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
