import React, { useState } from 'react'
import styled from 'styled-components'
import { INPUT_TYPES } from '../../utils/constants/general'
import { useDispatch } from 'react-redux'
import { changeVariants } from '../../store/Quize-Slice'
import { addAnswers } from '../../store/Quize-Slice'

const FormList = ({ quizItem, answers, itemId }) => {
	const dispatch = useDispatch()
	const [variantValue, setVariant] = useState('')

	const onChangeVariant = (e) => {
		setVariant(e.target.value)
	}


	const variantChangeHandler = (itemId) => {
		dispatch(
			changeVariants({
				variantValue,
				itemId,
				quizId: quizItem.id,
			}),
		)
	}

	const addVariant = () => {
		dispatch(addAnswers(itemId))
	}

	// const deleteOneAnswerHandler = () => {
	// 	dispatch(
	// 		deleteAnswer({
	// 			variantId: variant.id,
	// 			quizId: quiz.id,
	// 		}),
	// 	)
	// }

	// const isQuizTypeIsOneOutOfMany = () => {
	// 	return quizItem.type === INPUT_TYPES.ONE_OUT_OF_MANY
	// }

	
	let content
	switch (quizItem.type.type) {
		case INPUT_TYPES.NAME:
			content = (
				<>
					<QuestionControl>
						<div>
							<input
								placeholder='name...'
								type='text'
								onChange={onChangeVariant}
								onBlur={variantChangeHandler}
							/>
						</div>
					</QuestionControl>
					)
				</>
			)
			break
		case INPUT_TYPES.ONE_OUT_OF_MANY:
			content = (
				<>
					<QuestionControl>
						<div>
							<div>
								<input
									placeholder='variant'
									type='radio'

									// answersId={item}
								/>
								<input type='text' onChange={onChangeVariant} />
							</div>

							<button onClick={addVariant}>
								Добавить вариант
							</button>
						</div>
					</QuestionControl>
				</>
			)
			break
		case INPUT_TYPES.MANY_OUT_OF_MANY:
			content = (
				<>
					<QuestionControl>
						<div>
							<input
								type='checkbox'
								placeholder='variant'
								// answersId={el}
							/>
							<div>
								<button onClick={addVariant}>
									Добавить вариант
								</button>
							</div>
						</div>
					</QuestionControl>
				</>
			)
			break
		default:
	}
	return (
		<>
			<Wrapper>{content}</Wrapper>
		</>
	)
}

const Wrapper = styled.div`
	background: #fff;

	.upSide {
		display: flex;
		align-items: center;
		justify-content: space-around;
		padding: 30px;
	}
	/* .functionalIcons {
		min-width: 300px;
		display: flex;
		align-items: center;
		justify-content: center;
		justify-content: space-around;
		padding: 30px;
		cursor: pointer;
	}

	& button {
		border: none;
		font-size: 15px;
		color: blue;
	}
	& button:hover {
		color: blue;
		border-bottom: 2px solid blue;
		border-radius: 3px;
		/* width: 170px; */
	/* } */
	.initialForm {
		display: flex;
		align-items: center;
		flex-direction: column;
	}
`
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
		width: 50px;
		height: 20px;
		border-radius: 5px;
		outline: none;
		border: #fff;
	}
`

export default FormList
