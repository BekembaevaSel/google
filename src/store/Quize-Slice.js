import { createSlice } from '@reduxjs/toolkit'
import { INPUT_TYPES } from '../utils/constants/general'

const QuizeSlice = createSlice({
	name: 'quize',
	initialState: {
		title: '',
		description: '',
		id: new Date().toLocaleString(),
		quizeList: [
			{
				questionTitle: '',
				id: 'e1',
				type: {},
				answers: [],
			},
		],
	},
	reducers: {
		addNewForm: (state, action) => {
			const newForm = action.payload
			state.quizeList.push(newForm)
		},
		addAnswers: (state, action) => {
			const id = action.payload
			const currAnswers = state.quizeList.find((el) => el.id === id)

			currAnswers.answers.push({
				id: new Date().toLocaleString(),
				value: '',
			})
		},
		changeTypeOfQuestion: (state, action) => {
			const { contentType, id } = action.payload

			const currentForm = state.quizeList.find((el) => el.id === id)

			currentForm.type = contentType
		},
		saveQuestionTitle: (state, action) => {
			const { questionId, questionName } = action.payload
			const variants = state.quizeList.find((el) => el.id === questionId)
			variants.questionTitle = questionName
		},
		changeFormValue: (state, action) => {
			const { titleValue, descriptionValue } = action.payload

			state.title = titleValue
			state.description = descriptionValue
		},
		changeVariants: (state, action) => {
			const { variantValue, itemId, parentId } = action.payload
			const form = state.quizeList.find((el) => el.id === parentId)
			form.answers.map((el) => {
				if (el.id === itemId) {
					el.value = variantValue
				}
				return el
			})
		},
	},
})

// deleteAnswer: (state, action) => {
// 	const { quizId, parentId } = action.payload
// 	const current = state.quizeList.find((el) => el.id === parentId)
// 	state.quizeList.forEach((el) => {
// 		if (el.id === parentId) {
// 			el.answers = current.answers.filter(
// 				(item) => item.id !== quizId,
// 			)
// 		}
// 	})
// },

// 	deleteForm: (state, action) => {
// 		state.quizeList = state.quizeList.filter(
// 			(el) => el.id !== action.payload.id,
// 		)
// 	},

// }),

export const {
	addNewForm,
	addAnswers,
	createDublicate,
	changeFormValue,
	changeQuestionTitle,
	changeVariants,
	deleteForm,
	saveQuestionTitle,
	deleteAnswer,
	changeTypeOfQuestion,
} = QuizeSlice.actions

export default QuizeSlice.reducer
