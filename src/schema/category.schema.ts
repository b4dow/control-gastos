import { z } from "zod";

export const CategorySchema = z.object({
  category: z
    .string({ message: "Seleccione una categoria" })
    .min(1, { message: "Seleccione una categoria" }),
});

export type CategoryType = z.infer<typeof CategorySchema>;
