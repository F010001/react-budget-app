export interface Expenses {
  name: string;
  cost: number;
  id: string;
}

export interface IExpensesContext {
  expenses: Expenses[];
  setExpenses: (expenses: Expenses) => void;
  deleteExpenses: (id: string) => void;
}
