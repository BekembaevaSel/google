import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import FormList from './FormList'
import MiniSideMenu from './MiniSideMenu'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { addNewForm } from '../../../store/Quize-Slice'

const NewForm = (props) => {
	const dispatch = useDispatch()

	const quizeList = useSelector((state) => state.quize.quizeList)
	const [showNewForm, setShowNewForm] = useState(false)

	const showNewFormHandler = () => {
		setShowNewForm((prevState) => !prevState)
	}
	const addNewFormHandler = () => {
		const formData = {
			id: Date.now(),
			questions: [],
			type: 'question',
		}
		dispatch(addNewForm(formData))
		console.log(formData)
	}
	// const content = showNewForm && <FormList />

	return (
		<>
			<NewFormControl>
				<div>
					<div>
						<textarea placeholder='Новая форма' wrap='on' />
					</div>
					<div>
						<textarea
							className='secondTextarea'
							placeholder='Описание'
							wrap='on'
						/>
					</div>
				</div>
				<MiniSideMenu
					showNewFormHandler={showNewFormHandler}
					addNewFormHandler={addNewFormHandler}
				/>
			</NewFormControl>

			{quizeList.map((quizeMaker) => {
				return (
					<FormList
						quizeMaker={quizeMaker.id}
						key={Math.random().toString()}
						questions={quizeMaker.questions}
					/>
				)
			})}
		</>
	)
}
const NewFormControl = styled.div`
	margin: 0 auto;
	background: #fff;
	width: 900px;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 25px;
	padding: 10px 0 0 15px;
	border-top: 1ch solid darkviolet;
	border-radius: 4px;
	box-shadow: 0px 2px 2px 2px lightgray;
	position: relative;
	& div:focus {
		border-left: 1ch solid blue;
	}
	textarea {
		width: 800px;
		height: 60px;
		font-size: 32px;
		font-weight: 400;
		color: #202124;
		border-bottom: 3p;
		border-top: none;
		border-left: none;
		border-right: none;
		padding: 20px 0 20px;
		outline: none;
		resize: none;
		overflow: hidden;

		font-family: Arial, Helvetica, sans-serif;
		color: darkgrey;
	}
	& textarea:focus {
		border-bottom: 3px solid blue;
		border-radius: 4px;
		transition: 0.5s;
	}
	.secondTextarea {
		font-size: 14px;
		margin-bottom: 20px;
	}
`
export default NewForm
