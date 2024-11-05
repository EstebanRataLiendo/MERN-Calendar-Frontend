import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { CalendarApp } from './CalendarApp.jsx'
import { store } from './store/index.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <CalendarApp />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
