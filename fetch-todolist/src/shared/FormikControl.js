import {} from "formik";
import { CONTROLS } from "../constants/CONSTANTS";
import DatePicker from "./DatePicker";
import Input from "./Input";
import Textarea from "./Textarea";
const FormikControl = (props) => {
  const { control, ...rest } = props;
  switch (control) {
    case CONTROLS.INPUT:
      return <Input {...rest} />;
    case CONTROLS.DATE:
      return <DatePicker {...rest} />;
    case CONTROLS.TEXTAREA:
      return <Textarea {...rest} />;
    default:
      return null;
  }
};
export default FormikControl;
