import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/store'
// import store, { persistor } from './store/store'
// import { PersistGate } from 'redux-persist/integration/react'

const root = createRoot(document.getElementById('root'))
root.render(
	<BrowserRouter>
		<Provider store={store}>
			<React.StrictMode>
				{/* <PersistGate loading={null} persistor={persistor}> */}
				<App />
				{/* </PersistGate> */}
			</React.StrictMode>
		</Provider>
	</BrowserRouter>,
)
