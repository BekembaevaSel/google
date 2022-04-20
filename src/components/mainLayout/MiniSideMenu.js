import React from 'react'
import { BsPlusCircle } from 'react-icons/bs'
import { MdOutlineExitToApp } from 'react-icons/md'
import { BiText } from 'react-icons/bi'
import { BsCardImage } from 'react-icons/bs'
import { AiOutlinePlaySquare } from 'react-icons/ai'
import { BiGridAlt } from 'react-icons/bi'
import styled from 'styled-components'

const MiniSideMenu = ({ addNewFormHandler }) => {
	return (
		<MiniMenuControl>
			<section>
				<div>
					<BsPlusCircle
						fontSize='25px'
						color=' #5f6368'
						cursor='pointer'
						onClick={addNewFormHandler}
					/>
				</div>
				<div>
					<MdOutlineExitToApp
						fontSize='25px'
						color=' #5f6368'
						cursor={'pointer'}
					/>
				</div>
				<div>
					<BiText fontSize='25px' color=' #5f6368' cursor='pointer' />
				</div>
				<div>
					<BsCardImage
						fontSize='25px'
						color=' #5f6368'
						cursor='pointer'
					/>
				</div>
				<div>
					<AiOutlinePlaySquare
						fontSize='25px'
						color=' #5f6368'
						cursor='pointer'
					/>
				</div>
				<div>
					<BiGridAlt
						fontSize='25px'
						color=' #5f6368'
						cursor='pointer'
					/>
				</div>
			</section>
		</MiniMenuControl>
	)
}
const MiniMenuControl = styled.section`
	position: fixed;
	right: 200px;
	background: #fff;
	border-radius: 4px;
	box-shadow: 0px 2px 2px 2px lightgray;

	& div {
		align-items: center;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		height: 40px;
		width: 50px;
	}
	& div:hover {
		background: lightgray;
		border-radius: 4px;
	}
`
export default MiniSideMenu
