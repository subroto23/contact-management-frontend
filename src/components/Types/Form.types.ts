import { ReactNode } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";

export type TForm = {
  onSubmit: SubmitHandler<FieldValues>;
  children: ReactNode;
  double?: boolean;
};

export type TInputForm = {
  label: string;
  type: string;
  register: any;
  errors: string | null | undefined;
  placeholder: string;
};
