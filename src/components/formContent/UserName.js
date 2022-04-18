import React from 'react'
import { AiOutlineUser } from 'react-icons/ai'
import styled from 'styled-components'


const UserName = () => {
	return (
        <UserNameControl>
         <div>
			<input placeholder='Ваше имя' />
			<AiOutlineUser fontSize='25px' color=' #5f6368' />
		</div>   
        </UserNameControl>
		
	)
}
const UserNameControl = styled.div`
margin-left: 50px;
margin-top: 30px;
`

export default UserName
