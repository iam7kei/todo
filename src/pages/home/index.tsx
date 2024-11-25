import React, { useState } from "react";
import { Todo } from "../../components/todo";
import { TodoType } from "../../utils/constants";

export const Home = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [todo, setTodo] = useState<string>();
  const [isTodoEmpty, setIsTodoEmpty] = useState<boolean>(false)

  const handleOnAddTodoClick = () => {

    if (!todo?.trim()) {
      setIsTodoEmpty(true)
      return
    }
    setIsTodoEmpty(false)
    const newTodo = {
      todo: todo ?? "",
      isChecked: false,
    };
    setTodos((prev) => [...prev, newTodo]);
    setTodo("");
  };

  const setIsChecked = (index: number) => {
    const updatedTodos = [...todos]
    updatedTodos[index].isChecked = true;
    setTodos(updatedTodos);
  }

  return (
    <div className="w-full ">
      {isTodoEmpty && <p className="font-bold">Please enter the TODO</p>}
      <div className="bg-white w-full rounded-md px-5 py-2 mb-10 flex flex-row space-x-5 ">
        <input
          type="text"
          className="bg-white border-0 focus:outline-none text-black w-full"
          placeholder="Enter TODO here"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <div className="space-x-4 self-end flex flex-row">
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
      <div className="overflow-clip h-full w-full ">
        {todos.length === 0 ? (
          <div className="h-16 bg-white rounded-md items-center justify-center flex">
            <p className="text-black">There are no TODOs</p>
          </div>
        ) : (
          <div className="max-h-[500px] w-full bg-white rounded-md">
            {todos.map((item: TodoType, index) => (
              <Todo
                todo={item.todo}
                isChecked={item.isChecked}
                key={index}
                index={index}
                setIsChecked={setIsChecked}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
