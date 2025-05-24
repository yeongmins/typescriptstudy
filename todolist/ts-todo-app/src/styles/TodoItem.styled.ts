import styled from "styled-components";

export const Li = styled.li`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
  padding: 4px 8px;
  background-color: transparent;
  border-radius: 4px;
`;

export const Checkbox = styled.input`
  cursor: pointer;
`;

interface TextProps {
  $completed: boolean;
}

export const Text = styled.span<TextProps>`
  flex-grow: 1;
  cursor: pointer;
  user-select: none;
  text-decoration: ${({ $completed }) =>
    $completed ? "line-through" : "none"};
  color: ${({ $completed }) => ($completed ? "#6b7280" : "inherit")};
`;

export const TextInput = styled.input`
  flex-grow: 1;
  padding: 4px 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
`;

export const ActionButton = styled.button`
  padding: 4px 8px;
  background: #3b82f6; /* 파란색 */
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.875rem;
  transition: background-color 0.2s;

  &:hover {
    background: #2563eb;
  }
`;

export const DeleteButton = styled.button`
  color: #ef4444;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px 8px;
  font-weight: 600;
  border-radius: 4px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #fee2e2;
  }
`;
