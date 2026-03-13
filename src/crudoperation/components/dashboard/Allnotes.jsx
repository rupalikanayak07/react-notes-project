import axios from 'axios'
import React, { Fragment, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import Notecard from './Notecard'
import { useParams } from 'react-router-dom'
import { axiosinstace } from '../../../axiosinstance'

const Allnotes = () => {
    const [allnotes, setallnotes] = useState(null)
    const { userid } = useParams()

    const fetchallnotes = async (e) => {

        try {
            const { data } = await axiosinstace.get('notes')
            setallnotes(data)

            const filterdata = data.filter((note) => note.userid == userid)
            setallnotes(filterdata)

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
        <div className='h-[89vh] w-full flex flex-col items-center justify-center'>
            <h1 className="text-3xl font-bold text-center text-gray-700 mb-10">
                My Notes
            </h1>
            {allnotes?.length === 0 ?
                <p>no notes found</p> :

                (
                    <div className=' h-full w-full flex justify-evenly items-center gap-1 flex-wrap '>

                        {
                            allnotes?.map((note, index) => {
                                return <Fragment key={index}>
                                    <Notecard data={{ note, userid,fetchallnotes}} />
                                </Fragment>
                            })
                        }
                    </div>
                )
            }
        </div>
    )
}

export default Allnotes

//untill get the truthy value in lhs it will not assgni the value to rhs