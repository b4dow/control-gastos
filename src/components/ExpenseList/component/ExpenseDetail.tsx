import { useMemo } from "react";
import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from "react-swipeable-list";
import { AmountDisplay } from "@components";
import { FormatDate } from "@helpers";
import { Expense } from "@schema";
import { categories } from "@data/categories";
import "react-swipeable-list/dist/styles.css";
import { UseBudget } from "@hook";

interface Props {
  expense: Expense;
}

export const ExpenseDetail = ({ expense }: Props) => {
  const { dispatch } = UseBudget();
  const categoryInfo = useMemo(
    () => categories.filter((cat) => cat.id === expense.category)[0],
    [expense],
  );

  const leadingActions = () => {
    return (
      <LeadingActions>
        <SwipeAction
          onClick={() =>
            dispatch({ type: "GET_EXPENSE_BY_ID", payload: { id: expense.id } })
          }
        >
          Actualizar
        </SwipeAction>
      </LeadingActions>
    );
  };

  const trailingActions = () => {
    return (
      <TrailingActions>
        <SwipeAction
          onClick={() =>
            dispatch({ type: "REMOVE_EXPENSE", payload: { id: expense.id } })
          }
          destructive={true}
        >
          Eliminar
        </SwipeAction>
      </TrailingActions>
    );
  };

  return (
    <SwipeableList>
      <SwipeableListItem
        maxSwipe={30}
        leadingActions={leadingActions()}
        trailingActions={trailingActions()}
      >
        <div className="bg-white shadow-lg p-5 w-full  border-b border-gray-200 flex gap-5 items-center">
          <div>
            <img
              src={`/img/icono_${categoryInfo.icon}.svg`}
              alt={categoryInfo.name}
              className="w-20"
            />
          </div>
          <div className="flex-1 space-y-2">
            <p className="text-sm font-bold uppercase text-slate-500">
              {categoryInfo.name}
            </p>
            <p>{expense.expenseName}</p>
            <p className="text-slate-600 text-sm">
              {FormatDate(expense.dateAmount!.toString())}
            </p>
          </div>
          <AmountDisplay amount={expense.amount} />
        </div>
      </SwipeableListItem>
    </SwipeableList>
  );
};
