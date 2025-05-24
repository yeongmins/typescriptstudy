
import React, { useState, useEffect, useRef, memo } from "react";
import type { Todo } from "../../types";
import {
  Li,
  Checkbox,
  Text,
  TextInput,
  DeleteButton,
  ActionButton, 
} from "../../styles/TodoItem.styled";

interface Props {
  todo: Todo;
  onToggle: (id: number) => void;
  onRemove: (id: number) => void; 
  onEdit: (id: number, newText: string) => void;
  onSelect: (id: number) => void; 
  isSelected: boolean;
}

function TodoItem({
  todo,
  onToggle,
  onRemove,
  onEdit,
  onSelect,
  isSelected,
}: Props) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);
  const inputRef = useRef<HTMLInputElement>(null);

  
  useEffect(() => {
    if (isEditing && inputRef.current) inputRef.current.focus();
  }, [isEditing]);

  
  useEffect(() => {
    if (!isEditing) setEditText(todo.text);
  }, [todo.text, isEditing]);

  const finishEditing = () => {
    const trimmed = editText.trim();
    if (trimmed && trimmed !== todo.text) {
      onEdit(todo.id, trimmed);
    }
    setIsEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") finishEditing();
    else if (e.key === "Escape") {
      setIsEditing(false);
      setEditText(todo.text);
    }
  };

  return (
    <Li>
      {/* 하나의 체크박스: 삭제 대상 선택용 */}
      <Checkbox
        type="checkbox"
        checked={isSelected}
        onChange={() => onSelect(todo.id)}
        aria-label="Select todo for deletion"
      />

      {/* 텍스트 / 편집 인풋 */}
      {isEditing ? (
        <TextInput
          ref={inputRef}
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onBlur={finishEditing}
          onKeyDown={handleKeyDown}
          aria-label="Edit todo"
        />
      ) : (
        <Text
          $completed={todo.completed}
          tabIndex={0}
          role="button"
          onClick={() => setIsEditing(true)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              setIsEditing(true);
            }
          }}
        >
          {todo.text}
        </Text>
      )}

      {/* 완료 토글 버튼 */}
      <ActionButton onClick={() => onToggle(todo.id)}>
        {todo.completed ? "취소" : "완료"}
      </ActionButton>

      {/* 개별 삭제 버튼 */}
      <DeleteButton onClick={() => onRemove(todo.id)} aria-label="Delete todo">
        삭제
      </DeleteButton>
    </Li>
  );
}

export default memo(TodoItem);
