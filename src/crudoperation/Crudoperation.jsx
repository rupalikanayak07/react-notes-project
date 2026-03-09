import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { routes } from './routes/routes'

const Crudoperation = () => {
  return (
    <RouterProvider router={routes}/>
  )
}

export default Crudoperation