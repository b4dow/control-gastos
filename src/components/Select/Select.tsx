import { ReactNode } from "react";
import {
  Control,
  Controller,
  FieldError,
  FieldPath,
  FieldValues,
} from "react-hook-form";

interface Category {
  id: string;
  icon: ReactNode;
  name: string;
}

interface SelectProps<T extends FieldValues> {
  categories: Array<Category>;
  control: Control<T>;
  name: FieldPath<T>;
  error?: FieldError;
}

export const Select = <T extends FieldValues>({
  categories,
  control,
  name,
  error,
}: SelectProps<T>) => {
  return (
    <>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <select
            id={name}
            {...field}
            className={`rounded-lg bg-slate-100 p-2 outline-none ${error && "border border-red-500"}`}
          >
            <option>-- Seleccione --</option>
            {categories.map((category) => (
              <option key={category["id"]} value={category["id"]}>
                {category["name"]}
              </option>
            ))}
          </select>
        )}
      />
      {error && (
        <p className="text-red-600 font-bold text-sm text-center">
          {error.message}
        </p>
      )}
    </>
  );
};
