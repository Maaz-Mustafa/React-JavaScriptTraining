import { ErrorMessage, Field } from "formik";
import TextError from "./TextError";

import "../component/styling.css";

const Textarea = (props) => {
  const { name, label, ...rest } = props;
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field as="textarea" name={name} id={name} {...rest} />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};
export default Textarea;
