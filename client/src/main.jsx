import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store1 } from './Users/userSlice.js'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    < Provider store={store1}>
    <App />
    </Provider>
  </React.StrictMode>
)
