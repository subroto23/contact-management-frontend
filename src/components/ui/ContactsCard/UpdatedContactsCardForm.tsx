"use client";
import { Form, FormContainer, FormSubmit } from "@/components/ReusableForm";
import InputForm from "../InputForm/InputForm";
import {
  useGetSingleContactQuery,
  useUpdateContactMutation,
} from "@/redux/api/contactApi";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { updateZodValidation } from "@/validation/createContactValidation";
import { toast } from "sonner";
import { z } from "zod";
import { removeEmptyKeyValues } from "@/utlis/removeEmptyKeyValues";
import { useEffect } from "react";
import { defaultValues } from "@/defaultValues/updateContacts";

const UpdatedContactsCardForm = ({ id }: { id: string }) => {
  const { data } = useGetSingleContactQuery({
    id,
  });

  const [updateContact, { isLoading }] = useUpdateContactMutation();

  const methods = useForm<FormData>({
    resolver: zodResolver(updateZodValidation),
    defaultValues: defaultValues,
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = methods;

  // Update form default values when data is fetched
  useEffect(() => {
    if (data?.data) {
      reset({
        name: {
          firstName: data.data.name?.firstName || "",
          middleName: data.data.name?.middleName || "",
          lastName: data.data.name?.lastName || "",
        },
        email: data.data.email || "",
        phone: data.data.phone || "",
        address: {
          city: data.data.address?.city || "",
          country: data.data.address?.country || "",
        },
        profile_picture: data.data.profile_picture || "",
      });
    }
  }, [data, reset]);

  // Define the schema type using zod's infer
  type FormData = z.infer<typeof updateZodValidation>;

  //Send Data to the Server
  const onSubmit = async (data: FieldValues) => {
    const updatedData = removeEmptyKeyValues(data);
    //adding Id
    updatedData.id = id;
    await updateContact(updatedData)
      .unwrap()
      .then((data) => {
        toast.success(data?.message);
        reset();
      })
      .catch((err: any) => {
        toast.error(err?.data?.message);
      });
  };

  return (
    <>
      <div className="bg-bodyColor py-6 mx-3">
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
              placeholder={"Write First Name"}
              errors={errors?.name?.firstName?.message}
            />

            {/* Middle Name Input Form */}
            <InputForm
              register={register("name.middleName")}
              type={"text"}
              label={"Middle Name"}
              placeholder={"Write Middle Name"}
              errors={errors?.name?.middleName?.message}
            />

            {/* Last Name Input Form */}
            <InputForm
              register={register("name.lastName")}
              type={"text"}
              label={"Last Name"}
              placeholder={"Write Last Name"}
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
              placeholder={"Write Your city"}
              errors={errors?.address?.city?.message}
            />
            {/* Address Country Input Form */}
            <InputForm
              register={register("address.country")}
              type={"text"}
              label={"Your Country"}
              placeholder={"Write your country"}
              errors={errors?.address?.country?.message}
            />
          </FormContainer>
          <FormSubmit isLoading={isLoading} />
        </Form>
      </div>
    </>
  );
};

export default UpdatedContactsCardForm;
