import React from "react";

interface AddtaskProps {
  update?: boolean;
}

function AddTask({ update = false }: AddtaskProps) {
  return <div>Add Task</div>;
}

export default AddTask;
