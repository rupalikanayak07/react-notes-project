import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Globalcontextapi } from "../context/Globalcontext";
import { Link, useNavigate, useParams } from "react-router-dom";

const Profile = () => {

    const id = JSON.parse(localStorage.getItem('jwt_token')).split('.')[2]

    const navigate=useNavigate()
    const { userId } = useParams()
    const [user, setuser] = useState('')

    const fdata = async (params) => {
        const { data } = await axios.get(`http://localhost:3000/users/${userId}`)
        setuser(data)

    }
    useEffect(() => {
        fdata()
    }, [])

    const deleteuser=async (params) => {
        const {data}=await axios.delete(`http://localhost:3000/users/${userId}`)
        navigate('/')
        localStorage.removeItem('jwt_token')
    }

    return (
        <div className="p-6 w-[60%] flex flex-col items-center   gap-5 pt-12">

            <h1 className="text-4xl font-bold mb-4">User Profile</h1>          

            {/* Profile Card */}
            <div className="bg-white w-[350px] p-8 rounded-2xl shadow-xl text-center space-y-4">

                {/* Profile Image */}
                <div className="flex justify-center">
                    <div className="h-24 w-24 rounded-full overflow-hidden border-4 border-pink-200">
                        <img
                            src=""
                            alt=""
                            className="h-full w-full object-cover"
                        />
                    </div>
                </div>

                {/* Title */}
                <h2 className="text-3xl font-semibold text-gray-700 capitalize">
                    {user.username}
                </h2>

                {/* User Info */}
                <div className="text-left space-y-2 text-gray-600 text-m">

                    <p><span className="font-semibold text-gray-800">Email:</span> {user.email}</p>

                    <p><span className="font-semibold text-gray-800">Age:</span> {user.age}</p>

                    <p><span className="font-semibold text-gray-800">City:</span> {user.city}</p>

                    <p><span className="font-semibold text-gray-800">DOB:</span> {user.dob}</p>

                    <p><span className="font-semibold text-gray-800">Gender:</span> {user.gender}</p>

                </div>

                
                <div className="flex gap-4 pt-4">

                    <button className="flex-1 bg-purple-500 hover:bg-purple-600 text-white py-2 rounded-lg transition">
                        <Link to= { `/dashboard/updateprofile/${userId}`}>Update Profile</Link>
                    </button>

                    <button className="flex-1 bg-red-400 hover:bg-red-500 text-white py-2 rounded-lg transition" onClick={deleteuser}>
                        Delete Profile
                    </button>

                </div>

            </div>

        </div>
    );
};

export default Profile