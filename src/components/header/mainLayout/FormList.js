import React, { useState } from 'react'
import styled from 'styled-components'
import { BsCardImage } from 'react-icons/bs'
import { VscCopy } from 'react-icons/vsc'
import { RiDeleteBin7Line } from 'react-icons/ri'
import MenuModal from './MenuModal'
import { useDispatch, useSelector } from 'react-redux'
import { addNewForm } from '../../../store/Quize-Slice'
import { AiOutlineUser } from 'react-icons/ai'
import Question from '../../formContent/Question'
import { addQuizeQuestions } from '../../../store/Quize-Slice'
import { BsCircle } from 'react-icons/bs'
import Button from '../../../UI/Button'
import Textarea from '../../../UI/Textarea'
import { Link } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import UserPhoneNumber from '../../formContent/UserPhoneNumber'
import UserName from '../../formContent/UserName'
import UserEmail from '../../formContent/UserEmail'
import TimeContent from '../../formContent/TimeContent'
import DateContent from '../../formContent/DateContent'

const FormList = ({ questions, id }) => {
	const dispatch = useDispatch()
	const [showMenuModal, setShowMenuModal] = useState(false)
	const [name, setName] = useState('')

	// const [questionsNew, setQuestions] = useState([
	// 	{
	// 		questiontext: 'which is the capital city of Kyrgyzstan?',
	// 		questionType: 'radio',
	// 		options: [
	// 			{ optionText: 'Bishkek' },
	// 			{ optionText: 'something' },
	// 			{ optionText: 'whatever' },
	// 			{ optionText: 'dont know' },
	// 		],
	// 		open: true,
	// 		required: false,
	// 	},
	// ])

	const showModalHandler = () => {
		setShowMenuModal((prevState) => !prevState)
	}

	const setSelectorValue = (text) => {
		setName(text)
	}

	const addQuestionsHandler = () => {
		console.log('hhhh')
		const quizQuestionsData = {
			id: Math.random().toString(),
		}
		dispatch(addQuizeQuestions({ quizQuestionsData, id }))
	}

	return (
		<>
			<Wrapper>
				<ListControl>
					<div>
						<div className='upSide'>
							<div>
								<Textarea placeholder='Вопрос' />
							</div>
							<div>
								<BsCardImage fontSize='25px' color=' #5f6368' />
							</div>
							<div>
								<InputModalShow onClick={showModalHandler}>
									<div>
										<span>{name}</span>
									</div>
								</InputModalShow>

								{showMenuModal && (
									<MenuModal
										onCloseModal={showModalHandler}
										setSelectorValue={setSelectorValue}
									/>
								)}
							</div>
						</div>
					</div>
					<Routes>
						<Route path='phone' element={<UserPhoneNumber />} />
						<Route path='name' element={<UserName />} />
						<Route
							path='option'
							element={
								<Question
									questions={questions}
									addQuestionsHandler={addQuestionsHandler}
								/>
							}
						/>
						<Route path='email' element={<UserEmail />} />
						<Route path='time' element={<TimeContent />} />
						<Route path='date' element={<DateContent />} />
					</Routes>

					<div className='initialForm'>
						<BsCircle />

						<Textarea
							placeholder='Вариант 1'
							style={{ fontsize: '10px' }}
						/>
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
					</div>
				</ListControl>
			</Wrapper>
		</>
	)
}
const Wrapper = styled.div`
	background: #fff;
	width: 900px;
	margin: 0 auto;
	margin-top: 25px;
	padding: 10px 0 0 15px;
	border-top: 1ch solid darkviolet;
	border-radius: 4px;
	box-shadow: 0px 2px 2px 2px lightgray;
`
const ListControl = styled.div`
	.upSide {
		display: flex;
		align-items: center;
		justify-content: space-around;
	}

	.functionalIcons {
		min-width: 300px;
		display: flex;
		align-items: center;
		justify-content: center;
		justify-content: space-around;
		padding: 30px;
	}

	& textarea:focus {
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
	}
	& button:hover {
		color: blue;
		border-bottom: 4px solid blue;
		border-radius: 3px;
		width: 170px;
	}
	.initialForm {
		margin-left: 55px;
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
