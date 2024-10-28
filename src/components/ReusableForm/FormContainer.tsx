import cn from "@/utlis/cn";
import { ReactNode, useContext } from "react";
import { FormDoubleValueContext } from "./Form";

export const FormContainer = ({ children }: { children: ReactNode }) => {
  const { double } = useContext(FormDoubleValueContext) as any;
  return (
    <div
      className={cn(
        `shadow-sm grid grid-cols-1 md:grid-cols-2 justify-items-center gap-5`,
        {
          "md:grid-cols-2": double,
        }
      )}
    >
      {children}
    </div>
  );
};
