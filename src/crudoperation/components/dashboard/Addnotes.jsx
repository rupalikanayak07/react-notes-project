import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const Addnotes = () => {
    const [formdata, setformdata] = useState({
        title: '',
        desc: '',
        tags: ''
    })

    const handelinput = (e) => {
        const { name, value } = e.target
        setformdata({ ...formdata, [name]: value })
        // console.log(formdata);

    }
    const {userid}=useParams()

    const navigate=useNavigate()
    const handelform = async (e) => {
        e.preventDefault()

        try {

            const { data } = await axios.post('http://localhost:3000/notes', {...formdata,userid})
            console.log(data)
            toast.success('Notes added successfully',{position:'top-center'})
            setformdata({
                title: '',
                desc: '',
                tags: ''
            })
            navigate(`/dashboard/allnotes/${userid}`)
        } catch (error) {
            toast.error('something went wrong',{position:'top-center'})
            console.log(error);

        }
    }



    return (



        <div className=" h-full w-[50%] flex items-center justify-center ">

            {/* Card */}
            <form className="w-[400px] bg-white shadow-xl rounded-2xl p-8 space-y-6" onSubmit={handelform}>

                {/* Heading */}
                <h2 className="text-2xl font-semibold text-center text-gray-700">
                    Add New Note
                </h2>

                {/* Title Input */}
                <div className="flex flex-col gap-2">
                    <label className="text-gray-600 font-medium">Title</label>
                    <input onChange={handelinput}
                        type="text" name='title'
                        placeholder="Enter note title..."
                        className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-300"
                    />
                </div>

                {/* Note Textarea */}
                <div className="flex flex-col gap-2">
                    <label className="text-gray-600 font-medium">Note</label>
                    <textarea name='desc' onChange={handelinput}
                        placeholder="Write your note here..."
                        rows="4"
                        className="border border-gray-300 rounded-lg px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-purple-300"
                    ></textarea>
                </div>


                {/* Tags */}
                <div>
                    <label className="block text-gray-700 mb-1" htmlFor="tags">
                        Tags
                    </label>
                    <input
                        type="text" name='tags' onChange={handelinput}
                        id="tags"
                        placeholder="Enter tags separated by commas"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>
                {/* Button */}
                <button className="w-full bg-purple-500 hover:bg-purple-600 text-white font-medium py-2 rounded-lg transition duration-300">
                    Add Note
                </button>
            </form>

        </div>
    );
};




export default Addnotes