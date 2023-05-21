import { createSlice } from "@reduxjs/toolkit";
import { fetchUsersThunk, updateUsersFollowersThunk } from "./operations";

const listUsers = {
  users: [],
  isLoading: false,
  error: null,
};

const handlePending = (state) => {
  state.isLoading = true;
};

const handleFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  const newUsers = payload.filter(
    (newUser) => !state.users.some((user) => user.id === newUser.id)
  );

  state.users.push(...newUsers);
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handleFulfilledFollowers = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  const updateUsers = state.users.map((user) => {
    if (user.id === payload.id) {
      return { ...user, ...payload };
    } else {
      return user;
    }
  });
  state.users = updateUsers;
};

export const usersSlice = createSlice({
  name: "users",
  initialState: listUsers,
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsersThunk.pending, handlePending)
      .addCase(fetchUsersThunk.fulfilled, handleFulfilled)
      .addCase(fetchUsersThunk.rejected, handleRejected)
      .addCase(updateUsersFollowersThunk.pending, handlePending)
      .addCase(updateUsersFollowersThunk.fulfilled, handleFulfilledFollowers)
      .addCase(updateUsersFollowersThunk.rejected, handleRejected);
  },
});

export const usersReducer = usersSlice.reducer;
