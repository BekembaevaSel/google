import React, { useEffect } from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import MenuModal from './MenuModal'
import Textarea from '../../UI/Textarea'
import { BsCardImage } from 'react-icons/bs'
import FormList from './FormList'
import { saveQuestionTitle } from '../../store/Quize-Slice'
import { useDispatch } from 'react-redux'
import { deleteForm } from '../../store/Quize-Slice'
import { addAnswers } from '../../store/Quize-Slice'
import Button from '../../UI/Button'
import { INPUT_TYPES } from '../../utils/constants/general'
import FormFooter from './FormFooter'
import { changeTypeOfQuestion } from '../../store/Quize-Slice'

const NewFormCreator = ({ quizItem }) => {
	const { answers } = quizItem
	const [showMenuModal, setShowMenuModal] = useState(false)
	const [name, setName] = useState('')
	const [questionName, setQuestionTitle] = useState('')
	const dispatch = useDispatch()

	const showModalHandler = () => {
		setShowMenuModal((prevState) => !prevState)
	}

	const setSelectorValue = (contentType) => {
		console.log(contentType)
		dispatch(changeTypeOfQuestion({ contentType, id: quizItem.id }))
	}

	const onChange = (e) => {
		setQuestionTitle(e.target.value)
	}

	const questionTitleHandler = (questionId) => {
		dispatch(
			saveQuestionTitle({
				questionName,
				questionId,
			}),
		)
	}

	const deleteFormHandler = () => {
		dispatch(deleteForm({ id: quizItem.id }))
	}

	return (
		<>
			<Wrapper>
				<ListControl>
					<div>
						<div className='upSide'>
							<div>
								<Textarea
									defaultValue={questionName}
									placeholder='Вопрос'
									onChange={onChange}
									onClick={() =>
										questionTitleHandler(quizItem.id)
									}
								/>
							</div>
							<div>
								<BsCardImage fontSize='25px' color=' #5f6368' />
							</div>
							<div>
								<InputModalShow onClick={showModalHandler}>
									<div>
										{quizItem.type.value}
										<span>{quizItem.type.name}</span>
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
				</ListControl>

				{/* {answers.map((item) => ( */}
				<FormList
					quizItem={quizItem}
					answers={quizItem.answers}
					itemId={quizItem.id}
				/>
				{/* ))} */}

				<FormFooter deleteFormHandler={deleteFormHandler} />
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

	& button {
		border: none;
		font-size: 15px;
		color: blue;
	}
	& button:hover {
		color: blue;
		border-bottom: 2px solid blue;
		border-radius: 3px;
	}
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
export default NewFormCreator
