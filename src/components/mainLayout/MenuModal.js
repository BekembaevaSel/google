import React from 'react'
import { BsRecordCircle } from 'react-icons/bs'
import { BsCardChecklist } from 'react-icons/bs'
import { ImCalendar } from 'react-icons/im'
import { MdAccessTime } from 'react-icons/md'
import { BiMenuAltLeft } from 'react-icons/bi'
import { AiOutlineUser } from 'react-icons/ai'
import { BsTelephonePlusFill } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'
import styled from 'styled-components'

// import UserName from '../../formContent/UserName'
// import UserEmail from '../../formContent/UserEmail'
// import TimeContent from '../../formContent/TimeContent'
// import UserPhoneNumber from '../formContent/UserPhoneNumber'
const options = [
	{
		id: 'id1',
		value: <AiOutlineUser fontSize='30px' color=' #5f6368' />,
		name: 'Имя',
	},
	{
		id: 'id2',
		value: <BsTelephonePlusFill fontSize='30px' color=' #5f6368' />,
		name: 'Номер телефона',
	},
	{
		id: 'id3',
		value: <AiOutlineMail fontSize='30px' color=' #5f6368' />,
		name: 'Почта',
	},
	{
		id: 'id4',
		value: <BiMenuAltLeft fontSize='30px' color=' #5f6368' />,
		name: 'Текст (строка)',
	},
	{
		id: 'id5',
		value: <BsRecordCircle fontSize='30px' color=' #5f6368' />,
		name: 'Один из списка',
	},
	{
		id: 'id6',
		value: <BsCardChecklist fontSize='30px' color=' #5f6368' />,
		name: 'Несколько из списка',
	},
	{
		id: 'id7',
		value: <ImCalendar fontSize='30px' color=' #5f6368' />,
		name: 'Дата',
	},
	{
		id: 'id8',
		value: <MdAccessTime fontSize='30px' color=' #5f6368'></MdAccessTime>,
		name: 'Время',
	},
]

const MenuModal = ({ onCloseModal, setSelectorValue }) => {
	const selectorHandler = (e) => {
		setSelectorValue(e.currentTarget.textContent)
	}

	return (
		<>
			<div onClick={() => onCloseModal(false)}>
				<ModalControl>
					<ModalContentControl>
						{options.map((el) => {
							return <div onClick={selectorHandler}>{el.value}{el.name}</div>
						})}
					</ModalContentControl>
				</ModalControl>
			</div>
		</>
	)
}

const ModalControl = styled.div`
	background: rgba(0, 0, 0, 0.75);
`

const ModalContentControl = styled.div`
	display: flex;
	justify-content: space-around;
	flex-direction: column;
	border-radius: 12px;
	background-color: white;
	box-shadow: 0px 3px 3px 3px lightgray;
	height: 500px;
	width: 250px;
	opacity: 1;
	transition: 5ms;
	position: absolute;
	top: 200px;
	cursor: pointer;
	margin: 20px;

	

	& div:hover {
		background: lightgrey;
		border-radius: 4px;
		cursor: pointer;
	}
`

export default MenuModal
