import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css';

import {AppContextProvider} from './context/AppContext'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
    <AppContextProvider>
		  <App />
    </AppContextProvider>
	</React.StrictMode>
)