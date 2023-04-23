import { createSlice } from "@reduxjs/toolkit";
import { UserInfo } from "../../models";
import { clearLocalStorageUser, persisLocalStorageUser } from "../../utilities";

const USER_KEY = "user";

export const EmtyUserState: UserInfo = {
  id: 0,
  name: "",
  email: "",
};


export const userSlice = createSlice({
  name: "user",
  initialState: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user") as string)
    : EmtyUserState,
  reducers: {
    createUser: (_state, action) => {
      const result = action.payload;
      persisLocalStorageUser<UserInfo>(USER_KEY, result);
      return { ...result };
    },
    updateUser: (state, action) => {
      const result = action.payload;
      persisLocalStorageUser<UserInfo>(USER_KEY, result);
      return { ...state, ...result };
    },
    resetUser: () => {
      clearLocalStorageUser(USER_KEY);
      return EmtyUserState;
    },
  },
});

export const { createUser, updateUser, resetUser } = userSlice.actions;

export default userSlice.reducer;
