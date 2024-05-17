import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import "./index.scss";
import FormField from "../../components/FormField/index.jsx";
import { validationSchema } from "../../helpers/validation.jsx";

// const validationSchema = Yup.object().shape({
//   name: Yup.string()
//     .min(1, "Name must be at least 1 characters")
//     .required("Name is required"),

//   email: Yup.string()
//     .test("email", "Enter valid email", function (value) {
//       if (value) {
//         return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
//       }
//     })
//     .required("Email is required"),
//   dob: Yup.date()
//     .max(new Date(), "Date of birth cannot be in the future")
//     .required("Date of birth is required"),
//   whereHeard: Yup.string().required(
//     "Please select where you heard about this event",
//   ),
// });

const RagistrationPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {},
  });

  const onSubmit = () => {
    const data = getValues;
    console.log(data, "data");
  };

  return (
    <>
      <h1>Event registration</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <FormField
          label="Full name"
          errorText={errors.name?.message}
          className="form-field"
        >
          <input
            placeholder="Enter name"
            className="field-input"
            invalid={Boolean(errors.name?.message)}
            type="text"
            {...register("name")}
          />
        </FormField>
        <FormField
          label="Email"
          errorText={errors.email?.message}
          className="form-field"
        >
          <input
            placeholder="Enter email"
            className="field-input"
            invalid={Boolean(errors.email?.message)}
            type="text"
            {...register("email")}
          />
        </FormField>
        <FormField
          label="Date of birth"
          errorText={errors.dob?.message}
          className="form-field"
        >
          <input
            placeholder="Enter day of birth"
            className="field-input"
            invalid={Boolean(errors.dob?.message)}
            type="text"
            {...register("dob")}
          />
        </FormField>
        <FormField
          label="Where did you hear about this event"
          errorText={errors.whereHeard?.message}
          className="form-field"
        >
          <div className="radio-buttons">
            <div>
              <input
                type="radio"
                value="found myself"
                {...register("whereHeard")}
              />
              <label htmlFor="found myself">Found myself</label>
            </div>
            <div>
              <input
                type="radio"
                value="social media"
                {...register("whereHeard")}
              />
              <label htmlFor="social media">Social media</label>
            </div>
            <div>
              <input type="radio" value="friends" {...register("whereHeard")} />
              <label htmlFor="friends">Friends</label>
            </div>
          </div>
        </FormField>
        <div className="footer">
          <button type="submit" className="add-button">
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default RagistrationPage;
