import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const addtodo = createAsyncThunk("addtodo/addtodo", async (newtodo) => {
  const res = await axios.post("/api/todos/", newtodo);
  return res.data;
});

const addTodoSlice = createSlice({
  name: "addtodo",
  initialState: {},
  reducers: {},
  extraReducers: {
    [addtodo.fulfilled]: (state, action) => {
      return action.payload;
    },
  },
});

export default addTodoSlice.reducer;
