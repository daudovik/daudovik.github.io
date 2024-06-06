import { combineReducers, configureStore  } from "@reduxjs/toolkit";
import {persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER,} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import priceSlice from "@/store/features/priceSlice";


const persistConfigParams = {
	key: 'root',
	version: 1,
	storage,
}

const persistConfigId = {
	key: 'id',
	version: 2,
	storage,
}

const rootReducer = combineReducers({
	price: priceSlice
},);

export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
});