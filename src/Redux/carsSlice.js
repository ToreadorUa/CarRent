import { createSlice } from "@reduxjs/toolkit";
import { getCars } from "./operation";

const initialCars = {
  isLoading: false,
  cars: [],
  error: null,
  favorites: [],
  filter:[],
};

const carsSlice = createSlice({
  name: "cars",
  initialState: initialCars,
  reducers: {
    addFavorite (state, action) {
      state.favorites = [...state.favorites, action.payload];
    },
    removeFavorite (state, { payload }) {
            state.favorites = state.favorites.filter((id)=>id!==payload)
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCars.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getCars.fulfilled, (state, action) => {
      state.cars = [...state.cars, ...action.payload];
      state.isLoading = false;
    });
    builder.addCase(getCars.rejected, (state, action) => {
      state.error = action.payload;
    });
  },
});

export const { addFavorite, removeFavorite } = carsSlice.actions;

export const carReducer = carsSlice.reducer;
