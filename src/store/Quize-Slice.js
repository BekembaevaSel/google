import { createSlice } from '@reduxjs/toolkit'

const QuizeSlice = createSlice({
	name: 'quize',
	initialState: {
		title: '',
		description: '',
		id: Math.random().toString(),
		quizeList: [
			{
				questionTitle: '',
				id: Math.random().toString(),
				answers: [],
				required: false,
			},
		],
	},
	reducers: {
		addNewForm: (state) => {
			state.quizeList.push({
				id: Math.random().toString(),
				answers: [
					{
						id: Math.random().toString(),
					},
				],
				required: false,
			})
		},

		addAnswers: (state, action) => {
			const id = action.payload
			state.quizeList.map((el) => {
				if (el.id === id) {
					el.answers.push({
						id: Math.random().toString(),
						value: '',
						isCorrect: false,
					})
				}
			})
		},
		changeFormValue: (state, action) => {
			const { titleValue, descriptionValue } = action.payload

			state.title = titleValue
			state.description = descriptionValue
		},

		// changeQuestionTitle: (state, action) => {
		// 	const { questionName } = action.payload
		// 	console.log(action.payload)
		// 	state.questionTitle = questionName
		// },
		saveQuestionTitle: (state, action) => {
			const { questionId,  questionName } = action.payload
			const variants = state.quizeList.find(
				(el) => el.id === questionId,
			)
			variants.questionTitle = questionName
		},

		changeVariants: (state, action) => {
			const { variantValue, itemId, formId } = action.payload
			const form = state.quizeList.find((el) => el.id === formId)
			form.answers.map((el) => {
				if (el.id === itemId) {
					el.value = variantValue
				}
				return el
			})
		},
		deleteForm: (state, action) => {
			state.quizeList = state.quizeList.filter(
				(el) => el.id !== action.payload.id,
			)
		},

		// createDublicate: (state, action) => {
		// 	const { id } = action.payload
		// 	state.quizeList.map((el) => {
		// 		if (el.id === id) {
		// 			el.quizeList.push({
		// 				id: Math.random().toString(),
		// 			})
		// 		}
		// 	})
		// },
	},
})

export const {
	addNewForm,
	addAnswers,
	createDublicate,
	changeFormValue,
	changeQuestionTitle,
	changeVariants,
	deleteForm,
	saveQuestionTitle,
} = QuizeSlice.actions
export default QuizeSlice.reducer
