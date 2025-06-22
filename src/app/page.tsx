'use client';
import { useEffect, useState } from "react";
import { Todo } from "@/interfaces/todo";
import TodoItem from "@/components/TodoItem";
import { Container, Title, InputContainer, Input, Button } from "@/components/TodoLayout";
import styles from "./homepage.module.css"

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("todos");
    if (saved) setTodos(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (!input.trim()) return;
    const newTodo: Todo = { id: Date.now(), text: input, done: false };
    setTodos([...todos, newTodo]);
    setInput("");
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, done: !todo.done } : todo));
  };

  return (
    <Container>
      <button className={styles.ButtonPage}>
      <a
        href="https://csslibraries-app2.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.fancyLink}
      >
        Go to: Random User App
      </a>
      </button>

      <Title>📝 My Todo List</Title>

      <InputContainer>
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a task..."
        />
        <Button onClick={addTodo}>Add</Button>
      </InputContainer>

      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </Container>
  );
}
