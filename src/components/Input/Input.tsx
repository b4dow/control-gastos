import {
  Control,
  Controller,
  FieldError,
  FieldPath,
  FieldValues,
} from "react-hook-form";

interface InputProps<T extends FieldValues> {
  control: Control<T>;
  name: FieldPath<T>;
  type: string;
  placeholder: string;
  error?: FieldError;
}

export const Input = <T extends FieldValues>({
  control,
  name,
  type,
  placeholder,
  error,
}: InputProps<T>) => {
  return (
    <>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <input
            id={name}
            {...field}
            placeholder={placeholder}
            type={type}
            className={` rounded-lg bg-slate-100 p-2 outline-none ${error && "border border-red-500"}`}
            value={field.value || ""}
            onChange={(e) => {
              const value =
                type === "number" ? +e.target.value : e.target.value;
              field.onChange(value);
            }}
          />
        )}
      />
      {error && (
        <p className="text-red-600  font-bold text-sm text-center">
          {error.message}
        </p>
      )}
    </>
  );
};
