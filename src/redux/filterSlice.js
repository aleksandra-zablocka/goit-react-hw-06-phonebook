import { createSlice } from "@reduxjs/toolkit";

const filterInitial = '';

const filterSlice = createSlice({
    name: 'filter',
    initialState: filterInitial,
    reducers: {
        setFilter(state, action) {
            return action.payload;
        }
    }
});

export const {setFilter} = filterSlice.actions;
export const filterReducer = filterSlice.reducer;