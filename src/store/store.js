import { configureStore } from '@reduxjs/toolkit'
import quizeReducer from './Quize-Slice'

export default configureStore({
	reducer: {
		quize: quizeReducer,
	},
})
