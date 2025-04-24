import { useMemo } from "react";
import { UseBudget } from "@hook";
import { ExpenseDetail } from "./component";

export const ExpenseList = () => {
  const { state } = UseBudget();
  const isEmpty = useMemo(() => state.expenses.length === 0, [state.expenses]);
  const filteredExpenses = state.currentCategory
    ? state.expenses.filter(
        (expense) => expense.category === state.currentCategory,
      )
    : state.expenses;
  return (
    <div className="mt-10  bg-white shadow-lg rounded-lg p-10">
      {isEmpty ? (
        <p className="text-gray-600 text-2xl font-bold">No Hay Gastos</p>
      ) : (
        <>
          <p className="text-gray-600  text-2xl  font-bold my-5">
            Listado de Gastos
            {filteredExpenses.map((expense) => (
              <ExpenseDetail key={expense.id} expense={expense} />
            ))}
          </p>
        </>
      )}
    </div>
  );
};
