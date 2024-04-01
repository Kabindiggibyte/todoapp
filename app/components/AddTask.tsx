"use client";

import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import Modal from "./modal";

const AddTask = () =>{
    const [modalOpen, setModalOpen] = useState<boolean>(false)
    return <div>
        <button onClick={()=> setModalOpen(true)} className="btn btn-primary w-full">Add New Task <AiOutlinePlus className="ml-2" size={18}/></button>
        <Modal modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </div>
}

export default AddTask;