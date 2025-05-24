import { useReducer, useEffect } from "react";
import type { Reducer } from "react";

export function usePersistentReducer<State, Action>(
  reducer: Reducer<State, Action>,
  initialState: State,
  storageKey: string
): [State, React.Dispatch<Action>] {
  const [state, dispatch] = useReducer(reducer, initialState, (init) => {
    try {
      const raw = localStorage.getItem(storageKey);
      return raw ? (JSON.parse(raw) as State) : init;
    } catch {
      return init;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(storageKey, JSON.stringify(state));
    } catch {
      // 로컬스토리지 쓰기 에러 무시
    }
  }, [state, storageKey]);

  return [state, dispatch];
}
