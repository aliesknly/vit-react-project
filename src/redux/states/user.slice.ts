import { createSlice } from "@reduxjs/toolkit";
import { UserInfo } from "../../models";

export const EmtyUserState: UserInfo = {
  id: "",
  name: "",
  email: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState: EmtyUserState,
  reducers: {
    createUser: (_state, action) => ({ ...action.payload }),
    updateUser: (state, action) => ({ ...state, ...action.payload }),
    resetUser: () => EmtyUserState,
  },
});

export const { createUser, updateUser, resetUser } = userSlice.actions;

export default userSlice.reducer;
