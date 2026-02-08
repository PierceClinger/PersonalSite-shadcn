import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.js'
import { Toaster } from "./components/ui/sonner"

createRoot(document.getElementById('root') as HTMLElement).render(
<div className='app-wrapper'>
  <StrictMode>
        <App />
        <Toaster position='bottom-center' />
  </StrictMode>
</div>
)
