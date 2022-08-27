export interface Expenses {
  name: string;
  cost: number;
}

export interface IExpensesContext {
  expenses: Expenses[];
  setExpenses: (expenses: Expenses) => void;
}
