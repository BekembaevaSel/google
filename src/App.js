import React, { Suspense } from 'react'
import Header from './components/header/Header'
import { Routes, Route } from 'react-router-dom'
import Loader from './UI/Loader'

const NewForm = React.lazy(() => import('./pages/NewForm'))
const QuizDataPage = React.lazy(() => import('./pages/QuizDataPage'))
const PassQuizPage = React.lazy(() => import('./pages/PassQuizPage'))

const App = () => {
	return (
		<Suspense fallback={<Loader />}>
			<Routes>
				<Route path='/' element={<Header />}>
					<Route path='/' element={<NewForm />}></Route>
					<Route path='quiz' element={<QuizDataPage />}></Route>
					<Route path='passquiz' element={<PassQuizPage />}></Route>
				</Route>
			</Routes>
		</Suspense>
	)
}

export default App
