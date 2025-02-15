import TodoItem from "@/components/TodoItem";
import { useState, useEffect } from "react";
import ToggleDarkMode from "@/components/ToggleDarkMode";

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
    <div className="relative min-h-dvh py-12 px-5 flex items-center justify-center bg-gray-100 dark:bg-black">
      <ToggleDarkMode/>
      <div className="flex flex-col gap-5 max-w-md w-full">
        <h1 className="text-3xl font-semibold text-center dark:text-white">Todo App</h1>
        <form onSubmit={addNewTodo} className="flex gap-1.5">
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Task..."
            required
            className="dark:text-white border border-gray-300 bg-white dark:bg-black py-2 px-4 rounded-md grow focus:outline-2 focus:outline-offset-2 outline-gray-400 dark:outline-gray-200"
          />
          <button
            type="submit"
            className="bg-black dark:bg-white px-4 text-white dark:text-black font-semibold rounded-lg cursor-pointer hover:opacity-80 text-xl">
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
