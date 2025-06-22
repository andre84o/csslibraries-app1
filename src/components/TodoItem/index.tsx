'use client';
import React from "react";
import styled from "styled-components";
import { Todo } from "@/interfaces/todo";
import { RiDeleteBin6Line } from "react-icons/ri";

interface Props {
  todo: Todo;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

const Item = styled.div<{ done: boolean }>`
  padding: 12px 16px;
  margin-bottom: 10px;
  background-color: ${({ done }) => (done ? "#d4edda" : "#fff3cd")};
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TodoText = styled.span<{ done: boolean }>`
  text-decoration: ${({ done }) => (done ? "line-through" : "none")};
  cursor: pointer;
`;

const DeleteButton = styled.button`
  background: transparent;
  border: none;
  color: red;
  font-weight: bold;
  cursor: pointer;
  font-size: 0.9rem;

  &:hover {
    text-decoration: underline;
  }
`;

const TodoItem: React.FC<Props> = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <Item done={todo.done}>
      <TodoText done={todo.done} onClick={() => toggleTodo(todo.id)}>
        {todo.text}
      </TodoText>
      <DeleteButton onClick={() => deleteTodo(todo.id)}><RiDeleteBin6Line /></DeleteButton>
    </Item>
  );
};

export default TodoItem;
