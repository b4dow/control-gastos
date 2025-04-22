import { v4 as uuidv4 } from "uuid";
import { DraftExpense, Expense } from "@schema";

export type BudgetAction =
  | {
      type: "ADD_BUDGET";
      payload: { budget: number };
    }
  | { type: "SHOW_MODAL" }
  | { type: "CLOSE_MODAL" }
  | {
      type: "ADD_EXPENSE";
      payload: { expense: DraftExpense };
    };

export type BudgetState = {
  budget: number;
  modal: boolean;
  expenses: Expense[];
};

export const InitialState: BudgetState = {
  budget: 0,
  modal: false,
  expenses: [],
};

const createExpense = (draftExpense: DraftExpense): Expense => {
  return {
    ...draftExpense,
    id: uuidv4(),
  };
};

export const BudgetReducer = (
  state: BudgetState = InitialState,
  action: BudgetAction,
) => {
  if (action.type === "ADD_BUDGET") {
    return {
      ...state,
      budget: action.payload.budget,
    };
  }
  if (action.type === "SHOW_MODAL") {
    return {
      ...state,
      modal: true,
    };
  }
  if (action.type === "CLOSE_MODAL") {
    return {
      ...state,
      modal: false,
    };
  }

  if (action.type === "ADD_EXPENSE") {
    const expense = createExpense(action.payload.expense);
    return {
      ...state,
      expenses: [...state.expenses, expense],
      modal: false,
    };
  }

  return state;
};
