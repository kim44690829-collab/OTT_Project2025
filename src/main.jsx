import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
// import OTTPeovider from './api/OTT_Context.jsx'
import OTTPeovider from './api/OTT_context.jsx'
import LikeAuthProvider from './pages/OTT_Like/LikeAutn.jsx'
import { HashRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <OTTPeovider>
      <LikeAuthProvider>
      <HashRouter>
        <App />
      </HashRouter>
      </LikeAuthProvider>
    </OTTPeovider>
  </StrictMode>,
)