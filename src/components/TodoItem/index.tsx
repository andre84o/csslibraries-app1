'use client';
import React, { useState } from "react";
import styled from "styled-components";
import { Todo } from "@/interfaces/todo";
import { RiDeleteBin6Line } from "react-icons/ri";
import { SlCalender } from "react-icons/sl";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

interface Props {
  todo: Todo;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
  setDateForTodo: (id: number, date: string) => void;
}

const Item = styled.div<{ done: boolean }>`
  padding: 12px 16px;
  margin-bottom: 10px;
  background-color: ${({ done }) => (done ? "#d4edda" : "#fff3cd")};
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

const TodoText = styled.span<{ done: boolean }>`
  text-decoration: ${({ done }) => (done ? "line-through" : "none")};
  cursor: pointer;
  margin-right: 12px;
  font-weight: bold;
`;

const DateText = styled.span`
  color: #555;
  font-size: 0.85rem;
  margin-left: 12px;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const IconButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  color: #333;
`;

const DeleteButton = styled(IconButton)`
  color: red;
`;

const CalendarPopup = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  z-index: 10;
  margin-top: 8px;
`;

const TodoItem: React.FC<Props> = ({ todo, toggleTodo, deleteTodo, setDateForTodo }) => {
  const [showCalendar, setShowCalendar] = useState(false);

const handleDateSelect = (date: Value) => {
  if (date instanceof Date) {
    setDateForTodo(todo.id, date.toLocaleDateString());
    setShowCalendar(false);
  }
};

  return (
    <Item done={todo.done}>
      <div style={{ display: "flex", alignItems: "center" }} onClick={() => toggleTodo(todo.id)}>
        <TodoText done={todo.done}>{todo.text}</TodoText>
        {todo.date && <DateText>{todo.date}</DateText>}
      </div>

      <IconWrapper>
        <IconButton onClick={() => setShowCalendar(prev => !prev)}>
          <SlCalender />
        </IconButton>
        <DeleteButton onClick={() => deleteTodo(todo.id)}>
          <RiDeleteBin6Line />
        </DeleteButton>
      </IconWrapper>

      {showCalendar && (
        <CalendarPopup>
          <Calendar onChange={handleDateSelect} value={todo.date ? new Date(todo.date) : new Date()} />
        </CalendarPopup>
      )}
    </Item>
  );
};

export default TodoItem;
