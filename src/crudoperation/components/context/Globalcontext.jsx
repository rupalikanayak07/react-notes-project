import React, { createContext, useState } from 'react'
import Dashboard from '../dashboard/Dashboard'


export const Globalcontextapi=createContext()

const Globalcontext = ({children}) => {
    const [currentuser,setcurrentuser]=useState(null)
  return (
    <div>
        <Globalcontextapi.Provider value={{ currentuser, setcurrentuser }} >
            {
                children
            }
        </Globalcontextapi.Provider>
    </div>
  )
}

export default Globalcontext