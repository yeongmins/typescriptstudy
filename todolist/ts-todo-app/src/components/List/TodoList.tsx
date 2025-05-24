import type { Todo } from "../../types";
import TodoItem from "../Todo/TodoItem";
import type {
  ToggleTodo,
  RemoveTodo,
  EditTodo,
  ToggleSelect,
} from "../../hooks/useTodos";
import { List } from "../../styles/App.styled";

interface Props {
  todos: Todo[];
  selectedIds: number[];
  onToggle: ToggleTodo;
  onRemove: RemoveTodo;
  onEdit: EditTodo;
  onSelect: ToggleSelect;
}
export default function TodoList({
  todos,
  selectedIds,
  onToggle,
  onRemove,
  onEdit,
  onSelect,
}: Props) {
  return (
    <List>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onRemove={onRemove}
          onEdit={onEdit}
          onSelect={onSelect}
          isSelected={selectedIds.includes(todo.id)}
        />
      ))}
    </List>
  );
}
