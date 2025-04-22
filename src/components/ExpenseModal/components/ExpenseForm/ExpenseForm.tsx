import { useForm } from "react-hook-form";
import { categories } from "./data/categories";
import "react-datepicker/dist/react-datepicker.css";
import "react-calendar/dist/Calendar.css";
import { Select, Input, DatePicker } from "@components";
import { DraftExpense, ExpenseSchema } from "@schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { UseBudget } from "@hook";

export const ExpenseForm = () => {
  const { dispatch } = UseBudget();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<DraftExpense>({
    resolver: zodResolver(ExpenseSchema),
  });

  const HandleSubmit = (values: DraftExpense) => {
    // AGREGAR UN NUEVO GASTO
    dispatch({ type: "ADD_EXPENSE", payload: { expense: values } });
    reset();
  };

  return (
    <form className="space-y-5" onSubmit={handleSubmit(HandleSubmit)}>
      <legend className="uppercase text-center text-xl font-black border-b-4 py-2 border-blue-500">
        Nuevo Gasto
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
        value="Registrar Gasto"
      />
    </form>
  );
};
