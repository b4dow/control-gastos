import { useForm } from "react-hook-form";
import { categories } from "@data/categories";
import "react-datepicker/dist/react-datepicker.css";
import "react-calendar/dist/Calendar.css";
import { Select, Input, DatePicker } from "@components";
import { DraftExpense, ExpenseSchema } from "@schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { UseBudget } from "@hook";
import { useEffect } from "react";

export const ExpenseForm = () => {
  const { dispatch, state, remainingBudget } = UseBudget();

  const {
    control,
    handleSubmit,
    reset,
    setError,
    formState: { errors },
  } = useForm<DraftExpense>({
    resolver: zodResolver(ExpenseSchema),
  });

  useEffect(() => {
    if (state.editingId) {
      const editingExpense = state.expenses.filter(
        (expense) => expense.id === state.editingId,
      )[0];
      reset(editingExpense);
    }
  }, [state.editingId, reset, state.expenses]);

  const HandleSubmit = (values: DraftExpense) => {
    // VALIDAR QUE NO EXCEDA EL PRESUPUESTO
    if (values.amount > remainingBudget) {
      setError("amount", {
        type: "manual",
        message: `la cantidad no puede superar el presupuesto restante de $${remainingBudget}`,
      });
      return;
    }

    // AGREGAR O ACTUALIZAR EL GASTO
    if (state.editingId) {
      dispatch({
        type: "UPDATE_EXPENSE",
        payload: { expense: { id: state.editingId, ...values } },
      });
      reset();
    } else {
      dispatch({ type: "ADD_EXPENSE", payload: { expense: values } });
      reset();
    }
  };

  return (
    <form className="space-y-5" onSubmit={handleSubmit(HandleSubmit)}>
      <legend className="uppercase text-center text-xl font-black border-b-4 py-2 border-blue-500">
        {state.editingId ? "Editar Gasto" : "Nuevo Gasto"}
      </legend>
      <div className="flex flex-col gap-2">
        <label className="text-xl" htmlFor="expenseName">
          Nombre Gasto
        </label>
        <Input
          control={control}
          type="text"
          name="expenseName"
          placeholder="Añade el Nombre del Gasto"
          error={errors.expenseName}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-xl" htmlFor="amount">
          Cantidad:
        </label>
        <Input
          control={control}
          type="number"
          name="amount"
          placeholder="Añade la Cantidad del Gasto"
          error={errors.amount}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-xl" htmlFor="category">
          Categoria:
        </label>
        <Select
          control={control}
          name="category"
          error={errors.category}
          categories={categories}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-xl" htmlFor="amount">
          Fecha Gasto:
        </label>
        <DatePicker
          name="dateAmount"
          control={control}
          error={errors.dateAmount}
        />
      </div>

      <input
        type="submit"
        className="bg-blue-600 cursor-pointer w-full p-2 text-white uppercase font-bold rounded-lg"
        value={state.editingId ? "Guardar Cambios" : "Nuevo Gasto"}
      />
    </form>
  );
};
