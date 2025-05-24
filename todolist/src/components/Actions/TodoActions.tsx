import { DeleteSelectedButton } from "../../styles/App.styled";

interface Props {
  selectedCount: number;
  onDeleteSelected: () => void;
}

export default function TodoActions({
  selectedCount,
  onDeleteSelected,
}: Props) {
  return (
    <DeleteSelectedButton onClick={onDeleteSelected}>
      삭제 ({selectedCount})
    </DeleteSelectedButton>
  );
}
