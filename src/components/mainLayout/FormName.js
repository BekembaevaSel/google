import React from 'react'
import { useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import MiniSideMenu from './MiniSideMenu'
const FormName = ({addNewFormHandler}) => {
	// const { title, description } = useSelector((state) =>
	// 	console.log(state.quize),
	// )
	// const dispatch = useDispatch()
	const [formTitle, setFormTitle] = useState('')
	const [formDescription, setFormDescription] = useState('')
	const formChangeHandler = (e) => {
		setFormTitle(e.target.value)
	}
	const descriptionChangeHandler = (e) => {
		setFormDescription(e.target.value)
	}

	// const showNewFormHandler = () => {
	// 	setShowNewForm((prevState) => !prevState)
	// }

	return (
		<>
			<NewFormControl>
				<div>
					<div>
						<textarea
							placeholder='Новая форма'
							wrap='on'
							onChange={formChangeHandler}
							value={formTitle}
						/>
					</div>
					<div>
						<textarea
							className='secondTextarea'
							placeholder='Описание'
							wrap='on'
							onChange={descriptionChangeHandler}
							value={formDescription}
						/>
					</div>
				</div>
			</NewFormControl>
			<MiniSideMenu addNewFormHandler={addNewFormHandler}/>
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
export default FormName
