import React from 'react'
import { MdAccessTime } from 'react-icons/md'
import styled from 'styled-components'
const TimeContent = () => {
	return (
		<TimeControl>
			<div>
				<input placeholder='Время' />
				<div>
					<MdAccessTime
						fontSize='30px'
						color=' #5f6368'
					></MdAccessTime>
				</div>
			</div>
		</TimeControl>
	)
}

const TimeControl = styled.div`
	margin-left: 60px;

	input {
		border: 2px;
	}
`

export default TimeContent
