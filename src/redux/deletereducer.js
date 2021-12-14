import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const deletetodo = createAsyncThunk(
  "deletetodo/deletetodo",
  async (id) => {
    const res = await axios.delete(`/api/todos/${id}/`);
    return res.data;
  }
);

const deleteTodoSlice = createSlice({
  name: "deletetodo",
  initialState: {},
});

export default deleteTodoSlice.reducer;
