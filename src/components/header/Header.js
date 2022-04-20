import React from 'react'
import styled from 'styled-components'
import { Link, Outlet } from 'react-router-dom'
import { MdOutlinePalette } from 'react-icons/md'
import { AiOutlineStar } from 'react-icons/ai'
import { BsArrow90DegLeft } from 'react-icons/bs'
import { BsArrow90DegRight } from 'react-icons/bs'
import { AiOutlineEye } from 'react-icons/ai'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { AiOutlineUser } from 'react-icons/ai'
import Button from '../../UI/Button'

const Header = () => {
	return (
		<>
			<WrapperForHeader>
				<HeaderControl>
					<div className='leftSide'>
						<img
							className='logo'
							src='https://img.icons8.com/color/48/000000/google-forms-new-logo-1.png'
							alt='logo'
						/>
						<span>Новая Форма</span>

						<AiOutlineStar
							fontSize='25px'
							color=' #5f6368'
							cursor='pointer'
						/>
					</div>
					<div className='rightSide'>
						<div>
							<MdOutlinePalette
								fontSize='30px'
								color=' #5f6368'
								cursor='pointer'
							/>
						</div>
						<div>
							<AiOutlineEye
								fontSize='30px'
								color=' #5f6368'
								cursor='pointer'
							/>
						</div>
						<div>
							<BsArrow90DegLeft
								fontSize='25px'
								color=' #5f6368'
								cursor='pointer'
							/>
						</div>
						<div>
							<BsArrow90DegRight
								fontSize='25px'
								color=' #5f6368'
								cursor='pointer'
							/>
						</div>
						<div>
							<Button>Отправить</Button>
						</div>
						<div>
							<BsThreeDotsVertical
								fontSize='25px'
								color=' #5f6368'
								cursor='pointer'
							/>
						</div>
						<div>
							<AiOutlineUser
								fontSize='25px'
								color=' #5f6368'
								cursor='pointer'
							/>
						</div>
					</div>
				</HeaderControl>
				<div className='links'>
					<div>
						<Link to='/form'>Вопросы</Link>
					</div>
					<div>
						<Link to='/quiz'>Ответы</Link>
					</div>
					<div>
						<Link to='/passquiz'> Настройки</Link>
					</div>
				</div>
			</WrapperForHeader>
			<main>
				<Outlet />
			</main>
		</>
	)
}

const WrapperForHeader = styled.header`
	width: 100%;
	border-bottom: 1px solid #dadce0;
	background-color: white;

	.links {
		display: flex;
		justify-content: center;
		margin-bottom: 20px;
	}
	.links a {
		font-size: 14px;
		color: #202124;
		font-weight: 500;
		padding: 20px;
		cursor: pointer;
	}
	.links a:hover {
		color: rgb(103, 58, 183);
		border-bottom: 4px solid blue;
		border-radius: 4px;
		width: 85px;
	}
`
const HeaderControl = styled.div`
	width: 1400px;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	align-items: center;

	.leftSide {
		width: 250px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.rightSide {
		width: 400px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	& span {
		font-size: 18px;
		font-weight: 400;
		line-height: 24px;
		color: #202124;
	}
	.logo {
		width: 50px;
		height: 50px;
		cursor: pointer;
	}
`

export default Header
