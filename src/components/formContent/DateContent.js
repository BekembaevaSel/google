import React from 'react'
import { ImCalendar } from 'react-icons/im'
import styled from 'styled-components'

const DateContent = () => {
	return (
		<DateControl>
			<div>
				<ImCalendar fontSize='30px' color=' #5f6368' />
				<input type='date' />
			</div>
		</DateControl>
	)
}
const DateControl = styled.div`
	margin: 50px;
`
export default DateContent
