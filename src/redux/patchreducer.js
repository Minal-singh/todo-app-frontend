import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const patchtodo = createAsyncThunk(
  "patchtodo/patchtodo",
  async (newtodo) => {
    const res = await axios.put(`/api/todos/${newtodo.id}/`, newtodo);
    return res.data;
  }
);

const patchTodoSlice = createSlice({
  name: "patchtodo",
  initialState: {},
});

export default patchTodoSlice.reducer;
