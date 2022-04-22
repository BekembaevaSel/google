import { configureStore } from '@reduxjs/toolkit'
import quizeReducer from './Quize-Slice'

export default configureStore({
	reducer: {
		quize: quizeReducer,
	},
})

// -------------------------------------------------

// import { configureStore, combineReducers } from '@reduxjs/toolkit'
// import quizeReducer from './Quize-Slice'
// import {
// 	persistStore,
// 	persistReducer,
// 	FLUSH,
// 	REHYDRATE,
// 	PAUSE,
// 	PERSIST,
// 	PURGE,
// 	REGISTER,
// } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'



// const rootReducer = combineReducers({
// 	quize: quizeReducer,
// })

// const persistConfig = {
// 	key: 'root',
// 	storage,
// }

// const persistedReducer = persistReducer(persistConfig, rootReducer)

// const store = configureStore({
// 	reducer: persistedReducer,
// 	middleware: (getDefaultMiddleware) =>
// 		getDefaultMiddleware({
// 			serializableCheck: {
// 				ignoredActions: [
// 					FLUSH,
// 					REHYDRATE,
// 					PAUSE,
// 					PERSIST,
// 					PURGE,
// 					REGISTER,
// 					false,
// 				],
// 			},
// 		}),
// })
// export const persistor = persistStore(store)
// export default store
