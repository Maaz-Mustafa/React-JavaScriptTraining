import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import AddTaskForm from "../AddTaskForm";
import { QueryClient, QueryClientProvider } from "react-query";
import { LocationDisplay } from "../../App";
//import { postTodo } from "../../services/todos.services";
const queryClient = new QueryClient();
const MockTodo = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AddTaskForm />
      </BrowserRouter>
    </QueryClientProvider>
  );
};

test("should be able to render input", async () => {
  render(<MockTodo />);
  // const inputElement = await screen.findByTestId("input-1");
  const inputElement = screen.getByRole("tab");
  expect(inputElement).toBeInTheDocument();
});

test("should be able to type into input", async () => {
  render(<MockTodo />);
  const inputElement = await screen.findByTestId("input-1");
  fireEvent.change(inputElement, { target: { value: "Go Grocery Shopping" } });
  expect(inputElement.value).toBe("Go Grocery Shopping");
});

test("should not add until due date is filled", async () => {
  render(<MockTodo />);
  const inputElement = await screen.findByTestId("input-1");
  const buttonElement = screen.getByText(/Add/i);
  fireEvent.change(inputElement, { target: { value: "Go Grocery Shopping" } });
  fireEvent.click(buttonElement);
  expect(inputElement.value).not.toBe("");
});

test("should make inputs empty when clicked on add", async () => {
  const route = "/";
  render(<MockTodo />);

  const inputElement = await screen.findByTestId("input-1");
  const dateElement = screen.getByTestId("date-1");
  const buttonElement = screen.getByText(/Add/i);
  render(
    <MemoryRouter initialEntries={[route]}>
      <LocationDisplay />
    </MemoryRouter>
  );
  expect(screen.getByTestId("location")).toHaveTextContent(route);
});
