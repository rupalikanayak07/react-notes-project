import axios from 'axios'
import React, { Fragment, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import Notecard from './Notecard'

const Allnotes = () => {
    const [allnotes, setallnotes] = useState(null)

    const fetchallnotes = async (e) => {

        try {
            const { data } = await axios.get('http://localhost:3000/notes')
            setallnotes(data)
            console.log(data);

        } catch (error) {
            toast.error('something went wrong', { position: 'top-center' })
            console.log(error);

        }
    }
    useEffect(() => {
        fetchallnotes()
    }, [])
    return (
        <div className='h-[89vh] w-full flex flex-col'>
            <h1 className="text-3xl font-bold text-center text-gray-700 mb-10">
                My Notes
            </h1>
            <div className=' h-full w-full flex flex-col justify-evenly items-center gap-1 flex-wrap  p-2'>

                {
                    allnotes?.map((note, index) => {
                        return <Fragment key={index}>
                            <Notecard data={note} />
                        </Fragment>
                    })
                }
            </div>
        </div>
    )
}

export default Allnotes

//untill get the truthy value in lhs it will not assgni the value to rhs