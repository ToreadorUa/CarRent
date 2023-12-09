import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://64fcb2a3605a026163aebe9d.mockapi.io/api/v1/";

export const getCars = createAsyncThunk("getCars", async (_, thunkAPI) => {
  try {
    const resp = await axios("adverts/");
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
