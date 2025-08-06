import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AxiosUser from './components/AxiosUser'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AxiosUser />
  </StrictMode>,
)
