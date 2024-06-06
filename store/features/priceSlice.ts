import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	price: '0.00',
};

export const socketPrice = createSlice({
	name: "socketPrice",
	initialState,
	reducers: {
		setPrice: (state, action) => {
			state.price = action.payload
		},
	},
});

export const { setPrice } = socketPrice.actions

export default socketPrice.reducer;