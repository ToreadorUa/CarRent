import { createSlice } from "@reduxjs/toolkit"
import { getCars } from "./operation";

const initialCars = {
    isLoading:false,
    cars: [],
    error: null,
}

const carsSlice = createSlice({
    name: 'cars',
    initialState: initialCars,
    extraReducers: (builder) => {
        builder.addCase(getCars.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        })
        builder.addCase(getCars.fulfilled, (state, action) => {
            state.cars = action.payload;
            state.isLoading = false;
        })
        builder.addCase(getCars.rejected, (state, action) => {
            state.error=action.payload
        })

     }
    
})


export const carReducer = carsSlice.reducer;