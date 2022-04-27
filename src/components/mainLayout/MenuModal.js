import React from 'react'
import { BsRecordCircle } from 'react-icons/bs'
import { BsCardChecklist } from 'react-icons/bs'
import { AiOutlineUser } from 'react-icons/ai'
import styled from 'styled-components'
import { INPUT_TYPES } from '../../utils/constants/general'
import { useDispatch } from 'react-redux'
import { changeTypeOfQuestion } from '../../store/Quize-Slice'

export const options = [
	{
		id: 'id5',
		// value: <BsRecordCircle fontSize='30px' color=' #5f6368' />,
		name: 'Один из списка',
		type: INPUT_TYPES.ONE_OUT_OF_MANY,
	},
	{
		id: 'id1',
		// value: <AiOutlineUser fontSize='30px' color=' #5f6368' />,
		name: 'Имя',
		type: INPUT_TYPES.NAME,
	},

	{
		id: 'id6',
		// value: <BsCardChecklist fontSize='30px' color=' #5f6368' />,
		name: 'Несколько из списка',
		type: INPUT_TYPES.MANY_OUT_OF_MANY,
	},
]

const MenuModal = ({ onCloseModal, setSelectorValue, id }) => {
	const dispatch = useDispatch()

	const changeSelectValueWithModal = (contentType) => {
		setSelectorValue(contentType)
	}

	return (
		<>
			<div onClick={() => onCloseModal(false)}>
				<ModalControl>
					<ModalContentControl>
						{options.map((el) => {
							return (
								<div
									key={el.id}
									onClick={() =>
										changeSelectValueWithModal(el)
									}
								>
									{el.value}
									{el.name}
								</div>
							)
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
	margin-right: 40px;
	flex-direction: column;
	border-radius: 12px;
	background-color: white;
	box-shadow: 0px 3px 3px 3px lightgray;
	height: 250px;
	width: 250px;
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
