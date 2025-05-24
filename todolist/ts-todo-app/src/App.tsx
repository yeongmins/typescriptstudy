import TodoItem from './components/Todo/TodoItem';
import TodoForm from './components/Form/TodoForm';
import { useTodos } from './hooks/useTodos';

function App() {
  const { todos, addTodo, toggleTodo, removeTodo } = useTodos();

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">📋 Todo List</h1>
      <TodoForm onAdd={addTodo} />
      <ul>
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={toggleTodo}
            onRemove={removeTodo}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
