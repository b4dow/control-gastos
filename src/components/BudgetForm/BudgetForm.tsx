import { useMemo } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { UseBudget } from "@hook";
import { BudgetSchema, BudgetFormType } from "@schema";
import { Input } from "@components";

export const BudgetForm = () => {
  const { dispatch } = UseBudget();

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<BudgetFormType>({
    resolver: zodResolver(BudgetSchema),
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

        <Input
          type="number"
          name="budget"
          placeholder="Añade tu presupuesto"
          control={control}
          error={errors.budget}
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
