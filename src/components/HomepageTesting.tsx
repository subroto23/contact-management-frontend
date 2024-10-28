"use client";
import cn from "@/utlis/cn";
import { useForm } from "react-hook-form";
import Button from "./ui/Button/Button";
import Container from "./ui/Container/Container";

const HomepageTesting = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  const double = true;
  return (
    <>
      <Container>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={cn(
            `border border-gray-300 shadow-sm rounded-lg w-full p-5 mx-auto`,
            {
              "max-w-5xl": double,
              "max-w-md": !double,
            }
          )}
        >
          <div
            className={cn(
              `shadow-sm grid grid-cols-1 md:grid-cols-2 justify-items-center gap-5`,
              {
                "md:grid-cols-2": double,
              }
            )}
          >
            <div className="w-full max-w-md">
              <label className="block font-semibold mb-1" htmlFor="firstName">
                First Name
              </label>
              <input
                type="text"
                id="name"
                {...register("firstName", { required: true })}
              />
              {errors?.firstName && (
                <span className="text-xs text-red-500">
                  This Field is Required
                </span>
              )}
            </div>
          </div>
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
        </form>
      </Container>
    </>
  );
};

export default HomepageTesting;
