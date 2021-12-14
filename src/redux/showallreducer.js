import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchdata = createAsyncThunk("data/fetchdata", async () => {
  const res = await axios("/api/todos/");
  return res.data;
});

const dataSlice = createSlice({
  name: "data",
  initialState: { data: [] },
  extraReducers: {
    [fetchdata.fulfilled]: (state, action) => {
      return { ...state, data: action.payload };
    },
  },
});

export const getData = (state) => state.showall.data;
export default dataSlice.reducer;
