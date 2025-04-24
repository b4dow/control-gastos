import { AmountDisplay } from "@components";
import { UseBudget } from "@hook";

export const BudgetTracker = () => {
  const { state, totalExpenses, remainingBudget } = UseBudget();
  return (
    <div className="grid grid-col-1 md:grid-cols-2  gap-5">
      <div className="flex justify-center">
        <img src="/img/grafico.jpg" />
      </div>
      <div className="flex flex-col justify-center items-center gap-8">
        <button
          type="button"
          className="bg-pink-600 w-full p-2 text-white uppercase font-bold rounded-lg"
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
