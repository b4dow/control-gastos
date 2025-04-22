import { useMemo } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { UseBudget } from "../hook";

const BudgetFormSchema = z.object({
  budget: z
    .number({ message: "El presupuesto tiene que ser un número" })
    .min(1, "El presupuesto debe ser mayor a 0"),
});

type BudgetFormType = z.infer<typeof BudgetFormSchema>;

export const BudgetForm = () => {
  const { dispatch } = UseBudget();

  const { register, handleSubmit, watch } = useForm<BudgetFormType>({
    resolver: zodResolver(BudgetFormSchema),
  });

  const HandleSubmit = (values: BudgetFormType) => {
    dispatch({ type: "ADD_BUDGET", payload: { budget: values.budget } });
  };

  const budget = watch("budget");

  const isValid = useMemo(() => isNaN(budget) || budget <= 0, [budget]);

  return (
    <form onSubmit={handleSubmit(HandleSubmit)} className="space-y-5">
      <div className="flex flex-col space-y-5">
        <label className="text-4xl text-blue-600 font-bold text-center">
          Definir Presupuesto
        </label>
        <input
          type="number"
          className="w-full bg-white border border-gray-200 p-2"
          placeholder="Añade tu presupuesto"
          {...register("budget", { valueAsNumber: true })}
        />
      </div>

      <input
        type="submit"
        value="Definir Presupuesto"
        className="bg-blue-600 hover:bg-blue-700 cursor-pointer w-full p-2 text-white font-black uppercase disabled:opacity-50"
        disabled={isValid}
      />
    </form>
  );
};
