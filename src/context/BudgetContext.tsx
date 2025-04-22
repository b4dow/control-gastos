import { createContext, Dispatch, ReactNode, useReducer } from "react";
import {
  BudgetAction,
  BudgetReducer,
  BudgetState,
  InitialState,
} from "@reducers";

export type BudgetContextType = {
  state: BudgetState;
  dispatch: Dispatch<BudgetAction>;
};

export const BudgetContext = createContext<BudgetContextType>(
  {} as BudgetContextType,
);

interface BudgetProviderProps {
  children: ReactNode;
}

export const BudgetProvider = ({ children }: BudgetProviderProps) => {
  const [state, dispatch] = useReducer(BudgetReducer, InitialState);

  return (
    <BudgetContext.Provider value={{ state, dispatch }}>
      {children}
    </BudgetContext.Provider>
  );
};
