import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import { router } from './routes/router.jsx'
import { StrictMode } from 'react'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
