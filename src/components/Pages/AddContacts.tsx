"use client";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactZodValidation } from "@/validation/createContactValidation";
import { z } from "zod";
import Container from "../ui/Container/Container";
import { Form, FormContainer, FormSubmit } from "../ReusableForm";
import InputForm from "../InputForm";
import { toast } from "sonner";
import { useCreateContactMutation } from "@/redux/api/contactApi";

const AddContactsPage = () => {
  const [addContact, { isLoading }] = useCreateContactMutation();

  const methods = useForm<FormData>({
    resolver: zodResolver(ContactZodValidation),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = methods;

  // Define the schema type using zod's infer
  type FormData = z.infer<typeof ContactZodValidation>;

  //Send Data to the Server
  const onSubmit = async (data: FieldValues) => {
    await addContact(data)
      .unwrap()
      .then((data) => {
        toast.success(data?.message);
        reset();
      })
      .catch((err) => {
        toast.error(err?.data?.message);
      });
  };
  return (
    <>
      <Container>
        <Form
          onSubmit={handleSubmit(onSubmit) as SubmitHandler<FieldValues>}
          double={true}
        >
          <FormContainer>
            {/* First Name Input Form */}
            <InputForm
              register={register("name.firstName")}
              type={"text"}
              label={"First Name"}
              placeholder={"Subroto"}
              errors={errors?.name?.firstName?.message}
            />

            {/* Middle Name Input Form */}
            <InputForm
              register={register("name.middleName")}
              type={"text"}
              label={"Middle Name"}
              placeholder={"Kumar"}
              errors={errors?.name?.middleName?.message}
            />

            {/* Last Name Input Form */}
            <InputForm
              register={register("name.lastName")}
              type={"text"}
              label={"Last Name"}
              placeholder={"Das"}
              errors={errors?.name?.lastName?.message}
            />
            {/* Phone Number Input Form */}
            <InputForm
              register={register("phone")}
              type={"text"}
              label={"Phone Number"}
              placeholder={"+8801765777445"}
              errors={errors?.phone?.message}
            />
            {/* Email Name Input Form */}
            <InputForm
              register={register("email")}
              type={"email"}
              label={"Email"}
              placeholder={"example.gmail.com"}
              errors={errors?.email?.message}
            />
            {/* Profile Photo Name Input Form */}
            <InputForm
              register={register("profile_picture")}
              type={"text"}
              label={"Profile Photo URL"}
              placeholder={"https://wwww.example.com"}
              errors={errors?.profile_picture?.message}
            />
            {/* Address City Input Form */}
            <InputForm
              register={register("address.city")}
              type={"text"}
              label={"Your City"}
              placeholder={"Faridpur"}
              errors={errors?.address?.city?.message}
            />
            {/* Address Country Input Form */}
            <InputForm
              register={register("address.country")}
              type={"text"}
              label={"Your Country"}
              placeholder={"Bangladesh"}
              errors={errors?.address?.country?.message}
            />
          </FormContainer>
          <FormSubmit isLoading={isLoading} />
        </Form>
      </Container>
    </>
  );
};

export default AddContactsPage;
