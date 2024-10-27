import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import URLProvider from './context/navContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <URLProvider>
      <App />
    </URLProvider>
  </StrictMode>,
)
