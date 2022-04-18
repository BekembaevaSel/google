import { createSlice } from '@reduxjs/toolkit'

// const initialState = {
// 	quizeList: [],
// }

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
				answers: [
					{
						title: '',
						id: Math.random().toString(),
					},
				],
				correctAnsers: [],
				requirment: false,
			},
		],
	},
	reducers: {
		addNewForm: (state, action) => {
			state.quizeList.push(action.payload)
		},
		addQuizeQuestions: (state, action) => {
			const { quizQuestionsData, id } = action.payload

			state.quizeList.map((question) => {
				if (question.id !== id) {
					question.questions.push(quizQuestionsData)
				}
			})
		},
	},
})

export const { addNewForm, addQuizeQuestions } = QuizeSlice.actions
export default QuizeSlice.reducer
