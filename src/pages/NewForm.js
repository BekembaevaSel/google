import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FormName from '../components/mainLayout/FormName'
import { options } from '../components/mainLayout/MenuModal'
import NewFormCreator from '../components/mainLayout/NewFormCreator'
import { addNewForm } from '../store/Quize-Slice'
import { INPUT_TYPES } from '../utils/constants/general'

const NewForm = () => {
	const quizeList = useSelector((state) => state.quize.quizeList)
	const [defaultType, setDefaultType] = useState(options[0])
	const dispatch = useDispatch()

	const addNewFormHandler = () => {
		const newForm = {
			id: Date.now().toLocaleString(),
			type: defaultType,
			questionTitle: '',
			answers: [],
		}
		dispatch(addNewForm(newForm))
	}

	return (
		<>
			<FormName addNewFormHandler={addNewFormHandler} />
			{quizeList.map((form) => {
				return <NewFormCreator key={form.id} quizItem={form} />
			})}
		</>
	)
}

export default NewForm
