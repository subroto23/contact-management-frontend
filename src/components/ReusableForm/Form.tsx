import cn from "@/utlis/cn";
import { createContext } from "react";
import { TForm } from "../Types";

//Creating form Context for double column Value
export const FormDoubleValueContext = createContext<{ double: boolean } | null>(
  null
);

export const Form = ({ onSubmit, children, double = false }: TForm) => {
  return (
    <FormDoubleValueContext.Provider value={{ double }}>
      <form
        onSubmit={onSubmit}
        className={cn(
          ` rounded-lg w-full p-5 mx-auto pt-8 shadow-[0_15px_60px_#0FFBF9]`,
          {
            "max-w-5xl": double,
            "max-w-md": !double,
          }
        )}
      >
        {children}
      </form>
    </FormDoubleValueContext.Provider>
  );
};
