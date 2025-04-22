import { useContext } from "react";
import { BudgetContext } from "../context";

export const UseBudget = () => {
  const context = useContext(BudgetContext);

  if (!context.state && context.state !== 0) {
    throw new Error("UseBudget must be used within a BudgetProvider");
  }

  return context;
};
