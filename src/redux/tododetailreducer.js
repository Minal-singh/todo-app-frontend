import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const tododetail = createAsyncThunk(
  "tododetail/tododetail",
  async (id) => {
    const res = await axios(`/api/todos/${id}/`);
    return res.data;
  }
);

const tododetailSlice = createSlice({
  name: "tododetail",
  initialState: {},
  extraReducers: {
    [tododetail.fulfilled]: (state, action) => {
      return { ...action.payload };
    },
  },
});

export const getTodoDetail = (state) => state.tododetail;
export default tododetailSlice.reducer;
