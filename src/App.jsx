import TodoItem from "@/components/TodoItem";
import { useState, useEffect } from "react";

const App = () => {
  const [todos, setTodos] = useState(
    () => JSON.parse(localStorage.getItem("todos")) || []
  );
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    console.log(todos);
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function addNewTodo(e) {
    e.preventDefault();
    if (!newTodo.trim()) return;
    setTodos((prev) => [
      ...prev,
      {
        id: new Date().getTime().toString(),
        text: newTodo,
        isComplete: false,
      },
    ]);
    setNewTodo("");
  }

  function toggleComplete(id) {
    setTodos((prev) => {
      return prev.map((t) => {
        return t.id === id ? { ...t, isComplete: !t.isComplete } : t;
      });
    });
  }

  function deleteTodo(id) {
    const todo = todos.filter((t) => t.id != id);
    setTodos(todo);
  }

  return (
    <div className="min-h-dvh py-12 flex items-center justify-center bg-gray-100">
      <div className="flex flex-col gap-5 max-w-md w-full">
        <h1 className="text-3xl font-semibold text-center">Todo App</h1>
        <form onSubmit={addNewTodo} className="flex gap-1.5">
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Task..."
            required
            className="border border-gray-200 bg-white py-2 px-4 rounded-md grow focus:outline-2 focus:outline-offset-2 outline-gray-400"
          />
          <button
            type="submit"
            className="bg-black px-4 text-white rounded-lg cursor-pointer hover:opacity-80 text-xl">
            +
          </button>
        </form>
        <div className="flex flex-col gap-2.5">
          {todos.map(({ id, text, isComplete }) => {
            return (
              <TodoItem
                key={id}
                text={text}
                id={id}
                isComplete={isComplete}
                onToggleComplete={toggleComplete}
                onDelete={deleteTodo}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
