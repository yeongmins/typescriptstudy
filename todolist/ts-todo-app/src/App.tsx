import { useTodos } from "./hooks/useTodos";
import { Container } from "./styles/App.styled";
import { TodoHeader } from './components/Header/TodoHeader';
import TodoActions from "./components/Actions/TodoActions";
import TodoList from "./components/List/TodoList";

function App() {
  const {
    todos,
    selectedIds,
    addTodo,
    toggleTodo,
    removeTodo,
    editTodo,
    toggleSelect,
    deleteSelected,
  } = useTodos();

  return (
    <Container>
      <TodoHeader onAdd={addTodo} />{" "}
      {selectedIds.length > 0 && (
        <TodoActions
          selectedCount={selectedIds.length}
          onDeleteSelected={deleteSelected}
        />
      )}
      <TodoList
        todos={todos}
        selectedIds={selectedIds}
        onToggle={toggleTodo}
        onRemove={removeTodo}
        onEdit={editTodo}
        onSelect={toggleSelect}
      />
    </Container>
  );
}

export default App;
