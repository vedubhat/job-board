import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { LoadProvider } from './providers/LoadProvider.jsx'
import { JobProvider } from './providers/JobProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LoadProvider>
      <JobProvider>
        <App />
      </JobProvider>
    </LoadProvider>
  </StrictMode>,
)
