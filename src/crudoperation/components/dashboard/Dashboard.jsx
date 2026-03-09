
import React, { useContext, useEffect } from 'react'

import Sidebar from './Sidebar'
import Navbar from '../Navbar'
import { Globalcontextapi } from '../context/Globalcontext'
import axios from 'axios'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {

   
    
    
    return (

        <div className='h-[89vh] w-full flex'>
            
            <Sidebar />
            <Outlet/>
        </div>

    )
}

export default Dashboard