import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FaieldTask";

const TaskList = ({ data }) => {
  return (
    <div
      id="tasklist"
      className="h-[45%] sm:h-[50%] md:h-[55%] flex flex-col sm:flex-row overflow-y-auto sm:overflow-x-auto
      gap-3 sm:gap-4 md:gap-5 mt-6 sm:mt-8 md:mt-10"
    >
      {data?.tasks?.map((elem, index) => {
        if (elem.active) {
          return <AcceptTask key={index} data={elem}></AcceptTask>
        } if (elem.newTask) {
          return <NewTask key={index} data={elem}></NewTask>
        } if (elem.completed) {
          return <CompleteTask key={index} data={elem}></CompleteTask>
        } if (elem.failed) {
          return <FailedTask key={index} data={elem}></FailedTask>
        }
        return null;
      })}
    </div>
  );
};

export default TaskList;