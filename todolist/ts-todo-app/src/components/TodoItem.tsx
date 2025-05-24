import type { Todo } from '../types/todo';

interface Props {
  todo: Todo;
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
}

export default function TodoItem({ todo, onToggle, onRemove }: Props) {
  return (
    <li className="flex justify-between items-center mb-2">
      <span
        onClick={() => onToggle(todo.id)}
        className={`cursor-pointer ${todo.completed ? 'line-through text-gray-500' : ''}`}
      >
        {todo.text}
      </span>
      <button onClick={() => onRemove(todo.id)} className="text-red-500">삭제</button>
    </li>
  );
}
