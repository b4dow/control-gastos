export type BudgetAction = {
  type: "ADD_BUDGET";
  payload: { budget: number };
};

export type BudgetState = {
  budget: number;
};

export const InitialState: BudgetState = {
  budget: 0,
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

  return state;
};
