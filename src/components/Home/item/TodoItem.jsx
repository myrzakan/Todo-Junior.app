import React from "react";
import Check from "./Check";
import { BsTrash } from "react-icons/bs";

const TodoItem = ({ todo, changeTodo, removeTodo }) => {
  return (
    <div
      className="flex items-center justify-between mb-4 rounded-2xl bg-[#1B1B1B] p-5 w-full"
    >
      <button 
        className="flex items-center"
        onClick={() => changeTodo(todo.id)}
      >
        <Check isCompleted={todo.isCompleted} />
        <span className={todo.isCompleted ? "line-through" : ""}>
          {todo.title}
        </span>
      </button>

      <button onClick={() => removeTodo(todo.id)}>
        <BsTrash
          size={22}
          className="text-gray-600 hover:text-pink-400
        transition-colors ease-in-out duration-300"
        />
      </button>

    </div>
  );
};

export default TodoItem;
