export interface IExpense {
  name: string;
  cost: number;
  id: string;
}

export interface IExpensesContext {
  expenses: IExpense[];
  setExpense: (expense: IExpense) => void;
  deleteExpense: (id: string) => void;
}
