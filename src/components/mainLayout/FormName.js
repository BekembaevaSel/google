import React, { useRef } from 'react'
import styled from 'styled-components'
import MiniSideMenu from './MiniSideMenu'
import { useDispatch } from 'react-redux'
import { changeFormValue } from '../../store/Quize-Slice'

const FormName = ({ addNewFormHandler }) => {
	const titleRef = useRef()
	const descriptionRef = useRef()

	const dispatch = useDispatch()

	const formChangeHandler = (e) => {
		const TitleValues = {
			titleValue: titleRef.current.value,
			descriptionValue: descriptionRef.current.value,
		}
		dispatch(changeFormValue(TitleValues))
	}

	return (
		<>
			<NewFormControl>
				<div>
					<div>
						<textarea
							placeholder='Новая форма'
							wrap='on'
							onBlur={formChangeHandler}
							ref={titleRef}
						/>
					</div>
					<div>
						<textarea
							className='secondTextarea'
							placeholder='Описание'
							wrap='on'
							onBlur={formChangeHandler}
							ref={descriptionRef}
						/>
					</div>
				</div>
			</NewFormControl>
			<MiniSideMenu addNewFormHandler={addNewFormHandler} />
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
		color: black;
		border-bottom: 3p;
		border-top: none;
		border-left: none;
		border-right: none;
		padding: 20px 0 20px;
		outline: none;
		resize: none;
		overflow: hidden;
		font-family: Arial, Helvetica, sans-serif;
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
