import { TInputForm } from "@/components/Types";

const InputForm = ({
  label,
  type,
  register,
  errors,
  placeholder,
}: TInputForm) => {
  return (
    <div className="w-full max-w-md">
      <label className="block font-semibold mb-1" htmlFor={label}>
        {label}
      </label>
      <input type={type} id={label} {...register} placeholder={placeholder} />
      {errors && <span className="text-xs text-red-500">{errors}</span>}
    </div>
  );
};

export default InputForm;
