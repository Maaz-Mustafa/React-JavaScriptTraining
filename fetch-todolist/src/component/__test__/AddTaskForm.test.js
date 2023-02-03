import { render, screen } from "@testing-library/react";
import AddTaskForm from "../AddTaskForm";
//import { postTodo } from "../../services/todos.services";

// const MockTodo = () => {
//   return (
//     <BrowserRouter>
//       <AddTaskForm />
//     </BrowserRouter>
//   );
// };

test("should be able to type into input", async () => {
  console.log("in test");
});

test("should be able to type into input", async () => {
  // MockAxios.post.mockResolvedValue({});
  // const mockGet = jest.spyOn(axios, "get");
  // mockGet.mockImplementation({});
  render(<AddTaskForm />);
  const inputElement = await screen.findByTestId("input-1");
  expect(inputElement).toBeInTheDocument();
});
