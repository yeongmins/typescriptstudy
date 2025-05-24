import React, { useState } from "react";
import type { FormEvent } from "react";
import { Form, Input, Counter, ErrorMessage } from "../../styles/Form.styled";
import type { AddTodo } from "../../hooks/useTodos";

const MAX_LENGTH = 100;

interface Props {
  onAdd: AddTodo;
}
export default function TodoForm({ onAdd }: Props) {
  const [text, setText] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmed = text.trim();
    if (!trimmed) {
      setError("할 일을 입력해주세요.");
      return;
    }
    if (trimmed.length > MAX_LENGTH) {
      setError(`최대 ${MAX_LENGTH}자까지 입력 가능합니다.`);
      return;
    }
    onAdd(trimmed);
    setText("");
    setError(null);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
    if (error) setError(null);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        placeholder="할 일을 입력하세요"
        value={text}
        onChange={handleChange}
        maxLength={MAX_LENGTH}
      />
      <Counter>
        {text.length}/{MAX_LENGTH}
      </Counter>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Form>
  );
}
