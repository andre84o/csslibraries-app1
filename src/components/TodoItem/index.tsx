'use client';
import React from "react";
import styled from "styled-components";
import { Todo } from "@/interfaces/todo";

interface Props {
  todo: Todo;
  toggleTodo: (id: number) => void;
}

const Item = styled.div<{ done: boolean }>`
  padding: 12px;
  margin-bottom: 10px;
  background-color: ${({ done }) => (done ? "#d4edda" : "#fff3cd")};
  text-decoration: ${({ done }) => (done ? "line-through" : "none")};
  cursor: pointer;
  border-radius: 8px;
`;

const TodoItem: React.FC<Props> = ({ todo, toggleTodo }) => {
  return <Item done={todo.done} onClick={() => toggleTodo(todo.id)}>{todo.text}</Item>;
};

export default TodoItem;