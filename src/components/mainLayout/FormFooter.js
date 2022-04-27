import React from 'react'
import { RiDeleteBin7Line } from 'react-icons/ri'
import { VscCopy } from 'react-icons/vsc'
import styled from 'styled-components'

const FormFooter = ({ deleteFormHandler, addVariant }) => {
	return (
		<FooterStyle>
			<div className='functionalIcons'>
				<div>
					<VscCopy fontSize='25px' color=' #5f6368' />
				</div>
				<div>
					<RiDeleteBin7Line
						onClick={deleteFormHandler}
						fontSize='25px'
						color=' #5f6368'
					/>
				</div>
			</div>
		</FooterStyle>
	)
}

const FooterStyle = styled.div`
	.functionalIcons {
		min-width: 300px;
		display: flex;
		align-items: center;
		justify-content: center;
		justify-content: space-around;
		padding: 30px;
		cursor: pointer;
	}
`

export default FormFooter
