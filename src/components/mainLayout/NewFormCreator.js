import React, { useEffect } from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import MenuModal from './MenuModal'
import Textarea from '../../UI/Textarea'
import { BsCardImage } from 'react-icons/bs'
import FormList from './FormList'
import { saveQuestionTitle } from '../../store/Quize-Slice'
import { useDispatch } from 'react-redux'
import { VscCopy } from 'react-icons/vsc'
import { RiDeleteBin7Line } from 'react-icons/ri'
import { deleteForm } from '../../store/Quize-Slice'
import { addAnswers } from '../../store/Quize-Slice'

const NewFormCreator = ({ id, answers, quizeList }) => {
	const [showMenuModal, setShowMenuModal] = useState(false)
	const [name, setName] = useState('')
	const [questionName, setQuestionTitle] = useState('')
	const dispatch = useDispatch()

	

	const showModalHandler = () => {
		setShowMenuModal((prevState) => !prevState)
	}

	const setSelectorValue = (text) => {
		setName(text)
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

	const addVariant = () => {
		dispatch(addAnswers(id))
	}

	const deleteFormHandler = () => {
		dispatch(deleteForm({ id }))
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
									onBlur={() => questionTitleHandler(id)}
								/>
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
				</ListControl>

				<FormList
					id={id}
					answers={answers}
					key={Math.random().toString()}
				/>

				<div className='functionalIcons'>
					<div>
						<VscCopy fontSize='25px' color=' #5f6368' />
					</div>
					<div>
						<RiDeleteBin7Line
							onClick={deleteFormHandler}
							fontSize='25px'
							color=' #5f6368'
						/>
					</div>
					<button onClick={addVariant}>Добавить вариант</button>
				</div>
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

	.functionalIcons {
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
