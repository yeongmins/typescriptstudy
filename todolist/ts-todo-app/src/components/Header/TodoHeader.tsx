import { Header, Title } from '../../styles/TodoHeader.styled';
import TodoForm from '../Form/TodoForm';

interface Props {
  onAdd: (text: string) => void;
}

// 이렇게 named export라면…
export function TodoHeader({ onAdd }: Props) {
  return (
    <Header>
      <Title>
        <span role="img" aria-label="clipboard">
          📋
        </span>{' '}
        Todo List
      </Title>
      <TodoForm onAdd={onAdd} />
    </Header>
  );
}
