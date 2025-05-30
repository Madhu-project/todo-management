import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { loadComponent } from "../../layouts/store/LayoutSlice";
import { Typography } from "@mui/material";
import MuiButton from "../../components/MuiButton/MuiButton";
import MuiCard from "../../components/MuiCard/MuiCard";
import { loadComponent } from "../../layouts/store/LayoutSlice";
import { getTodos } from "./store/TodoSlice";
import { useAppDispatch } from "../../components/AppDispatch/useAppDispatch";
import { RootState } from "../../pages/store/store";

function ToDo() {
  const employeeList = useSelector((state: RootState) => state.toDo.todoList);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getTodos());
  }, []);
  console.log("employeeList=", employeeList);
  return (
    <>
      {/* <div>
        <button
          onClick={() => {
            navigate("/profile");
          }}
        >
          Profile
        </button>
        <button
          onClick={() => {
            navigate("/adminRegistration");
          }}
        >
          Register Admin
        </button>
      </div> */}
      <MuiButton
        label={"Add Task"}
        handleClick={() => {
          dispatch(loadComponent("add-task"));
        }}
      />
      <MuiCard
        title="Spring Boot"
        subHeading1="Description"
        subHeading2="Completion Status"
        cardActions={true}
        subPara1="This is a Java Framework"
        subPara2="Completed"
        handleUpdate={() => {
          dispatch(loadComponent("update-task"));
        }}
      />
    </>
  );
}

export default ToDo;
