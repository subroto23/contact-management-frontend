import cn from "@/utlis/cn";
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

type TButton = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const Button = ({
  children,
  className,
  varient,
  ...rest
}: TButton & { varient?: string }) => {
  const getVarient = (varient: string) => {
    switch (varient) {
      case "outline":
        return "btn-outline";

      case "ghost":
        return "btn-ghost";

      default:
        return "btn-solid";
    }
  };

  return (
    <button
      {...rest}
      className={cn(getVarient((varient = "solid")), className)}
    >
      {children}
    </button>
  );
};

export default Button;
