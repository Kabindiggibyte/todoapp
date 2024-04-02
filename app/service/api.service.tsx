import axios from "axios";
import { TaskType } from "../types/types";

type user = {
  name: string;
  department: string;
};

const baseURl = "http://localhost:8000";

const createData = (data: user) => {
  return axios.post(`${baseURl}/create`, data);
};

const fetchData = () =>{
    return axios.get(`${baseURl}/fetchData`);
}

const updateData=(data:TaskType)=>{
    return axios.put(`${baseURl}/updateData/${data.id}`,data)
}

const deleteData=(data:string)=>{
    return axios.delete(`${baseURl}/delete/${data}`)
}

export default {
  createData,
  fetchData,
  updateData,
  deleteData
};
