import { z } from "zod";

export const ExpenseSchema = z.object({
  expenseName: z
    .string({ message: "El campo es obligatorio" })
    .min(1, "El nombre es requerido"),
  amount: z
    .number({ message: "La cantidad es requerida" })
    .min(1, "La cantidad es requerida"),
  category: z
    .string({ message: "La categoria es obligatorio" })
    .min(1, "La categoria es requerida"),
  dateAmount: z.date({ message: "La fecha es obligatoria" }),
});

export type DraftExpense = z.infer<typeof ExpenseSchema>;

export interface Expense extends z.infer<typeof ExpenseSchema> {
  id: string;
}
