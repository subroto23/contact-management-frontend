import cn from "@/utlis/cn";
import Button from "../ui/Button/Button";
import { useContext } from "react";
import { FormDoubleValueContext } from "./Form";

export const FormSubmit = () => {
  const { double } = useContext(FormDoubleValueContext) as any;
  return (
    <>
      <div
        className={cn(
          `shadow-sm grid grid-cols-1 md:grid-cols-2 justify-items-center gap-5`,
          {
            "md:grid-cols-2": double,
          }
        )}
      >
        <div className="w-full max-w-md col-start-1 md:col-start-2 flex justify-end my-8">
          <Button className="w-full md:w-fit" type="submit">
            Submit
          </Button>
        </div>
      </div>
    </>
  );
};
