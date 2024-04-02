"use client";

import React, { FormEventHandler, useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import Modal from "./modal";
import apiService from "../service/api.service";
import { useRouter } from "next/navigation";

type user = {
  name: string;
  department: string;
};

const AddTask = () => {
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [newTaskValue, setNewTaskValue] = useState<user>({
    name: "",
    department: "",
  });
  const handleSubmit: FormEventHandler<HTMLFormElement> = (val) => {
    val.preventDefault();
    console.log(newTaskValue);
    setNewTaskValue({ name: "", department: "" });
    setModalOpen(false);
    apiService.createData(newTaskValue);
    router.refresh();
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    field: keyof user
  ) => {
    const { value } = event.target;
    setNewTaskValue((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  return (
    <div>
      <button
        onClick={() => setModalOpen(true)}
        className="btn btn-primary w-full"
      >
        Add New Task <AiOutlinePlus className="ml-2" size={18} />
      </button>
      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <form onSubmit={handleSubmit}>
          <h3 className="font-bold text-lg">Add New Task</h3>
          <div className="modal-action">
            <input
              type="text"
              value={newTaskValue.name}
              onChange={(e) => handleInputChange(e, "name")}
              placeholder="Name"
              className="input input-bordered w-full w-full"
            />

            <input
              type="text"
              value={newTaskValue.department}
              onChange={(e) => handleInputChange(e, "department")}
              placeholder="Department"
              className="input input-bordered w-full w-full"
            />
            <button type="submit" className="btn">
              submit
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AddTask;
