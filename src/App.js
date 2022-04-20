import React from 'react'
import Header from './components/header/Header'
import NewForm from './pages/NewForm'
import QuizDataPage from './pages/QuizDataPage'
import PassQuizPage from './pages/PassQuizPage'
import { Routes, Route } from 'react-router-dom'

const App = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<Header />}>
					<Route path='form' element={<NewForm />}></Route>
					<Route path='quiz' element={<QuizDataPage />}></Route>
					<Route path='passquiz' element={<PassQuizPage />}></Route>
				</Route>
			</Routes>
		</>
	)
}

export default App
