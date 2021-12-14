import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const edittodo = createAsyncThunk(
  "edittodo/edittodo",
  async (newtodo) => {
    const res = await axios.put(`/api/todos/${newtodo.id}/`, newtodo);
    return res.data;
  }
);

const editTodoSlice = createSlice({
  name: "edittodo",
  initialState: {},
  reducers: {},
  extraReducers: {
    [edittodo.fulfilled]: (state, action) => {
      return action.payload;
    },
  },
});

export default editTodoSlice.reducer;
