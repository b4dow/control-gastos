import { createContext, Dispatch, ReactNode, useMemo, useReducer } from "react";
import {
  BudgetAction,
  BudgetReducer,
  BudgetState,
  InitialState,
} from "@reducers";

export type BudgetContextType = {
  state: BudgetState;
  dispatch: Dispatch<BudgetAction>;
  totalExpenses: number;
  remainingBudget: number;
};

export const BudgetContext = createContext<BudgetContextType>(
  {} as BudgetContextType,
);

interface BudgetProviderProps {
  children: ReactNode;
}

export const BudgetProvider = ({ children }: BudgetProviderProps) => {
  const [state, dispatch] = useReducer(BudgetReducer, InitialState);

  const totalExpenses = useMemo(
    () => state.expenses.reduce((total, expense) => expense.amount + total, 0),
    [state.expenses],
  );

  const remainingBudget = state.budget - totalExpenses;

  return (
    <BudgetContext.Provider
      value={{ state, dispatch, totalExpenses, remainingBudget }}
    >
      {children}
    </BudgetContext.Provider>
  );
};
