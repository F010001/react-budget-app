import { useContext } from "react";
import { ExpensesContext } from "../../contexts/ExpensesContext/ExpensesContext";
import { Badge } from "../Badge/Badge";
import { DeleteButton, StyledExpensesItem } from "./styles";

interface IProps {
  name: string;
  cost: number;
  id: string;
}

export const ExpensesItem = ({ name, cost, id }: IProps) => {
  const { deleteExpenses } = useContext(ExpensesContext);

  const handleClick = () => {
    deleteExpenses(id);
  };

  return (
    <StyledExpensesItem key={id}>
      {name} <Badge cost={cost} /> <DeleteButton onClick={handleClick} />
    </StyledExpensesItem>
  );
};
