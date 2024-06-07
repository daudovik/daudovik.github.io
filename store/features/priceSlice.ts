import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	price: '0.00',
	label: 'Item',
};

export const socketPrice = createSlice({
	name: "socketPrice",
	initialState,
	reducers: {
		setPrice: (state, action) => {
			state.price = action.payload
		},
		setLabel: (state, action) => {
			state.label = action.payload
		},
	},
});

export const { setPrice, setLabel } = socketPrice.actions

export default socketPrice.reducer;