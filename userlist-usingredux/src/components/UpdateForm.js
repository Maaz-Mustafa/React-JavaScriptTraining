import { Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { addUser } from "../actions/actions";
import { getUserById } from "../services/users.services";

import FormikControl from "../shared/FormikControl";

import "../styles/styles.css";

const UpdateForm = () => {
  const dispatch = useDispatch();

  const { users, id } = useSelector((state) => state.userReducer);

  const navigate = useNavigate();

  const getUser = (id) => {
    return users.filter((u) => u.id === id);
  };
  console.log(getUser(id));
  const initialValues = {
    email: getUser(id)[0]?.email || "maaz",
    fname: getUser(id)[0].first_name,
    ppic: "",
  };

  const validationSchema = yup.object({
    email: yup.string().required("*"),
    fname: yup.string().required("*"),
  });

  const onSubmit = (values) => {
    const user = { ...values, id: users.length + 7 };
    console.log(user);

    dispatch(addUser(user));
    navigate("/");
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => {
          return (
            <div className="form">
              <Form>
                <h3 style={{ textAlign: "center", color: "blue" }}>
                  Update User
                </h3>
                <FormikControl
                  control="input"
                  type="email"
                  name="email"
                  label="Enter email : "
                />
                <FormikControl
                  control="input"
                  type="text"
                  name="fname"
                  label="Enter First Name : "
                />
                <FormikControl
                  control="input"
                  type="file"
                  name="ppic"
                  label="Select Profile pic : "
                />
                <div className="add-btn">
                  <button type="submit">Update</button>
                </div>
              </Form>
            </div>
          );
        }}
      </Formik>
    </div>
  );
};
export default UpdateForm;
