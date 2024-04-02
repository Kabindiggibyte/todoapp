"use client";

import React, { useEffect, useState } from "react";
import apiService from "../service/api.service";
import Task from "./Task";


interface ToDoData {
  id:string
  name: string;
  department: string;
}

const ToDoList = () => {
  useEffect(() => {
    fetchData();
  }, []);

  const [data, setData] = useState<ToDoData[]>([]);


  const fetchData = async () => {
    try {
      const response = await apiService.fetchData();
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Name</th>
            <th>Department</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
   <Task key={item.id} task={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ToDoList;
