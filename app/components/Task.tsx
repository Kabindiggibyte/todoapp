import React, { FormEventHandler, useState } from "react";
import { FiEdit } from "react-icons/fi";
import { FiTrash2 } from "react-icons/fi";
import { TaskType } from "../types/types";
import Modal from "./modal";
import { useRouter } from "next/navigation";
import apiService from "../service/api.service";

interface taskProps {
  task: TaskType;
}

const Task: React.FC<taskProps> = ({ task }) => {
  const router = useRouter();
  const [openModalEdit, setOpenModalEdit] = useState<boolean>(false);
  const [opneModalDelete, setOpenModalDelete] = useState<boolean>(false);
  const [taskToEdit, setTaskToEdit] = useState<TaskType>(task);

  const handleEditSubmit: FormEventHandler<HTMLFormElement> = (val) => {
    val.preventDefault();

    setTaskToEdit({ id: "", name: "", department: "" });
    setOpenModalEdit(false);
    apiService.updateData(taskToEdit);
    router.refresh();
  };

  const onHandleToDelete=(id:string)=>{
    apiService.deleteData(id);
    setOpenModalDelete(false);
  }

  return (
    <tr key={task.id}>
      <td>{task.name}</td>
      <td className="w-full">{task.department}</td>
      <td className="flex gap-5">
        <FiEdit
          onClick={() => setOpenModalEdit(true)}
          cursor="pointer"
          className="text-blue-500"
          size={25}
        />
        <Modal modalOpen={openModalEdit} setModalOpen={setOpenModalEdit}>
          <form onSubmit={handleEditSubmit}>
            <h3 className="font-bold text-lg">Edit Taskk</h3>
            <div className="modal-action">
              <input
                type="text"
                value={taskToEdit.name}
                onChange={(e) =>
                  setTaskToEdit((prevTask) => ({
                    ...prevTask,
                    name: e.target.value,
                  }))
                }
                placeholder="Name"
                className="input input-bordered w-full"
              />

              <input
                type="text"
                value={taskToEdit.department}
                onChange={(e) =>
                  setTaskToEdit((prevTask) => ({
                    ...prevTask,
                    department: e.target.value,
                  }))
                }
                placeholder="department"
                className="input input-bordered w-full"
              />
              <button type="submit" className="btn">
                submit
              </button>
            </div>
          </form>
        </Modal>
        <FiTrash2
          onClick={() => setOpenModalDelete(true)}
          cursor="pointer"
          className="text-red-500"
          size={25}
        />
        <Modal modalOpen={opneModalDelete} setModalOpen={setOpenModalDelete}>
          <h1>Are you Sure, you want to delete this File</h1>
          <button onClick={()=> onHandleToDelete(task.id)} className="btn mt-5 text-end" type="submit">
            Delete
          </button>
        </Modal>
      </td>
    </tr>
  );
};

export default Task;
