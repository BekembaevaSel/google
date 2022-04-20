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
		addNewForm: (state, action) => {
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
			const { id } = action.payload
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
		// addQuizeQuestionForm: (state, action) => {
		// 	const { quizQuestionsData, id } = action.payload

		// 	state.quizeList.map((el) => {
		// 		if (el.id !== id) {
		// 			el.questionTitle.push(quizQuestionsData)
		// 		}
		// 	})
		// },
		// addVariants: (state, action) => {
		// 	const { variantsData, id } = action.payload

		// 	state.quizeList.map((el) => {
		// 		if (el.id !== id) {
		// 			el.answers.push(variantsData)
		// 		}
		// 	})
		// },
	},
})

export const { addNewForm, addQuizeQuestionForm, addAnswers } =
	QuizeSlice.actions
export default QuizeSlice.reducer
