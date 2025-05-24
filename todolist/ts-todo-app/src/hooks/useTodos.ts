import { useCallback } from "react";
import type { Todo } from "../types";
import { usePersistentReducer } from "./usePersistentReducer";

const STORAGE_KEY = "my-todolist";

interface TodosState {
  todos: Todo[];
  selectedIds: number[];
}

type Action =
  | { type: "add"; text: string }
  | { type: "toggle"; id: number }
  | { type: "edit"; id: number; text: string }
  | { type: "remove"; id: number }
  | { type: "toggleSelect"; id: number }
  | { type: "deleteSelected" };

const initialState: TodosState = { todos: [], selectedIds: [] };

function reducer(state: TodosState, action: Action): TodosState {
  switch (action.type) {
    case "add": {
      const newTodo: Todo = {
        id: Date.now(),
        text: action.text,
        completed: false,
        createdAt: new Date().toISOString(),
        priority: "medium",
      };
      return { ...state, todos: [...state.todos, newTodo] };
    }
    case "toggle": {
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
        ),
      };
    }
    case "edit": {
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.id ? { ...todo, text: action.text } : todo
        ),
      };
    }
    case "remove": {
      return {
        todos: state.todos.filter((todo) => todo.id !== action.id),
        selectedIds: state.selectedIds.filter((id) => id !== action.id),
      };
    }
    case "toggleSelect": {
      const selected = state.selectedIds.includes(action.id)
        ? state.selectedIds.filter((id) => id !== action.id)
        : [...state.selectedIds, action.id];
      return { ...state, selectedIds: selected };
    }
    case "deleteSelected": {
      return {
        todos: state.todos.filter(
          (todo) => !state.selectedIds.includes(todo.id)
        ),
        selectedIds: [],
      };
    }
    default:
      return state;
  }
}

export function useTodos() {
  const [state, dispatch] = usePersistentReducer(
    reducer,
    initialState,
    STORAGE_KEY
  );

  const addTodo = useCallback(
    (text: string) => dispatch({ type: "add", text }),
    [dispatch]
  );
  const toggleTodo = useCallback(
    (id: number) => dispatch({ type: "toggle", id }),
    [dispatch]
  );
  const editTodo = useCallback(
    (id: number, text: string) => dispatch({ type: "edit", id, text }),
    [dispatch]
  );
  const removeTodo = useCallback(
    (id: number) => dispatch({ type: "remove", id }),
    [dispatch]
  );
  const toggleSelect = useCallback(
    (id: number) => dispatch({ type: "toggleSelect", id }),
    [dispatch]
  );
  const deleteSelected = useCallback(
    () => dispatch({ type: "deleteSelected" }),
    [dispatch]
  );

  return {
    todos: state.todos,
    selectedIds: state.selectedIds,
    addTodo,
    toggleTodo,
    editTodo,
    removeTodo,
    toggleSelect,
    deleteSelected,
  };
}

export type AddTodo = (text: string) => void;
export type ToggleTodo = (id: number) => void;
export type EditTodo = (id: number, text: string) => void;
export type RemoveTodo = (id: number) => void;
export type ToggleSelect = (id: number) => void;
