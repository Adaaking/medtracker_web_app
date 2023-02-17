import React from 'react'
import { useState } from 'react'
import { BiArrowBack } from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux'
import {addMedicinies, deleteMedicine } from '../../features/actions/actions'

const MedicinePop = ({ setMedicine }) => {
   const [med,setMed] = useState("")
   const user = useSelector(state => state.userReducer.user)
   const dispatch = useDispatch()

   const handleSubmit = async(e) => {
    e.preventDefault()
     dispatch(addMedicinies({ userId:user._id,name:med}))
     setMedicine(false)
   }

    return (
        <div
        className={`w-screen bg-black/40 z-20  fixed top-0 h-screen flex justify-end  ease-in-out duration-500`}
      >
        <div className="bg-white w-[35vw] px-10">
          <div className="flex my-5">
          <BiArrowBack size={25} className="text-blue-500 cursor-pointer mr-10" onClick={() => setMedicine(false)}/>
              <h1 className="text-xl">Add Allergies</h1>
          </div>
          <form className='w-full' onSubmit={handleSubmit}>
             <input className='border border-black/30 p-[15px] rounded-md mt-5 w-full focus:outline-slate-400' onChange={(e) => setMed(e.target.value)} placeholder='Document title'/>
          </form>
        </div>
      </div>
      )
}

export default MedicinePop