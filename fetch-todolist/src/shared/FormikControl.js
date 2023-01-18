import {} from "formik";
import DatePicker from "./DatePicker";
import Input from "./Input";
import Textarea from "./Textarea";
const FormikControl = (props) => {
  const { control, ...rest } = props;
  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "date":
      return <DatePicker {...rest} />;
    case "textarea":
      return <Textarea {...rest} />;
    default:
      return null;
  }
};
export default FormikControl;
