"use client";

import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import Modal from './Modal'
import { useState } from 'react'

const AddTask = () => {
  const [modelOpen, setModalOpen] = useState<boolean>(false);

  return (
    <div>
      <button onClick={() => setModalOpen(true)} className='btn btn-primary w-full'>Add new task
        <AiOutlinePlus className="ml-2" size={18}/>
      </button>
      
      <Modal modalOpen={modelOpen}/>

    </div>
  )
}

export default AddTask