import { ErrorMessage, Field } from "formik";
import TextError from "./TextError";

import "../component/styling.css";
const Input = (props) => {
  const { name, label, ...rest } = props;
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field type="text" name={name} id={name} {...rest} />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};
export default Input;
