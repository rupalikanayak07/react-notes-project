import React, { useContext, useEffect } from 'react'
import { FaEdit, FaStickyNote, FaUser } from 'react-icons/fa';
import { GoProjectSymlink } from 'react-icons/go';
import { IoMdContact, IoMdContacts, IoMdHome } from 'react-icons/io';
import { IoHomeOutline } from 'react-icons/io5';
import { MdAddAPhoto } from 'react-icons/md';
import { SiHyperskill } from 'react-icons/si';
import { NavLink, useNavigate } from 'react-router-dom';
import Globalcontext, { Globalcontextapi } from '../context/Globalcontext';
import axios from 'axios';

const Sidebar = () => {
    const id = JSON.parse(localStorage.getItem('jwt_token')).split('.')[2]

    const menuItems = [
        { title: 'dashboard', icon: IoHomeOutline, path: '/dashboard' },
        { title: "profile", icon: FaUser, path: `/dashboard/profile/${id}` },
        { title: "add notes", icon: MdAddAPhoto, path: `/dashboard/addnotes/${id}` },
        { title: "all notes", icon: FaStickyNote, path: `/dashboard/allnotes/${id}` },
    ];

    
    const { setcurrentuser } = useContext(Globalcontextapi)

    const fdata=async () => {
        const {data}=await axios.get(`http://localhost:3000/users/${id}`)
        setcurrentuser(data)
    }
    useEffect(()=>{
        fdata()
    },[])
    const navigate = useNavigate()
    const logout = () => {
        localStorage.removeItem('jwt_token')
        navigate('/login')

    }

    return (

        <div className='side-bar h-full w-[25%]    flex flex-col pl-15 justify-evenly items-baseline'>
            <h1 className='text-lg capitalize font-semibold tracking-widest  '>welcome to dashboard</h1>

            {
                menuItems.map((ele, index) => {
                    const Icon = ele.icon
                    return (
                        <div
                            key={index + 1} className="flex gap-2 w-[70%] h-[8%] rounded-lg items-center justify-center cursor-pointer text-[18px] capitalize bg-blue-600">
                            <NavLink to={ele.path} className='flex items-center justify-start w-full ps-4 text-white gap-2'><Icon size={20} />
                                <span className=''>{ele.title}</span></NavLink>
                        </div>
                    )
                })}

            <button className='px-13 py-2 rounded-lg cursor-pointer bg-red-500 capitalize text-xl text-amber-50' onClick={logout}>Logout</button>

        </div>

    )
}

export default Sidebar