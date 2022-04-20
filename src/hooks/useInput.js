import { useState } from 'react'

const useInput = () => {
	const [enteredValue, setEnteredValue] = useState('')
	const changeHandler = (e) => {
		setEnteredValue(e.target.value)
	}
	return {
		enteredValue,
		changeHandler,
	}
}

export default useInput
