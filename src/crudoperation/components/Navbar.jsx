import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Globalcontextapi } from './context/Globalcontext'
import axios from 'axios'

const Navbar = () => {

    const list = [
        {
            path: '/',
            text: 'home'
        },
        {
            path: '/about',
            text: 'about'
        },
        {
            path: '/projects',
            text: 'projects'
        }
    ]

    const { currentuser } = useContext(Globalcontextapi)
    // console.log(currentuser);
    
    



    return (
        <div>
            <div>
                <nav className='h-[78px] w-full flex items-center justify-evenly bg-gradient-to-r from-cyan-300 to-fuchsia-500 font-bold'>
                    <div className="h-full w-[20%] items-center flex justify-center text-2xl tracking-widest text-white capitalize font-serif">logo</div>
                    <ul className='h-full w-[50%] flex items-center justify-evenly text-white'>

                        {
                            list.map((ele, index) => {
                                return (
                                    <li key={index} className='text-xl  capitalize  cursor-pointer  hover:tracking-wider'><NavLink to={ele.path}>{ele.text}</NavLink></li>

                                )
                            })
                        }


                    </ul>

                    <div className="h-full w-[20%]  flex items-center justify-center">
                        {
                            !currentuser ? <button className='px-7 py-2 capitalize bg-blue-900 text-white text-xl rounded-xl cursor-pointer hover:bg-cyan-600 '><Link to='/login'>Login</Link></button> :
                                <div className='capitalize tracking-wider text-xl h-[50px] w-[50px] border rounded-full flex items-center justify-center '>{currentuser.username.slice(0, 1)}</div>
                        }

                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navbar