import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FormName from '../components/mainLayout/FormName'
import MiniSideMenu from '../components/mainLayout/MiniSideMenu'
import NewFormCreator from '../components/mainLayout/NewFormCreator'
import { addNewForm } from '../store/Quize-Slice'

const NewForm = () => {
	const quizeList = useSelector((state) => state.quize.quizeList)
	const dispatch = useDispatch()
	console.log(quizeList);
	const addNewFormHandler = (id) => {
		dispatch(addNewForm( id ))
	}
	return (
		<>
			<FormName addNewFormHandler={addNewFormHandler}/>
			{quizeList.map((el) => {
				return <NewFormCreator key={el.id} id={el.id} answers={el.answers} />
			})}
		</>
	)
}

export default NewForm
