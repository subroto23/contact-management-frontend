"use client";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactZodValidation } from "@/validation/createContactValidation";
import { z } from "zod";
import Container from "../ui/Container/Container";
import { Form, FormContainer, FormSubmit } from "../ReusableForm";
import { toast } from "sonner";
import { useCreateContactMutation } from "@/redux/api/contactApi";
import InputForm from "../ui/InputForm/InputForm";

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
        <div className="py-6 md:my-16 my-6">
          <Form
            onSubmit={handleSubmit(onSubmit) as SubmitHandler<FieldValues>}
            double={true}
          >
            <div className="max-w-3xl mx-auto text-center mt-1 mb-12">
              <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-2 pb-4 relative">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
                  Add a New Contact
                </span>
                <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500"></span>
              </h1>
              <p className="text-lg mb-8">
                You can expand this with more specific fields based on your
                requirements!
              </p>
            </div>
            <FormContainer>
              {/* First Name Input Form */}
              <InputForm
                register={register("name.firstName")}
                type={"text"}
                label={"First Name"}
                placeholder={"Enter your first name"}
                errors={errors?.name?.firstName?.message}
              />

              {/* Middle Name Input Form */}
              <InputForm
                register={register("name.middleName")}
                type={"text"}
                label={"Middle Name"}
                placeholder={"Enter your first middle  name"}
                errors={errors?.name?.middleName?.message}
              />

              {/* Last Name Input Form */}
              <InputForm
                register={register("name.lastName")}
                type={"text"}
                label={"Last Name"}
                placeholder={"Enter your last name"}
                errors={errors?.name?.lastName?.message}
              />
              {/* Phone Number Input Form */}
              <InputForm
                register={register("phone")}
                type={"text"}
                label={"Phone Number"}
                placeholder={"write phone number"}
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
                placeholder={"Enter your city name"}
                errors={errors?.address?.city?.message}
              />
              {/* Address Country Input Form */}
              <InputForm
                register={register("address.country")}
                type={"text"}
                label={"Your Country"}
                placeholder={"Enter your country name"}
                errors={errors?.address?.country?.message}
              />
            </FormContainer>
            <FormSubmit isLoading={isLoading} />
          </Form>
        </div>
      </Container>
    </>
  );
};

export default AddContactsPage;
