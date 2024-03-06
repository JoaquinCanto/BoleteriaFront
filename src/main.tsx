import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import Gigante from './components/Sedes/Gigante/Gigante.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Gigante />
  </React.StrictMode>,
)
