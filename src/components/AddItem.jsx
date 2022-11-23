import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const AddTodo = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state);
  const newUsers = users.flat(Infinity);
  console.log(newUsers);
  return (
    <ul>
      {newUsers.map((item) => (
        <li key={item.id}>
          <span>{item.name}</span>
          <button
            onClick={() => dispatch({ type: "DELETE", payload: item.id })}
          >
            delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default AddTodo;
