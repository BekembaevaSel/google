import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FormName from '../components/mainLayout/FormName'
import NewFormCreator from '../components/mainLayout/NewFormCreator'
import { addNewForm } from '../store/Quize-Slice'
import { createDublicate } from '../store/Quize-Slice'

const NewForm = () => {
	const quizeList = useSelector((state) => state.quize.quizeList)

	const dispatch = useDispatch()

	useEffect(() => {
		localStorage.setItem('quiz', JSON.stringify(quizeList))
	}, [quizeList])


	const addNewFormHandler = (id) => {
		dispatch(addNewForm({ id }))
	}
	const dublicateForm = (id) => {
		dispatch(createDublicate({ id }))
	}
	return (
		<>
			<FormName
				addNewFormHandler={addNewFormHandler}
				dublicateForm={dublicateForm}
			/>

			{quizeList.map((el) => {
				return (
					<NewFormCreator
						key={el.id}
						id={el.id}
						answers={el.answers}
						quizeList={quizeList}
					/>
				)
			})}
		</>
	)
}

export default NewForm
