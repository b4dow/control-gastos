import ReactDatePicker from "react-datepicker";
import {
  Controller,
  Control,
  FieldPath,
  FieldValues,
  FieldError,
} from "react-hook-form";

interface DatePickerProps<T extends FieldValues> {
  name: FieldPath<T>;
  control: Control<T>;
  error?: FieldError;
}

export const DatePicker = <T extends FieldValues>({
  name,
  control,
  error,
}: DatePickerProps<T>) => {
  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <ReactDatePicker
            onChange={onChange}
            onBlur={onBlur} // notify when input is touched/blur
            selected={value}
            className={`rounded-lg bg-slate-100 py-2 w-full outline-none ${error && "border border-red-500"}`}
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
