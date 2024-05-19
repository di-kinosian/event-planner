import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import "./index.scss";
import FormField from "../../components/FormField/index.jsx";
import { validationSchema } from "../../helpers/validation.jsx";
import { Link, useParams } from "react-router-dom";
import { formatDateToUTCString } from "../../helpers/format.js";

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

  const { eventId } = useParams();
  const [isSubmitted, setIsSubmited] = useState(false);

  const onSubmit = () => {
    const values = getValues();

    const data = {
      name: values.name,
      email: values.email,
      dateOfBirth: formatDateToUTCString(values.dob),

      source: values.whereHeard,
    };

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    console.log(data);

    fetch(
      `https://floating-spire-28797-0031414f3322.herokuapp.com/api/events/${eventId}/participant`,
      options,
    ).then((res) => {
      if (res.ok) {
        setIsSubmited(true);
      }
    });
  };

  return (
    <div className="registration">
      <h1>Event registration</h1>
      {isSubmitted ? (
        <div>
          <h3>You are successfuly registrated</h3>
          <Link to={`/${eventId}`}>Back to event</Link>
        </div>
      ) : (
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
                  value="found yourself"
                  id="found myself"
                  {...register("whereHeard")}
                />
                <label htmlFor="found myself">Found myself</label>
              </div>
              <div>
                <input
                  type="radio"
                  value="social media"
                  id="social media"
                  {...register("whereHeard")}
                />
                <label htmlFor="social media">Social media</label>
              </div>
              <div>
                <input
                  type="radio"
                  value="friends"
                  id="friends"
                  {...register("whereHeard")}
                />
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
      )}
    </div>
  );
};

export default RagistrationPage;
