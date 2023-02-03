import { Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { addUser } from "../actions/actions";

import FormikControl from "../shared/FormikControl";

import "../styles/styles.css";

const AddForm = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.userReducer);
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    fname: "",
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
                  Add a User
                </h3>
                {/* <FormikControl control="input" type="hidden" value="" /> */}
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
                  <button type="submit">Add</button>
                </div>
              </Form>
            </div>
          );
        }}
      </Formik>
    </div>
  );
};
export default AddForm;
