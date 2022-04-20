import React, { useState } from 'react'
import { BsCircle } from 'react-icons/bs'
import styled from 'styled-components'
import Textarea from '../../UI/Textarea'
import { addVariants } from '../../store/Quize-Slice'
import { useDispatch } from 'react-redux'

const Question = ({ id}) => {
	const dispatch = useDispatch()

	const [oneQuestion, setOneQuestion] = useState('')

	// const addVariantsHandler = () => {
	// 	const variantsData = {
	// 		oneVariant: oneQuestion,
	// 		id: Math.random().toString(),
	// 	}
	// 	dispatch(addVariants({ variantsData, id }))
	// }

	return (
		<>
			<QuestionControl>
				<div className='initialForm'>
					<BsCircle />

					<Textarea
						placeholder='Вариант 1'
						style={{ fontsize: '10px' }}
						onChange={(e) => setOneQuestion(e.target.value)}
					/>
				</div>
				<button>
					Добавить еще вариант
				</button>
			</QuestionControl>
		</>
	)
}
const QuestionControl = styled.div`
	align-items: center;
	margin-left: 35px;
	border-bottom: 1px solid #dadce0;
	padding: 20px;

	button {
		border: none;
	}
`
export default Question
