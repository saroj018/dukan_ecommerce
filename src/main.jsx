import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { store } from './redux/store.js'
import { Provider } from 'react-redux'
import ContextProvider from './context/ContectProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <ContextProvider>
    <Router>
      <React.StrictMode>
        <App />
      </React.StrictMode>,
    </Router>
    </ContextProvider>
  </Provider>
)
