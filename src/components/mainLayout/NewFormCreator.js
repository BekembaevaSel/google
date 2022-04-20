import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import MenuModal from './MenuModal'
import Textarea from '../../UI/Textarea'
import { BsCardImage } from 'react-icons/bs'
import { addNewForm } from '../../store/Quize-Slice'
import FormList from './FormList'
import MiniSideMenu from './MiniSideMenu'

const NewFormCreator = ({ id, answers }) => {
	const [showMenuModal, setShowMenuModal] = useState(false)
	const [name, setName] = useState('')
	const [questionName, setQuestionName] = useState('')

	const showModalHandler = () => {
		setShowMenuModal((prevState) => !prevState)
	}

	const setSelectorValue = (text) => {
		setName(text)
	}

	const questionNameChangeHandler = (e) => {
		setQuestionName(e.target.value)
	}

	return (
		<>
			<Wrapper>
				<ListControl>
					<div>
						<div className='upSide'>
							<div>
								<Textarea
									placeholder='Вопрос'
									onChange={questionNameChangeHandler}
									value={questionName}
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
				<FormList id={id} answers={answers} />
			</Wrapper>
		</>
	)
}

// const QuestionControl = styled.div`
// 	align-items: center;
// 	margin-left: 35px;
// 	border-bottom: 1px solid #dadce0;
// 	padding: 20px;

// 	button {
// 		border: none;
// 	}
// `
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
	/* position: relative; */
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
