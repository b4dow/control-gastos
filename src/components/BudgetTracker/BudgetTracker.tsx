import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { AmountDisplay } from "@components";
import { UseBudget } from "@hook";
import "react-circular-progressbar/dist/styles.css";

export const BudgetTracker = () => {
  const { state, dispatch, totalExpenses, remainingBudget } = UseBudget();

  const percentage = +((totalExpenses / state.budget) * 100).toFixed(2);

  return (
    <div className="grid grid-col-1 md:grid-cols-2  gap-5">
      <div className="flex justify-center">
        <CircularProgressbar
          value={percentage}
          styles={buildStyles({
            pathColor: percentage === 100 ? "#dc2626" : "#3b82f6",
            trailColor: "#f5f5f5",
            textSize: 8,
            textColor: percentage === 100 ? "#dc2626" : "#3b82f6",
          })}
          text={`${percentage}% Gastado`}
        />
      </div>
      <div className="flex flex-col justify-center items-center gap-8">
        <button
          type="button"
          className="bg-pink-600 hover:bg-pink-500 w-full p-2 text-white uppercase font-bold rounded-lg"
          onClick={() => dispatch({ type: "RESET_APP" })}
        >
          Resetear App
        </button>
        <AmountDisplay label="Presupuesto" amount={state.budget} />
        <AmountDisplay label="Disponible" amount={remainingBudget} />
        <AmountDisplay label="Gastado" amount={totalExpenses} />
      </div>
    </div>
  );
};
