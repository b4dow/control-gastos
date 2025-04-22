import { z } from "zod";

export const BudgetSchema = z.object({
  budget: z
    .number({ invalid_type_error: "El presupuesto debe ser un número" })
    .min(1, "El presupuesto debe ser mayor a 0"),
});

export type BudgetFormType = z.infer<typeof BudgetSchema>;
