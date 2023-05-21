import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

axios.defaults.baseURL = "https://64500800b61a9f0c4d31a1ad.mockapi.io/api/v1";

export const fetchUsersThunk = createAsyncThunk(
  "users/fetchAll",
  async (currentPage, thunkAPI) => {
    try {
      const response = await axios.get(`/users?page=${currentPage}&limit=3`);
      return response.data;
    } catch (e) {
      toast.error(e.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const updateUsersFollowersThunk = createAsyncThunk(
  "users/update",
  async (user, thunkAPI) => {
    try {
      const response = await axios.put(`/users/${user.id}`, { ...user });
      return response.data;
    } catch (e) {
      toast.error(e.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
