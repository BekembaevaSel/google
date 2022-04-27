import React, { useEffect } from 'react'
import styled from 'styled-components'
import { BsCircle } from 'react-icons/bs'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { deleteAnswer } from '../../store/Quize-Slice'
import { useDispatch } from 'react-redux'
import { changeVariants } from '../../store/Quize-Slice'
import { useState } from 'react'
import { INPUT_TYPES } from '../../utils/constants/general'

const OneVariantCart = ({ quiz, variant }) => {
	const dispatch = useDispatch()

	// const onChangeVariant = (e) => {
	// 	setVariant(e.target.value)
	// }

	// const [variantValue, setVariant] = useState('')

	// useEffect(() => {
	// 	setVariant(variant.value)
	// }, [variant])

	// const variantChangeHandler = (itemId) => {
	// 	dispatch(
	// 		changeVariants({
	// 			variantValue,
	// 			itemId,
	// 			quizId: quiz.id,
	// 		}),
	// 	)
	// }

	// const deleteOneAnswerHandler = () => {
	// 	dispatch(
	// 		deleteAnswer({
	// 			variantId: variant.id,
	// 			quizId: quiz.id,
	// 		}),
	// 	)
	// }

	// const isQuizTypeIsOneOutOfMany = () => {
	// 	return quiz.type === INPUT_TYPES.ONE_OUT_OF_MANY
	// }
	

	return (
		<>
			<QuestionControl>
				{/* <div>
					{isQuizTypeIsOneOutOfMany() ? (
						<BsCircle />
					) : (
						<input type='checkbox' />
					)}
				</div> */}
				{/* <div>
					<input
						defaultValue={variantValue}
						placeholder='Вариант'
						onChange={onChangeVariant}
						// onBlur={() => variantChangeHandler(quizId)}
						onBlur={variantChangeHandler}
					/>
					<input type='checkbox' />
				</div> */}
{/* 
				<div>
					<AiOutlineCloseCircle
						onClick={deleteOneAnswerHandler}
						fontSize='25px'
						color=' #5f6368'
					/>
				</div> */}
			</QuestionControl>
		</>
	)
}
const QuestionControl = styled.div`
	display: flex;
	align-items: center;
	width: 300px;
	justify-content: space-between;
	border-bottom: 1px solid #dadce0;
	margin-left: 50px;

	button {
		border: none;
	}
	input {
		width: 250px;
		height: 35px;
		border-radius: 5px;
		outline: none;
		border: #fff;
	}
`
export default OneVariantCart
