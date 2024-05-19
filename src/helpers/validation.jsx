import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(1, "Name must be at least 1 characters")
    .required("Name is required"),

  email: Yup.string()
    .test("email", "Enter valid email", function (value) {
      if (value) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      }
    })
    .required("Email is required"),
  dob: Yup.string()
    .test(
      "valid-date-format",
      "Please enter a valid date in the format dd.mm.yyyy",
      function (value) {
        return /^\d{2}\.\d{2}\.\d{4}$/.test(value);
      },
    )
    .max(new Date(), "Date of birth cannot be in the future")
    .required("Date of birth is required"),
  whereHeard: Yup.string().required(
    "Please select where you heard about this event",
  ),
});
