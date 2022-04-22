import React, { useState } from 'react'
import styled from 'styled-components'

import { useDispatch } from 'react-redux'
import { BsCircle } from 'react-icons/bs'

// import { useEffect } from 'react'
import { changeVariants } from '../../store/Quize-Slice'

const FormList = ({ id, answers, dublicateForm, questionTitleHandler }) => {
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
				formId: id,
			}),
		)
	}

	return (
		<>
			<Wrapper>
				<div>
					<div className='initialForm'>
						{answers.map((el) => {
							return (
								<>
									<QuestionControl>
										<div>
											<BsCircle />
										</div>
										<div>
											<input
												defaultValue={el.value}
												placeholder='Вариант'
												onChange={onChangeVariant}
												onBlur={() =>
													variantChangeHandler(el.id)
												}
											/>
										</div>
									</QuestionControl>
								</>
							)
						})}
					</div>
				</div>
			</Wrapper>
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
	} */
	.initialForm {
		display: flex;
		align-items: center;
		flex-direction: column;
	}
`

export default FormList
