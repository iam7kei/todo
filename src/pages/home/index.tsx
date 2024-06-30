import React, { useState, useEffect } from "react";

import { Todo } from "../../components/todo";
import { TodoType } from "../../utils/constants";

export const Home = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [todo, setTodo] = useState<string>();

  const handleOnAddTodoClick = () => {
    const newTodo = {
      todo: todo ?? "",
      isChecked: false,
    };
    let updatedTodos = [...todos];
    setTodos((prev) => [...prev, newTodo]);
    setTodo("");
  };

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <div className="w-[700px]">
      <div className="bg-white w-full rounded-md px-5 py-2 mb-10 flex flex-row space-x-5">
        <input
          type="text"
          className="bg-white border-0 focus:outline-none text-black w-3/4"
          placeholder="Enter TODO here"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <div className="space-x-4 self-end  w-1/4 flex flex-row">
          <button
            type="button"
            className="bg-green-400 outline-none focus:outline-none border-0"
            onClick={handleOnAddTodoClick}
          >
            Add
          </button>
          <button
            type="button"
            className="bg-red-400 outline-none focus:outline-none border-0"
            onClick={() => setTodo("")}
          >
            Clear
          </button>
        </div>
      </div>
      <div className="overflow-hidden h-full w-full ">
        {todos.length === 0 ? (
          <div className="h-16 overflow-auto bg-white rounded-md items-center justify-center flex">
            <p className="text-black">There are no TODOs</p>
          </div>
        ) : (
          <div className="max-h-[500px] overflow-auto bg-white rounded-md ">
            {todos.map((item: TodoType) => (
              <Todo todo={item.todo} isChecked={item.isChecked} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
