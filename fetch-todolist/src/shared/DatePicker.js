import { ErrorMessage, Field } from "formik";
import TextError from "./TextError";

import "../component/styling.css";
const DatePicker = (props) => {
  const { label, name, ...rest } = props;
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field type="date" name={name} {...rest} />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};
export default DatePicker;
