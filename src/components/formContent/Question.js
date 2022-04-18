import React from 'react'
import { BsCircle } from 'react-icons/bs'
import styled from 'styled-components'
import Button from '../../UI/Button'
import Textarea from '../../UI/Textarea'

const Question = ({ questions, id, addQuestionsHandler }) => {
	console.log(addQuestionsHandler);
	return (
		<>
			<div className='initialForm'>
				<BsCircle />

				<Textarea
					placeholder='Вариант 1'
					style={{ fontsize: '10px' }}
				/>
			</div>
			<button onClick={addQuestionsHandler}>Добавить еще вариант</button>
			
				{questions.map((oneQuestion) => {
					return (
						<QuestionControl>	
							<div key={Math.random().toString()} id={oneQuestion.id}>
								<BsCircle />
								<Textarea placeholder='вариант' />
							</div>
						</QuestionControl>
					)
				})}

			{/* <QuestionControl>	
				<div>
					<BsCircle />
					<Textarea placeholder='вариант' />
				</div>
			</QuestionControl> */}
		</>
	)
}
const QuestionControl = styled.div`
	align-items: center;
	margin-left: 35px;
	border-bottom: 1px solid #dadce0;
	padding: 20px;

	button {
		border: none;
	}
`
export default Question
