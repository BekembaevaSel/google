import React, { useState } from 'react'
import styled from 'styled-components'
import { BsCardImage } from 'react-icons/bs'
import { VscCopy } from 'react-icons/vsc'
import { RiDeleteBin7Line } from 'react-icons/ri'
import MenuModal from './MenuModal'
import { useDispatch, useSelector } from 'react-redux'
import Question from '../formContent/Question'
import { addQuizeQuestionForm } from '../../store/Quize-Slice'
import { BsCircle } from 'react-icons/bs'
import Textarea from '../../UI/Textarea'
import { addAnswers } from '../../store/Quize-Slice'

const FormList = ({ id, answers }) => {
	const dispatch = useDispatch()
	const addQuestionsHandler = (id) => {
		dispatch(addAnswers({ id }))
	}

	return (
		<>
			<Wrapper>
				<ListControl>
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
													placeholder='Вариант 1'
													style={{ fontsize: '10px' }}
												/>
											</div>
										</QuestionControl>
									</>
								)
							})}
						</div>
					</div>

					<div className='functionalIcons'>
						<div>
							<VscCopy fontSize='25px' color=' #5f6368' />
						</div>
						<div>
							<RiDeleteBin7Line
								fontSize='25px'
								color=' #5f6368'
							/>
						</div>
						<button onClick={() => addQuestionsHandler(id)}>
							Добавить еще вариант
						</button>
					</div>
				</ListControl>
			</Wrapper>
		</>
	)
}
const QuestionControl = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 300px;
	justify-content: space-between;
	margin-left: 35px;
	border-bottom: 1px solid #dadce0;
	margin-left: 50px;

	button {
		border: none;
	}

	input {
		width: 200px;
	}
`
const Wrapper = styled.div`
	background: #fff;
	/* width: 900px;
	margin: 0 auto;
	margin-top: 25px;
	padding: 10px 0 0 15px; */
`
const ListControl = styled.div`
	.upSide {
		display: flex;
		align-items: center;
		justify-content: space-around;
		padding: 30px;
	}

	.functionalIcons {
		min-width: 300px;
		display: flex;
		align-items: center;
		justify-content: center;
		justify-content: space-around;
		padding: 30px;
	}

	& input:focus {
		border-bottom: 3px solid blue;
		border-radius: 4px;
		transition: 0.5s;
	}
	& input {
		width: 250px;
		height: 35px;
		border-radius: 5px;
		outline: none;
		border: #fff;
	}
	& button {
		border: none;
		font-size: 15px;
		color: blue;
	
	& button:hover {
		color: blue;
		border-bottom: 4px solid blue;
		border-radius: 3px;
		width: 170px;
	}
	.initialForm {
		display: flex;
		align-items: center;
		flex-direction: column;
	}
`

const InputModalShow = styled.div`
	position: relative;
	background: lightgray;
	display: flex;
	align-items: center;
	cursor: pointer;
	width: 250px;
	height: 35px;
	border-radius: 5px;
	outline: none;
	border: 3px #fff;

	& span {
		margin-left: 30px;
	}
`
export default FormList
