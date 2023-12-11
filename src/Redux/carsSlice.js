import { createSlice } from "@reduxjs/toolkit";
import { getAllCars, getCars } from "./operation";

const initialCars = {
  isLoading: false,
  cars: [],
  pagedCars:[],
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
    clearPagedCars(state, _) {
      state.pagedCars=[]
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getCars.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getCars.fulfilled, (state, action) => {
      state.pagedCars = [...state.pagedCars, ...action.payload];
      state.isLoading = false;
    });
    builder.addCase(getCars.rejected, (state, action) => {
      state.error = action.payload;
    });
    builder.addCase(getAllCars.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getAllCars.fulfilled, (state, action) => {
      state.cars = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getAllCars.rejected, (state, action) => {
      state.error = action.payload;
    });
  },
});

export const { addFavorite, removeFavorite, clearPagedCars } = carsSlice.actions;

export const carReducer = carsSlice.reducer;
