import { Form, Formik } from "formik";
import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { RQ_KEY_TODOS } from "../constants/magic_constants.js";
import { postTodo } from "../services/todos.services.js";
import FormikControl from "../shared/FormikControl";

const AddTaskForm = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const initialValues = {
    task: "",
    description: "",
    assignee: "",
    duedate: "",
  };

  const { mutate: postTodoMutate, isLoading: postTodoLoading } = useMutation(
    postTodo,
    {
      onSuccess: () => {
        queryClient.invalidateQueries(RQ_KEY_TODOS);
      },
    }
  );

  const onSubmit = (values) => {
    console.log(values);
    const activity = {
      id: "",
      task: values.task,
      dueDtae: values.duedate,
      status: false,
    };
    postTodoMutate(activity);
    navigate("/");
  };

  const validationSchema = yup.object({
    task: yup.string().required("Reqiured"),
    duedate: yup.string().required("Select a Date"),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <Form>
            <FormikControl control="input" name="task" label="Title : " />
            <FormikControl
              control="textarea"
              name="description"
              label="Description :"
            />
            <FormikControl control="date" name="duedate" label="Due Date : " />
            <button type="submit" className="btn btn-primary" name="add">
              Add
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};
export default AddTaskForm;
