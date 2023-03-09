import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    users: [],
    error: false,
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    logOut: (state) => {
      state.currentUser = null;
    },

    registerUserStart: (state) => {
      state.isFetching = true;
    },
    registerUserSuccess: (state, action) => {
      state.isFetching = false;
      state.users.push(action.payload);
    },
    registerUserFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  logOut,
  registerUserFailure,
  registerUserStart,
  registerUserSuccess,
} = userSlice.actions;
export default userSlice.reducer;
