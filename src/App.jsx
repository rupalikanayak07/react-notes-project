import React from 'react'
import Crudoperation from './crudoperation/Crudoperation'
import './index.css'
import { ToastContainer } from 'react-toastify'

const App = () => {
  return (
    <div>
        <Crudoperation/>
        <ToastContainer/>
    </div>
  )
}

export default App

// npx json-server --watch backend/db.json --port=3000