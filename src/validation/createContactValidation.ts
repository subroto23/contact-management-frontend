import { z } from "zod";
const userNameValidationSchema = z.object({
  firstName: z
    .string({
      required_error: "First Name Is Required",
      invalid_type_error: "First name must be a string.",
    })
    .nonempty("First Name is Required")
    .min(3, "First name must be at least 3 characters long.")
    .max(20, "First name must not exceed 20 characters.")
    .trim(),
  middleName: z.string().optional(),
  lastName: z
    .string({
      required_error: "Last Name Is Required",
      invalid_type_error: "Last name must be a string.",
    })
    .nonempty("Last Name is Required")
    .min(3, "Last name must be at least 3 characters long.")
    .max(20, "Last name must not exceed 20 characters.")
    .trim(),
});

// User Address Schema
const userAddressValidationSchema = z.object({
  city: z
    .string({
      required_error: "City Name Is Required",
      invalid_type_error: "City name must be a string.",
    })
    .nonempty("City Name is Required")
    .min(3, "City name must be at least 3 characters long.")
    .max(20, "City name must not exceed 20 characters.")
    .trim(),
  country: z
    .string({
      required_error: "Country Name Is Required",
      invalid_type_error: "Country name must be a string.",
    })
    .nonempty("Country Name is Required")
    .trim(),
});

// Create Contact Validation Schema
export const ContactZodValidation = z.object({
  name: userNameValidationSchema,
  email: z.string().optional(),
  phone: z
    .string({ required_error: "Phone Number Is Required" })
    .trim()
    .nonempty("Phone Number is Required")
    .min(3, "Phone Number must be at least 8 characters long.")
    .max(20, "Phone Number must not exceed 12 characters.")
    .trim()
    .refine((val) => /^[+]?[0-9]*$/.test(val), {
      message: "Phone number must contain only digits and optional leading +.",
    }),
  address: userAddressValidationSchema,
  profile_picture: z
    .string({
      required_error: "Profile Photo URL Is Required",
      invalid_type_error: "Profile Photo Is Web Link Type.",
    })
    .nonempty("Profile Photo Url is Required"),
});
