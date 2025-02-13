import React, { useState } from "react";
import { Trash2 } from "lucide-react";
import Header from "./Header";
import LeftSidebar from "./LeftSidebar";

function FinalLayout() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const [deletedTask, setDeletedTasks] = useState([]);

  const addTask = () => {
    // e.preventDefault()
    console.log(task);
    if (task.trim() !== "") {
      //   setTasks([...tasks, { text: task, completed: false }]);
      const newTask = { text: task, completed: false };
      setTasks([
        ...tasks.filter((t) => !t.completed),
        newTask,
        ...tasks.filter((t) => t.completed),
      ]);
      setTask("");
    }
  };

  const checkedTask = (index) => {
    const updatedTask = [...tasks];
    updatedTask[index].completed = !updatedTask[index].completed;
    updatedTask.sort((a, b) => a.completed - b.completed);
    setTasks(updatedTask);
  };

  const deleteTask = (index) => {
    const taskToDelete = tasks[index];
    setDeletedTasks([...deletedTask, taskToDelete]);
    setTasks(tasks.filter((_, i) => i !== index));
    console.log(deletedTask);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <div className="flex flex-1 overflow-hidden">
        <LeftSidebar />

        <div className="w-full mx-[200px]">
          <main className="flex-1 ml-60 mr-60 p-7 overflow-y-auto bg-white h-full mt-[70px]">
            <h2 className="text-3xl text-center font-semibold mb-7">
              To-Do List
            </h2>
            <div className="flex mb-5">
              <input
                type="text"
                value={task}
                placeholder="Add a new task..."
                onChange={(e) => setTask(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    addTask();
                  }
                }}
                className="border border-gray-300 rounded p-4 flex-1 text-[20px]"
              />
              <button
                onClick={addTask}
                className="ml-2 border-none bg-blue-900 rounded-2xl text-white px-7 py-1"
              >
                Add
              </button>
            </div>
            <ul>
              {tasks.map((t, index) => (
                <li
                  key={index}
                  className="bg-white p-2 mb-3 text-[22px] font-medium border rounded-lg flex items-center border-gray-300
                            transition-all duration-300 shadow-sm hover:bg-gray-200 hover:shadow-2xl"
                >
                  <input
                    type="checkbox"
                    checked={t.completed}
                    onChange={() => checkedTask(index)}
                    className="mr-5"
                  />
                  <span
                    className={`flex-1 ${
                      t.completed ? "line-through text-gray-500" : ""
                    }`}
                  >
                    {t.text}
                  </span>
                  {/* <button
                  onClick={() => deleteTask(index)}
                  className="border-none rounded-full ml-2 font-light text-[20px] bg-red-700 text-white px-3 py-2"
                >
                  Delete
                </button> */}
                  <Trash2
                    onClick={() => deleteTask(index)}
                    className="text-red-800 cursor-pointer mr-5"
                  />
                </li>
              ))}
            </ul>
          </main>
        </div>

        {deletedTask.length > 0 && (
          <aside className="w-60 bg-gray-200 p-4 fixed   h-full right-0 border-l-2 border-gray-300 mt-[70px]">
            <h2 className="text-2xl mt-10 mb-4 font-semibold text-center rounded-md">
              Deleted List
            </h2>

            <ul className="bg-gray-200 list-decimal ml-12">
              {deletedTask.map((t, index) => (
                <li
                  key={index}
                  className="bg-gray-200 text-[18px] p-2 mb-2 border rounded text-gray-500 hover:text-black hover:text-[20px] transition-all"
                >
                  {t.text}
                </li>
              ))}
            </ul>
          </aside>
        )}
      </div>
      <footer className="text-xl mt-auto w-full bg-gray-400 h-[70px] text-white flex items-center justify-center">
        Footer Content
      </footer>
    </div>
  );
}

export default FinalLayout;
